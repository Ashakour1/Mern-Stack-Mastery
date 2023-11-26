const asyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");

const bycrypt = require("bcryptjs");

const User = require("../models/userModel");

/**
@controller  register Register user 
@route /api/users/
@methods POST
@description register user 
@body {name : String ,email: String , password : String}
@access public

*/
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);

    throw new Error("please fill all the fields");
  }

  
  // check if userExists

  const userExists = await User.findOne({ email });

  // if userExists throw  error
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  // hash password

  const salt = await bycrypt.genSalt(10);

  const hashPassword = await bycrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: genereteToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

/**
@controller  login  user 
@route /api/users/login
@methods POST
@description login user 

@body {email: String , password : String}
@access public

*/
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  

  if (!email || !password) {
    res.status(400);
    throw new Error("please fill all the fields");
  }

  //  check for user Email
  const user = await User.findOne({ email });

  if (user && (await bycrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: genereteToken(user._id),
      
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});

// @desc Get user user
// @route POST /api/users
// @access private
const getUserData = asyncHandler(async (req, res) => {
  const {_id,name,email} = await User.findById(req.user.id)
  res.json({
    id : _id,
    name,
    email
  })
});

const genereteToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getUserData,
};
