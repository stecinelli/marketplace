import React from 'react';

function Login() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          Email address
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </label>
        <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">
          Password
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="exampleCheck1">
          <input type="checkbox" className="form-check-input" name="exampleCheck1" />
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Login;
