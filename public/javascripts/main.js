'use strict'

// When a rune is clicked, it should expand and stay that way - the reverse should also happen

let runeImgs = document.querySelectorAll('.runeImgs');
let rune_select_counter = 0;

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
}

runeImgs.forEach(rune => {
    rune.addEventListener('click', selectRune);
});