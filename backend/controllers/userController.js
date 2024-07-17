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

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if(user){
        // something was created and everything is okay
        res.status(201).json({
            // _id: user.id,
            // name: user.name,
            // email: user.email,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(400);
        throw new Error("invalid user data");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    
    const {email, password} = req.body;

    // matching email and password against the saved DB to retrieve the name
    const user = await User.findOne({email});

    // comparing the entered password and hashed password using bcrypt method - compare 
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          // the token issued here can be verified at jwt.io          
          token: generateToken(user._id)
        });
    }
    else{

        res.status(400);
        throw new Error("invalid credentials");
    }

  res.json({ message: "login user" });
});

// private access
const getMe = asyncHandler(async (req, res) => {

    const {_id, name, email} =  await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        name,
        email,
    })

});

// generate JWT - this signs a new token with the id passed in and the secret used which would expire in 30 days
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
