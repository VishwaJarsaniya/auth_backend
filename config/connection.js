const mongoose = require("mongoose");
async function connectMongoDb(url){
    return await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true })
                         .then(()=>{console.log("MongoDb Connected")})
                         .catch((err)=>{console.log("Error in connecting db", err)})
}
module.exports = {
    connectMongoDb,
}