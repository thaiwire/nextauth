import mongoose from "mongoose";

const connecDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  try {
    await mongoose.connect(process.env.MongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database Successfully");
  } catch (error) {
    throw new Error("Error connecting to database");
  }
};

export default connecDB;
