/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function () {
        //let answer1 = "yes";
        //let answer2 = "no";
        let x = fruits.includes("apple")
        if (x == true) {
            console.log("yes there is an apple")
        } else {
            console.log("no there is no apple")
        }

    })
})();

/*  for (i = 0; i < fruits.length; i++) {
      if (fruits[i] === "apple") {
          //console.log(fruits[i]);
         console.log(answer1[i]);
      } else {
          console.log (answer2[i]);
         // console.log(answer1, answer2);
      }
  }*/


