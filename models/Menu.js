import mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema({
  menuName: { type: String, required: true },
  dateUpdated: { type: Date, default: Date.now },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
});

export default mongoose.model('Menu', MenuSchema);
