import mongoose from 'mongoose';
import fs from 'fs';

const loadData = async () => {
  try {
    // MongoDB Connection
    const uri = "mongodb+srv://admin:Project123@cluster0.9o63o.mongodb.net/dishwise?retryWrites=true&w=majority";
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected...');

    // Helper function to transform $oid fields into ObjectId
    const transformOidToObjectId = (data) => {
      return data.map((item) => {
        if (item._id && item._id.$oid) {
          item._id = new mongoose.Types.ObjectId(item._id.$oid);
        }
        if (item.menuId && item.menuId.$oid) {
          item.menuId = new mongoose.Types.ObjectId(item.menuId.$oid);
        }
        if (item.userId && item.userId.$oid) {
          item.userId = new mongoose.Types.ObjectId(item.userId.$oid);
        }
        return item;
      });
    };

    // Load and preprocess JSON files
    const dishes = transformOidToObjectId(JSON.parse(fs.readFileSync('./dishwise.dishes.json', 'utf-8')));
    const favorites = transformOidToObjectId(JSON.parse(fs.readFileSync('./dishwise.favorites.json', 'utf-8')));
    const menu = transformOidToObjectId(JSON.parse(fs.readFileSync('./dishwise.menu.json', 'utf-8')));
    const restaurants = transformOidToObjectId(JSON.parse(fs.readFileSync('./dishwise.restaurants.json', 'utf-8')));
    const reviews = transformOidToObjectId(JSON.parse(fs.readFileSync('./dishwise.reviews.json', 'utf-8')));
    const users = transformOidToObjectId(JSON.parse(fs.readFileSync('./dishwise.users.json', 'utf-8')));

    // Insert data into collections
    await mongoose.connection.collection('dishes').insertMany(dishes);
    console.log('Dishes inserted.');

    await mongoose.connection.collection('favorites').insertMany(favorites);
    console.log('Favorites inserted.');

    await mongoose.connection.collection('menu').insertMany(menu);
    console.log('Menu inserted.');

    await mongoose.connection.collection('restaurants').insertMany(restaurants);
    console.log('Restaurants inserted.');

    await mongoose.connection.collection('reviews').insertMany(reviews);
    console.log('Reviews inserted.');

    await mongoose.connection.collection('users').insertMany(users);
    console.log('Users inserted.');

    // Close the MongoDB connection
    await mongoose.disconnect();
    console.log('Data loading complete!');
  } catch (err) {
    console.error('Error loading data:', err.message);
    process.exit(1);
  }
};

loadData();
