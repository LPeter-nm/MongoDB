import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/product.route.js';

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

//routes
app.use("/api/products", router);

mongoose
  .connect('mongodb+srv://mongoadmin:admin@test.9vk9q.mongodb.net/?retryWrites=true&w=majority&appName=test')
  .then(() => {
    console.log('Connected!')
    
  });

  app.listen(4000, () => console.log('Server running'));