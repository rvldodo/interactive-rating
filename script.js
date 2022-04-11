'use strict'

// Elements
const ratingNumber = document.querySelector('.rate');
const btn = document.querySelectorAll('.btn-rate');

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

btn.forEach(b => b.addEventListener('click', (e) => {
    
}))
