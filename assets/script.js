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
});
