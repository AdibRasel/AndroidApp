const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    
    UserEmail: {type:String},

    TravelFrom: {type:String},
    TravelTo: {type:String},
    VehicleName: {type:String},
    MuchTime: {type:String},
    KmTravel: {type:String},
    TotalCost: {type:Number},

    CreatedDate : {type: Date, default:Date.now()}

},{versionKey: false});
const TravelPlacesModel = mongoose.model("Travel_Places_List", DataSchema);
module.exports= TravelPlacesModel