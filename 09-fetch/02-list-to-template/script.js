/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let storeHeroes = document.getElementById("target");
    let getTemplate = document.getElementById("tpl-hero");
    fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let clone = getTemplate.content.cloneNode(true);
                clone.querySelector(".name").innerHTML = data[i]['name'];
                clone.querySelector(".alter-ego").innerHTML = data[i]['alterEgo'];
                clone.querySelector(".powers").innerHTML = data[i]['abilities'];
                storeHeroes.appendChild(clone);

            }
        });


})();
