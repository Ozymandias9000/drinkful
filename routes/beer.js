var express = require("express");
var router = express.Router();
const beerController = require("../controllers/beerController");

router.post("/", beerController.fetchBeer);

module.exports = router;
