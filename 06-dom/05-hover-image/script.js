/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  //document.getElementsByTagName()
   // const my_image = document.getElementsByTagName("img").getAttribute("data-hover");
    //my_image.onmouseover;

    //const srcImage = document.getElementsByTagName("source src").getAttribute("data-hover");
    //const image = document.createElement("img");
    //image.setAttribute("src", srcImage);
    //document.getElementById("target").appendChild(image);

    document.getElementById("src").addEventListener("mouseover", onmouseover);

})();
