'use strict'

// When a rune is clicked, it should expand and stay that way - the reverse should also happen

let runeImgs = document.querySelectorAll('.runeImgs');
let rune_select_counter = 0;
let combineBtn = document.getElementById('combineBtn');

function selectRune() {
    // Check if this rune has been selected:
    if(this.classList.contains('runeImgClicked')) {
        // if so, remove it.
        this.classList.remove('runeImgClicked');
        rune_select_counter--;
    } else {
        this.classList.add('runeImgClicked');
        rune_select_counter++;
    }

    // Button availability check:
    if(rune_select_counter >= 2){
        combineBtn.removeAttribute('disabled');
    } else {
        combineBtn.setAttribute('disabled', 'true');
    }
}

runeImgs.forEach(rune => {
    rune.addEventListener('click', selectRune);
});

// Combine Button functionality:
combineBtn.addEventListener('click', (e) => {
    // find selected runes and then redirect to page that shows the combined rune.
    console.log()
});