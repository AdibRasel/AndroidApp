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

//================== Travel Places =======================
// Create Travel Places
Router.post("/CreateTravelPlaces", AuthVerifyMiddleware,  TransportAllowanceController.CreateTravelPlaces)

// All Travel Place List
Router.get("/TravelPlacesListAll", AuthVerifyMiddleware, TransportAllowanceController.AllTravelPlaceList)





//====================== Travel Visit ======================
// Create Travel Visit
Router.post("/CreateTravelVisit", AuthVerifyMiddleware,  TransportAllowanceController.CreateTravelVisit)

// All Travel Place List
Router.get("/AllTravelVisitList", AuthVerifyMiddleware, TransportAllowanceController.AllTravelVisitList)






module.exports=Router