/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;

        let birthdate = new Date(year, month, day);

        let dateoftoday = new Date();

        birthdate = new Date(birthdate);
        dateoftoday = new Date(dateoftoday);

        let years = (dateoftoday.getFullYear() - birthdate.getFullYear());

        if (dateoftoday.getMonth() < birthdate.getMonth() ||
            dateoftoday.getMonth() == birthdate.getMonth() && dateoftoday.getDate() < birthdate.getDate()) {
            years--;
        }

        alert(birthdate)
        alert(years)

    });
})();
