var express = require('express');
var router = express.Router();
const Runes = require('../runebd.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    title: "Mythical Combos!",
    runes: Runes
  }
  res.render('index', data);
});

module.exports = router;
