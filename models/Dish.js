import mongoose from 'mongoose';

const DishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  tags: { type: [String], required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
});

export default mongoose.model('Dish', DishSchema);
