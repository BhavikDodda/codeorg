var isWhite = [];
var isitfirsttime = true;
var rowsinthisgame = 3;
var columnsinthisgame = 4;

function drawbuttons_rowscolumns(rows, columns) {
  var thebuttonid = 0;
  var rowsize = 450/rows;
  var columnsize = 320/columns;
  var y = rowsize*-1;
  for (var columnwise = 0; columnwise < rows; columnwise++) {
    y = y+rowsize;
    var x = columnsize*-1;
    for (var rowwise = 0; rowwise < columns; rowwise++) {
      x = x+columnsize;
      button("button"+thebuttonid, "");
      setPosition("button"+thebuttonid, x, y, columnsize-2, rowsize-2);
      thebuttonid = thebuttonid+1;
    }
  }
}
onEvent("Game", "click", function(event) {
  clicked(parseInt(event.srcElementId.substring(6, event.srcElementId.length-0)));
});
onEvent("resetGameButton", "click", function(event) {
  setScreen("StartScreen");
  isitfirsttime = false;
  isWhite = [];
});
onEvent("startButton", "click", function(event) {
  setScreen("Game");
  if (isitfirsttime===true) {
    rowsinthisgame = getNumber("text_input1");
    columnsinthisgame = getNumber("text_input2");
    drawbuttons_rowscolumns(columnsinthisgame, rowsinthisgame);
  }
  for (var i = 0; i < rowsinthisgame*columnsinthisgame; i++) {
    setProperty("button"+i, "background-color", rgb(0, 0, 0, 1));
    insertItem(isWhite, isWhite.length, 0);
  }
});
function clicked(buttonId) {
  var WinOrNot = 1;
  if (buttonId-rowsinthisgame>=0) {
    changeColor(buttonId-rowsinthisgame);
  }
  if ((buttonId+rowsinthisgame)<=rowsinthisgame*columnsinthisgame-1) {
    changeColor(buttonId+rowsinthisgame);
  }
  if (buttonId%rowsinthisgame!=rowsinthisgame-1) {
    changeColor(buttonId+1);
  }
  if (buttonId%rowsinthisgame!==0) {
    changeColor(buttonId-1);
  }
  changeColor(buttonId);
  for (var i = 0; i < rowsinthisgame*columnsinthisgame && WinOrNot === 1; i++) {
    if (isWhite[i] != 1) {
      WinOrNot = 0;
    }
  }
  if (WinOrNot === 1){
    setScreen("winScreen");
  }
}
function changeColor(number) {
  if (getProperty("button"+number, "background-color")==="rgb(0, 0, 0)") {
    setProperty("button"+number, "background-color", rgb(255, 255, 255));
    isWhite[number] = 1;
  } else {
    setProperty("button"+number, "background-color", rgb(0, 0, 0, 1));
    isWhite[number] = 0;
  }
}
