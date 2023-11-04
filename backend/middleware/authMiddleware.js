const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

const protect =  asyncHandler(async (req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{

            token = req.headers.authorization.split(' ')[1];
        
            
            
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            console.log(decoded);

            // get user from the token
            req.user = await User.findById(decoded.id).select('-password');

            // console.log(req.user);

            next();

          

        }catch(err){
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    if(!token){
        res.status(401);
        throw new Error('Not authorized, no token');
    }
    
   
})
module.exports = { protect };
