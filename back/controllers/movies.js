import express from "express"
import Movies from "../models/Movies.js";

const router = express.Router();

// create
// router.post("/", (req, res) => {});

// read all
router.get("/", (req, res) => {
  Movies.find().then(movies => {
    res.json(movies);
  })
    .catch(err => console.log("GET / error: ", err));
});

// read one
router.get("/:id", (req, res) => {
  Movies.findById(req.params.id).then(movie => {
    res.json(movie);
  })
    .catch(err => console.log("GET /:id error: ", err));
});

// update
// router.put("/:id", (req, res) => {});

// delete
// router.delete("/:id", (req, res) => {});

export default router;