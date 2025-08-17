import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sahanasacharya55:Pub1dawqaKyEbFYC@cluster0.eb0pad2.mongodb.net/', {
      dbName: 'learnloop',
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
