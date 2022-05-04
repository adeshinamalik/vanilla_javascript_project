'use strict';
let mycontent = document.querySelectorAll('.accordion_content');
let state = 0;

let myArrow = document.querySelectorAll('.accordion_question');



for (let index = 0; index < myArrow.length; index++) {
    myArrow[index].addEventListener('click', function () {
        myArrow[index].classList.toggle('open');
        mycontent[index].classList.toggle('open1');
        console.log('hello');
    })
}
