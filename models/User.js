import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  preferences: {
    dietaryRestrictions: { type: [String], default: [] },
    cuisinePreference: { type: [String], default: [] },
    priceRange: { type: String, default: '' },
  },
  signupDate: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
});

export default mongoose.model('User', UserSchema);
