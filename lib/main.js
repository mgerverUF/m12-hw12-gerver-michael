'use strict';

var candy = ['Kit Kat', 'M&Ms', 'Skittles', 'Gummy Bears', 'Milky Way', 'Snickers', 'Starburst', 'Crunch', 'Twix', 'Twizzlers'];

var shuffleNum = function shuffleNum(i, j, k) {
    for (i = candy.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        k = candy[i];
        candy[i] = candy[j];
        candy[j] = k;
        document.getElementById('result').innerHTML = candy[j];
    };
};

// Feeds strings to shuffleNum function
shuffleNum(['Kit Kat', 'M&Ms', 'Skittles', 'Gummy Bears', 'Milky Way', 'Snickers', 'Starburst', 'Crunch', 'Twix', 'Twizzlers']);