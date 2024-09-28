require("dotenv").config();
const express = require("express");
const {connectMongoDb} = require("./config/connection");
const userRoute = require("./routes/user");


const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(process.env.mongodbUrl,{useNewUrlParser: true, useUnifiedTopology: true })
                         .then(()=>{console.log("MongoDb Connected")})
                         .catch((err)=>{console.log("Error in connecting db", err)})


app.use("/user", userRoute);


app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)});