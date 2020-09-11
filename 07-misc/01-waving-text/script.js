/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let my_span = document.createElement("span");
    let my_span1 = document.createElement("span");
    let my_span2 = document.createElement("span");
    let my_span3 = document.createElement("span");
    let my_span4 = document.createElement("span");

    my_span.innerText = "Woo-hoo!";
    document.getElementById("target").appendChild(my_span).style.fontSize = "xx-small";
    //random fontsize and use set time-out for interval. set-timeout is a function and put line (document.... also in it
    my_span1.innerText = "I'm making waves!";
    document.getElementById("target").appendChild(my_span1).style.fontSize = "small";

    my_span2.innerText = "Wéééé!";
    document.getElementById("target").appendChild(my_span2).style.fontSize = "medium";

    my_span3.innerText = "Oh ...";
    document.getElementById("target").appendChild(my_span3).style.fontSize = "large";

    my_span4.innerText = "I think I'm having seasickness ...";
    document.getElementById("target").appendChild(my_span4).style.fontSize = "xx-large";

    //Woo-hoo! I'm making waves! Wéééé! Oh ...I think I'm having seasickness ...
})();
