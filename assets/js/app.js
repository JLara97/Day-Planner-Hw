
var input = $("#text").val();
var save = $(".save");
var currentHour = moment().hour();
var time = $(".time").html();
var textColor = $(".color");

var dateTime = $("#date-time").text(moment().format("dddd, MMMM Do YYYY"));

changeColor();

$("button").on("click", function(event) {
    event.preventDefault();

    localStorage.setItem("text", input);
    
})

function changeColor() {
    
    switch (time) {
        case currentHour:
            textColor.css("background-color", "red");
            break;

        //case moment().isAfter():
            //textColor.css("background-color", "green");    
    
        default:
            textColor.css("background-color", "green");
            break;
    }
}