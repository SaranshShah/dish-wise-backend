import express from 'express';
import mongoose from 'mongoose';
import Dish from '../models/Dish.js';

const router = express.Router();

// Get Dish Details by ID
router.get('/:dish_id', async (req, res) => {
  try {
    const dishId = req.params.dish_id.trim(); // Trim any spaces

    // Log the dish_id for debugging
    console.log('Received dish ID:', dishId);

    // Check if the dish_id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(dishId)) {
      console.log('Invalid ObjectId format:', dishId);
      return res.status(400).json({ error: 'Invalid dish ID format' });
    }

    // Attempt to find the dish
    const dish = await Dish.findById(dishId);

    if (!dish) {
      return res.status(404).json({ error: 'Dish not found' });
    }

    res.status(200).json(dish);
  } catch (error) {
    console.error('Error fetching dish:', error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
