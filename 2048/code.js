var y = randomNumber(1, 16);
var x = randomNumber(1, 16);
var z;
var arrayafter;

while ((x==y)) {
  y = randomNumber(1, 16);
  x = randomNumber(1, 16);
}
setNumber("text_area"+x, 2);
setNumber("text_area"+y, 2);
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
  
    if ((getText("text_area1") && getText(down("text_area1"))) !== "") {
      if (getText("text_area1") == getText(down("text_area1"))) {
        setText(down("text_area1"), getText("text_area1") * 2);
        setText("text_area1", "");
      }
    }
    if ((getText("text_area2") && getText(down("text_area2"))) !== "") {
      if (getText("text_area2") == getText(down("text_area2"))) {
        setText(down("text_area2"), getText("text_area2") * 2);
        setText("text_area2", "");
      }
    }
    if ((getText("text_area3") && getText(down("text_area3"))) !== "") {
      if (getText("text_area3") == getText(down("text_area3"))) {
        setText(down("text_area3"), getText("text_area3") * 2);
        setText("text_area3", "");
      }
    }
    if ((getText("text_area4") && getText(down("text_area4"))) !== "") {
      if (getText("text_area4") == getText(down("text_area4"))) {
        setText(down("text_area4"), getText("text_area4") * 2);
        setText("text_area4", "");
      }
    }
    if ((getText("text_area5") && getText(down("text_area5"))) !== "") {
      if (getText("text_area5") == getText(down("text_area5"))) {
        setText(down("text_area5"), getText("text_area5") * 2);
        setText("text_area5", "");
      }
    }
    if ((getText("text_area6") && getText(down("text_area6"))) !== "") {
      if (getText("text_area6") == getText(down("text_area6"))) {
        setText(down("text_area6"), getText("text_area6") * 2);
        setText("text_area6", "");
      }
    }
    if ((getText("text_area7") && getText(down("text_area7"))) !== "") {
      if (getText("text_area7") == getText(down("text_area7"))) {
        setText(down("text_area7"), getText("text_area7") * 2);
        setText("text_area7", "");
      }
    }
    if ((getText("text_area8") && getText(down("text_area8"))) !== "") {
      if (getText("text_area8") == getText(down("text_area8"))) {
        setText(down("text_area8"), getText("text_area8") * 2);
        setText("text_area8", "");
      }
    }
    if ((getText("text_area9") && getText(down("text_area9"))) !== "") {
      if (getText("text_area9") == getText(down("text_area9"))) {
        setText(down("text_area9"), getText("text_area9") * 2);
        setText("text_area9", "");
      }
    }
    if ((getText("text_area10") && getText(down("text_area10"))) !== "") {
      if (getText("text_area10") == getText(down("text_area10"))) {
        setText(down("text_area10"), getText("text_area10") * 2);
        setText("text_area10", "");
      }
    }
    if ((getText("text_area11") && getText(down("text_area11"))) !== "") {
      if (getText("text_area11") == getText(down("text_area11"))) {
        setText(down("text_area11"), getText("text_area11") * 2);
        setText("text_area11", "");
      }
    }
    if ((getText("text_area12") && getText(down("text_area12"))) !== "") {
      if (getText("text_area12") == getText(down("text_area12"))) {
        setText(down("text_area12"), getText("text_area12") * 2);
        setText("text_area12", "");
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
  
    if ((getText("text_area16") && getText(left("text_area16"))) !== "") {
      if (getText("text_area16") == getText(left("text_area16"))) {
        setText(left("text_area16"), getText("text_area16") * 2);
        setText("text_area16", "");
      }
    }
    if ((getText("text_area2") && getText(left("text_area2"))) !== "") {
      if (getText("text_area2") == getText(left("text_area2"))) {
        setText(left("text_area2"), getText("text_area2") * 2);
        setText("text_area2", "");
      }
    }
    if ((getText("text_area3") && getText(left("text_area3"))) !== "") {
      if (getText("text_area3") == getText(left("text_area3"))) {
        setText(left("text_area3"), getText("text_area3") * 2);
        setText("text_area3", "");
      }
    }
    if ((getText("text_area4") && getText(left("text_area4"))) !== "") {
      if (getText("text_area4") == getText(left("text_area4"))) {
        setText(left("text_area4"), getText("text_area4") * 2);
        setText("text_area4", "");
      }
    }
    if ((getText("text_area15") && getText(left("text_area15"))) !== "") {
      if (getText("text_area15") == getText(left("text_area15"))) {
        setText(left("text_area15"), getText("text_area15") * 2);
        setText("text_area15", "");
      }
    }
    if ((getText("text_area6") && getText(left("text_area6"))) !== "") {
      if (getText("text_area6") == getText(left("text_area6"))) {
        setText(left("text_area6"), getText("text_area6") * 2);
        setText("text_area6", "");
      }
    }
    if ((getText("text_area7") && getText(left("text_area7"))) !== "") {
      if (getText("text_area7") == getText(left("text_area7"))) {
        setText(left("text_area7"), getText("text_area7") * 2);
        setText("text_area7", "");
      }
    }
    if ((getText("text_area8") && getText(left("text_area8"))) !== "") {
      if (getText("text_area8") == getText(left("text_area8"))) {
        setText(left("text_area8"), getText("text_area8") * 2);
        setText("text_area8", "");
      }
    }
    if ((getText("text_area14") && getText(left("text_area14"))) !== "") {
      if (getText("text_area14") == getText(left("text_area14"))) {
        setText(left("text_area14"), getText("text_area14") * 2);
        setText("text_area14", "");
      }
    }
    if ((getText("text_area10") && getText(left("text_area10"))) !== "") {
      if (getText("text_area10") == getText(left("text_area10"))) {
        setText(left("text_area10"), getText("text_area10") * 2);
        setText("text_area10", "");
      }
    }
    if ((getText("text_area11") && getText(left("text_area11"))) !== "") {
      if (getText("text_area11") == getText(left("text_area11"))) {
        setText(left("text_area11"), getText("text_area11") * 2);
        setText("text_area11", "");
      }
    }
    if ((getText("text_area12") && getText(left("text_area12"))) !== "") {
      if (getText("text_area12") == getText(left("text_area12"))) {
        setText(left("text_area12"), getText("text_area12") * 2);
        setText("text_area12", "");
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
  
    if ((getText("text_area16") && getText(up("text_area16"))) !== "") {
      if (getText("text_area16") == getText(up("text_area16"))) {
        setText(up("text_area16"), getText("text_area16") * 2);
        setText("text_area16", "");
      }
    }
    if ((getText("text_area5") && getText(up("text_area5"))) !== "") {
      if (getText("text_area5") == getText(up("text_area5"))) {
        setText(up("text_area5"), getText("text_area5") * 2);
        setText("text_area5", "");
      }
    }
    if ((getText("text_area9") && getText(up("text_area9"))) !== "") {
      if (getText("text_area9") == getText(up("text_area9"))) {
        setText(up("text_area9"), getText("text_area9") * 2);
        setText("text_area9", "");
      }
    }
    if ((getText("text_area13") && getText(up("text_area13"))) !== "") {
      if (getText("text_area13") == getText(up("text_area13"))) {
        setText(up("text_area13"), getText("text_area13") * 2);
        setText("text_area13", "");
      }
    }
    if ((getText("text_area15") && getText(up("text_area15"))) !== "") {
      if (getText("text_area15") == getText(up("text_area15"))) {
        setText(up("text_area15"), getText("text_area15") * 2);
        setText("text_area15", "");
      }
    }
    if ((getText("text_area6") && getText(up("text_area6"))) !== "") {
      if (getText("text_area6") == getText(up("text_area6"))) {
        setText(up("text_area6"), getText("text_area6") * 2);
        setText("text_area6", "");
      }
    }
    if ((getText("text_area7") && getText(up("text_area7"))) !== "") {
      if (getText("text_area7") == getText(up("text_area7"))) {
        setText(up("text_area7"), getText("text_area7") * 2);
        setText("text_area7", "");
      }
    }
    if ((getText("text_area8") && getText(up("text_area8"))) !== "") {
      if (getText("text_area8") == getText(up("text_area8"))) {
        setText(up("text_area8"), getText("text_area8") * 2);
        setText("text_area8", "");
      }
    }
    if ((getText("text_area14") && getText(up("text_area14"))) !== "") {
      if (getText("text_area14") == getText(up("text_area14"))) {
        setText(up("text_area14"), getText("text_area14") * 2);
        setText("text_area14", "");
      }
    }
    if ((getText("text_area10") && getText(up("text_area10"))) !== "") {
      if (getText("text_area10") == getText(up("text_area10"))) {
        setText(up("text_area10"), getText("text_area10") * 2);
        setText("text_area10", "");
      }
    }
    if ((getText("text_area11") && getText(up("text_area11"))) !== "") {
      if (getText("text_area11") == getText(up("text_area11"))) {
        setText(up("text_area11"), getText("text_area11") * 2);
        setText("text_area11", "");
      }
    }
    if ((getText("text_area12") && getText(up("text_area12"))) !== "") {
      if (getText("text_area12") == getText(up("text_area12"))) {
        setText(up("text_area12"), getText("text_area12") * 2);
        setText("text_area12", "");
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

    if ((getText("text_area1") && getText(right("text_area1"))) !== "") {
      if (getText("text_area1") == getText(right("text_area1"))) {
        setText(right("text_area1"), getText("text_area1") * 2);
        setText("text_area1", "");
      }
    }
    if ((getText("text_area5") && getText(right("text_area5"))) !== "") {
      if (getText("text_area5") == getText(right("text_area5"))) {
        setText(right("text_area5"), getText("text_area5") * 2);
        setText("text_area5", "");
      }
    }
    if ((getText("text_area9") && getText(right("text_area9"))) !== "") {
      if (getText("text_area9") == getText(right("text_area9"))) {
        setText(right("text_area9"), getText("text_area9") * 2);
        setText("text_area9", "");
      }
    }
    if ((getText("text_area13") && getText(right("text_area13"))) !== "") {
      if (getText("text_area13") == getText(right("text_area13"))) {
        setText(right("text_area13"), getText("text_area13") * 2);
        setText("text_area13", "");
      }
    }
    if ((getText("text_area15") && getText(right("text_area15"))) !== "") {
      if (getText("text_area15") == getText(right("text_area15"))) {
        setText(right("text_area15"), getText("text_area15") * 2);
        setText("text_area15", "");
      }
    }
    if ((getText("text_area6") && getText(right("text_area6"))) !== "") {
      if (getText("text_area6") == getText(right("text_area6"))) {
        setText(right("text_area6"), getText("text_area6") * 2);
        setText("text_area6", "");
      }
    }
    if ((getText("text_area7") && getText(right("text_area7"))) !== "") {
      if (getText("text_area7") == getText(right("text_area7"))) {
        setText(right("text_area7"), getText("text_area7") * 2);
        setText("text_area7", "");
      }
    }
    if ((getText("text_area3") && getText(right("text_area3"))) !== "") {
      if (getText("text_area3") == getText(right("text_area3"))) {
        setText(right("text_area3"), getText("text_area3") * 2);
        setText("text_area3", "");
      }
    }
    if ((getText("text_area14") && getText(right("text_area14"))) !== "") {
      if (getText("text_area14") == getText(right("text_area14"))) {
        setText(right("text_area14"), getText("text_area14") * 2);
        setText("text_area14", "");
      }
    }
    if ((getText("text_area10") && getText(right("text_area10"))) !== "") {
      if (getText("text_area10") == getText(right("text_area10"))) {
        setText(right("text_area10"), getText("text_area10") * 2);
        setText("text_area10", "");
      }
    }
    if ((getText("text_area11") && getText(right("text_area11"))) !== "") {
      if (getText("text_area11") == getText(right("text_area11"))) {
        setText(right("text_area11"), getText("text_area11") * 2);
        setText("text_area11", "");
      }
    }
    if ((getText("text_area2") && getText(right("text_area2"))) !== "") {
      if (getText("text_area2") == getText(right("text_area2"))) {
        setText(right("text_area2"), getText("text_area2") * 2);
        setText("text_area2", "");
      }
    }
  }

// 
onEvent("screen1", "keydown", function(event) {
  arraybefore = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
  arraybefore = arraybefore.toString();
  if (event.key=="Down") {
    for (var z1 = 0; z1 < 4; z1++) {
      eventdown(1, 5, 9, 13);
      eventdown(2, 6, 10, 14);
      eventdown(3, 7, 11, 15);
      eventdown(4, 8, 12, 16);
      checkdown();
    }
    checkiffull();
    arrayafter = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
    arrayafter = arrayafter.toString();
    if (arraybefore===arrayafter) {
      
    } else {
      displaynewnum();
      setNumber("text_area"+z, 2);
    }
  }
  if (event.key=="Left") {
    for (var z2 = 0; z2 < 4; z2++) {
      eventleft(4, 3, 2, 1);
      eventleft(8, 7, 6, 5);
      eventleft(12, 11, 10, 9);
      eventleft(16, 15, 14, 13);
      checkleft();
    }
    checkiffull();
    arrayafter = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
    arrayafter = arrayafter.toString();
    if (arraybefore===arrayafter) {
      
    } else {
      displaynewnum();
      setNumber("text_area"+z, 2);
    }
  }
  if (event.key=="Up") {
    for (var z3 = 0; z3 < 4; z3++) {
      eventup(13, 9, 5, 1);
      eventup(14, 10, 6, 2);
      eventup(15, 11, 7, 3);
      eventup(16, 12, 8, 4);
      checkup();
    }
    checkiffull();
    arrayafter = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
    arrayafter = arrayafter.toString();
    if (arraybefore===arrayafter) {
      
    } else {
      displaynewnum();
      setNumber("text_area"+z, 2);
    }
  }
  if (event.key=="Right") {
    for (var z4 = 0; z4 < 4; z4++) {
      eventright(1, 2, 3, 4);
      eventright(5, 6, 7, 8);
      eventright(9, 10, 11, 12);
      eventright(13, 14, 15, 16);
      checkright();
    }
    checkiffull();
    arrayafter = [(getText("text_area1")),(getText("text_area2")),(getText("text_area3")),(getText("text_area4")),(getText("text_area5")),(getText("text_area6")),(getText("text_area7")),(getText("text_area8")),(getText("text_area9")),(getText("text_area10")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16"))];
    arrayafter = arrayafter.toString();
    if (arraybefore===arrayafter) {
      
    } else {
      displaynewnum();
      setNumber("text_area"+z, 2);
    }
  }
  //set the color
  for (var color = 1; color <= 16; color++) {
    if (getText("text_area"+color) == "2") {
      setProperty("text_area"+color, "background-color", "#fdf9b0");
    } else if ((getText("text_area"+color) == "4")) {
      setProperty("text_area"+color, "background-color", "#cfc94a");
    } else if ((getText("text_area"+color) == "8")) {
      setProperty("text_area"+color, "background-color", "#ffcf55");
    } else if ((getText("text_area"+color) == "16")) {
      setProperty("text_area"+color, "background-color", "#ffa500");
    } else if ((getText("text_area"+color) == "32")) {
      setProperty("text_area"+color, "background-color", "rgba(255,97,0,0.73)");
    } else if ((getText("text_area"+color) == "64")) {
      setProperty("text_area"+color, "background-color", "#ff3900");
    } else if ((getText("text_area"+color) == "128")) {
      setProperty("text_area"+color, "background-color", "rgba(255,242,0,0.46)");
    } else if ((getText("text_area"+color) == "256")) {
      setProperty("text_area"+color, "background-color", "rgba(255,242,0,0.64)");
    } else if ((getText("text_area"+color) == "512")) {
      setProperty("text_area"+color, "background-color", "rgba(255,242,0,0.77)");
    } else if ((getText("text_area"+color) == "1024")) {
      setProperty("text_area"+color, "background-color", "#3fff00");
    } else if ((getText("text_area"+color) == "2084")) {
      setProperty("text_area"+color, "background-color", "#3c00ff");
    } else {
      setProperty("text_area"+color, "background-color", "#a5a5a5");
    }
  }
});
