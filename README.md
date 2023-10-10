## Work Day Scheduler

## User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am-5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Description
I have created a work day scheduler that will allow you to record appointments in a work hour time block, save them to the localStorage upon hitting the save button, and then keep them displayed when you refresh the page. Past appointments will be displayed in grey, current appointments will be displayed in red, and future appointments will be displayed in green.

## Images
![first half of page](<assets/images/first half.png>)
![second half of page](<assets/images/second half.png>)

## Links

github repository: https://github.com/allexortiz/work-day-scheduler

website: https://allexortiz.github.io/work-day-scheduler/