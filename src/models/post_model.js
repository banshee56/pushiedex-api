import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
export const PostSchema = new Schema({
  title: { type: String, required: true },
  coverUrl: { type: String, required: true },
  content: { type: String, required: false },
  tags: { type: String, required: false },
  caught: { type: Boolean, required: false },
  gender: { type: String, required: false },
  height: { type: String, required: false },
  weight: { type: String, required: false },
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

// create PostModel class from schema
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
