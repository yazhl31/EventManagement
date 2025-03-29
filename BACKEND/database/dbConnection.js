import mongoose from "mongoose";

// Set up connection events BEFORE connecting
mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected");
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "event-management",
      
    });
    console.log("Connected to database!");
  } catch (err) {
    console.log("Some error occurred while connecting to database:", err);
    process.exit(1); // Exit process if connection fails
  }
};
