function runDateTime() {
  let currentDate = new Date();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'
  ];
  let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let wd = weekDays[currentDate.getDay()];
  let dd = currentDate.getDate();
  let mm = months[currentDate.getMonth()];
  let yy = currentDate.getFullYear();
  let hrs = currentDate.getHours();
  let min = currentDate.getMinutes();
  let sec = currentDate.getSeconds();
  let md = 'PM';

  if (hrs < 12 || hrs == 0) {
    md = 'AM'
  }
  if (hrs > 12) {
    hrs -= 12;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  if (min < 10) {
    min = '0' + min;
  }
  /* if (hrs < 10) {
    hrs = '0' + hrs;
  }*/


  document.getElementById('showDate').innerHTML = wd + ', ' + dd + ' ' + mm + ' ' + yy;

  document.getElementById('showTime').innerHTML = hrs + ':' + min + ':' + sec + ' ' + md;

}
setInterval('runDateTime()', 1000);
