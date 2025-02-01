import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected Successfully");
  });

  await mongoose.connect(`${process.env.MongoDB_URL}`);
};

export default connectDB;
