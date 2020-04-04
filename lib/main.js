'use strict';

var candy = ['Kit Kat', 'M&Ms', 'Skittles', 'Gummy Bears', 'Milky Way', 'Snickers', 'Starburst', 'Crunch', 'Twix', 'Twizzlers'];

document.getElementById('result').innerHTML = candy[0];
var randNum = function randNum(i, j, k) {
    for (i = candy.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        k = candy[i];
        candy[i] = candy[j];
        candy[j] = k;
    };
};