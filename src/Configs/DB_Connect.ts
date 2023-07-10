import mongoose, { MongooseError } from 'mongoose';

mongoose
  .connect(process.env.URL_DATABASE)
  .then(() => {
    console.log('Connect to MongoDB');
  })
  .catch((err: MongooseError) => console.log(err));
