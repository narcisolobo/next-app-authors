import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function dbConnect() {
  const options = {
    retryWrites: true,
  };

  try {
    const conn = await mongoose.connect(MONGODB_URI, options);
    console.log(`Connected to DB ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
