const express = require("express");

const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger("dev"))
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./controllers/html.js")(app);
//app.use(require("./controllers/html.js"));
require("./controllers/api.js")(app);
//app.use(require("./controllers/api.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });