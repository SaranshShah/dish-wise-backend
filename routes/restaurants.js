import express from 'express';
import Restaurant from '../models/Restaurant.js';
import Menu from '../models/Menu.js';

const router = express.Router();

// Get Restaurants by Location or Cuisine
router.get('/', async (req, res) => {
  try {
    const { location, cuisine_type } = req.query;
    const filter = {};
    if (location) filter.location = location;
    if (cuisine_type) filter.cuisineType = cuisine_type;

    const restaurants = await Restaurant.find(filter);
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Menu by Restaurant ID
router.get('/:restaurant_id/menus', async (req, res) => {
  try {
    const menus = await Menu.find({ restaurantId: req.params.restaurant_id });
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
