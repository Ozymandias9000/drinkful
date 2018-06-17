const express = require("express");
const fs = require("fs");
const cheerio = require("cheerio");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

axios.get("https://www.beeradvocate.com/search/?q=dogfish&qt=beer").then(
  res => {
    if (res.status === 200) {
      const html = res.data;
      const $ = cheerio.load(html);
      let list = [];
      $("#ba-content").each(function(i, elem) {
        $(this)
          .find($("li a:first-child"))
          .each(function(i, elem) {
            list[i] = $(this).text();
          });
      });
      console.log(list[12]);
    }
  },
  err => console.log(err)
);

app.set("port", 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
