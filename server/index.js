import express from "express";
import mongoose from "mongoose";
import { MONGO_URL } from "./config/keys.js";
import { profilesRouter } from "./routes/profiles.js";

const app = express();

app.use(express.json());

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is successfully connected"))
  .catch((err) => console.log(err));

app.get("/test", (_, res) => res.send("This is a test"));

app.use("/api/profiles", profilesRouter);

const port = 5000;
const callback = () => console.log(`Server is running on port ${port}`);

// { listen: (port, callback) => {stuff}}
app.listen(port, callback);
