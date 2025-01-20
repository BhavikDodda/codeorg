var defaultBtnColor = "#3281ff";
var selectedBtnColor = "#0d3b84";
var boardCoords = new Array(7);
var initialCoordsX = 28;
var xDiff = 44;
var initialCoordsY = 121;
var yDiff = 39;
var dotSize = 17.5;
var turnCount = 0;
var xLoc = 0;
var yLoc = 0;
var ScorePl1 =0 ;
var ScorePl2 =0 ;
resetUI();
buildBoardCoords();
function buildBoardCoords(){
  //sets up turtle
  hide();
  penUp();
  //creates the 2d array
  for(var i = 0; i < boardCoords.length; i++){
    for(var k = 0; k < 6; k++){
      boardCoords[i] = new Array(6);
    }
  }
  fillWhite();
}
function fillWhite(){
  //fills the array with all 'white'
  for(var i = 0; i < boardCoords.length; i++){
    for(var k = 0; k < boardCoords[i].length; k++){
      boardCoords[i][k] = "white";
    }
  }
}
function resetUI(){
  setText("winnerAnnounceLbl", "");
  setProperty("playerTurnLbl", "background-color" , selectedBtnColor);
  penColor("#96c257");
  dot(1000);
}
function changeTurn(){
  if(turnCount%2 == 0){
    setProperty("playerTurnLbl", "background-color" , defaultBtnColor);
    setProperty("otherTurnLbl", "background-color" , selectedBtnColor);
  }
  else { 
    setProperty("otherTurnLbl", "background-color" , defaultBtnColor);
    setProperty("playerTurnLbl", "background-color" , selectedBtnColor);
  }
  turnCount++;
}
function checkTurn(){
  if(turnCount%2 == 0){
    return "yellow";
  }
  else { 
    return "red";
  }
}
function checkColumn(x){
  if(x > 0 && x < 50){
    xLoc = 0;
  }
  else if(x > 49 && x < 96){
    xLoc = 1;
  }
  else if(x > 95 && x < 138){
    xLoc = 2;
  }
  else if(x > 137 && x < 183){
    xLoc = 3;
  }
  else if(x > 182 && x < 226){
    xLoc = 4;
  }
  else if(x > 225 && x < 268){
    xLoc = 5;
  }
  else if(x > 267 ){
    xLoc = 6;
  }
}
function checkRow(x){
  if(boardCoords[x][5] == "white"){
    boardCoords[x][5] = checkTurn();
    return yLoc = 5;
  } 
  else if(boardCoords[x][4] == "white"){
    boardCoords[x][4] = checkTurn();
    return yLoc = 4;
  }
  else if(boardCoords[x][3] == "white"){
    boardCoords[x][3] = checkTurn();
    return yLoc = 3;
  }
  else if(boardCoords[x][2] == "white"){
    boardCoords[x][2] = checkTurn();
    return yLoc = 2;
  }
  else if(boardCoords[x][1] == "white"){
    boardCoords[x][1] = checkTurn();
    return yLoc = 1;
  }
  else if(boardCoords[x][0] == "white"){
    boardCoords[x][0] = checkTurn();
    return yLoc = 0;
  }
  else{
    return false;
  }
}
function rightThree(temp){
  //checks if three identical to the right
  if(boardCoords[xLoc+1][yLoc] == temp && boardCoords[xLoc+2][yLoc] == temp && boardCoords[xLoc+3][yLoc] == temp){
    return true;
  }
  return false;
}
function leftThree(temp){
  //checks if three identical to the left
  if(boardCoords[xLoc-1][yLoc] == temp && boardCoords[xLoc-2][yLoc] == temp && boardCoords[xLoc-3][yLoc] == temp){
    return true;
  }
  return false;
}
function leftOneRightTwo(temp){
  //checks if one left and two right are identical
  if(boardCoords[xLoc-1][yLoc] == temp && boardCoords[xLoc+1][yLoc] == temp && boardCoords[xLoc+2][yLoc] == temp){
    return true;
  }
  return false;
}
function rightOneLeftTwo(temp){
  //checks if one right and two left are identical
  if(boardCoords[xLoc-1][yLoc] == temp && boardCoords[xLoc-2][yLoc] == temp && boardCoords[xLoc+1][yLoc] == temp){
    return true;
  }
  return false;
}
function checkHorizontalWin(temp){
if(xLoc == 0){
    if(rightThree(temp)){
      return true;
    }
  }
  else if(xLoc == 1){
    if(rightThree(temp)){
      return true;
    }
    else if(leftOneRightTwo(temp)){
      return true;
    }
  }
  if(xLoc == 3){
    if(rightThree(temp)){
      return true;
    }
    else if(leftThree(temp)){
      return true;
    }
  }
  //checks xLoc 2-4 for winning moves
  else if(xLoc >= 2 && xLoc <= 4){
    if(leftOneRightTwo(temp)){
      return true;
    }
    else if(rightOneLeftTwo(temp)){
      return true;
    }
    else if(xLoc <= 3){
      if(rightThree(temp)){
        return true;
      }
    }
    else if(xLoc >= 3){
      if(leftThree(temp)){
        return true;
      }
    }
  }
  else if(xLoc == 5){
    if(rightOneLeftTwo(temp)){
      return true;
    }
    else if(leftThree(temp)){
      return true;
    }
  }
  else if(xLoc == 6){
    if(leftThree(temp)){
      return true;
    }
  }
  return false;
}
function checkWin(){
  var temp = checkTurn();
  //checks horizontal wins
  if(checkHorizontalWin(temp)){
    console.log("horizontal");
    return temp;
  }
  //checks vertical wins
  if(yLoc < 3){
    if((boardCoords[xLoc])[yLoc+1] == temp && boardCoords[xLoc][yLoc+2] == temp && boardCoords[xLoc][yLoc+3] == temp){
      console.log("vertical");
      return temp;
    }
  }
  //checks diagonal wins
  if(isDiagonal(temp)){
    console.log("diagonal");
    return temp;
  }
  return "white";
}
function isDiagonal(temp) {
  if (yLoc<3) {
    if (xLoc<4) {
      if((boardCoords[xLoc+1])[yLoc+1] == temp && (boardCoords[xLoc+2])[yLoc+2] == temp && (boardCoords[xLoc+3])[yLoc+3] == temp){
        return true;
      }
    }
    if (xLoc>2) {
      if((boardCoords[xLoc-1])[yLoc+1] == temp && (boardCoords[xLoc-2])[yLoc+2] == temp && (boardCoords[xLoc-3])[yLoc+3] == temp){
        return true;
      }
    }
  }
  return false;
}
function downLeft(x, y){
  var player = checkTurn();
  if(boardCoords[x][y] == player && boardCoords[x-1][y+1] == player && boardCoords[x-2][y+2] == player && boardCoords[x-3][y+3] == player){
    return true;
  }
  return false;
}
function upLeft(x, y){
  var player = checkTurn();
  if(boardCoords[x][y] == player && boardCoords[x-1][y-1] == player && boardCoords[x-2][y-2] == player && boardCoords[x-3][y-3] == player){
    return true;
  }
  return false;
}
function upRight(x, y){
  var player = checkTurn();
  if(boardCoords[x][y] == player && boardCoords[x+1][y-1] == player && boardCoords[x+2][y-2] == player && boardCoords[x+3][y-3] == player){
    return true;
  }
  return false;
}
function downRight(x, y){
  var player = checkTurn();
  if(boardCoords[x][y] == player && boardCoords[x+1][y+1] == player && boardCoords[x+2][y+2] == player && boardCoords[x+3][y+3] == player){
    return true;
  }
  return false;
}

onEvent("boardIMG", "click", function(event) {
  if (!boardCoords.toString().includes("white")) {
    if (ScorePl1==ScorePl2) {
      setText("winnerAnnounceLbl", "It is a tie!");
    } else if (ScorePl1>ScorePl2) {
      setText("winnerAnnounceLbl", "Player 1 has won!");
    } else {
      setText("winnerAnnounceLbl", "Player 2 has won!");
    }
  }
  checkColumn(event.clientX);
  if(checkRow(xLoc) !== false){
    //properly sets y location
    var tempX = initialCoordsX + (xLoc*xDiff);
    var tempY;
    if(yLoc > 0){
      tempY = initialCoordsY + (yLoc*yDiff);
    }
    else {
      tempY = initialCoordsY;
    }
    penColor(boardCoords[xLoc][yLoc]);
    moveTo(tempX, tempY);
    dot(dotSize);
    
    if(checkWin() != "white"){
    var MoveWinner = checkWin();
    if (MoveWinner=="red") {
      ScorePl2 = ScorePl2+1;
    }
    if (MoveWinner=="yellow") {
      ScorePl1 = ScorePl1+1;
    }
    setText("text_area1_C4", "Score: "+ScorePl1);
    setText("text_area2_C4", "Score: "+ScorePl2);
    }
    changeTurn();
  }
});
