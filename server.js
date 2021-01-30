const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.set('trust proxy', true);
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Airwav application." });
});

require("./app/routes/user.routes")(app);
// set port, listen for requests
app.listen(8443,'0.0.0.0');