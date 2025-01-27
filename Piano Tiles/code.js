var blackbuttons = [];
var score = 0;
var numbuttons = randomNumber(0, 100);
for (var i = 1; i < numbuttons; i++) {
  var x;
  var random = randomNumber(1, 4);
  var randomcolor = randomNumber(1, 6);
  var moreprobability = randomNumber(1, 100);
  if (random==1) {
    x = 25;
  } else if (random==2) {
    x = 95;
  } else if ((random==3)) {
    x = 165;
  } else if ((random==4)) {
    x = 235;
  } else {
    
  }
  button(i.toString(), "");
  var y = i*-115 - 95;
  setPosition(i.toString(), x, y, 50, 105);
  if (moreprobability>20) {
    insertItem(blackbuttons, blackbuttons.length, i.toString());
    setProperty(i.toString(), "background-color", rgb(0, 0, 0));
  } else if ((randomcolor==2)) {
    setProperty(i.toString(), "background-color", rgb(255, 0, 0));
  } else if ((randomcolor==3)) {
    setProperty(i.toString(), "background-color", rgb(0, 255, 0));
  } else if ((randomcolor==4)) {
    setProperty(i.toString(), "background-color", rgb(255, 255, 0));
  } else if ((randomcolor==5)) {
    setProperty(i.toString(), "background-color", rgb(0, 0, 255));
  } else {
    setProperty(i.toString(), "background-color", rgb(0, 255, 255));
  }
}
timedLoop(60, function() {
  for (var i = 1; i < numbuttons; i++) {
    var x = getProperty(i.toString(), "x");
    var y = getProperty(i.toString(), "y");
    y = y+20;
    setPosition(i.toString(), x, y);
  }
});
onEvent("screen1", "click", function(event) {
  setText("text_area2", getProperty(event.srcElementId, "background-color"));
  randomsounds();
  if (getText("text_area2") == "rgb(0, 0, 0)") {
    setProperty(event.srcElementId, "background-color", rgb(0, 0, 0, 0.67));
    score = score+10;
    if (event.srcElementId!=blackbuttons[score/10-1]) {
      setScreen("screen2");
      stopTimedLoop();
      setText("text_area1", score);
    }
  } else {
    setScreen("screen2");
    stopTimedLoop();
    setText("text_area1", score);
  }
});
timedLoop(1000, function() {
  if (getYPosition((numbuttons-1).toString()) > 372) {
    setScreen("screen2");
    stopTimedLoop();
    setText("text_area1", score);
  }
});
function randomsounds() {
  var x = randomNumber(0, 5);
  if (x==0) {
    playSound("assets/category_instrumental/digital_music.mp3", false);
  } else if (x==1) {
    playSound("assets/category_instrumental/digital_music_2.mp3", false);
  } else if (x==2) {
    playSound("assets/category_instrumental/digital_upscale.mp3", false);
  } else if (x==3) {
    playSound("assets/category_instrumental/harpe_downscale_1.mp3", false);
  } else if (x==4) {
    playSound("assets/category_instrumental/harpe_downscale_2.mp3", false);
  } else {
    playSound("assets/category_instrumental/harpe_music_1.mp3", false);
  }
}
