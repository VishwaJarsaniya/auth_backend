const mongoose = require("mongoose");

async function connectMongoDb(url) {
    // URL encode the MongoDB connection string
    const encodedUrl = encodeURI(url);

    return await mongoose.connect(encodedUrl)
        .then(() => {
            console.log("MongoDb Connected");
        })
        .catch((err) => {
            console.log("Error in connecting db", err);
        });
}

module.exports = {
    connectMongoDb,
};
