var y = randomNumber(1, 16);
var x = randomNumber(1, 16);
var z;
var arrayafter;

while ((x==y)) {
  y = randomNumber(1, 16);
  x = randomNumber(1, 16);
}
setNumber("text_area"+x, 1);
setNumber("text_area"+y, 1);
var arraybefore = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
arraybefore = arraybefore.toString();
function checkiffull() {
  if ((((getText("text_area1")!==""&& getText("text_area2")!=="") && (getText("text_area3")!=="" && getText("text_area4")!=="")) && ((getText("text_area5")!=="" && getText("text_area6")!=="") && (getText("text_area7")!=="" && getText("text_area8")!==""))) && (((getText("text_area9")!=="" && getText("text_area10")!=="") && (getText("text_area11")!=="" && getText("text_area12")!=="")) && ((getText("text_area13")!=="" && getText("text_area14")!=="") && (getText("text_area15")!=="" && getText("text_area16")!=="")))) {
    setScreen("gameover");
  }
}
function displaynewnum() {
  z = randomNumber(1, 16);
  while ((getText("text_area"+z) !== "")) {
    z = randomNumber(1, 16);
  }
}
function down(id) {
  if (id==="text_area1") {
    return "text_area5";
  }
  if (id==="text_area5") {
    return "text_area9";
  }
  if (id==="text_area9") {
    return "text_area13";
  }
  if (id==="text_area2") {
    return "text_area6";
  }
  if (id==="text_area6") {
    return "text_area10";
  }
  if (id==="text_area10") {
    return "text_area14";
  }
  if (id==="text_area3") {
    return "text_area7";
  }
  if (id==="text_area7") {
    return "text_area11";
  }
  if (id==="text_area11") {
    return "text_area15";
  }
  if (id==="text_area4") {
    return "text_area8";
  }
  if (id==="text_area8") {
    return "text_area12";
  }
  if (id==="text_area12") {
    return "text_area16";
  }
}
function eventdown(num1, num2, num3, num4) {
  for (var i = 0; i < 4; i++) {
    if (getText("text_area"+num1)==="") {
      
    } else {
      if (getText("text_area"+num2)==="") {
        setText(down("text_area"+num1), getText("text_area"+num1));
        setText("text_area"+num1, "");
      }
    }
    if (getText("text_area"+num2)==="") {
      
    } else {
      if (getText("text_area"+num3)==="") {
        setText(down("text_area"+num2), getText("text_area"+num2));
        setText("text_area"+num2, "");
      }
    }
    if (getText("text_area"+num3)==="") {
      
    } else {
      if (getText("text_area"+num4)==="") {
        setText(down("text_area"+num3), getText("text_area"+num3));
        setText("text_area"+num3, "");
      }
    }
  }
}
function checkdown() {
  
  for (var i = 1; i<13; i++) {
    if ((getText("text_area"+i) && getText(down("text_area"+i))) !== "") {
        if (checkiffibonacci(absofdifference(getNumber("text_area"+i), getNumber(down("text_area"+i))))) {
          setText("text_area"+i, getNumber("text_area"+i) + getNumber(down("text_area"+i)));
          setText(down("text_area"+i), "");
        }
      }
  }
    
    
  }

// 
function left(id) {
  if (id==="text_area4") {
    return "text_area3";
  }
  if (id==="text_area3") {
    return "text_area2";
  }
  if (id==="text_area2") {
    return "text_area1";
  }
  if (id==="text_area8") {
    return "text_area7";
  }
  if (id==="text_area7") {
    return "text_area6";
  }
  if (id==="text_area6") {
    return "text_area5";
  }
  if (id==="text_area12") {
    return "text_area11";
  }
  if (id==="text_area11") {
    return "text_area10";
  }
  if (id==="text_area10") {
    return "text_area9";
  }
  if (id==="text_area16") {
    return "text_area15";
  }
  if (id==="text_area15") {
    return "text_area14";
  }
  if (id==="text_area14") {
    return "text_area13";
  }
}
function eventleft(num1, num2, num3, num4) {
  for (var i = 0; i < 4; i++) {
    if (getText("text_area"+num1)==="") {
      
    } else {
      if (getText("text_area"+num2)==="") {
        setText(left("text_area"+num1), getText("text_area"+num1));
        setText("text_area"+num1, "");
      }
    }
    if (getText("text_area"+num2)==="") {
      
    } else {
      if (getText("text_area"+num3)==="") {
        setText(left("text_area"+num2), getText("text_area"+num2));
        setText("text_area"+num2, "");
      }
    }
    if (getText("text_area"+num3)==="") {
      
    } else {
      if (getText("text_area"+num4)==="") {
        setText(left("text_area"+num3), getText("text_area"+num3));
        setText("text_area"+num3, "");
      }
    }
  }
}
function checkleft() {
  for (var i = 1; i < 17; i++) {
    if (i==1||i==5||i==9||i==13) {
      
    } else {
      if ((getText("text_area"+i) && getText(left("text_area"+i))) !== "") {
          if (checkiffibonacci(absofdifference(getNumber("text_area"+i), getNumber(left("text_area"+i))))) {
            setText("text_area"+i, getNumber("text_area"+i) + getNumber(left("text_area"+i)));
            setText(left("text_area"+i), "");
          }
        }
    }
  }
  
    
    
  }

// 
function up(id) {
  if (id==="text_area13") {
    return "text_area9";
  }
  if (id==="text_area9") {
    return "text_area5";
  }
  if (id==="text_area5") {
    return "text_area1";
  }
  if (id==="text_area14") {
    return "text_area10";
  }
  if (id==="text_area10") {
    return "text_area6";
  }
  if (id==="text_area6") {
    return "text_area2";
  }
  if (id==="text_area15") {
    return "text_area11";
  }
  if (id==="text_area11") {
    return "text_area7";
  }
  if (id==="text_area7") {
    return "text_area3";
  }
  if (id==="text_area16") {
    return "text_area12";
  }
  if (id==="text_area12") {
    return "text_area8";
  }
  if (id==="text_area8") {
    return "text_area4";
  }
}
function eventup(num1, num2, num3, num4) {
  for (var i = 0; i < 4; i++) {
    if (getText("text_area"+num1)==="") {
      
    } else {
      if (getText("text_area"+num2)==="") {
        setText(up("text_area"+num1), getText("text_area"+num1));
        setText("text_area"+num1, "");
      }
    }
    if (getText("text_area"+num2)==="") {
      
    } else {
      if (getText("text_area"+num3)==="") {
        setText(up("text_area"+num2), getText("text_area"+num2));
        setText("text_area"+num2, "");
      }
    }
    if (getText("text_area"+num3)==="") {
      
    } else {
      if (getText("text_area"+num4)==="") {
        setText(up("text_area"+num3), getText("text_area"+num3));
        setText("text_area"+num3, "");
      }
    }
  }
}
function checkup() {
  for (var i = 1; i < 17; i++) {
    if (i==1||i==2||i==3||i==4) {
      
    } else {
      if ((getText("text_area"+i) && getText(up("text_area"+i))) !== "") {
          if (checkiffibonacci(absofdifference(getNumber("text_area"+i), getNumber(up("text_area"+i))))) {
            setText("text_area"+i, getNumber("text_area"+i) + getNumber(up("text_area"+i)));
            setText(up("text_area"+i), "");
          }
        }
    }
  }
  
  }

// 
function right(id) {
  if (id==="text_area1") {
    return "text_area2";
  }
  if (id==="text_area2") {
    return "text_area3";
  }
  if (id==="text_area3") {
    return "text_area4";
  }
  if (id==="text_area5") {
    return "text_area6";
  }
  if (id==="text_area6") {
    return "text_area7";
  }
  if (id==="text_area7") {
    return "text_area8";
  }
  if (id==="text_area9") {
    return "text_area10";
  }
  if (id==="text_area10") {
    return "text_area11";
  }
  if (id==="text_area11") {
    return "text_area12";
  }
  if (id==="text_area13") {
    return "text_area14";
  }
  if (id==="text_area14") {
    return "text_area15";
  }
  if (id==="text_area15") {
    return "text_area16";
  }
}
function eventright(num1, num2, num3, num4) {
  for (var i = 0; i < 4; i++) {
    if (getText("text_area"+num1)==="") {
      
    } else {
      if (getText("text_area"+num2)==="") {
        setText(right("text_area"+num1), getText("text_area"+num1));
        setText("text_area"+num1, "");
      }
    }
    if (getText("text_area"+num2)==="") {
      
    } else {
      if (getText("text_area"+num3)==="") {
        setText(right("text_area"+num2), getText("text_area"+num2));
        setText("text_area"+num2, "");
      }
    }
    if (getText("text_area"+num3)==="") {
      
    } else {
      if (getText("text_area"+num4)==="") {
        setText(right("text_area"+num3), getText("text_area"+num3));
        setText("text_area"+num3, "");
      }
    }
  }
}
function checkright() {

for (var i = 1; i < 17; i++) {
  if (i==4||i==8||i==12||i==16) {
    
  } else {
    if ((getText("text_area"+i) && getText(right("text_area"+i))) !== "") {
        if (checkiffibonacci(absofdifference(getNumber("text_area"+i), getNumber(right("text_area"+i))))) {
          setText("text_area"+i, getNumber("text_area"+i) + getNumber(right("text_area"+i)));
          setText(right("text_area"+i), "");
        }
      }
  }
}
    
  }

// 
onEvent("screen1", "keydown", function(event) {
  arraybefore = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
  arraybefore = arraybefore.toString();
  if (event.key=="Down") {
    for (var z1 = 0; z1 < 1; z1++) {
      eventdown(1, 5, 9, 13);
      eventdown(2, 6, 10, 14);
      eventdown(3, 7, 11, 15);
      eventdown(4, 8, 12, 16);
      checkdown();
      eventdown(1, 5, 9, 13);
      eventdown(2, 6, 10, 14);
      eventdown(3, 7, 11, 15);
      eventdown(4, 8, 12, 16);
    }
    checkiffull();
    arrayafter = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
    arrayafter = arrayafter.toString();
    if (arraybefore===arrayafter) {
      
    } else {
      displaynewnum();
      setNumber("text_area"+z, 1);
    }
  }
  if (event.key=="Left") {
    for (var z2 = 0; z2 < 1; z2++) {
      eventleft(4, 3, 2, 1);
      eventleft(8, 7, 6, 5);
      eventleft(12, 11, 10, 9);
      eventleft(16, 15, 14, 13);
      checkleft();
      eventleft(4, 3, 2, 1);
      eventleft(8, 7, 6, 5);
      eventleft(12, 11, 10, 9);
      eventleft(16, 15, 14, 13);
    }
    checkiffull();
    arrayafter = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
    arrayafter = arrayafter.toString();
    if (arraybefore===arrayafter) {
      
    } else {
      displaynewnum();
      setNumber("text_area"+z, 1);
    }
  }
  if (event.key=="Up") {
    for (var z3 = 0; z3 < 1; z3++) {
      eventup(13, 9, 5, 1);
      eventup(14, 10, 6, 2);
      eventup(15, 11, 7, 3);
      eventup(16, 12, 8, 4);
      checkup();
      eventup(13, 9, 5, 1);
      eventup(14, 10, 6, 2);
      eventup(15, 11, 7, 3);
      eventup(16, 12, 8, 4);
    }
    checkiffull();
    arrayafter = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
    arrayafter = arrayafter.toString();
    if (arraybefore===arrayafter) {
      
    } else {
      displaynewnum();
      setNumber("text_area"+z, 1);
    }
  }
  if (event.key=="Right") {
    for (var z4 = 0; z4 < 1; z4++) {
      eventright(1, 2, 3, 4);
      eventright(5, 6, 7, 8);
      eventright(9, 10, 11, 12);
      eventright(13, 14, 15, 16);
      checkright();
      eventright(1, 2, 3, 4);
      eventright(5, 6, 7, 8);
      eventright(9, 10, 11, 12);
      eventright(13, 14, 15, 16);
    }
    checkiffull();
    arrayafter = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
    arrayafter = arrayafter.toString();
    if (arraybefore===arrayafter) {
      
    } else {
      displaynewnum();
      setNumber("text_area"+z, 1);
    }
  }
  //set the color
  for (var color = 1; color <= 16; color++) {
    if (getText("text_area"+color) == "2") {
      setProperty("text_area"+color, "background-color", "#fdf9b0");
    } else if ((getText("text_area"+color) == "3")) {
      setProperty("text_area"+color, "background-color", "#cfc94a");
    } else if ((getText("text_area"+color) == "5")) {
      setProperty("text_area"+color, "background-color", "#ffcf55");
    } else if ((getText("text_area"+color) == "8")) {
      setProperty("text_area"+color, "background-color", "#ffa500");
    } else if ((getText("text_area"+color) == "13")) {
      setProperty("text_area"+color, "background-color", "rgba(255,97,0,0.73)");
    } else if ((getText("text_area"+color) == "21")) {
      setProperty("text_area"+color, "background-color", "#ff3900");
    } else if ((getText("text_area"+color) == "34")) {
      setProperty("text_area"+color, "background-color", "rgba(255,242,0,0.46)");
    } else if ((getText("text_area"+color) == "55")) {
      setProperty("text_area"+color, "background-color", "rgba(255,242,0,0.64)");
    } else if ((getText("text_area"+color) == "89")) {
      setProperty("text_area"+color, "background-color", "rgba(255,242,0,0.77)");
    } else if ((getText("text_area"+color) == "144")) {
      setProperty("text_area"+color, "background-color", "#3fff00");
    } else if ((getText("text_area"+color) == "233")) {
      setProperty("text_area"+color, "background-color", "#3c00ff");
    } else if ((getText("text_area"+color) == "377")) {
      setProperty("text_area"+color, "background-color", "#3c00ff");
    } else if ((getText("text_area"+color) == "610")) {
      setProperty("text_area"+color, "background-color", "#f33dec");
    } else if ((getText("text_area"+color) == "987")) {
      setProperty("text_area"+color, "background-color", "#da8a94");
    } else if ((getText("text_area"+color) == "1597")) {
      setProperty("text_area"+color, "background-color", "#00ff86");
    } else {
      setProperty("text_area"+color, "background-color", "#a5a5a5");
    }
  }
});
function checkiffibonacci(n) {
  var onecheck = 5*n*n+4;
  var twocheck = 5*n*n+-4;
  if (Math.sqrt(onecheck) == Math.round(Math.sqrt(onecheck)) || Math.sqrt(twocheck) == Math.round(Math.sqrt(twocheck))) {
    return true;
  } else {
    return false;
  }
}
function absofdifference(a, b) {
  if (checkiffibonacci(a+b)) {
    if (a==1&&b==1) {
      return 3;
    } else {
      return (Math.abs(a-b));
    }
  } else {
    return Math.abs(a+b);
  }
}
