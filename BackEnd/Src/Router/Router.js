const express =require('express');
const UserController = require('../controller/UserController/UserController');
const TransportAllowanceController =require("../controller/TransportAllowanceModel/TransportAllowanceController")
const AuthVerifyMiddleware = require("../Middleware/AuthVerifyMiddleware")

const Router =express.Router();

// User Register
Router.post("/UserRegister", UserController.UserRegister);

// User Login
Router.post("/UserLogin", UserController.UserLogin);

// Get User Details
Router.get("/UserDetails", AuthVerifyMiddleware, UserController.ProfileDetails)


// Create Travel Places
Router.post("/CreateTravelPlaces", AuthVerifyMiddleware,  TransportAllowanceController.CreateTravelPlaces)

// Create Travel Places
Router.post("/CreateTravelVisit", AuthVerifyMiddleware,  TransportAllowanceController.CreateTravelVisit)







module.exports=Router