import mongoose from "mongoose";

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  actor: { type: String, required: true },
  title: { type: String, required: true },
  rating: { type: String, required: true },
  release: { type: String, required: true },
  genre: { type: String, required: true },
  image: String,
});

const Movies = mongoose.model("Movies", movieSchema);

export default Movies;
