const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
  try {
    // Construct MongoDB URI using environment variables
    const uri = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGOHOST}:${process.env.MONGOPORT}/${process.env.MONGONAME}`;
    
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
