function DecToBin(x) {
  return ((x >>> 0).toString(2));
}
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;

}
timedLoop(1000, function() {
  var date = new Date();
  var hour = date.getHours();
  var hour1 = Math.floor(hour/10);
  var hour2 = hour-hour1*10;
  var minute = date.getMinutes();
  var minute1 = Math.floor(minute/10);
  var minute2 = minute-minute1*10;
  var seconds = date.getSeconds();
  var seconds1 = Math.floor(seconds/10);
  var seconds2 = seconds-seconds1*10;
  seconds1 = pad(DecToBin(seconds1),3);
  seconds2 = pad(DecToBin(seconds2),4);
  minute1 = pad(DecToBin(minute1),3);
  minute2 = pad(DecToBin(minute2),4);
  hour1 = pad(DecToBin(hour1),2);
  hour2 = pad(DecToBin(hour2),4);
  UpdateCheckbox(seconds1, 's0');
  UpdateCheckbox(seconds2, 's1');
  UpdateCheckbox(minute1, 'm0');
  UpdateCheckbox(minute2, 'm1');
  UpdateCheckbox(hour1, 'h0');
  UpdateCheckbox(hour2, 'h1');
  setText("text_area1", ((hour+" : ")+minute)+" : "+seconds);
});
function UpdateCheckbox(thevariable, Code_) {
  for (var i = 0; i < thevariable.length; i++) {
    if (thevariable[i]=="1") {
      setProperty(Code_+(thevariable.length-i), "background-color", rgb(195, 255, 96));
    } else {
      setProperty(Code_+(thevariable.length-i), "background-color", rgb(195, 255, 96, 0));
    }
  }
}
