const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const expressApp = express();
expressApp.use("/static", express.static("public"));
expressApp.use(bodyParser.json());
expressApp.use(cors());
expressApp.listen(PORT, () => {
    console.log("Listening to port " + PORT);
});
module.exports = {expressApp};