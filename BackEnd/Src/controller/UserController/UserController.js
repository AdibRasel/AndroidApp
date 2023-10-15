const UserModel = require("../../Model/UserModel/UserModel");
const UserDetailsService = require("../../Service/UserService/UserDetailsService");
const UserLoginService = require("../../Service/UserService/UserLoginService");
const UserRegister = require("../../Service/UserService/UserRegister");

// User Register
exports.UserRegister = async (req, res) => {
    let Result = await UserRegister(req, UserModel);
    res.status(200).json(Result);
};



//User Login
exports.UserLogin = async (req, res)=>{
    let Result = await UserLoginService(req, UserModel)
    res.status(200).json(Result)
}



// Get User Details
exports.ProfileDetails = async (req, res)=>{
    let Result = await UserDetailsService(req, UserModel)
    res.status(200).json(Result)
}