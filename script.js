'use strict'

// Elements
const numRate = document.querySelectorAll('.btn-rate');

numRate.forEach(num => {
    num.addEventListener('click', function(e) {
        const clicked = true;
        clicked ? clicked : !clicked;
        if(clicked) {
            this.style.backgroundColor = '#FB7413';
            this.style.opacity = 1;
        } else !clicked;
    })
})

/*
const displayNumber = (num => {
    ratingNumber.innerHTML = ''

    const movs = num.slice().sort((a, b) => b - a)

    movs.forEach((val, i) => {
        const html = `
        <button class="btn-rate" data-tab=${Number(val)}><a>${val}</a></button>
        `

        ratingNumber.insertAdjacentHTML("afterbegin", html);
    })
})
displayNumber(arr);
*/
