const express = require('express');
const router = express.Router();
const Runes = require('../runebd.json');

router.get('/:runeId', function(req, res, next){
    // Find the specific rune (There is a chance that the index wont corrospond to the runeId):
    let runeId = 0;
    let allRunes = Runes.Runes;
    let found = false;
    for(let i = 0; i < allRunes.length && !found; i++){
        if(allRunes[i].id == req.params.runeId) {
            runeId = i;
            found = true;
        }
    }

    let foundRune = allRunes[runeId];

    let data = {
        title: "Check it out!",
        rune: foundRune
    }
    res.render('view_rune', data);
});

module.exports = router;