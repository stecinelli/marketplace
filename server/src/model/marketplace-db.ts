import { ObjectId } from "mongodb";

export default class Products {
    constructor(
        public title?: string, 
        public storeId?: string, 
        public description?: string, 
        public imageUrl?: string, 
        public price?: number, 
        public quantity?: number, 
        public category?: string, 
        public id?: ObjectId) {}
}