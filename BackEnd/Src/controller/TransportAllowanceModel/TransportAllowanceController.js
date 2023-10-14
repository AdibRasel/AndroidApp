const TravelPlacesModel = require("../../Model/TransportAllowanceModel/TravelPlacesModel");
const TravelVisitModel = require("../../Model/TransportAllowanceModel/TravelVisitModel");
const CreateService = require("../../Service/Common/CreateService");

// Create Travel Places 
exports.CreateTravelPlaces = async (req, res) => {
    let Result = await CreateService(req, TravelPlacesModel);
    res.status(200).json(Result);
};


// Create Travel Visit
exports.CreateTravelVisit = async (req, res) => {
    let Result = await CreateService(req, TravelVisitModel);
    res.status(200).json(Result);
};