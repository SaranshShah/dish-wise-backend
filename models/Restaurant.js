import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  geolocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  cuisineType: { type: String, required: true },
  rating: { type: Number, default: 0 },
});

export default mongoose.model('Restaurant', RestaurantSchema);
