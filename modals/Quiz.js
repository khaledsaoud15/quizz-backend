const mongoose = require("mongoose");

const QuizzSchema = new mongoose.Schema(
  {
    choices: {
      type: Array,
    },
    answer: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quizz", QuizzSchema);
