import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Movies from "./models/Movies.js";
import { movies as moviesRouter } from "./controllers/index.js";
import MoviesSeed from "./seed.js";

const mongoURI = "mongodb://localhost:27017/movieApp";
mongoose.connect(mongoURI);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/movies", moviesRouter);

// Seed local db
app.get("/seed", (req, res) => {
  Movies.create(MoviesSeed).then(movies => {
    res.redirect("/movies");
  })
    .catch(err => console.log("GET /seed error: ", err));
});

app.get("/", (req, res) => {
  res.redirect("/movies");
});


app.listen(PORT, () => console.log(`listening on port ${PORT}...`));