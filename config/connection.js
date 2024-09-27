const mongoose = require("mongoose");

async function connectMongoDb(url){
    return await mongoose.connect(url,  {
        serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
        socketTimeoutMS: 45000})
                         .then(()=>{console.log("MongoDb Connected")})
                         .catch((err)=>{console.log("Error in connecting db", err)})
}

module.exports = {
    connectMongoDb,
}