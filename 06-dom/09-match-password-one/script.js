/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {
        let password1 = document.getElementById("passe-one");
        let password2 = document.getElementById("pass-two");

        if (password1.value === password2.value) {
            alert("ok");
        } else {
            //kleur borders password rood
            password1.style.border = " 20px solid red";
            password2.style.border = " 20px solid red";
        }
    })
});
