import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    pic: { type: String, required: true },
    title: { type: String, required: true },
    timeToRead: { type: String, required: true },
    description: { type: String, required: true, maxlength: 300 },
    authorPic: { type: String, required: true },
    authorName: { type: String, required: true },
    publishDate: { type: Date, default: Date.now },
    content: { type: String, required: true },
    feature: { type: Boolean, default: false },
  },

  { timestamps: true }
);

// delete mongoose.connection.models.Blog;
// Fix OverwriteModelError in Next.js dev mode
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
