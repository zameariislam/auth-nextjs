// utils/mongoDB.js
import mongoose from 'mongoose';

const connectionURL = 'YOUR_MONGODB_CONNECTION_URL';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
