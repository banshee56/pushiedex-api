import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
export const PostSchema = new Schema({
  title: { type: String, required: true },
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

// create PostModel class from schema
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
