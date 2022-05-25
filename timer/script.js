'use strict';

const myDays = document.querySelector('div#stage1');
const myHours = document.querySelector('div#stage2');
const myMinute = document.querySelector('div#stage3');
const mySeconds = document.querySelector('div#stage4');

const newYear = '2 april 2022';

function daysLeft() {
    const newYearsDate = new Date(newYear);
    const presentDate = new Date();
    const seconds = Math.floor((presentDate - newYearsDate) / 1000);
    const totalSeconds = Math.floor(seconds % 60)
    const minute = Math.floor(seconds / 60) % 60;
    const hours = Math.floor(seconds / 3600) % 24;
    const days = Math.floor(seconds / (3600 * 24));

    myDays.innerHTML = days;
    myHours.innerHTML = hours;
    myMinute.innerHTML = minute;
    mySeconds.innerHTML = totalSeconds;
    // console.log(days, hours, minute, totalSeconds);
    // console.log(days.length);
}

setInterval(daysLeft, 1000)

daysLeft();