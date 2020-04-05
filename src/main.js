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

            if (candy[j] == 'Kit Kat') {
                document.getElementById('candy-image').src = 'images/kitkat.png';
            }
            else if (candy[j] == 'M&Ms') {
                document.getElementById('candy-image').src = 'images/m&ms.png';
            } 
            else if (candy[j] == 'Skittles') {
                document.getElementById('candy-image').src = 'images/skittles.jpg';
            }   
            else if (candy[j] == 'Gummy Bears') {
                document.getElementById('candy-image').src = 'images/gummybears.jpg';
            }    
            else if (candy[j] == 'Milky Way') {
                document.getElementById('candy-image').src = 'images/milkyway.jpg';
            }   
            else if (candy[j] == 'Snickers') {
                document.getElementById('candy-image').src = 'images/snickers.jpg';
            }  
            else if (candy[j] == 'Starburst') {
                document.getElementById('candy-image').src = 'images/starburst.png';
            }   
            else if (candy[j] == 'Crunch') {
                document.getElementById('candy-image').src = 'images/crunch.jpg';
            }   
            else if (candy[j] == 'Twix') {
                document.getElementById('candy-image').src = 'images/twix.jpg';
            }   
            else if (candy[j] == 'Twizzlers') {
                document.getElementById('candy-image').src = 'images/twizzlers.png';
            }                                            
        };
    }; 

    // Feeds candy array to shuffleNum function
    shuffleNum(candy);
  });

