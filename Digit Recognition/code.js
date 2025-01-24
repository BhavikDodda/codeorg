// 
var zero=[[0,1,1,1,0],
          [1,1,0,1,1],
          [1,0,-1,0,1],
          [1,0,-1,0,1],
          [1,0,-1,0,1],
          [1,0,-1,0,1],
          [1,0,-1,0,1],
          [1,1,0,1,1],
          [0,1,1,1,0]];
var  one=[[-1,0,1,0,-1],
          [-1,0,1,0,-1],
          [-1,0,1,0,-1],
          [-1,0,1,0,-1],
          [-1,0,1,0,-1],
          [-1,0,1,0,-1],
          [-1,0,1,0,-1],
          [-1,0,1,0,-1],
          [-1,0,1,0,-1]];
var  two=[[0,1,1,1,0],
          [1,1,0,1,1],
          [0,0,0,0,1],
          [-1,-1,0,1,1],
          [-1,-1,0,1,1],
          [-1,0,0,1,0],
          [0,0,1,1,0],
          [0,1,1,0,0],
          [1,1,1,1,1]];
var three=[[1,1,1,1,0],
          [1,0,0,1,1],
          [-1,-1,0,0,1],
          [0,0,0,1,1],
          [0,1,1,1,0],
          [0,0,0,1,1],
          [-1,-1,0,0,1],
          [1,0,0,1,1],
          [1,1,1,1,0]];
var fourA=[([1,0,-1,1,1]),
          ([1,0,-1,1,1]),
          ([1,0,-1,1,1]),
          [1,0,0,1,1],
          ([1,1,1,1,1]),
          ([0,0,0,1,1]),
          ([-1,-1,0,1,1]),
          [-1,-1,0,1,1],
          [-1,-1,0,1,1]];
var fourB=[([-1,-1,0,1,0]),
          [-1,0,1,1,0],
          [0,0,1,1,0],
          [0,1,1,1,0],
          [1,1,0,1,1],
          [1,1,1,1,1],
          [0,0,0,1,0],
          [-1,-1,0,1,0],
          [-1,-1,0,1,0]];
var five=[[1,1,1,1,1],
          [1,0,0,0,0],
          [1,0,0,0,0],
          [1,0,0,0,0],
          [1,1,1,1,1],
          [0,0,0,1,1],
          [-1,-1,-1,0,1],
          [0,0,0,1,1],
          [1,1,1,1,1]];
var six=[[-1,-1,1,1,1],
          [-1,1,1,0,0],
          [0,1,0,0,-1],
          [1,1,0,0,-1],
          [1,1,1,1,0],
          [1,1,0,1,1],
          [1,0,0,0,1],
          [1,1,0,1,1],
          [0,1,1,1,0]];
var A7=[[1,1,1,1,1],
          [0,0,0,1,1],
          [-1,-1,0,1,0],
          [-1,0,0,1,0],
          [-1,0,1,1,0],
          [-1,0,1,0,0],
          [-1,0,1,0,-1],
          [0,0,1,0,-1],
          [0,1,0,-1,-1]];
var B7=[[1,1,1,1,1],
          [0,0,0,1,1],
          [-1,-1,0,0,1],
          [-1,-1,0,0,1],
          [-1,-1,0,0,1],
          [-1,-1,0,0,1],
          [-1,-1,0,0,1],
          [-1,-1,0,0,1],
          [-1,-1,0,0,1]];
var eight=[[0,1,1,1,0],
          [1,1,0,1,1],
          [1,0,-1,0,1],
          [1,1,0,1,1],
          [0,1,1,1,0],
          [1,1,0,1,1],
          [1,0,-1,0,1],
          [1,1,0,1,1],
          [0,1,1,1,0]];
var nine=[[1,1,1,1,1],
          [1,0,-1,0,1],
          [1,0,0,0,1],
          [1,1,0,1,1],
          [0,1,1,1,1],
          [-1,0,0,0,1],
          [-1,0,0,1,1],
          [-1,0,1,1,0],
          [0,1,1,0,0]];
var digitTemplates = [one, two, three, fourA, fourB, five, six, A7, B7, eight, nine, zero];
function draw(array) {
  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k < array[i].length; k++) {
      penUp();
      if ((array[i])[k]==1) {
        penColor("white");
      }
      if ((array[i])[k]==0) {
        penColor("yellow");
      }
      if ((array[i])[k]==-1) {
        penColor("red");
      }
      moveTo(k*15+30, i*15+30);
      penDown();
      dot(5);
    }
  }
}
var movementXArray = [];
var movementYArray = [];
// 
penWidth(3);
penColor("white");
hide();
var shoulddraw = false;
onEvent("screen1", "mousedown", function(event1) {
  shoulddraw = true;
  penUp();
  moveTo(event1.x, event1.y);
  penDown();
  onEvent("screen1", "mousemove", function(event) {
    if(event.y<340){
      if (shoulddraw) {
        moveTo(event.x, event.y);
        appendItem(movementXArray, event.x);
        appendItem(movementYArray, event.y);
      }
    }
  });
});
onEvent("screen1", "mouseup", function(event) {
  shoulddraw = false;
});
onEvent("button1", "click", function(event) {
  movementXArray = [];
  movementYArray = [];
  penColor("black");
  moveTo(160, 450/2);
  dot(10000);
  penColor("white");
});
// 
onEvent("button2", "click", function(event) {
  var LeftRightUpAndDown = findBounds();
  var Dimentions = CalcDimentions(LeftRightUpAndDown);
  var Scanning = Scan(Dimentions);
  var Recognition = Process(Scanning);
  setText("text_area1", Recognition.toString());
});
function findBounds() {
  var rangeX = JSON.stringify(movementXArray);
  rangeX = rangeX.substring(1, rangeX.length-1);
  var rangeY = JSON.stringify(movementYArray);
  rangeY = rangeY.substring(1, rangeY.length-1);
  //[left,right]
  var X = [(eval(("Math.min("+rangeX)+")")),(eval(("Math.max("+rangeX)+")"))];
  //[up,down]
  var Y = [(eval(("Math.min("+rangeY)+")")),(eval(("Math.max("+rangeY)+")"))];
  return [X,Y];
}
function CalcDimentions(bounds) {
  //https://scratch.mit.edu/projects/1429540/#editor
  var left = bounds[0][0];
  var right = bounds[0][1];
  var top = (bounds[1])[0];
  var bottom = (bounds[1])[1];
  var CenterX = (left+right)/2;
  var CenterY = (top+bottom)/2;
  var Height = 1.1*(bottom-top);
  var Width = 1.1*(right-left);
  if (Width/Height<0.555) {
    Width = Height*0.555;
  }
  if (Height/Width<0.555) {
    Height = Width*0.555;
  }
  var GridWidth = Width/5;
  var GridHeight = Height/9;
  var GridSize;
  if (GridWidth<GridHeight) {
    GridSize = Math.round(GridWidth+0.5);
    GridHeight = GridHeight+(GridHeight-GridSize)/2;
  } else {
    GridSize = Math.round(GridHeight+0.5);
    GridWidth = GridWidth+(GridWidth-GridSize)/2;
  }
  return [CenterX,CenterY,GridWidth,GridHeight,GridSize];
}
function Scan(dimentions) {
  var CenterX = dimentions[0];
  var CenterY = dimentions[1];
  var GridWidth = dimentions[2];
  var GridHeight = dimentions[3];
  var GridSize = dimentions[4];
  var X = (CenterX-6.37)-2*GridWidth;
  var Y = CenterY-4*GridHeight;
  var ScanningArray = [];
  var row = 1;
  var col = 1;
  for (var k = 0; k < 45; k++) {
    setPosition("button3", X, Y, GridSize, GridSize);
    if (col==1) {
      appendItem(ScanningArray, []);
    }
    if (findColorWithinRange(X,Y,X+GridSize,Y+GridSize)) {
      appendItem(ScanningArray[ScanningArray.length-1], 1);
    } else {
      appendItem(ScanningArray[ScanningArray.length-1], 0);
    }
    if (col<5) {
      X = X+GridWidth;
      col = col+1;
    } else {
      X = (X)-4*GridWidth;
      Y = Y+GridHeight;
      col = 1;
      row = row+1;
    }
  }
  return ScanningArray;
}
function findColorWithinRange(x1, y1, x2, y2) {
  var FoundWithinRange = false;
  for (var k = 0; k < movementXArray.length&&FoundWithinRange===false; k++) {
    var X = movementXArray[k];
    var Y = (movementYArray)[k];
    if ((X+3>=x1 && (X-3)<=x2) && (Y+3>=y1 && (Y-3)<=y2)) {
      FoundWithinRange = true;
    }
  }
  return FoundWithinRange;
}
function Process(array) {
  var errorScore = [];
  var Digit_Corresponding = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 0];
  for (var i = 0; i < digitTemplates.length; i++) {
    var digit_template = digitTemplates[i];
    var Error = 0;
    for (var k = 0; k < digit_template.length; k++) {
      var column = digit_template[k];
      for (var l = 0; l < column.length; l++) {
        var TemplatePixel = column[l];
        var ScanningPixel = array[k][l];
        if (TemplatePixel===1&&ScanningPixel===0) {
          Error = Error+1;
        }
        if (ScanningPixel===1&&TemplatePixel===0) {
          Error = Error+1;
        }
        if (ScanningPixel===1&&TemplatePixel===-1) {
          Error = Error+10;
        }
      }
    }
    appendItem(errorScore, Error);
  }
  //interpret errorScore based on Digit_Corresponding
  //https://gist.github.com/ecarter/1423674
  function mapOrder (array, key) {
    
    array.sort( function (a, b) {
      var A = a[key], B = b[key];
      if (A > B) {
        return 1;
      } else {
        return -1;
      }
      
    });
    return array;
  }
  var item_array = [];
  var ordered_array;
  for (var o = 0; o < errorScore.length; o++) {
    appendItem(item_array, {errorCode:(errorScore[o]),num:(Digit_Corresponding[o])});
  }
  ordered_array = mapOrder(item_array, 'errorCode');
  for (var q = 0; q < ordered_array.length; q++) {
    ordered_array[q] = ordered_array[q].num;
  }
  //recognition of numbers in order; the first number in the array is the number that the code most interprets  the drawing to be.
  return ordered_array;
}
