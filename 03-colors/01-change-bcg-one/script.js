/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("green").addEventListener("click", function () {
        document.body.style.backgroundColor = "green"
    });
    document.getElementById("red").addEventListener("click", function () {
        document.body.style.backgroundColor = "red"
    });
    document.getElementById("yellow").addEventListener("click", function () {
        document.body.style.backgroundColor = "yellow"
    });
    document.getElementById("blue").addEventListener("click", function () {
        document.body.style.backgroundColor = "blue"
    });

})();