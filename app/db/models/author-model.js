import mongoose, { Schema } from 'mongoose';

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter author name.'],
      minLength: [2, 'Author name must be at least two characters.'],
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Author || mongoose.model('Author', authorSchema);
