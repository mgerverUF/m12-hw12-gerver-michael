// Creates reference to button in HTML document
const btn = document.getElementById('candy-button');

// Adds functionality to button 
// https://medium.com/@josephcardillo/arrow-functions-and-this-in-es6-4f1d350a85cf
btn.addEventListener('click', () => {

    // Candy array
    const candy = ['','Kit Kat','M&Ms','Skittles','Gummy Bears','Milky Way','Snickers','Starburst','Crunch','Twix','Twizzlers'];

    // Function to shuffle elements within the array
    let shuffleNum = (i, j, k) => {
        for (i = candy.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * i)
            k = candy[i]
            candy[i] = candy[j]
            candy[j] = k
            document.getElementById('result').innerHTML = candy[0];

    // Show images with each randomly generated candy
            if (candy[0] == 'Kit Kat') {
                document.getElementById('candy-image').src = 'images/kitkat.png';
            }
            else if (candy[0] == 'M&Ms') {
                document.getElementById('candy-image').src = 'images/m&ms.png';
            } 
            else if (candy[0] == 'Skittles') {
                document.getElementById('candy-image').src = 'images/skittles.jpg';
            }   
            else if (candy[0] == 'Gummy Bears') {
                document.getElementById('candy-image').src = 'images/gummybears.jpg';
            }    
            else if (candy[0] == 'Milky Way') {
                document.getElementById('candy-image').src = 'images/milkyway.jpg';
            }   
            else if (candy[0] == 'Snickers') {
                document.getElementById('candy-image').src = 'images/snickers.jpg';
            }  
            else if (candy[0] == 'Starburst') {
                document.getElementById('candy-image').src = 'images/starburst.png';
            }   
            else if (candy[0] == 'Crunch') {
                document.getElementById('candy-image').src = 'images/crunch.jpg';
            }   
            else if (candy[0] == 'Twix') {
                document.getElementById('candy-image').src = 'images/twix.jpg';
            }   
            else if (candy[0] == 'Twizzlers') {
                document.getElementById('candy-image').src = 'images/twizzlers.png';
            }                                            
        };
    }; 

    // Feeds candy array to shuffleNum function
    shuffleNum(candy);
  });

