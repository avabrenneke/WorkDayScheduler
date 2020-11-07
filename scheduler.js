var timeHour;
var hour;

//Current Time
function todaysDate() {
    var dateTime = moment().format("LLLL");
    $("#currentDate").append(dateTime);
}
//Set Date to Screen
todaysDate();

//Get Military Time
var currentTime = moment().format("H");

//Create Input:Text Array 
$("button:submit").on("click", function () {
    var userInput = $("input:text") //this is an array

    //Save Input to Local Storage
    for (var x = 0; x < userInput.length; x++) {
        var id = $(userInput[x]).closest("tr").attr('id');
        var input = $(userInput[x]).val();
        localStorage.setItem(id, input);
    }
});