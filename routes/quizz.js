const router = require("express").Router();
const Quizz = require("../modals/Quiz");

// POST A QUIZZ

router.post("/quizz", async (req, res) => {
  const newQuizz = new Quizz(req.body);

  try {
    const savedQuizz = await newQuizz.save();
    res.status(200).json(savedQuizz);
  } catch (err) {
    res.json(err);
  }
});

// GET ALL QUIZZES

router.get("/", async (req, res) => {
  try {
    const quizze = await Quizz.find();
    res.status(200).json(quizze);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
