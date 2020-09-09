/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    document.getElementById("run").addEventListener("click", function () {
        var password1 = document.getElementById("pass-one");
        var password2 = document.getElementById("pass-two");
        // var comment1 = document.getElementById("pass-one");
        //var comment2 = document.getElementById("pass-two");

        if (password1.value === password2.value) {
            alert("Ok");
        } else {
                password1.classList.add("error");
                password2.classList.add("error");
        }
    });
/*let run = document.getElementById("run")
run.addEventListener("click", getPostsWithComments)

function getPostsWithComments () {
   window.lib.ge*/

