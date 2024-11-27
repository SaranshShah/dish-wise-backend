import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// Submit Dish Review
router.post('/:dish_id', async (req, res) => {
  try {
    const { userId, rating, reviewText, media } = req.body;
    const review = new Review({
      userId,
      dishId: req.params.dish_id,
      rating,
      reviewText,
      media,
    });
    await review.save();
    res.json({ success: true, reviewId: review._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
