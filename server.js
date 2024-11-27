import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './database/connection.js';
import authRoutes from './routes/auth.js';
import restaurantRoutes from './routes/restaurants.js';
import dishRoutes from './routes/dishes.js';
import reviewRoutes from './routes/reviews.js';
import favoriteRoutes from './routes/favorites.js';

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors());

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/dishes', dishRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', favoriteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
