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