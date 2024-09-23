const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
  try {
    // Log environment variables for debugging
    console.log('MONGOUSER:', process.env.MONGOUSER);
    console.log('MONGOPASS:', process.env.MONGOPASS);
    console.log('MONGOHOST:', process.env.MONGOHOST);
    console.log('MONGOPORT:', process.env.MONGOPORT);
    console.log('MONGONAME:', process.env.MONGONAME);

    // Encode the database name to handle spaces or special characters
    const encodedDBName = encodeURIComponent(process.env.MONGONAME);
    const uri = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGOHOST}:${process.env.MONGOPORT}`;
    console.log('MongoDB URI:', uri); // Log URI for debugging
    
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
