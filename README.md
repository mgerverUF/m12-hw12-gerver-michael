# m12-hw12-gerver-michael

### Assignment Issues
When running the for loop involved in the random number generator, I noticed that the element in the first array position [0] was not getting generated. I experimented with different values of i in the first line of the for loop. I played around with using (i = 0; i < 10; i++),(i = 0; i <= 9; i++) and (i = -1; i < 10; i++) as different structures and I thought that would include the [0] element, but I ended up with the same problem. After changing things around in the first two lines of the for loop, I could not find a code that successfully included the first element of the array. With that said I know this wouldn't be considered a proper solution, but I added an empty string as the new [0] element in the array. So technically the array has a length of 11, but all 10 candy options are now being listed [1] - [10] and the blank [0] element is being skipped.

### Outside Sources
[W3 Schools](https://www.w3schools.com/js/js_array_sort.asp)
I used this link provided with the homework assignment to structure code for randomization using the Fisher Yates method. 

[Medium](https://medium.com/@josephcardillo/arrow-functions-and-this-in-es6-4f1d350a85cf)
I used this site to learn how to structure event listeners with arrow functions in ES6.

[W3 Schools] (https://www.w3schools.com/jsref/prop_img_src.asp)
I used this link to figure out how to change img src properties using Javascript.
