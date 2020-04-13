'use strict'

// When a rune is clicked, it should expand and stay that way - the reverse should also happen

let runeImgs = document.querySelectorAll('.runeImgs');

function selectRune() {
    // Check if this rune has been selected:
    if(this.classList.contains('runeImgClicked')) {
        // if so, remove it.
        this.classList.remove('runeImgClicked');
    } else {
        this.classList.add('runeImgClicked');
    }
}

runeImgs.forEach(rune => {
    rune.addEventListener('click', selectRune);
});