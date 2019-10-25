
var input = $(".text").text();
var save = $(".save");

var time = $("#date-time").text(moment().format("dddd, MMMM Do YYYY"));


$("button").on("click", function(event) {
    event.preventDefault();

    localStorage.setItem("text", input);
    
})

alert(localStorage.getItem("text"));