const UserModel = require("../../Model/UserModel/UserModel");
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