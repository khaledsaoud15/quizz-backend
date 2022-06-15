const router = require("express").Router();
const User = require("../modals/User");

// REGISTER
router
  .post("/register", async (req, res) => {
    const newUser = new User(req.body);
    try {
      const saveduser = await newUser.save();
      res.status(200).json(saveduser);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  //   LOGIN
  .post("/login", async (req, res) => {
    const user = await User.findOne(req.body);

    !user && res.status(401).json("Wrong credantials");
    res.status(200).json(user);
  })
  //   GET ALL USERS
  .get("/", async (req, res) => {
    const users = await User.find();
    try {
      res.status(200).json(users);
    } catch {
      res.status(404).json("no users");
    }
  });

module.exports = router;
