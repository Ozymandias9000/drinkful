const express = require("express");
const createError = require("http-errors");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./react-ui/build")));

const beerRouter = require("./routes/beer");
app.use("/beers", beerRouter);
app.use("/beers/beer/profile/:breweryId/:beerId", beerRouter);

// Other requests return React app so it can handle routing with ReactRouter
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "./react-ui/build", "index.html"));
});

const PORT = process.env.PORT || 7777;

app.set("port", PORT);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

module.exports = app;
