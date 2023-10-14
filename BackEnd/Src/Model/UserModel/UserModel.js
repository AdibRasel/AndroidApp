const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    UserEmail:{type:String, unique:true},
    FirstName:{type:String},
    LastName:{type:String},
    Title:{type:String},
    Mobile:{type:String},
    Password:{type:String},
    Photo:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const UserModel = mongoose.model("User_List", DataSchema);
module.exports= UserModel