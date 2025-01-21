var numberofscreens = 116;
var rotateleft;
var rotateright;
rotateleft = true;
function prev(event) {
  if (rotateright) {
    rotateright = false;
  }
  if (rotateleft) {
    setScreen("screen"+numberofscreens);
    rotateleft = false;
    rotateright = true;
  } else {
    setScreen("screen"+(eval(event.currentTargetId.substring(6, (event.currentTargetId).length))+-1));
  }
  if (eval(event.currentTargetId.substring(6, (event.currentTargetId).length))+-1 == 1) {
    rotateleft = true;
  }
}
function next(event) {
  if (rotateleft) {
    rotateleft = false;
  }
  if (rotateright) {
    setScreen("screen1");
    rotateright = false;
    rotateleft = true;
  } else {
    setScreen("screen"+(eval(event.currentTargetId.substring(6, event.currentTargetId.length))+1));
  }
  if (eval(event.currentTargetId.substring(6, (event.currentTargetId).length))+1 == numberofscreens) {
    rotateright = true;
  }
}
for (var i = 1; i < numberofscreens+1; i++) {
  onEvent("screen"+i, "keydown", function(event) {
    if (event.key=="Left") {
      prev(event);
    } else if (event.key=="Right") {
      next(event);
    }
  });
  onEvent("screen"+i, "click", function(event) {
    if (event.x<160) {
      prev(event);
    } else if (event.x>160) {
      next(event);
    }
  });
}
