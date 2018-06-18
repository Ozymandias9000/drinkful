const axios = require("axios");
const cheerio = require("cheerio");

exports.fetchBeer = async (req, res, next) => {
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
              .find($("li a:first-child"))
              .each(function(i, elem) {
                list[i] = {
                  name: $(this).text()
                };
              });
          });
        }
      },
      err => console.log(err)
    );
  res.status(200).json(list);
};
