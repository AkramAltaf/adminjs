import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

export { BlogPostSchema, BlogPost };
