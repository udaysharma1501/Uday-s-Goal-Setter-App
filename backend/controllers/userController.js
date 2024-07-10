const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {

    // destructuring input details
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("please add all fields");
    }

    // send error if user already exists
    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("user already exists");
    }

  res.json({ message: "register user" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "user data display" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
