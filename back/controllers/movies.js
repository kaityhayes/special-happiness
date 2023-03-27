import express from "express"
import Movies from "../models/Movies.js";

const router = express.Router();

// create
// router.post("/", (req, res) => {});

// read all
router.get("/", (req, res) => {
  res.send("Under construction...");
});

// read one
// router.get("/:id", (req, res) => {});

// update
// router.put("/:id", (req, res) => {});

// delete
// router.delete("/:id", (req, res) => {});

export default router;