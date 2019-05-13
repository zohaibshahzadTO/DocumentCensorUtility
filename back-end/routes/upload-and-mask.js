var express = require("express");
var router = express.Router();

router.post('/', (req, res, next) => {
  let textFile = req.files.file;

  textFile.mv(`${__dirname}/../public/${textFile.name}`, err => {
    if (err) {
      return res.status(500).send(err);
    }

    var fs = require("fs");
    fs.readFile(`${__dirname}/../public/${textFile.name}`, { encoding: 'utf-8' }, function (err, data) {
      if (!err) {
        //console.log(req.body.phrases);
        var inputStr = req.body.phrases;
        var modifiedStr = inputStr.replace(/["‘’“”]/g, "'").trim();
        var partialSearchTextItems = [];
        var remainingSearchTextItems = [];
        var searchTextItems = [];
        var i = 0;

        //console.log("ORIGINAL: " + inputStr);
        //console.log("MODIFIED: " + modifiedStr);

        phrases = modifiedStr.match(/'(.*?)'/g);

        if (phrases != null) {
          phrases.forEach(phrase => {
            partialSearchTextItems[i++] = phrase.replace(/["']/g, "");
            modifiedStr = modifiedStr.replace(phrase, "");
          });
        }

        remainingSearchTextItems = modifiedStr.split(/ |,/);

        remainingSearchTextItems = remainingSearchTextItems.filter(v => v != '');

        searchTextItems = partialSearchTextItems.concat(remainingSearchTextItems);

        if (searchTextItems != null) {
          searchTextItems.forEach(searchTextItem => {
            //console.log("SEARCH TEXT ITEM: " + searchTextItem);
            data = data.replace(new RegExp(searchTextItem, 'gi'), "XXXX");
          });
        }

        res.json({ modifiedFileContent: data });
      } else {
        console.log(err);
      }
    });
  });
});

module.exports = router;
