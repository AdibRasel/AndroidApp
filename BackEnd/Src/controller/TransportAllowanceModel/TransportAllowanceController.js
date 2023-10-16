const TravelPlacesModel = require("../../Model/TransportAllowanceModel/TravelPlacesModel");
const TravelVisitModel = require("../../Model/TransportAllowanceModel/TravelVisitModel");
const AllListService = require("../../Service/Common/AllListService");
const CreateService = require("../../Service/Common/CreateService");

//================== Travel Places =======================
// Create Travel Places 
exports.CreateTravelPlaces = async (req, res) => {
    let Result = await CreateService(req, TravelPlacesModel);
    res.status(200).json(Result);
};

// All Travel Place List
exports.AllTravelPlaceList = async (req, res) => {
    let Result = await AllListService(req, TravelPlacesModel);
    res.status(200).json(Result);
};









//====================== Travel Visit ======================
// Create Travel Visit
exports.CreateTravelVisit = async (req, res) => {
    let Result = await CreateService(req, TravelVisitModel);
    res.status(200).json(Result);
};

// All Travel Visit List
exports.AllTravelVisitList = async (req, res) => {
    let Result = await AllListService(req, TravelVisitModel);
    res.status(200).json(Result);
};