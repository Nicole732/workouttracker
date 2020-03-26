const express = require("express");

const logger = require("morgan");


const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));




require("./controllers/html.js")(app);
//app.use(require("./controllers/html.js"));
require("./controllers/api.js")(app);
//app.use(require("./controllers/api.js"));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", { useNewUrlParser: true });

//testing DB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connection Successful!");
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`); 
  });