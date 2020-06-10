var express = require('express');
var router = express.Router();
const RunesJason = require('../runebd.json');
const Rune = require('./../models/magic_schema');
let {localStorage} = require('node-localstorage')

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  // try {
  //   allRunes = await Runes.find();
  //   console.log(allRunes)
  // } catch (e) {
  //   console.log("Error: ", e)
  // }

  // get local storage:
  if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  localStorage.setItem('myFirstKey', 'firstVal')
  // console.log('Local storage:', JSON.parse(localStorage('selected_runes')))
  console.log(localStorage.getItem('selected_runes'));

  
  let data = {
    title: "Mythical Combos!",
    runes: RunesJason
  }
  res.render('index', data);
});

// testing:
router.post('/', async (req, res) => {
  const newRune = new Rune({
    rune_number: req.body.runeNumber,
    name: req.body.runeName,
    img: req.body.runeImg,
    combines_with: req.body.runeCombines
  });

  try {
    await newRune.save();
    res.redirect(`/view_rune/${newRune.id}`)
  } catch (e) {
    console.log("Error: ", e)
    res.render('/', { title: "Mythical Combos!", runes: RunesJason})
  }
})

module.exports = router;
