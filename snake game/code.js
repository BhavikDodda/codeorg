var fps = 15;
var period = 1000 / fps;
var appleEaten = false;
var score = 0;
var gameOver = false;
var snakeHeadColor = "white";
var snakeBodyColor = "white";
var snake = new Snake();
var apple = new Apple();
var recentScores = [0,0,0,0,0];
var gamesPlayed = 0;
var pauseButton = false;
buttonEvents();
function playingGame(){
  setActiveCanvas("gameWindow");
  var gameLoop = setInterval(function() {
    update();
    render();
    if(gameOver === true){
      clearInterval(gameLoop);
      score = snake.total * 100;
      gamesPlayed++;
      setScreen("scoreScreen");
      scoreScreen();
    }
}, period);
  eventListener(gameLoop);
}

function update(){
if(gameOver !== true){
  snake.update();
  snake.death();
  if((snake.x >= (apple.x - apple.size)) && ((snake.x) <= (apple.x + apple.size))){
    if((snake.y >= (apple.y - apple.size)) && ((snake.y) <= (apple.y + apple.size))){
      apple.changePos();
      snake.total++;
      snake.appleEaten();
    }
  }else if(((snake.x + snake.size) <= (apple.x + apple.size)) && ((snake.x + snake.size) >= (apple.x - apple.size))){
    if( ((snake.y + snake.size) <= (apple.y + apple.size)) && ((snake.y + snake.size) >= (apple.y-apple.size)) ){
      apple.changePos();
      snake.total++;
      snake.appleEaten();
    }
  }
}
}
function render(){
 setFillColor("black");
 rect(0,0,320,450);
 
 snake.draw();
 apple.draw();
}
function Snake(){
  this. x = 320 / 2;
  this. y = 450 / 2;
  this.size = 10;
  this.xspeed = 1;
  this.yspeed = 0;
  this.direction = (0,1);
  this.speed = 0.5;
  this.total = 0;
  this.tail = [];
  this.update = function(){
    if(this.tail.length !== null){
      if(this.total === this.tail.length){
       for(var i = 0; i < this.tail.length-1;i++){
        this.tail[i] = this.tail[i+1];
      }
      }
      this.tail[this.total-1] = [this.x,this.y]; 
    }
    this.x += this.size * 2 * (this.xspeed * this.speed);
    this.y += this.size * 2 * (this.yspeed * this.speed);
    this.checkBoundaries();
  };
  this.draw = function(){
    setFillColor(snakeBodyColor);
    for(var i = 0; i < this.total;i++){
      rect(this.tail[i][0],this.tail[i][1],this.size,this.size);
    }
   setFillColor(snakeHeadColor);
    rect(this.x,this.y,this.size,this.size);
  };
  this.setDirection = function(bearing){
    if(bearing === "UP"){
      this.xspeed = 0;
      this.yspeed = -1;
    }else if(bearing === "DOWN"){
      this.xspeed = 0;
      this.yspeed = 1;
    }else if(bearing === "LEFT"){
      this.xspeed = -1;
      this.yspeed = 0;
    }else if(bearing === "RIGHT"){
      this.xspeed = 1;
      this.yspeed = 0;
    }else{
      console.log("Invalid Direction: ");
    }
  };
  this.checkBoundaries = function(){
    if(this.x > 320 || this.y > 450 || this.x < 0 || this.y < 0){
      gameOver = true;
    }
  };
  this.appleEaten  = function(){
    appendItem(this.tail,[this.x,this.y]);
  };
  this.death = function(){
    for(var i = 0; i < this.tail.length;i++){
      if(this.x >= this.tail[i][0] && this.x <= this.tail[i][0]){
        if(this.y >= this.tail[i][1] && this.y <= this.tail[i][1]){
          gameOver = true;
        }
      }
    }
  };
}

function Apple(){
  this.size = 10 / 2;
  this.x = randomNumber(this.size * 2,320 - this.size);
  this.y = randomNumber(this.size * 2,370-this.size);
  
  this.changePos = function(){
    this.x = randomNumber(this.size * 2,320 - this.size);
    this.y = randomNumber(this.size * 2,370-this.size);
  };
  
  this.draw = function(){
    setFillColor("red");
    circle(this.x, this.y, this.size);
  };
}

function eventListener(){
  onEvent("pauseButton", "click", function(){
  gameOver = true;
  pauseButton = true;
  setScreen("homeScreen");
  });
  
  onEvent("upArrow", "click", function(){
    snake.setDirection("UP");
  });
  
  onEvent("downArrow", "click", function(){
    snake.setDirection("DOWN");
  });
  onEvent("leftArrow", "click", function(){
    snake.setDirection("LEFT");
  });
  onEvent("rightArrow", "click", function(){
    snake.setDirection("RIGHT");
  });
  
  onEvent("gameScreen","keydown",function(event){
    snake.setDirection(event.key.toUpperCase());
  });
}


function resetGame(){
  setActiveCanvas("gameWindow");
  setFillColor("black");
  rect(0,0,320,450);
  gameOver = false;
  appleEaten = false;
  gameOver = false;
  snake. x = 320 / 2;
  snake. y = 450 / 2;
  snake.size = 10;
  snake.xspeed = 1;
  snake.yspeed = 0;
  snake.direction = (0,1);
  snake.speed = 0.5;
  snake.total = 0;
  snake.tail = [];
  
}

function buttonEvents(){
 onEvent("play_button", "click", function(){
    setScreen("gameScreen");
    playingGame();
  });
  onEvent("scores_buttons", "click", function(){
    setScreen("scoreScreen");
    scoreScreen();
  });
  onEvent("optionsButton", "click", function(){
    setScreen("optionsScreen");
    optionsScreen();
  });
}
function scoreScreen(){
  if(gameOver === true && pauseButton != true){
    setProperty("gameOverMessage", "hidden", false);
    recentScores[(gamesPlayed-1) % 5] = score;
    setProperty("score1","text","1    " + recentScores[0]);
    setProperty("score1","width",320);
    setProperty("score1","height",30);
    setProperty("score2","text","2    " + recentScores[1]);
    setProperty("score2","width",320);
    setProperty("score2","height",30);
    setProperty("score3","text","3    " + recentScores[2]);
    setProperty("score3","width",320);
    setProperty("score3","height",30);
    setProperty("score4","text","4    " + recentScores[3]);
    setProperty("score4","width",320);
    setProperty("score4","height",30);
    setProperty("score5","height",30);
    setProperty("score5","text","5    " + recentScores[4]);
    setProperty("score5","width",320);
    setProperty("score5","height",30);
  }
  resetGame();
  if(pauseButton === true){
    setScreen("homeScreen");
    pauseButton = false;
  }
  onEvent("back_button", "click", function(){
    setScreen("homeScreen");
  });
  setProperty("gameOverMessage", "hidden", true);
}
function optionsScreen(){
  var primaryColor = "";
  var secondaryColor = "";
  onEvent("back_Button2", "click", function(){
    setScreen("homeScreen");
  });
  onEvent("primaryColor_textBox","change",function(){
    primaryColor = getText("primaryColor_textBox");
    setProperty("gameBanner","background-color", primaryColor);
    setProperty("play_button","background-color",primaryColor);
    setProperty("scores_buttons","background-color",primaryColor);
    setProperty("optionsButton","background-color",primaryColor);
    setProperty("optionsBanner","background-color",primaryColor);
    setProperty("primaryColor_textBox","background-color",primaryColor);
    setProperty("secondaryColor_textBox","background-color",primaryColor);
    setProperty("snakeHead_textBox","background-color",primaryColor);
    setProperty("snakeBody_textBox","background-color",primaryColor);
    setProperty("scoresBanner","background-color",primaryColor);
    setProperty("score1","background-color",primaryColor);
    setProperty("score2","background-color",primaryColor);
    setProperty("score3","background-color",primaryColor);
    setProperty("score4","background-color",primaryColor);
    setProperty("score5","background-color",primaryColor);
  });
   onEvent("secondaryColor_textBox","change",function(){
    secondaryColor = getText("secondaryColor_textBox");
    setProperty("gameBanner","text-color", secondaryColor);
    setProperty("play_button","text-color",secondaryColor);
    setProperty("scores_buttons","text-color",secondaryColor);
    setProperty("optionsButton","text-color",secondaryColor);
    setProperty("optionsBanner","text-color",secondaryColor);
    setProperty("primaryColor_textBox","text-color",secondaryColor);
    setProperty("secondaryColor_textBox","text-color",secondaryColor);
    setProperty("snakeHead_textBox","text-color",secondaryColor);
    setProperty("snakeBody_textBox","text-color",secondaryColor);
    setProperty("scoresBanner","text-color",secondaryColor);
    setProperty("score1","text-color",secondaryColor);
    setProperty("score2","text-color",secondaryColor);
    setProperty("score3","text-color",secondaryColor);
    setProperty("score4","text-color",secondaryColor);
    setProperty("score5","text-color",secondaryColor);
    setProperty("primaryColor_label","text-color",secondaryColor);
    setProperty("secondaryColor_label","text-color",secondaryColor);
    setProperty("snakeHead_label","text-color",secondaryColor);
    setProperty("snakeBody_label","text-color",secondaryColor);
    setProperty("optionsHelp_label1","text-color",secondaryColor);
    setProperty("optionsHelp_label2","text-color",secondaryColor);
    setProperty("gameOverMessage","text-color",secondaryColor);
    
  });
   onEvent("snakeHead_textBox","change",function(){
     snakeHeadColor = getText("snakeHead_textBox");
  });
   onEvent("snakeBody_textBox","change",function(){
     snakeBodyColor = getText("snakeBody_textBox");
   
  });
}//optionsScreen
