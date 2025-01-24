// 
var code;
var toolbox = getText("text_area1");
function myFunction() {
  for (var i=0; i<5; i++) {
    console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
  }
}
function limiteduses() {
  var startkey = [/ \"/gi, / \[/gi];
  var startvalue = [" (\"", " (["];
  var endkey = [/\"\n/gi, /\";/gi, /}\n/gi, /};/gi, /]\n/gi, /];/gi];
  var endvalue = ["\")\n", "\")\n", "})\n", "})\n", "])\n", "])\n"];
  var functioninafunctionkey = [/\"\)\n/gi, /\"\);/gi, /}\)\n/gi, /}\);/gi, /]\)\n/gi, /]\);/gi];
  var functioninafunctionvalue = ["\"))\n", "\"))\n", "}))\n", "}))\n", "]))\n", "]))\n"];
  //startkey
  var numberstartkey = [/ 0/gi, / 1/gi, / 2/gi, / 3/gi, / 4/gi, / 5/gi, / 6/gi, / 7/gi, / 8/gi, / 9/gi];
  var numberstartvalue = [" (0", " (1", " (2", " (3", " (4", " (5", " (6", " (7", " (8", " (9"];
  //endkey
  var numbersendkey = [/1\n/gi, /2\n/gi, /3\n/gi, /4\n/gi, /5\n/gi, /6\n/gi, /7\n/gi, /8\n/gi, /9\n/gi, /0\n/gi, /1;/gi, /2;/gi, /3;/gi, /4;/gi, /5;/gi, /6;/gi, /7;/gi, /8;/gi, /9;/gi, /0;/gi];
  var numbersendvalue = ["1)\n", "2)\n", "3)\n", "4)\n", "5)\n", "6)\n", "7)\n", "8)\n", "9)\n", "0)\n", "1)\n", "2)\n", "3)\n", "4)\n", "5)\n", "6)\n", "7)\n", "8)\n", "9)\n", "0)\n"];
  //functioninafunction
  var functioninafunctionnumberkey = [/0\)\n/gi, /1\)\n/gi, /2\)\n/gi, /3\)\n/gi, /4\)\n/gi, /5\)\n/gi, /6\)\n/gi, /7\)\n/gi, /8\)\n/gi, /9\)\n/gi, /0\);/gi, /1\);/gi, /2\);/gi, /3\);/gi, /4\);/gi, /5\);/gi, /6\);/gi, /7\);/gi, /8\);/gi, /9\);/gi];
  var functioninafunctionnumbervalue = ["0))\n", "1))\n", "2))\n", "3))\n", "4))\n", "5))\n", "6))\n", "7))\n", "8))\n", "9))\n", "0))\n", "1))\n", "2))\n", "3))\n", "4))\n", "5))\n", "6))\n", "7))\n", "8))\n", "9))\n"];
  // 
  for (var l = 0; l < functioninafunctionkey.length; l++) {
    code = code.replace(functioninafunctionkey[l], functioninafunctionvalue[l]);
  }
  for (var o = 0; o < functioninafunctionnumberkey.length; o++) {
    code = code.replace(functioninafunctionnumberkey[o], functioninafunctionnumbervalue[o]);
  }
  for (var i = 0; i < startkey.length; i++) {
    code = code.replace(startkey[i], startvalue[i]);
  }
  for (var k = 0; k < endkey.length; k++) {
    code = code.replace(endkey[k], endvalue[k]);
  }
  for (var n = 0; n < numberstartkey.length; n++) {
    code = code.replace(numberstartkey[n], numberstartvalue[n]);
  }
  for (var m = 0; m < numbersendkey.length; m++) {
    code = code.replace(numbersendkey[m], numbersendvalue[m]);
  }
}
function evaluate_b() {
  try {
      code = getText("text_area2_b")+"\n";
      replacetext();
      eval(code);
  }
  catch(err) {
      setText("text_area4_b", (err.name+": ")+err.message);
  }
}
onEvent("button1_b", "click", function(event) {
  setScreen("prog");
  evaluate_b();
});
onEvent("button2_b", "click", function(event) {
  setScreen("screen1_b");
});
setText("text_area2_b",`Make a button with id "printsomething" and text "Click Me!".
onClick("printsomething", function(){setText("printsomething","you clicked me!")})`);
// 
// 
function print(x) {
  console.log(x);
}
function settxt(y, x) {
  setText(y,x);
}
function addtxt(y, x) {
  setText(y,getText(y)+x);
}
function onClick(id, callback) {
  onEvent(id, "click", callback);
}
function onChange(id, callback) {
  onEvent(id, "change", callback);
}
function onKeyup(id, callback) {
  onEvent(id, "keyup", callback);
}
function onKeyDn(id, callback) {
  onEvent(id, "keydown", callback);
}
function onKeypress(id, callback) {
  onEvent(id, "keypress", callback);
}
function onMouseMv(id, callback) {
  onEvent(id, "mousemove", callback);
}
function onMouseDn(id, callback) {
  onEvent(id, "mousedown", callback);
}
function onMouseup(id, callback) {
  onEvent(id, "mouseup", callback);
}
function onMouseOvr(id, callback) {
  onEvent(id, "mouseover", callback);
}
function onMouseout(id, callback) {
  onEvent(id, "mouseout", callback);
}
function onInput(id, callback) {
  onEvent(id, "input", callback);
}
function makeObj(type, id, text, group) {
  if (type=="btn") {
    button(id, text);
  } else if (type=="txtInput") {
    textInput(id, text);
  } else if (type=="txtLabel") {
    textLabel(id, text);
  } else if (type=="dropdown") {
    //here the text is an array
    eval(("dropdown(id, "+("\"" + ((text.toString()).replace(/,/gi, "\",\"") + "\"")))+")");
  } else if (type=="checkbox") {
    //here the text is true/false
    checkbox(id, text);
  } else if (type=="radioBtn") {
    //here the text is true/false
    radioButton(id, text, group);
  } else if (type=="image") {
    image(id, text);
  } else if ((type=="canvas")) {
    //here the text is an array
    eval(("createCanvas (id, "+("" + (text.toString() + "")))+")");
  } else {
    
  }
}
function show(id) {
  show();
  // 
}
function hide(id) {
  hide();
}
function del(id) {
  deleteElement(id);
}
function str(text, array) {
  array[1] = array[1]+1;
  return (eval(((("\""+text)+"\".substring(")+array.toString())+")"));
}
function swap(array1, array2) {
  //the items in the array in in the string form; Ex: ["x","y","z"]
  var arrayX = eval(("["+array2.toString())+"]");
  for (var i = 0; i < array1.length; i++) {
    eval(array1[i]+"="+arrayX[i]);
  }
}
//textfunctions: https://studio.code.org/projects/applab/sU9ew-cHKJEZmjlytNlTYXqDB2DOS3YhKbgx23f-NGU/
function deletevowels(text) {
  for (var i = 0; i < text.length; i++) {
    var textletter = (text.toLowerCase())[i];
    var x;
    var y;
    if (((textletter=="a" || textletter=="e") || (textletter=="i" || textletter=="o")) || textletter=="u") {
      x = text.substring(0, i + 0);
      y = text.substring(i + 1, text.length);
      i = i-1;
      text = x + y;
    }
  }
  return text;
}
function reversestring(text) {
  var reversetext = "";
  for (var i = text.length-1; -1 < i; i--) {
    reversetext = reversetext+text[i];
  }
  return reversetext;
}
function deleteconsonants(text) {
  for (var i = 0; i < text.length; i++) {
    var textletter = (text.toLowerCase())[i];
    var x;
    var y;
    if (!(((textletter=="a" || textletter=="e") || (textletter=="i" || textletter=="o")) || textletter=="u")) {
      x = text.substring(0, i + 0);
      y = text.substring(i + 1, text.length);
      i = i-1;
      text = x + y;
    }
  }
  return text;
}
function repeat(code, num) {
  for (var i = 0; i < num; i++) {
    code();
  }
}
// 
function setcursor(id, url) {
  setStyle(id,"cursor:url("+url+"),auto;");
}
// 
function link(url, text) {
  return ("<a href='"+url+"' target='_blank'>")+text+"</a>";
}
// 
function animate(text, id, n) {
  stopTimedLoop(animate_);
  if (n===undefined) {
    n = 80;
  }
  settxt(id, "");
  var i = 0;
  var animate_ = timedLoop(n, function() {
    addtxt(id, text[i]);
    i = i+1;
    if (i>=text.length) {
      stopTimedLoop(animate_);
    }
  });
  
}
// 
function replacetext() {
  function myFunction() {
    link_and_url();
    //this is first to avoid replace of "to" to ","
    code = code.replace(/Go to /gi, "setScreen(");
    // 
    //setText of "..." to "...".
    code = code.replace(/of /gi, "(");
    code = code.replace(/ to /gi, ",");
    code = code.replace(/\.\n/gi, ");");
    //Make a button with id "..." and text "...".
    code = code.replace(/Make a /gi, "");
    code = code.replace(/ with id /gi, "(");
    code = code.replace(/ and text /gi, ",");
    // 
    //Repeat {console.log("a")} for 10 times.
    code = code.replace(/Repeat /gi, "repeat(function()");
    code = code.replace(/ for /gi, ",");
    code = code.replace(/ times/gi, "");
    // 
    //swap "x","y" and "z" with "z","x" and "y" respectively.
    code = code.replace(/Swap /gi, "swap ([");
    code = code.replace(/ and /g, ",");
    code = code.replace(/ with/gi, "],[");
    code = code.replace(/ respectively/gi, "]");
    //operations
    code = code.replace(/ plus /gi, "+");
    code = code.replace(/ minus /gi, "-");
    code = code.replace(/ times /gi, "*");
    code = code.replace(/ divided by /gi, "/");
    //conditional operators
    code = code.replace(/ is equal to /gi, "==");
    code = code.replace(/ not equal to /gi, "!=");
    code = code.replace(/ is greater than /gi, ">");
    code = code.replace(/ is greater than or equal to /gi, ">=");
    code = code.replace(/ is less than /gi, "<");
    code = code.replace(/ is less than or equal to /gi, "<=");
    //boolean operators
    code = code.replace(/ And /g, " && ");
    code = code.replace(/ Or /g, " || ");
    //num
    code = code.replace(/one/gi, "1");
    code = code.replace(/two/gi, "2");
    code = code.replace(/three/gi, "3");
    code = code.replace(/four/gi, "4");
    code = code.replace(/five/gi, "5");
    code = code.replace(/six/gi, "6");
    code = code.replace(/seven/gi, "7");
    code = code.replace(/eight/gi, "8");
    code = code.replace(/nine/gi, "9");
    code = code.replace(/zero/gi, "0");
    code = code.replace(/ten/gi, "10");
    // 
    code = code.replace(/eleven/gi, "11");
    code = code.replace(/twelve/gi, "12");
    code = code.replace(/thirteen/gi, "13");
    code = code.replace(/fourteen/gi, "14");
    code = code.replace(/fifteen/gi, "15");
    code = code.replace(/sixteen/gi, "16");
    code = code.replace(/seventeen/gi, "17");
    code = code.replace(/eighteen/gi, "18");
    code = code.replace(/nineteen/gi, "19");
    // 
    code = code.replace(/twen/gi, "2");
    code = code.replace(/thir/gi, "3");
    code = code.replace(/fif/gi, "5");
    code = code.replace(/(?<=[1-9])ty {0,}(?=[1-9])/gi, "");
    code = code.replace(/(?<=[1-9])ty/gi, "0");
    code = code.replace(/(?<=[1-9])y {0,}(?=[1-9])/gi, "");
    code = code.replace(/(?<=[1-9])y/gi, "0");
    //hundreds/ doesn't work for three hundred two etc.
    //4/29/2018: now it works!
    code = code.replace(/ hundred (?=[1-9][1-9])/gi, "");
    code = code.replace(/ hundred (?=[1-9])/gi, "0");
    code = code.replace(/ hundred/gi, "00");
    // 
    code = code.replace(/ thousand (?=[1-9][1-9][1-9])/gi, "");
    code = code.replace(/ thousand (?=[1-9][1-9])/gi, "0");
    code = code.replace(/ thousand (?=[1-9])/gi, "00");
    code = code.replace(/ thousand/gi, "000");
    // 
    //move 10 pixels.
    code = code.replace(/move /gi, "moveForward(");
    code = code.replace(/ pixels/gi, "");
    // 
    //turn 10 degrees.
    code = code.replace(/(?<!re)turn /gi, "turnRight(");
    code = code.replace(/ degrees/gi, "");
    // 
    //implement HTML "<p>bhavik</p>".
    code = code.replace(/implement HTML /gi, "write(");
    // 
    //Turtle functions
    //pen up.
    //Ex: show.
    code = code.replace(/pen up/gi, "penUp(");
    code = code.replace(/pen down/gi, "penDown(");
    code = code.replace(/show/gi, "show(");
    code = code.replace(/hide/gi, "hide(");
    code = code.replace(/set speed /gi, "speed(");
    code = code.replace(/RGB /gi, "penRGB(");
    // 
    //setcursor
    //set cursor of "..." to "...".
    code = code.replace(/set cursor /gi, "setcursor");
    // 
    function link_and_url() {
      //link
      //...(make URL "..." with placeholder "...".)
      //Example: write(make URL "..." with placeholder "...".)
      code = code.replace(/make URL /gi, "link(");
      code = code.replace(/ with placeholder /gi, ",");
      code = code.replace(/\".\)/gi, "\"))");
    }
    //animation
    //animate "..." in "...".
    code = code.replace(/animate /gi, "animate(");
    code = code.replace(/ in /gi, ",");
    // 
  }
  myFunction();
}
function regex() {
  var str = "\"Chapter   \" and chapter 15";
  var patt1 = / (?!\" {0,})chapter(?! {0,}\")/gi;
  var result = str.replace(patt1,"   ");
  console.log(result);
}
var keys = [];
onEvent("screen1_b", "keydown", function(event) {
  appendItem(keys, event.key);
  if (keys[keys.length-1] == "CapsLock" && keys[(keys.length-2)] == "CapsLock") {
    keys = [];
    complete();
  }
});
onEvent("text_area2_b", "input", function(event) {
  if ((getText("text_area2_b"))[getText("text_area2_b").length-1] == "\n") {
    
  } else {
    function myFunction() {
      //thought of adding a new line to avoid the background color to spread;
      //Later found the technique: press enter, left and right
      addtxt("text_area2_b", "\n");
    }
  }
});
onEvent("text_area1", "input", function(event) {
  setText("text_area1", toolbox);
});
function complete() {
  console.log("message");
}
// 
for (var i = 1; i < 5; i++) {
  setStyle("button"+i," position:absolute; transition: left 0.3s, top 0.9s; border-radius: 0 6px 6px 0;");
}
//doing twice due to border radius, and the position of the buttons
for (var j = 5; j < 9; j++) {
  setStyle("button"+j," position:absolute; transition: left 0.3s, top 0.9s; border-radius: 6px 0 0 6px;");
}
// 
setStyle("text_area1"," position:absolute; transition: 0.9s");
setStyle("text_area2_b"," position:absolute; transition: 0.9s");
// 
onEvent("button1", "mouseover", function(event) {
  setStyle("button1","left:0");
});
onEvent("button1", "mouseout", function(event) {
  setStyle("button1","left:-93px");
  checkifselected();
});
onEvent("button2", "mouseover", function(event) {
  setStyle("button2","left:0");
});
onEvent("button2", "mouseout", function(event) {
  setStyle("button2","left:-93px");
  checkifselected();
});
onEvent("button3", "mouseover", function(event) {
  setStyle("button3","left:0");
});
onEvent("button3", "mouseout", function(event) {
  setStyle("button3","left:-93px");
  checkifselected();
});
onEvent("button4", "mouseover", function(event) {
  setStyle("button4","left:0");
});
onEvent("button4", "mouseout", function(event) {
  setStyle("button4","left:-93px");
  checkifselected();
});
// 
onEvent("button5", "mouseover", function(event) {
  setStyle("button5","left:230px");
});
onEvent("button5", "mouseout", function(event) {
  setStyle("button5","left:308px");
  checkifselected();
});
onEvent("button6", "mouseover", function(event) {
  setStyle("button6","left:230px");
});
onEvent("button6", "mouseout", function(event) {
  setStyle("button6","left:308px");
  checkifselected();
});
onEvent("button7", "mouseover", function(event) {
  setStyle("button7","left:230px");
});
onEvent("button7", "mouseout", function(event) {
  setStyle("button7","left:308px");
  checkifselected();
});
onEvent("button8", "mouseover", function(event) {
  setStyle("button8","left:295px");
});
onEvent("button8", "mouseout", function(event) {
  setStyle("button8","left:308px");
});
// 
onEvent("button8", "click", function(event) {
  // 
  if (getYPosition("text_area1") == 0) {
    setProperty("button8", "image", "icon://fa-chevron-circle-down");
    // 
    setStyle("text_area1","top:-100px");
    setStyle("text_area2_b","height: 380px");
    setStyle("text_area2_b","top:30px");
    for (var i = 1; i < 9; i++) {
      var x = getYPosition("button"+i);
      setStyle("button"+i,("top:"+(x-95))+"px");
    }
  } else {
    setProperty("button8", "image", "icon://fa-chevron-circle-up");
    // 
    setStyle("text_area1","top:0px");
    setStyle("text_area2_b","height: 280px");
    setStyle("text_area2_b","top:130px");
    for (var j = 1; j < 9; j++) {
      var x1 = getYPosition("button"+j);
      setStyle("button"+j,("top:"+(x1+95))+"px");
    }
  }
});
// 
onEvent("button1", "click", function(event) {
  setProperty("text_area1", "background-color", getProperty("button1", "background-color"));
  openclose(button1);
  // 
  setStyle("button1","left: -85px");
  checkifselected();
});
onEvent("button2", "click", function(event) {
  setProperty("text_area1", "background-color", getProperty("button2", "background-color"));
  openclose(button2);
  // 
  setStyle("button2","left: -85px");
  checkifselected();
});
onEvent("button3", "click", function(event) {
  setProperty("text_area1", "background-color", getProperty("button3", "background-color"));
  openclose(button3);
  // 
  setStyle("button3","left: -85px");
  checkifselected();
});
onEvent("button4", "click", function(event) {
  setProperty("text_area1", "background-color", getProperty("button4", "background-color"));
  openclose(button4);
  // 
  setStyle("button4","left: -85px");
  checkifselected();
});
onEvent("button5", "click", function(event) {
  setProperty("text_area1", "background-color", getProperty("button5", "background-color"));
  openclose(button5);
  // 
  setStyle("button5","left: 280px");
  checkifselected();
});
onEvent("button6", "click", function(event) {
  setProperty("text_area1", "background-color", getProperty("button6", "background-color"));
  openclose(button6);
  // 
  setStyle("button6","left: 280px");
  checkifselected();
});
onEvent("button7", "click", function(event) {
  setProperty("text_area1", "background-color", getProperty("button7", "background-color"));
  openclose(button7);
  // 
  setStyle("button7","left: 280px");
  checkifselected();
});
function checkifselected() {
  for (var i = 1; i < 5; i++) {
    if (getProperty("button"+i, "background-color") != getProperty("text_area1", "background-color")) {
      setStyle("button"+i,"left:-93px");
    } else {
      setStyle("button"+i,"left:-85px");
    }
  }
  for (var j=5; j < 8; j++) {
    if (getProperty("button"+j, "background-color") != getProperty("text_area1", "background-color")) {
      setStyle("button"+j,"left:308px");
    } else {
      setStyle("button"+j,"left:280px");
    }
  }
}
// 
var button1 = decodeURIComponent("onEvent(id%2C%20type%2C%20callback)%0A%0Abutton(id%2C%20text)%0A%0AtextInput(id%2C%20text)%0A%0AtextLabel(id%2C%20text)%0A%0Adropdown(id%2C%20option1%2C%20etc)%0A%0AgetText(id)%0A%0AsetText(id%2C%20text)%0A%0AgetNumber(id)%0A%0AsetNumber(id%2C%20number)%0A%0Acheckbox(id%2C%20checked)%0A%0AradioButton(id%2C%20checked%2C%20group)%0A%0AgetChecked(id)%0A%0AsetChecked(id%2C%20checked)%0A%0Aimage(id%2C%20url)%0A%0AgetImageURL(id)%0A%0AsetImageURL(id%2C%20url)%0A%0AplaySound(url%2C%20loop)%0A%0AstopSound(url)%0A%0AshowElement(id)%0A%0AhideElement(id)%0A%0AdeleteElement(id)%0A%0AsetPosition(id%2C%20x%2C%20y%2C%20width%2C%20height)%0A%0AsetSize(id%2C%20width%2C%20height)%0A%0AsetProperty(id%2C%20property%2C%20value)%0A%0AgetProperty(id%2C%20property)%0A%0Awrite(text)%0A%0AgetXPosition(id)%0A%0AgetYPosition(id)%0A%0AsetScreen(screenId)%0A%0Argb(r%2C%20g%2C%20b%2C%20a)");
var button2 = decodeURIComponent("for%20(initialization%3B%20condition%3B%20increment)%20%7B%0A%20%20%2F%2F%20code%0A%7D%0A%0Awhile%20(condition)%20%7B%0A%20%20%20%20%2F%2Fcode%0A%7D%0A%0Aif%20(condition)%20%7B%0A%20%20%20%20%2F%2Fcode%0A%7D%0A%0Aif%20(condition)%20%7B%0A%20%20%20%20%2F%2Fcode%0A%7D%20else%20%7B%0A%20%20%20%20%2F%2Fcode%0A%7D%0A%0AgetTime()%0A%0AsetTimeout(callback%2C%20ms)%0A%0AclearTimeout(timeout)%0A%0AtimedLoop(ms%2C%20callback)%0A%0AstopTimedLoop()");
var button3 = decodeURIComponent("var%20x%20%3D%20___%3B%0A%0Avar%20x%3B%0A%0Ax%20%3D%20___%3B%0A%0Avar%20x%20%3D%20prompt(%22Enter%20a%20value%22)%3B%0A%0Avar%20x%20%3D%20promptNum(%22Enter%20a%20value%22)%0A%0Aconsole.log(message)%0A%0Avar%20str%20%3D%20%22___%22%3B%0A%0A(string).substring(start%2C%20end)%0A%0A(string).indexOf(searchValue)%0A%0A(string).includes(searchValue)%0A%0A(string).length%0A%0A(string).toUpperCase()%0A%0A(string).toLowerCase()%0A%0Avar%20list%20%3D%20%5B%22a%22%2C%22b%22%2C%22d%22%5D%3B%0A%0Alist%5Bindex%5D%0A%0Alist.length%0A%0AinsertItem(list%2C%20index%2C%20item)%0A%0AappendItem(list%2C%20item)%0A%0AremoveItem(list%2C%20index)");
var button4 = decodeURIComponent("createCanvas(id%2C%20width%2C%20height)%0A%0AsetActiveCanvas(id)%0A%0Aline(x1%2C%20y1%2C%20x2%2C%20y2)%0A%0Acircle(x%2C%20y%2C%20radius)%0A%0Arect(x%2C%20y%2C%20width%2C%20height)%0A%0AsetStrokeWidth(width)%0A%0AsetStrokeColor(color)%0A%0AsetFillColor(color)%0A%0AdrawImageURL(url)%0A%0AgetImageData(x%2C%20y%2C%20width%2C%20height)%0A%0AputImageData(imgData%2C%20x%2C%20y)%0A%0AclearCanvas()%0A%0AgetRed(imgData%2C%20x%2C%20y)%0A%0AgetGreen(imgData%2C%20x%2C%20y)%0A%0AgetBlue(imgData%2C%20x%2C%20y)%0A%0AgetAlpha(imgData%2C%20x%2C%20y)%0A%0AsetRed(imgData%2C%20x%2C%20y%2C%20redValue)%0A%0AsetGreen(imgData%2C%20x%2C%20y%2C%20greenValue)%0A%0AsetBlue(imgData%2C%20x%2C%20y%2C%20blueValue)%0A%0AsetAlpha(imgData%2C%20x%2C%20y%2C%20alphaValue)%0A%0AsetRGB(imgData%2C%20x%2C%20y%2C%20red%2C%20green%2C%20blue%2C%20alpha)");
var button5 = decodeURIComponent("moveForward(pixels)%0A%0AmoveBackward(pixels)%0A%0Amove(x%2C%20y)%0A%0AmoveTo(x%2C%20y)%0A%0Adot(radius)%0A%0AturnRight(angle)%0A%0AturnLeft(angle)%0A%0AturnTo(angle)%0A%0AarcRight(angle%2C%20radius)%0A%0AarcLeft(angle%2C%20radius)%0A%0AgetX()%0A%0AgetY()%0A%0AgetDirection()%0A%0ApenUp()%0A%0ApenDown()%0A%0ApenWidth(width)%0A%0ApenColor(color)%0A%0ApenRGB(r%2C%20g%2C%20b%2C%20a)%0A%0Ashow()%0A%0Ahide()%0A%0Aspeed(value)");
var button6 = decodeURIComponent("value1%20%2B%20value2%0A%0Avalue1%20-%20value2%0A%0Avalue1%20*%20value2%0A%0Avalue1%20%2F%20value2%0A%0Avalue1%20%3D%3D%20value2%0A%0Avalue1%20!%3D%20value2%0A%0Avalue1%20%3E%20value2%0A%0Avalue1%20%3E%3D%20value2%0A%0Avalue1%20%3C%20value2%0A%0Avalue1%20%3C%3D%20value2%0A%0Avalue1%20%26%26%20value2%0A%0Avalue1%20%7C%7C%20value2%0A%0A!(expression)%0A%0ArandomNumber(min%2C%20max)%0A%0AMath.round(x)%0A%0AMath.abs(x)%0A%0AMath.max(n1%2C%20n2%2C%20...%2C%20nX)%0A%0AMath.min(n1%2C%20n2%2C%20...%2C%20nX)%0A%0AMath.random()");
var button7 = decodeURIComponent("function%20myFunction()%20%7B%0A%20%20%20%20%2F%2F%20code%20with%20optional%20%22return%22%20command.%0A%7D%0A%0Afunction%20myFunction(n)%20%7B%0A%20%20%20%20%2F%2F%20code%20with%20optional%20%22return%22%20command.%0A%7D%0A%0AmyFunction()%3B%0A%0AmyFunction(n)%3B%0A%0Areturn%20()");
function openclose(id) {
  setStyle("text_area1","height: 0px");
  setTimeout(function() {
    animate(id, "text_area1", 20);
    setStyle("text_area1","height: 125px");
  }, 700);
}
// 
onEvent("prog", "keydown", function(event) {
  if (event.key == "Left" && event.altKey == true) {
    if (event.ctrlKey===true) {
      setScreen("screen1_b");
    }
  }
});
