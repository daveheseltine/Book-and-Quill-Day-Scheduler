// # Define Global Variables.
// You can edit the start/end times presented on the webpage!:
var start = 9;
var end = 18;


// jQuery
$(document).ready(function () {


// # Initialise the webpage
  // ## Set the clock to the current time:
  $("#currentDay").text(moment().format("hh:mm A, dddd Do MMMM"));

  // ## After 1s, and every second thereafter, update the current time and detect if the correct colours are displayed (which will take effect if the current hour changes):
  $(setInterval(function () {
    $("#currentDay").text(moment().format("hh:mm A, dddd Do MMMM"));
  }
  , 1000));

  // ## Generate HTML for the Time-Blocks:
  for (var i = start; i < end; i++) {
    $(".container").append($("<div class='row time-block' id='hour" + [i] + "'></div>"));
    $("#hour" + [i])
      .append($("<div class='col-md-1 col-2 hour'>" + moment().startOf("day").add([i], "hours").format("h A") + "</div>"))
      .append($("<textarea class='col-md-10 col-8 description id='text" + [i] + "'></textarea>"))
      .append($("<button class='col-md-1 col-2 btn saveBtn'><i class='fas fa-save'></i></button>"))
    ;
  }
});