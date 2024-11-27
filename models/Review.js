import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dishId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true },
  rating: { type: Number, required: true },
  reviewText: { type: String, required: true },
  reviewDate: { type: Date, default: Date.now },
  media: { type: [String], default: [] },
});

export default mongoose.model('Review', ReviewSchema);
