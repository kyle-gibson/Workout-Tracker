const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 9000;

const app = express();

app.use(logger("dev"));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb:localhot/workout", {useNewUrlParser: true});

require("./routes/api-routes.js")(app);