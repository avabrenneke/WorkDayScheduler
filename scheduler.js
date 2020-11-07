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

//Retrieve Input From Local Storage Upon Refreshing
var userInput = $("input:text")
for (var x = 0; x < userInput.length; x++) {
    var id = $(userInput[x]).closest("tr").attr('id');
    var input = localStorage.getItem(id)
    $(userInput[x]).val(input);
}

//Add Past/Current/Future classes
var timeArray = $(".hour").get();

for (var i = 0; i < timeArray.length; i++) {
    var trId = parseInt(timeArray[i].id);
    if (trId < parseInt(currentTime)) {
        timeArray[i].classList.add("past");
        var userHour = timeArray[i].id;
        var userText = localStorage.getItem(hour);
        timeArray[i].val = userText;

    } else if (trId > parseInt(currentTime)) {
        timeArray[i].classList.add("future");
        var userHour = timeArray[i].id;
        var userText = localStorage.getItem(hour);
        timeArray[i].val = userText;

    } else {
        timeArray[i].classList.add("present");
        var userHour = timeArray[i].id;
        var userText = localStorage.getItem(hour);
        timeArray[i].val = userText;
    }
}