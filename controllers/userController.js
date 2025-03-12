const User = require("../models/userModel");
const createToken = require("../utils/token");

//login user
const loginUser = async (req, res) => {
  const { _id, email, password } = req.body;
  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ email, password, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//signup user
// Corrected signupUser in server/controllers/userController.js
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    // Use the _id from the created user, not from req.body
    const token = createToken(user._id);
    res.status(200).json({ email, password, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
