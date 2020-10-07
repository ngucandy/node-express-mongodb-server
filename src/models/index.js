import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const connectDb = () => {
  // https://mongoosejs.com/docs/deprecations.html
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useCreateIndex', true);
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Message };

export { connectDb };

export default models;
