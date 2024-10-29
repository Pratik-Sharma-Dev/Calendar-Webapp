const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const path = require('path');
const eventRoute = require("./routes/eventRoute")

mongoose.set('strictQuery', true);
dotenv.config();
const cors = require("cors");

// // Serve static files from the React build folder
// app.use(express.static(path.join(__dirname, '../client/build')));


mongoose.connect(process.env.MONGO_URL)
.then(_=> console.log("connection successful"))
.catch(err=> console.log("database connection fail"))




app.use(express.json({limit: '50mb'}));
app.use(cors()) 
app.use("/api/events", eventRoute)

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });



app.listen(process.env.PORT || 3000, _=> console.log("backend server is running on port: "+ process.env.PORT))
