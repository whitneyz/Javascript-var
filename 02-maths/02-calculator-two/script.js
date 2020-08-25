/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(switch(calculate) {
    // to get the value of an input: document.getElementById("element-id").value
    case "add":
        var operand1 = +document.getElementById("op-one").value;
        var operand2 = +document.getElementById("op-two").value;
        var result = operand1 + operand2;
        alert(result);
        break;
    case "subtract":
        var operand1 = +document.getElementById("op-one").value;
        var operand2 = +document.getElementById("op-two").value;
        var result = operand1 - operand2;
        alert(result);
        break;
    case "multiply":
        var operand1 = +document.getElementById("op-one").value;
        var operand2 = +document.getElementById("op-two").value;
        var result = operand1 * operand2;
        alert(result);
        break;
    case "divide":
        var operand1 = +document.getElementById("op-one").value;
        var operand2 = +document.getElementById("op-two").value;
        var result = operand1 / operand2;
        alert(result);
}

// case
   // var result = "operand1 + operand2";
 //   break;
   // var result = "operand1 - operand2";
    //break;
    //var result = "operand1 * operand2";
    //break;
    //var result = "operand1 / operand2";
 )

    var performOperation = function(operation) {
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);
        });

