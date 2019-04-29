// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((tData) => {
    var row = tbody.append("tr");
    Object.entries(tData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


var submit = d3.select("#Filter Table");  
submit.on("click", function() {
d3.event.preventDefault();
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
if (inputValue){
var filteredData = tableData.filter(row => row.datetime === inputValue);
}
buildTable(filteredData);
});
d3.select("#filter-btn");
buildTable(filteredData);