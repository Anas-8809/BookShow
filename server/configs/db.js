import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("bufferCommands", false);

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    throw error; 
  }
};

export default connectDB;
