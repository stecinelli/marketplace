import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from '../../config/default';

export interface UserDocument extends mongoose.Document {
  /* id: number; */
  email: string;
  password: string;
  /* role: string;
  uniqueStoreId: number; */
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    /* id: { type: Number, required: true }, */
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    /* role: { type: String, required: true },
    uniqueStoreId: { type: Number, required: false }, */
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  let user = this as UserDocument;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // Random additional data
  const salt = await bcrypt.genSalt(config.saltWorkFactor);

  const hash = await bcrypt.hashSync(user.password, salt);

  // Replace the password with the hash
  user.password = hash;

  return next();
});

// Used for logging in
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
