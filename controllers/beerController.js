const axios = require("axios");
const cheerio = require("cheerio");

exports.fetchBeer = async (req, res) => {
  let list = [];

  // Prep the search for URL
  const search = req.body.searchInput
    .trim()
    .replace(/\s/g, "+")
    .toLowerCase();

  await axios
    .get(`https://www.beeradvocate.com/search/?q=${search}&qt=beer`)
    .then(
      res => {
        if (res.status === 200) {
          const html = res.data;
          const $ = cheerio.load(html);

          // Check if no beers have matched.
          // If so, let them know.
          if ($('#ba-content div span li:nth-of-type(1)').text() === 'No results. Try being more specific.' || $('#ba-content div span li:nth-of-type(1)').text() === 'No search words given.') {
            return Promise.reject(Error('Oh noooo! No results.'));

          }

          // Check if only one beers has matched.
          // If so, send back just one.
          const fullHeading = $(".titleBar h1")
            .text()
            .split("|");
          const name = fullHeading[0].trim();
          const normalizedName = name.toLowerCase().replace(/\s/g, "+");

          if (normalizedName === search) {
            // get brewery from fullHeading
            const brewery = fullHeading[1].trim();
            // get breweryHref from from first a in #info-box
            const breweryHref = $("#info_box")
              .find("a:nth-of-type(1)")
              .attr("href");
            // get beerHref from combining breweryHref with id from img
            const img = $("#main_pic_norm")
              .find("img:nth-of-type(1)")
              .attr("src");
            const beerId = img.split("/")[5].split(".")[0];
            const beerHref = `${breweryHref}${beerId}`;

            list[0] = {
              name,
              brewery,
              breweryHref,
              beerHref
            };
          } else {
            // Else, send back all search results
            $("#ba-content").each(function (i, elem) {
              $(this)
                .find($("li a:first-of-type"))
                .each(function (i, elem) {
                  list[i] = {
                    name: $(this).text(),
                    beerHref: $(this).attr("href")
                  };
                });
              $(this)
                .find($("li a:nth-of-type(2)"))
                .each(function (i, elem) {
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
        }
      },
  ).catch(err => console.log(err));
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
