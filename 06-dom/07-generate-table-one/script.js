/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
   // let smallTable = table.createTHead();
    //let row = smallTable.insertRow();
   document.getElementById("target");
    //var table = document.getElementById("target");
    //var row = table.insertRow (10);
    // get the reference for the body
   // var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < 10; i++){
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 1; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
           var cellText = document.createTextNode("cell in row "+i+", column "+j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    target.appendChild(tbl);
    // sets the border attribute of tbl to 2;
   // tbl.setAttribute("border", "2");


})();
