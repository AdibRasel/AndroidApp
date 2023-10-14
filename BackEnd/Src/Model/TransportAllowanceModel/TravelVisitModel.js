const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    
    UserEmail: {type:String},

    OfficeName: {type:String},
    OfficeAddress: {type:String},
    OfficeEmail: {type:String},
    OfficeMobileNumber: {type:String},
    PersonName: {type:String},
    PersonAddress: {type:String},
    PersonEmail: {type:String},
    PersonMobileNumber: {type:String},
    Remarks: {type:String},

    CreatedDate : {type: Date, default:Date.now()}

},{versionKey: false});
const TravelVisitModel = mongoose.model("Travel_Visit_List", DataSchema);
module.exports= TravelVisitModel