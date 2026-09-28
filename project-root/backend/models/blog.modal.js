const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  blogId: { type: String, required: true, unique: true }, // Unique identifier for the blog
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now } // Timestamp for when the blog was created
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
