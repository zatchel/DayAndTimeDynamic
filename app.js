function getData() {
    let d = new Date();
  
    var time = new Date().toLocaleTimeString();
  
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    let day = weekday[d.getDay()];
  
    let dayDisplay = document.getElementById("dayText");
  
    let timeDisplay = document.getElementById("timeText");
  
    let timeOfDayDisplay = document.getElementById("timeOfDay");
  
    dayDisplay.textContent = day.toLowerCase();
    timeDisplay.textContent = time.toLowerCase();
  
    let timeNumbers = time.replace(/[^\d.-]/g, "");
  
    let amPm = time.replace(/[\d.-.:]/g, "").substring(1);
  
    let containerSelector = document.getElementById("container");
  
    let hour;
  
    if (timeNumbers.length === 6) {
      hour = parseInt(timeNumbers[0] + timeNumbers[1]);
    } else {
      hour = parseInt(timeNumbers[0]);
    }
    //********** TURN LIGHT ************
    let hourGreaterFive = hour > 5;
    let isPM = amPm == "PM";
    let isAM = amPm == "AM";
    let isNotTwelve = hour != 12;
  
    if (isAM && hourGreaterFive && isNotTwelve) {
      containerSelector.className = "containerMorning";
      dayDisplay.className = "dayDisplayMorning";
      timeDisplay.className = "timeDisplayMorning";
      timeOfDayDisplay.className = "timeOfDayMorning";
    }
  
    if ((isNotTwelve === false && isPM) || (isPM && hour < 7)){
      containerSelector.className = "containerAfternoon";
      dayDisplay.className = "dayDisplayAfternoon";
      timeDisplay.className = "timeDisplayAfternoon";
      timeOfDayDisplay.className = "timeOfDayAfternoon";
    }
  
  
    let timeOfDay = document.getElementById("timeOfDay");
    if (isAM && hourGreaterFive && isNotTwelve) {
      // let timeOfDay = document.getElementById("timeOfDay");
      timeOfDay.innerHTML = "(morning.)";
    } else if ((isPM && isNotTwelve === false) || (isPM && hour < 8)) {
      timeOfDay.innerHTML = "(afternoon.)";
    } else {
      timeOfDay.innerHTML = "(night.)";
    }
  }
  
  setInterval(getData, 999);
  
  