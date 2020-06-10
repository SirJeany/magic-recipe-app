'use strict'

// When a rune is clicked, it should expand and stay that way - the reverse should also happen

let runeImgs = document.querySelectorAll('.runeImgs');
let rune_select_counter = 0;
let combineBtn = document.getElementById('combineBtn');

// Local storage to access current items:
let selected_runes = []; 
localStorage.setItem('selected_runes', [1])

function selectRune(e) {
    console.log(e.target)
    // Check if this rune has been selected:
    if(this.classList.contains('runeImgClicked')) {
        // if so, remove it.
        this.classList.remove('runeImgClicked');
        rune_select_counter--;
        // handle local storage:
        let index = selected_runes.indexOf(e.target.alt)
        selected_runes.splice(index, 1)
        localStorage.setItem('selected_runes', JSON.stringify(selected_runes))
    } else {
        this.classList.add('runeImgClicked');
        rune_select_counter++;
        selected_runes.push(e.target.alt)
        localStorage.setItem('selected_runes', JSON.stringify(selected_runes))
    }

    // Button availability check:
    if(rune_select_counter >= 2){
        combineBtn.removeAttribute('disabled');
    } else {
        combineBtn.setAttribute('disabled', 'true');
    }
}
// allRunes = runeImgs
// function populateList(runes = [], allRunes) {
//     allRunes.forEach(rune => { runes.push(rune.alt) })
// }

runeImgs.forEach(rune => {
    rune.addEventListener('click', selectRune);
});

// Combine Button functionality:
combineBtn.addEventListener('click', (e) => {
    // find selected runes and then redirect to page that shows the combined rune.
    console.log('Selected runes: ')

});

// populateList(select_runes, runeImgs)