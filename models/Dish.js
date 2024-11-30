import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  ingredients: [String],
  tags: [String],
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  menuId: mongoose.Schema.Types.ObjectId,
});

export default mongoose.model('Dish', dishSchema);
