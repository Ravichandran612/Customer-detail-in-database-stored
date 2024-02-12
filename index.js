const express = require("express")
const mongoose = require("mongoose")
var routers = require('./routes/routes');
const bodyparser = require("body-parser")

const app = express()

const port = 6000;

const mongodb = "mongodb://localhost:27017/curd1";

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for successful connection
const connection = mongoose.connection;

app.listen(port,()=>{
    console.log("server is running port"+port);
})

connection.once("open",()=>{
    console.log("mongodb connected..")
});

// const collection = db.collection("student");
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });


app.use(bodyparser.json());
app.use(routers);

