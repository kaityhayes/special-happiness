import express from "express"
import Movies from "../models/Movies.js";

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body)
  const {
    title,
    rating,
    actor,
    release,
    image,
    genre
  } = req.body;
  Movies.create({ title, actor, rating, release, genre, image, })
    .then(movie => {
      res.json(movie);
    })
    .catch(err => console.log("POST / error: ", err));
});

router.get("/", (req, res) => {
  Movies.find().then(movies => {
    res.json(movies);
  })
    .catch(err => console.log("GET / error: ", err));
});


router.get("/:id", (req, res) => {
  Movies.findById(req.params.id).then(movie => {
    res.json(movie);
  })
    .catch(err => console.log("GET /:id error: ", err));
});

// update
router.put("/:id", (req, res) => {
  const {
    title,
    rating,
    actor,
    release,
    image,
    genre
  } = req.body;
  const updatedMovie = {
    title,
    rating,
    actor,
    release,
    image,
    genre
  };
  Movies.findByIdAndUpdate({
    _id: req.params.id
  }, updatedMovie).then(movie => {
    updatedMovie._id = movie._id;
    res.json(updatedMovie);
  }).catch(err => console.log("PUT /:id error: ", err));
});

// delete
router.delete("/:id", (req, res) => {
  Movies.findByIdAndDelete({ _id: req.params.id }).then(movie => {
    res.json(movie);
  })
    .catch(err => console.log("DELETE /:id error: ", err));
});

export default router;