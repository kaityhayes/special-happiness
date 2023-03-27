import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { movies as moviesRouter } from "./controllers/index.js";

const mongoURI = "mongodb://localhost:27017/movieApp";
mongoose.connect(mongoURI);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/movies", moviesRouter);

app.get("/", (req, res) => {
  res.redirect("/movies");
});


app.listen(PORT, () => console.log(`listening on port ${PORT}...`));