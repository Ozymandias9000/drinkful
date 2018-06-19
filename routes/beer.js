var express = require("express");
var router = express.Router();
const beerController = require("../controllers/beerController");

router.post("/", beerController.fetchBeer);
router.post("/beer/profile/:breweryId/:beerId", beerController.fetchOneBeer);
module.exports = router;
