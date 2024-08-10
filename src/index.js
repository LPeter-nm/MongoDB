import express from 'express';
import mongoose from 'mongoose';
import { router } from '../routes/product.route.js';

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

//routes
app.use("/api/products", router);

mongoose
  .connect('mongodb://mongoadmin:secret@localhost:27017/test?authSource=admin')
  .then(() => {
    console.log('Connected!')
    
  });

  app.listen(4000, () => console.log('Server running'));