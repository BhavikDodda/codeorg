// 
var height = 10;
var BOARD= [["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"],
            ["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"],
            ["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"],
            ["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"],
            ["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"],
            ["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"],
            ["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"],
            ["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"],
            ["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"],
            (["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"]),
            (["ff0","ff0","ff0","ff0","ff0","ff0","ff0","ff0"])];
createCanvas("drawingboard", 320, 450);
setActiveCanvas("drawingboard");
DRAW_BOARD(BOARD);
function DRAW_BOARD(value) {
  for (var i = 1; i < 9; i++) {
    for (var j = 1; j < height+1; j++) {
      var color = getColor((value[(j-1)])[(i-1)]);
      setFillColor(color);
      rect((i-1)*40+2, (j-1)*40+2, 35, 35);
    }
  }
  function getColor(n) {
    if (n.includes("c:")) {
      return (n.substring(2, n.length-0));
    } else {
      return ("#"+n);
    }
  }
}
//randomize Board
var colors = ["c:red", "c:green", "c:blue", "c:yellow", "c:orange", "c:pink"];
for (var k = 0; k < 11; k++) {
  for (var m = 0; m < 8; m++) {
    (BOARD[k])[m] = colors[(randomNumber(0, 5))];
  }
}
DRAW_BOARD(BOARD);
// 
var currentcolor = "";
var color_keydown_array = ["r","g","b","y","o","p"];
onEvent("screen1", "keydown", function(event) {
  if (color_keydown_array.toString().includes(event.key)) {
    currentcolor = colors[(color_keydown_array.indexOf(event.key))];
    DRAW_BOARD(updateBOARD(currentcolor));
  }
});
function updateBOARD(color) {
  var Board_temp = maketemporaryBoard(BOARD);
  // 
  var continue_ = true;
  var pastBlockcolor = BOARD[0][0];
  colorBoardPosition([0,0], color);
  var sameColoredLibertyList = [[0,0]];
  var X = 0;
  // 
  updateOptionBoard();
  while (continue_) {
    continue_ = false;
    // 
    var the_liberties = getLiberties(sameColoredLibertyList[X]);
    for (var j = 0; j < 4; j++) {
      var one_of_the_liberties = the_liberties[j];
      if (one_of_the_liberties[0] !== null && (Board_temp[(one_of_the_liberties[1])])[(one_of_the_liberties[0])] == pastBlockcolor) {
        BOARD[(one_of_the_liberties[1])][(one_of_the_liberties[0])] = color;
        if (JSON.stringify(sameColoredLibertyList).includes(JSON.stringify(one_of_the_liberties))) {
          
        } else {
          continue_ = true;
          appendItem(sameColoredLibertyList, one_of_the_liberties);
        }
      }
    }
    X = X+1;
    if (X<sameColoredLibertyList.length) {
      continue_ = true;
    }
  }
  return BOARD;
}
function maketemporaryBoard(array) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    appendItem(answer, array[i]);
  }
  return answer;
}
function colorBoardPosition(position, thecolor) {
  BOARD[position[1]][position[0]] = thecolor;
}
function getLiberties(arrayPosition) {
  //right
  var Pos1 = [(arrayPosition[0]+1), (arrayPosition[1]+0)];
  //left
  var Pos2 = [(arrayPosition[0]+-1), (arrayPosition[1]+0)];
  //down
  var Pos3 = [(arrayPosition[0]+0), (arrayPosition[1]+1)];
  //up
  var Pos4 = [(arrayPosition[0]+0), (arrayPosition[1]+-1)];
  //if position on the left side
  if (arrayPosition[0]==0) {
    Pos2 = [null,null];
  }
  //if position on the right side
  if (arrayPosition[0]==7) {
    Pos1 = [null,null];
  }
  //if position on the top side
  if (arrayPosition[1]==0) {
    Pos4 = [null,null];
  }
  //if position on the bottom side
  if (arrayPosition[1]==10) {
    Pos3 = [null,null];
  }
  //return [right,left,down,up]
  return [Pos1,Pos2,Pos3,Pos4];
}
//options menu
var max = 20;
for (var l = 2; l < 8; l++) {
  setStyle("button"+l, "border-radius:5px; border-width: 5px; border-style: solid; border-color: black;");
}
onEvent("screen1", "click", function(event) {
  if (event.srcElementId.includes("button")) {
    var the_button = event.srcElementId.substring(6, event.srcElementId.length-0);
    currentcolor = colors[the_button-2];
    DRAW_BOARD(updateBOARD(currentcolor));
  }
});
var moves = 0;
onEvent("Popleft", "click", function(event) {
  if (getXPosition("Popleft") == 160) {
    setStyle("Popleft", "transition: left 1s; left:280px");
    setStyle("clicks", "transition: left 1s; left:320px");
    setStyle("text_area2", "transition: left 1s; left:275px");
    setProperty("Popleft", "image", "icon://fa-caret-left");
  } else {
    setStyle("Popleft", "transition: left 1s; left:160px");
    setStyle("clicks", "transition: left 1s; left:200px");
    setStyle("text_area2", "transition: left 1s; left:155px");
    setProperty("Popleft", "image", "icon://fa-caret-right");
  }
});
function updateOptionBoard() {
  moves = moves+1;
  setText("clicks", "Clicks: "+moves);
}
