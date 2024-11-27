import express from 'express';
import Favorite from '../models/Favorite.js';

const router = express.Router();

// Add Dish to Favorites
router.post('/:user_id/favorites', async (req, res) => {
  try {
    const { dishId } = req.body;
    const favorite = new Favorite({
      userId: req.params.user_id,
      dishId,
    });
    await favorite.save();
    res.json({ success: true, favoriteId: favorite._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
