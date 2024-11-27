import express from 'express';
import Dish from '../models/Dish.js';

const router = express.Router();

// Get Dish Details
router.get('/:dish_id', async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.dish_id);
    if (!dish) return res.status(404).json({ error: 'Dish not found' });
    res.json(dish);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
