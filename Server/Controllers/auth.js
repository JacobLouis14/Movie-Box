const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

/*Regitering User */
const register = async (req, res) => {
  try {
    const { Name, email, password, recentSearches } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      Name,
      email,
      password: passwordHash,
      recentSearches,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/*Login User */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User Not Exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { register, login };
