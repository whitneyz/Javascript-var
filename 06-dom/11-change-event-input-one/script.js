/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//(function() {

   document.getElementById("pass-one").addEventListener("onchange", function () {

       var userInput = document.getElementById("pass-one");
       var count = document.getElementsByClassName("indicator");
       var max_char = 10;
       if (userInput.length.value > max_char) {
          userInput(0,max_char);

       } else {
           count

       }

})




