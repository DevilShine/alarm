setInterval(function () {
  var day = ["Sundey", "Mondey", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var date = new Date;
  var dmy = date.toLocaleDateString();
  var day = day.slice(date.getDay(), date.getDay() + 1);
  var time2 = date.toLocaleTimeString();
  document.getElementById("alarm-time").innerHTML = time2 + " " + day + "</br>" + dmy;
}, 1000)

var alarm = document.querySelector("#set-an-alarm");

var re = /\D/g

alarm.addEventListener('click', function () {
  var minut = prompt('enter time "minute"');
  for (; ;) {
    if (minut < 0 || minut > 60 || re.test(minut)) {
      minut = prompt('error: enter time "minute"');
    } else {
      break
    }
  }
  var sec = prompt('enter time "seconds"');
  for (; ;) {
    if (sec < 0 || sec > 60 || re.test(sec)) {
      sec = prompt('error: enter time "seconds"');
    } else {
      break
    }
  }

  console.log(minut, sec)

  var date = new Date;
  var tame2 = date.toLocaleTimeString();
  var arrTime = tame2.split(':');
  var end = [+minut + +arrTime[1], +arrTime[2] + +sec];

  setInterval(function () {
    var date = new Date;
    var tame2 = date.toLocaleTimeString();
    var arrTime = tame2.split(':');
    if (arrTime[1] == end[0] && arrTime[2] == end[1]) {
      alert("Звонок");
    }
  }, 1000)
})