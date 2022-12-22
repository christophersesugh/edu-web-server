import express from "express";
import mongoose from "mongoose";
import { url } from "./url";

const app = express();

const MONGO_URI: string | undefined = process.env.MONGO_URI || url;
const PORT = process.env.PORT || 5000;
// mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Connected to DB!`);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.log("Error", error);
  });
