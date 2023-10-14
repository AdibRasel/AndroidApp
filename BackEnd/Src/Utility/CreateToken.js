const jwt = require("jsonwebtoken");
const CreateToken = async (UserEmail, Password)=>{
    // This token will have 1 day validity
    let payload = {exp: Math.floor(Date.now()/1000)+ (24*60*60), UserEmail:UserEmail, Password:Password}
    return await jwt.sign(payload, 'SecretKey123456789')
}
module.exports = CreateToken