// # Define Data:
// ## Sound Effects
var sfxSave = new Audio("assets/sfx/save.wav");


// # Define Global Variables.
// You can edit the start/end times presented on the webpage!:
var start = 9;
var end = 18;


// jQuery
$(document).ready(function () {


  // # Named Functions
  // ## Function to set the colours of the Time Blocks:
  function colours () {
    $(".time-block").each(function () {
      $(this)
        .removeClass("past")
        .removeClass("present")
        .removeClass("future")
      ;
      var hour = parseInt($(this).attr("id").split("hour")[1]);
      if (hour < moment().hour()) {
        $(this).addClass("past");
      } else if (hour === moment().hour()) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }


  // # Initialise the webpage
  // ## Set the clock to the current time:
  $("#currentDay").text(moment().format("hh:mm A, dddd Do MMMM"));

  // ## After 1s, and every second thereafter, update the current time and detect if the correct colours are displayed (which will take effect if the current hour changes):
  $(setInterval(function () {
    $("#currentDay").text(moment().format("hh:mm A, dddd Do MMMM"));
    var prevColours;
    if (prevColours !== moment().hour()) {
      colours();
      prevColours = moment().hour();
    }
  }
  , 1000));

  // ## Generate HTML for the Time-Blocks, and load any data from local storage:
  for (var i = start; i < end; i++) {
    $(".container").append($("<div class='row time-block' id='hour" + i + "'></div>"));
    $("#hour" + i)
      .append($("<div class='col-md-1 col-2 hour'>" + moment().startOf("day").add(i, "hours").format("h A") + "</div>"))
      .append($("<textarea class='col-md-10 col-8 description id='text" + i + "'></textarea>"))
      .append($("<button class='col-md-1 col-2 btn saveBtn'><i class='fas fa-save'></i></button>"))
    ;
    $("#hour" + i + " .description").val(localStorage.getItem("hour" + i));
  }

  // ## Add styling to Time-Blocks and a footer:
  colours();
  $(".hour").css(
    {
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
    }
  );
  $("body").append($("<footer></footer>"));
  $("footer").css(
    {
    "height": "40px",
    }
  );


  // # Buttons
  // ## Save Button group:
  $(".saveBtn").on("click", function () {
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val());
    sfxSave.play();
  });
});