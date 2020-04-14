const express = require('express');
const router = express.Router();
const Runes = require('../runebd.json');

router.get('/runeId', function(req, res, next){
    let data = {
        title: "Well Done!",
        rune: Runes.Found[req.params.runeId]
    }
    res.render('view_rune', data);
});

module.exports = router;