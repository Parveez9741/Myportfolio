const User = require("../Model/User");

// create new user (contact form submission)
const createUser = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const user = new User({ name, email, message });
    await user.save();
    res.status(201).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// get all users (admin view)
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = { createUser, getUsers };
