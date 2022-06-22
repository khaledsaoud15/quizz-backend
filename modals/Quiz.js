const mongoose = require("mongoose");

const QuizzSchema = new mongoose.Schema(
  {
    question: {
      type: String,
    },
    images: {
      type: Array,
    },
    choices: {
      type: Array,
    },
    answer: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quizz", QuizzSchema);
