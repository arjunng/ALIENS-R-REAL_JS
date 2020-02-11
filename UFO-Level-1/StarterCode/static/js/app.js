// from data.js
var tableData = data;

// YOUR CODE HERE!

console.log(tableData.length)

tableData.forEach(function(entry){

    trow = d3.select("tbody").append("tr");
 
    trow.html(`  <td>${entry.datetime}</td>
                 <td>${entry.city}</td>
                 <td>${entry.state}</td>
                 <td>${entry.country}</td>
                 <td>${entry.shape}</td>
                 <td>${entry.durationMinutes}</td>
                 <td>${entry.comments}</td>`)
 
 });

filterBtn = d3.select("#filter-btn");

filterBtn.on("click",function(event){

    d3.select("tbody").html("");

    filterDate = d3.select("#datetime").property("value");

    console.log(filterDate);

    if(filterDate === "" ){
        filterData = tableData;
    }
    else{

    filterData = tableData.filter(entry => entry.datetime === filterDate);
    };
    console.log(filterData)

    filterData.forEach(function(entry){

        trow = d3.select("tbody").append("tr");

        console.log(entry.datetime, entry.city);
     
        trow.html(`  <td>${entry.datetime}</td>
                     <td>${entry.city}</td>
                     <td>${entry.state}</td>
                     <td>${entry.country}</td>
                     <td>${entry.shape}</td>
                     <td>${entry.durationMinutes}</td>
                     <td>${entry.comments}</td>`)
     
     });
});







