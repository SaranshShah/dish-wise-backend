import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dishId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true },
  dateAdded: { type: Date, default: Date.now },
});

export default mongoose.model('Favorite', FavoriteSchema);
