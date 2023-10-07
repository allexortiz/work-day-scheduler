//target containter <div>
var containerEl = $('.container');
//target <p> element for currentDay to display
var currentDayEl = $('#currentDay');
// //target <p> element for currentTime to display
// var currentTimeEl = $('#currentTime');
 //target <p> element for currentDay to display
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  //target container <div>
  currentDayEl.text(currentDate);
  // //target <p> element for currentTime to display
  // var currentTime = dayjs().format("hh:mm:ss A");
  //   //target container <div>
  // currentTimeEl.text(currentTime);

$(function () {
 
  var currentHour = dayjs().format('H');
// this funtion changes the color of the time block based on the current time
  function hourlyColor() {
    $('.time-block').each(function() {
      var blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < currentHour);
      $(this).toggleClass('present', blockHour === currentHour);
      $(this).toggleClass('future', blockHour > currentHour);
    });
  }
  // this function will save text to the local storaged when the button is clicked
  function textEntry() {
    $('.saveBtn').on('click', function () {
      var key = $(this).parent().attr('id');
      var value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }
  // this function will update the color of each timeblock based on the current time
  function updateColor() {
    var currentHour = parseInt(dayjs().format('H'));
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }
// this will retrieve what was saved to localStorage and display it in the time block upon saving and refreshing
  $('.time-block').each(function() {
    var key = $(this).attr('id');
    var value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });
// calls all three functions to happen at once.
  hourlyColor();
  textEntry();
  updateColor();
});
