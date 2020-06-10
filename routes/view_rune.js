const express = require('express');
const router = express.Router();
const Rune = require('./../models/magic_schema')

router.get('/:runeId', async function(req, res){
    try{
        // let foundRune = await Rune.findById(req.params.runeId);
        let foundRune = await Rune.findOne({_id: req.params.runeId});

        if(foundRune == null) {
            res.redirect('/');
        }
        console.log("Rune found = ", foundRune);
        
        let data = {
            title: "Check it out!",
            rune: foundRune
        }
        res.render('view_rune', data);
    } catch (e) {
        res.redirect('/');
        // alert('No suc exists')
    }
});

module.exports = router;