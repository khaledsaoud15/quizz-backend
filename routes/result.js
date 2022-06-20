const router = require("express").Router();
const Result = require("../modals/Resault");

router.post("/result", async (req, res) => {
  const newResult = new Result(req.body);
  try {
    const savedResult = await newResult.save();
    res.status(200).json(savedResult);
  } catch {
    res.status(500).json("Result cannot be found");
  }
});

router.get("/", async (req, res) => {
  const result = await Result.find();
  try {
    res.status(200).json(result);
  } catch {
    res.status(500).json("Cannot get result data");
  }
});

module.exports = router;
