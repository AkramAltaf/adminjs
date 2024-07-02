import connectDB from "../config/db.js";
import { Book } from "../models/book.model.js";

const BookResource = {
  databases: [connectDB],
  resource: Book,
};

export default BookResource;
