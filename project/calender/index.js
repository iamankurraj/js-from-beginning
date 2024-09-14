const date = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekdayName = weekdays[date.getDay()];
const dateDisplay = date.toLocaleDateString('en-GB');

document.getElementsByClassName('box1')[0].innerHTML = dateDisplay;
document.getElementsByClassName('box2')[0].innerHTML = weekdayName;

