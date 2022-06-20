const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const quizzRouter = require("./routes/quizz");
const resultRouter = require("./routes/result");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://khaled:khaledsaoud@quizz.uy3vi.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/quizzes", quizzRouter);
app.use("/api/results", resultRouter);

app.listen(4000, () => {
  console.log("listening on port 4000");
});
