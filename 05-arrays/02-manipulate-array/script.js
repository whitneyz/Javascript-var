/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    /*document.getElementById("run").addEventListener("click", function () {
        alert(fruits[fruits.pop]);*/

        document.getElementById("run").addEventListener("click", function () {
           console.log(fruits.pop());
           console.log(fruits.shift());
           console.log(fruits.unshift("banana"));
           console.log(fruits.push("kiwi"));
    });
})();
