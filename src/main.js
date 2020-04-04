// Creates reference to button in HTML document
const btn = document.getElementById('candy-button');

// Adds functionality to button 
// https://medium.com/@josephcardillo/arrow-functions-and-this-in-es6-4f1d350a85cf
btn.addEventListener('click', () => {

    // Candy array
    const candy = ['Kit Kat','M&Ms','Skittles','Gummy Bears','Milky Way','Snickers','Starburst','Crunch','Twix','Twizzlers'];

    // Function to shuffle elements within the array
    let shuffleNum = (i, j, k) => {
        for (i = candy.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * i)
            k = candy[i]
            candy[i] = candy[j]
            candy[j] = k
            document.getElementById('result').innerHTML = candy[j];
        };
    }; 

    // Feeds candy array to shuffleNum function
    shuffleNum(candy);
  });

