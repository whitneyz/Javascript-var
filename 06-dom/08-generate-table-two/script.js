/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < 10; i++){
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 10; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell in row "+i+", column "+j);
            cell.appendChild(cellText);
            row.appendChild(cell);
            /*for multiplication moeten we loop gebruiken die begint bij 1 (0) tm 10 * 1 tm 10 en de volgende
            is dan 2, 3, 4 etc */
            let x = 10;
            let y = 10;
            let multi = x * y;
            for (let i = 1; i <= x; i++) {
                //hier moet berekening komen
            }
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    target.appendChild(tbl);

})();
