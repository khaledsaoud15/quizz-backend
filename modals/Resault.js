const mongoose = require("mongoose");

const ResultSchemma = new mongoose.Schema({
  username: {
    type: String,
  },
  result: {
    type: Number,
  },
});
module.exports = mongoose.model("Result", ResultSchemma);
