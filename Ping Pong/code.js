var lives;
var score;
var xSpeed;
var ySpeed;
var ballX;
var ballY;
var ballDiameter = 26;
var paddleSpeed;
var paddleX;
var paddleY = 425;
var paddleWidth = 90;
var paddleHeight = 24;
var coinX;
var coinY = 65;
var coinDiameter = 50;
var moveLeft;
var moveRight;
var isReset;
var canBounce;
onEvent("startbutton", "click", function(event) {
  setScreen("game");
  lives = 3;
  score = 0;
  reset();
  timedLoop(17, update);
});
onEvent("game", "keydown", function(event) {
  if (event.key == "Left") {
    moveLeft = true;
  } else if (event.key == "Right") {
    moveRight = true;
  }
});
onEvent("game", "keyup", function(event) {
  if (event.key == "Left") {
    moveLeft = false;
  } else if (event.key == "Right") {
    moveRight = false;
  }
});
onEvent("game", "keypress", function(event) {
  if (event.key == " " && isReset) {
    startGame();
    hideElement("label5");
  }
});
onEvent("playagain", "click", function(event) {
  setScreen("Start");
});
function update() {
  movePaddle();
  checkBounce();
  collectCoin();
  ballX += xSpeed;
  ballY += ySpeed;
  paddleX += paddleSpeed;
  // update positions of everything:
  setText("score", score);
  setText("lives", lives);
  setPosition("ball", ballX, ballY);
  setPosition("paddle", paddleX, paddleY);
  setPosition("coin", coinX, coinY);
}
function checkBounce() {
  if (ballX + ballDiameter > 320 || ballX < 0) {
    xSpeed = -xSpeed;
  } else if (ballY < 0 && !canBounce) {
    ySpeed = -ySpeed;
    canBounce = true;
  }
  if (checkCollision(ballX, ballY, ballDiameter, ballDiameter, paddleX, paddleY, paddleHeight, paddleWidth) && canBounce) {
    canBounce = false;
    ySpeed = -ySpeed;
  }
  if (ballY + ballDiameter > 450) {
    lives = lives - 1;
    reset();
  }
}
function movePaddle() {
  if (moveLeft && !moveRight && paddleX > 0) {
    paddleSpeed = -5;
  }
  else if (moveRight && !moveLeft && paddleX + paddleWidth < 320) {
    paddleSpeed = 5;
  }
  else {
    paddleSpeed = 0;
  }
}
function collectCoin() {
  if (checkCollision(ballX, ballY, ballDiameter, ballDiameter, coinX, coinY, coinDiameter, coinDiameter)) {
    score++;
    playSound("assets/hitsound.mp3");
    coinX = 500; // move the coin off screen for a while once it gets hit
    // increase speed of the ball every time a coin is collected:
    if (ySpeed < 0 && ySpeed > -15) {
      ySpeed--;
    }
    else if (ySpeed > 0 && ySpeed < 15) {
      ySpeed++;
    }
    if (xSpeed < 0 && xSpeed > -15) {
      xSpeed--;
    }
    else if (xSpeed > 0 && xSpeed < 15) {
      xSpeed++;
    }
    setTimeout(function() {
      coinX = randomNumber(0, 320-coinDiameter);
    }, 1500);
  }
}
function reset() {
  xSpeed = 0;
  ySpeed = 0;
  paddleSpeed = 0;
  moveLeft = false;
  moveRight = false;
  isReset = true;
  showElement("startText");
  showElement("label5");
  ballX = 147;
  ballY = 212;
  paddleX = 115;
  coinX = 135;
  canBounce = true;
  if (lives == 0) {
    endGame();
  }
}
function startGame() {
  hideElement("startText");
  while (xSpeed === 0) { // make sure starting xSpeed can't be zero
    xSpeed = randomNumber(-5,5);
  }
  ySpeed = randomNumber(3, 5);
  isReset = false;
}
function endGame() {
  stopTimedLoop();
  setText("finalscore", score);
  setScreen("gameover");
}
function checkCollision(x1, y1, h1, w1, x2, y2, h2, w2) {
  return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
}
