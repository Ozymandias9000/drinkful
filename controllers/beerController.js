const axios = require("axios");
const cheerio = require("cheerio");

exports.fetchBeer = async (req, res) => {
  let list = [];
  // Prep the search for URL
  const search = req.body.searchInput.replace(/\s/g, "+");

  await axios
    .get(`https://www.beeradvocate.com/search/?q=${search}&qt=beer`)
    .then(
      res => {
        if (res.status === 200) {
          const html = res.data;
          const $ = cheerio.load(html);
          $("#ba-content").each(function(i, elem) {
            $(this)
              .find($("li a:first-of-type"))
              .each(function(i, elem) {
                list[i] = {
                  name: $(this).text(),
                  beerHref: $(this).attr("href")
                };
              });
            $(this)
              .find($("li a:nth-of-type(2)"))
              .each(function(i, elem) {
                let text = $(this).text();
                if (text.indexOf("-") !== -1) {
                  text = text.slice(0, text.indexOf("-"));
                }
                list[i] = {
                  ...list[i],
                  brewery: text,
                  breweryHref: $(this).attr("href")
                };
              });
          });
        }
      },
      err => console.log(err)
    );
  res.status(200).json(list);
};

exports.fetchOneBeer = async (req, res) => {
  const { beerHref } = req.body;

  let beerDetails = {
    avgScore: "",
    imgSrc: "",
    style: ""
  };

  await axios.get(`https://www.beeradvocate.com${beerHref}`).then(
    res => {
      if (res.status === 200) {
        const html = res.data;
        const $ = cheerio.load(html);

        beerDetails.avgScore = $("#ba-content")
          .find(".ba-ravg")
          .text();
        beerDetails.imgSrc = $("#main_pic_norm")
          .find("div:first-child img")
          .attr("src");
        beerDetails.style = $("#info_box")
          .find("a:nth-of-type(5)")
          .text();
      }
    },
    err => console.log(err)
  );
  res.status(200).json(beerDetails);
};
