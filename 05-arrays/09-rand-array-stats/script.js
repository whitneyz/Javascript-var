/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function sumOfArray(array) {
    let total= 0;
    for (let i = 0; i < array.length; i++) {
        total= total + array[i]
    }
    return total;
}


(function () {

    document.getElementById("run").addEventListener("click", function () {
        const ARRAY_LENGTH = 10;
        let randomArray = [];
        for (let i = 0; i < ARRAY_LENGTH; i++) {
            randomArray.push(Math.floor(Math.random() * 100) + 1);
        }
        document.querySelectorAll("td").innerHTML;


        for (let i = 0; i < ARRAY_LENGTH; i++) {
            document.getElementById("n-" + (i + 1)).innerHTML = randomArray[i];
        }

        document.getElementById("min").innerHTML = (Math.min(...randomArray));//spreading
        document.getElementById("max").innerHTML = (Math.max(...randomArray));
        // console.log(randomArray);


        document.getElementById("sum").innerHTML = sumOfArray(randomArray);


        //for (i = 0; i < ARRAY_LENGTH; i++) {
        //Math.min(randomArray
        //Math.max(randomArray
        // var sum = array.reduce (function(a, b) {return a + b; }, 0); to calculate sum of the array
       // randomArray.reduce((totalSum, thisArrayElement) => totalSum + thisArrayElement, 0);
    });
})();
