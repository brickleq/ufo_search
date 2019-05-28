// from data.js
var tableData = data;

// YOUR CODE HERE!

// Find a <table> element with id="ufo-table":
var table = document.getElementById("ufo-table");

for (i = 1; i < (tableData.length +1); i++) {

// Create an empty <tr> element and add it to the (i)th position of the table:

var row = table.insertRow(i);

// Insert new cells (<td> elements) at the 1st - 7th positions of the new <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);

// Populate the new cells with data from data.js:
var objectData = tableData[i-1];
cell1.innerHTML = objectData.datetime;
cell2.innerHTML = objectData.city;
cell3.innerHTML = objectData.state;
cell4.innerHTML = objectData.country;
cell5.innerHTML = objectData.shape;
cell6.innerHTML = objectData.durationMinutes;
cell7.innerHTML = objectData.comments;
}