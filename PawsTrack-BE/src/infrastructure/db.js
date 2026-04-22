import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://cwy:test123@cluster0.skpqips.mongodb.net/pawtrack?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log(`The Database Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to the database...");
    console.log(error);
    process.exit(1); 
  }
};

export default connectDB;