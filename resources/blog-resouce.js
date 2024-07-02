import connectDB from "../config/db.js";
import { BlogPost } from "../models/post.model.js";

const BlogPostResource = {
  databases: [connectDB],
  resource: BlogPost,
  options: {
    properties: {
      title: { type: "string" },
      content: { type: "richtext" },
      imageUrl: {
        type: 'string',
      },
    },
  },
};

export default BlogPostResource;
