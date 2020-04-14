const express = require('express');
const router = express.Router();
const Runes = require('../runebd.json');

router.get('/:runeId', function(req, res, next){
    console.log(JSON.stringify(Runes.Found[req.params.runeId-1]));
    let data = {
        title: "Well Done!",
        rune: Runes.Found[req.params.runeId-1]
    }
    res.render('view_rune', data);
});

module.exports = router;