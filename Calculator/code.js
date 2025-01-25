//Calculator: Made by Bhavik Dodda: 8th Grade!
onEvent("button190", "click", function(event) {
  //
  stopTimedLoop(animatename);
  setScreen("screen2");
  typename = "Made by MathEnthusiast314";
  animation = 0;
  setText("text_area46", "");
  animatename = timedLoop(100, function() {
    setText("text_area46", getText("text_area46") + typename[animation]);
    animation = animation+1;
    if (animation==typename.length) {
      stopTimedLoop(animatename);
    }
  });
});
getKeyValue("HitCount", function (value) {
  setKeyValue("HitCount", value+1);
  setText("label70", "Page visits: "+value);
});

getKeyValue("TimeSeconds", function (value) {
  setKeyValue("TimeSeconds", value+1);
  setText("label71", "Seconds spent: "+value);
});
timedLoop(1000, function() {
  getKeyValue("TimeSeconds", function (value) {
    setKeyValue("TimeSeconds", value+1);
    setText("label71", "Seconds spent: "+value);
  });
  if (getTime()-screensaver>900000) {
    setScreen("screensaver");
    screensaver = getTime();
  }
});
var typename = "Made by Bhavik Dodda";
var animation = 0;
setText("text_area46", "");
var animatename = timedLoop(100, function() {
  setText("text_area46", getText("text_area46") + typename[animation]);
  animation = animation+1;
  if (animation==20) {
    stopTimedLoop(animatename);
  }
});
// 
onEvent("button1", "click", function(event) {
  setScreen("screen1");
});
var Ans = 0;
onEvent("display", "keydown", function(event) {
  if (event.key=="Enter") {
    evalutationorcalculate();
  }
  setTimeout(function() {
    if (getText("display").substring(getText("display").length-2, getText("display").length) == "pi") {
      setText("display", getText("display").substring(0, getText("display").length-2) + "π");
    }
    if (getText("display").substring(getText("display").length-3, getText("display").length) == "phi") {
      setText("display", getText("display").substring(0, getText("display").length-3) + "Φ");
    }
    if (getText("display").substring(getText("display").length-3, getText("display").length) == "sqr") {
      setText("display", getText("display").substring(0, getText("display").length-3) + "²");
    }
    if (getText("display").substring(getText("display").length-4, getText("display").length) == "sqrt") {
      setText("display", getText("display").substring(0, getText("display").length-4) + "√(");
    }
    if (getText("display").substring(getText("display").length-4, getText("display").length) == "cube") {
      setText("display", getText("display").substring(0, getText("display").length-4) + "³");
    }
    // 
    if (getText("display").substring(getText("display").length-3, getText("display").length) == "Inv") {
      setText("display", getText("display").substring(0, getText("display").length-3) + "⁻¹");
    }
    // 
    if (getText("display").substring(getText("display").length-3, getText("display").length) == "exp") {
      setText("display", getText("display").substring(0, getText("display").length-3) + "⁽");
      superscriptmode = true;
    }
    // 
    if (getText("display").substring(getText("display").length-5, getText("display").length) == "cubrt") {
      setText("display", getText("display").substring(0, getText("display").length-5) + "∛(");
    }
  }, 1000);
});
function superscript(key) {
  var answer = "";
  for (var i = 0; i < key.length+0; i++) {
    if (key[i]==="0") {
      answer = answer+"⁰";
    } else if ((key[i]==1)) {
      answer = answer+"¹";
    } else if ((key[i]==2)) {
      answer = answer+"²";
    } else if ((key[i]==3)) {
      answer = answer+"³";
    } else if ((key[i]==4)) {
      answer = answer+"⁴";
    } else if ((key[i]==5)) {
      answer = answer+"⁵";
    } else if ((key[i]==6)) {
      answer = answer+"⁶";
    } else if ((key[i]==7)) {
      answer = answer+"⁷";
    } else if ((key[i]==8)) {
      answer = answer+"⁸";
    } else if ((key[i]==9)) {
      answer = answer+"⁹";
    } else if ((key[i]=="(")) {
      answer = answer+"⁽";
    } else if ((key[i]==")")) {
      answer = answer+"⁾";
    } else {
      answer = answer+"";
    }
  }
  return answer;
}
onEvent("screen1", "click", function(event) {
  if (event.srcElementId=="Clear") {
    setText("display", "");
    superscriptmode = false;
  } else if (event.srcElementId=="screen1") {
    
  } else if ((event.srcElementId=="display" || (event.srcElementId=="button3" || event.srcElementId=="dropdown1"))) {
    
  } else if ((event.srcElementId=="button2")) {
    setText("display", getText("display").substring(0, getText("display").length-1));
    if (getText("display").includes("⁾")) {
      superscriptmode = false;
    } else {
      if (superscript==="true") {
        superscriptmode = true;
      }
    }
  } else if ((event.srcElementId=="constants")) {
    
  } else if ((event.srcElementId=="a" || event.srcElementId=="button190")) {
    
  } else if ((event.srcElementId=="=")) {
    evalutationorcalculate();
  } else if ((event.srcElementId=="x²")) {
    setText("display", getText("display") + "²");
  } else if (((event.srcElementId=="Select" || event.srcElementId=="Trig") || event.srcElementId == "exprad")) {
    
  } else {
    if (superscriptmode&&(!(isNaN(event.srcElementId)) || (event.srcElementId == "(" || event.srcElementId == ")"))) {
      setText("display", getText("display") + superscript(event.srcElementId));
      if (event.srcElementId==")") {
        superscriptmode = false;
      }
    } else {
      setText("display", getText("display") + event.srcElementId);
    }
  }
});
//dropdown
onEvent("Select", "change", function(event) {
  setText("display", getText("display") + getText("Select"));
  setText("Select", "Sqr and Cube");
});
onEvent("Trig", "change", function(event) {
  setText("display", getText("display") + (getText("Trig") + "("));
  setText("Trig", "Trig");
});
var superscriptmode = false;
onEvent("exprad", "change", function(event) {
  if (getText("exprad") == "𝓍^") {
    setText("display", getText("display") + "⁽");
    superscriptmode = true;
  } else if ((getText("exprad") == "ˣ√(")) {
    setText("display", getText("display") + "√(");
  }
  setText("exprad", "Exp and Rad");
});
function findnumber(text, symbol) {
  var x;
  for (var i = 0; i < text.indexOf(symbol); i++) {
    x = text.substring(i, text.indexOf(symbol) - 0);
    if (isNaN(x)===false) {
      //5/6/2018
      if (x[0]=="+") {
        return (x.substring(1, x.length));
      } else if (x[0]=="-") {
        return (x.substring(1, x.length));
      } else {
        return x;
      }
    } else if ((x[0]=="(" && text.substring(text.indexOf(symbol), text.indexOf(symbol)+1).includes(")"))) {
      
    } else if ((x[0]=="(" && ((x.substring(1, x.length).includes("(")) && (x.substring(0,x.length-1)).includes(")")))) {
      
    } else if (((((1) && x[0]=="(")&&x[(x.length-1)]==")") && getText("display")[x.length+1]!==")")) {
      return x;
    } else {
      
    }
  }
}
function factorial(x) {
   var rval=1;
   for (var i = 2; i <= x; i++) {
     rval = rval * i;
   }
   return rval;
}
// 
var constantshide = true;
// 
onEvent("constants", "click", function(event) {
  if (constantshide===true) {
    showElement("π");
    showElement("√2");
    showElement("e");
    showElement("Φ");
    constantshide = false;
  } else {
    hideElement("π");
    hideElement("√2");
    hideElement("e");
    hideElement("Φ");
    constantshide = true;
  }
});
// 
function sinreplace(x) {
  setText("prossesor", (x.substring(0, x.indexOf("sin ")) + "Math.sin(") + (x.substring(x.indexOf("sin ") + 4, x.indexOf("sin ") + 5) + (")" + x.substring(x.indexOf("sin ") + 5, x.length-0))));
}
function replace(textneeded, textremovedtoreplace, text) {
  setText("prossesor", (text.substring(0, text.indexOf(textremovedtoreplace)) + textneeded) + (text.substring(text.indexOf(textremovedtoreplace) + textremovedtoreplace.length, text.indexOf(textremovedtoreplace) + (textremovedtoreplace.length+1)) + (")" + text.substring(text.indexOf(textremovedtoreplace) + (textremovedtoreplace.length+1), text.length-0))));
}
function replace1(textneeded, textremovedtoreplace, text) {
  return (text.substring(0, text.indexOf(textremovedtoreplace)) + (textneeded + text.substring(text.indexOf(textremovedtoreplace) + textremovedtoreplace.length, text.length)));
}
function sin(x) {
  return (Math.sin(x*(Math.PI/180)));
}
function cos(x) {
  return (Math.cos(x*(Math.PI/180)));
}
function tan(x) {
  return (Math.tan(x*(Math.PI/180)));
}
// 
function sinInv(x) {
  return (Math.asin(x)*(180/Math.PI));
}
function cosInv(x) {
  return (Math.acos(x)*(180/Math.PI));
}
function tanInv(x) {
  return (Math.atan(x)*(180/Math.PI));
}
// 
function cubrt(x) {
  return Math.pow(x,(1/3));
}
// 
function log(x) {
  return (Math.log(x) / Math.log(10));
}
// 
function evalutationorcalculate_doesnt_work_for_square_and_factorial() {
  // 
  var x = getText("display");
  x = x.replace(/Ans/g, Ans);
  x = x.replace(/π/g, Math.PI);
  x = x.replace(/Φ/g, ((Math.sqrt(5))+1)/2);
  x = x.replace(/e/g, Math.E);
  x = x.replace(/√2/g, Math.SQRT2);
  x = x.replace(/⁻¹/g, "Inv");
  x = x.replace(/√/g, "Math.sqrt");
  setText("display", x);
  if (x.includes("²")) {
    function myFunction() {
      setText("display", x.replace(/²/g, eval(thenumbertobesquared) * eval(thenumbertobesquared)));
    }
    var thenumbertobesquared;
    thenumbertobesquared = (findnumber(x,"²")).toString();
    var square = eval(thenumbertobesquared) * eval(thenumbertobesquared);
    eval(("setText(\"display\", x.replace(/"+thenumbertobesquared)+"²/g, square))");
    x = getText("display");
  }
  if (x.includes("!")) {
    var thenumberforfactorial;
    thenumberforfactorial = (findnumber(x,"!")).toString();
    setText("display", x.replace(/!/g, factorial(eval(thenumberforfactorial))));
  }
  // 
  if (getText("display").toString().includes("'")==false&&getText("display").toString().includes('"')==false) {
    try {
        console.log(eval(getText("display")));
        if (Number(eval(getText("display"))) && eval(getText("display")) != true) {
          setText("display", (eval(getText("display"))).toFixed(5));
        } else {
          var thisisusedtoavioderrorasafunction = eval(getText("display"));
          setText("display", thisisusedtoavioderrorasafunction.toString());
        }
    }
    catch(err) {
      console.log(err.message);
      setText("display", err.message);
    };
    Ans = getNumber("display");
  }
}
function superscripttonormalintegers(key) {
  if (Number(key)) {
    return key;
  } else {
    var answer = "";
    for (var i = 0; i < key.length+0; i++) {
      if (key[i]=="⁰") {
        answer = answer+"0";
      } else if ((key[i]=="¹")) {
        answer = answer+"1";
      } else if ((key[i]=="²")) {
        answer = answer+"2";
      } else if ((key[i]=="³")) {
        answer = answer+"3";
      } else if ((key[i]=="⁴")) {
        answer = answer+"4";
      } else if ((key[i]=="⁵")) {
        answer = answer+"5";
      } else if ((key[i]=="⁶")) {
        answer = answer+"6";
      } else if ((key[i]=="⁷")) {
        answer = answer+"7";
      } else if ((key[i]=="⁸")) {
        answer = answer+"8";
      } else if ((key[i]=="⁹")) {
        answer = answer+"9";
      } else if ((key[i]=="⁽")) {
        answer = answer+"(";
      } else if ((key[i]=="⁾")) {
        answer = answer+")";
      } else if (key[i]=="+") {
        answer = answer+"+";
      } else if (key[i]=="-") {
        answer = answer+"-";
      } else if (key[i]=="*") {
        answer = answer+"*";
      } else if (key[i]=="/") {
        answer = answer+"/";
      } else if ((typeof(eval(key[i]))=="number")) {
        answer = answer+key[i];
      } else {
        
      }
    }
    return answer;
  }
}
function evalutationorcalculate() {
  // 
  var x = getText("display");
  for (var i = 0; i < 10; i++) {
    x = getText("display");
    if (x.includes("π")) {
      setText("display", replace1(Math.PI, "π", x));
    }
    x = getText("display");
    if (x.includes("Φ")) {
      setText("display", replace1(((Math.sqrt(5))+1)/2, "Φ", x));
    }
    x = getText("display");
    var e = Math.E;
    x = getText("display");
    if (x.includes("√2")) {
      setText("display", replace1(Math.SQRT2, "√2", x));
    }
    x = getText("display");
    if (x.includes("√(")) {
      setText("display", replace1("Math.sqrt(", "√(", x));
    }
    x = getText("display");
    if (x.includes("∛(")) {
      setText("display", replace1("cubrt(", "∛(", x));
    }
    x = getText("display");
    if (x.includes("∛(")) {
      setText("display", replace1("cubrt(", "∛(", x));
    }
    x = getText("display");
    if (x.includes("⁻¹")) {
      setText("display", replace1("Inv", "⁻¹", x));
    }
    //tryingexp (2/10/18 and 2/11/18)
    x = getText("display");
    if (x.includes("⁽")) {
      var thebase;
      thebase = (findnumber(x,"⁽")).toString();
      console.log(thebase);
      var exp = x.substring(x.indexOf("⁽") + 1, x.indexOf("⁾"));
      var textbeforechangingitintointegersforcalculation = exp;
      //theexpcouldeitherbeinsuperscriptformatorintegerformat(whenyoutype)
      exp = superscripttonormalintegers(exp);
      console.log(exp);
      if (thebase.includes("(") && thebase.includes(")")) {
        setText("display", replace1(Math.pow(eval(thebase),eval(exp)), ((thebase + "⁽")+textbeforechangingitintointegersforcalculation)+"⁾", x));
      } else {
        setText("display", replace1(Math.pow(eval(thebase),eval(exp)), ((thebase + "⁽")+textbeforechangingitintointegersforcalculation)+"⁾", x));
      }
    }
    // 
    x = getText("display");
    if (x.includes("²") && x[(x.indexOf("²") - 1)] != "⁽") {
      var thenumbertobesquared;
      thenumbertobesquared = (findnumber(x,"²")).toString();
      console.log(thenumbertobesquared);
      if (thenumbertobesquared.includes("(") && thenumbertobesquared.includes(")")) {
        setText("display", replace1(eval(thenumbertobesquared) * eval(thenumbertobesquared), thenumbertobesquared + "²", x));
      } else {
        setText("display", replace1(eval(thenumbertobesquared) * eval(thenumbertobesquared), thenumbertobesquared + "²", x));
      }
    }
    x = getText("display");
    if (x.includes("!")) {
      var thenumberforfactorial;
      thenumberforfactorial = (findnumber(x,"!")).toString();
      if (thenumberforfactorial.includes("(") && thenumberforfactorial.includes(")")) {
        setText("display", replace1(factorial(eval(thenumberforfactorial)), thenumberforfactorial + "!", x));
      } else {
        setText("display", replace1(factorial(eval(thenumberforfactorial)), thenumberforfactorial + "!", x));
      }
    }
    // 
    x = getText("display");
    if (x.includes("³") && x[(x.indexOf("³") - 1)] != "⁽") {
      var thenumbertobecubed;
      thenumbertobecubed = (findnumber(x,"³")).toString();
      if (thenumbertobecubed.includes("(") && thenumbertobecubed.includes(")")) {
        setText("display", replace1((eval(thenumbertobecubed) * eval(thenumbertobecubed)) * eval(thenumbertobecubed), thenumbertobecubed + "³", x));
      } else {
        setText("display", replace1((eval(thenumbertobecubed) * eval(thenumbertobecubed)) * eval(thenumbertobecubed), thenumbertobecubed + "³", x));
      }
    }
  }
  try {
      console.log(eval(getText("display")));
      if (Number(eval(getText("display"))) && eval(getText("display")) != true) {
        setText("display", (eval(getText("display"))).toFixed(5));
      } else {
        var thisisusedtoavioderrorasafunction = eval(getText("display"));
        setText("display", thisisusedtoavioderrorasafunction.toString());
      }
  }
  catch(err) {
    console.log(err.message);
    setText("display", err.message);
  }
  if (Number(getNumber("display"))) {
    Ans = getNumber("display");
  };
}
//Graph buttons
onEvent("button3", "click", function(event) {
  showElement("dropdown1");
});
onEvent("button4", "click", function(event) {
  setScreen("screen4");
});
onEvent("button5", "click", function(event) {
  setScreen("Linear");
});
onEvent("button6", "click", function(event) {
  setScreen("exponential_");
});
onEvent("button7", "click", function(event) {
  setScreen("parabolic");
});
onEvent("button8", "click", function(event) {
  setScreen("trigonometry");
});
onEvent("button23", "click", function(event) {
  setScreen("sine");
});
onEvent("button24", "click", function(event) {
  setScreen("cosine");
});
onEvent("button25", "click", function(event) {
  setScreen("tangent");
});
onEvent("button31", "click", function(event) {
  setScreen("Ellipse");
});
onEvent("button39", "click", function(event) {
  setScreen("hyperbola");
});
onEvent("button56", "click", function(event) {
  setScreen("squareroot");
});
onEvent("button63", "click", function(event) {
  setScreen("power");
});
onEvent("button72", "click", function(event) {
  setScreen("rational");
});
onEvent("button81", "click", function(event) {
  setScreen("greatestinteger");
});
onEvent("button88", "click", function(event) {
  setScreen("custommade");
});
// 
onEvent("dropdown1", "change", function(event) {
  var thenamedropdown = getText("dropdown1");
  if (thenamedropdown=="Converters") {
    setScreen("converters");
  } else if ((thenamedropdown=="Graphs")) {
    setScreen("screen4");
  } else if ((thenamedropdown=="Geometry")) {
    setScreen("geometry");
  } else if ((thenamedropdown=="Glossary")) {
    setScreen("glossary");
  } else if ((thenamedropdown=="Formulas")) {
    setScreen("formulas");
  } else if (thenamedropdown=="Comments, Credits") {
    setScreen("commentsandcredits");
  } else {
    
  }
});
var enlarge = 1;
var leftandrightscroll = 0;
var upanddownscroll = 0;
var backbuttonforgraphs = "";
onEvent("letsgraph", "keydown", function(event) {
  if (event.key=="Up") {
    enlarge = enlarge+2;
    eval(getText("text_area2"));
  } else if (event.key=="Down") {
    enlarge = enlarge+enlarge/-5;
    eval(getText("text_area2"));
  }
  if (event.key=="a") {
    var equation = getText("text_input37");
    if (equation.toString().includes("'")==false&&equation.toString().includes('"')==false) {
      leftandrightscroll = leftandrightscroll-10;
      setText("text_area2", ("graphcustommade(\""+((equation + "\",") + ((leftandrightscroll + ",") + upanddownscroll)))+")");
      eval(getText("text_area2"));
    }
  } else if ((event.key=="d")) {
    var equation = getText("text_input37");
    if (equation.toString().includes("'")==false&&equation.toString().includes('"')==false) {
      leftandrightscroll = leftandrightscroll+10;
      setText("text_area2", ("graphcustommade(\""+((equation + "\",") + ((leftandrightscroll + ",") + upanddownscroll)))+")");
      eval(getText("text_area2"));
    }
  } else if ((event.key=="w")) {
    var equation = getText("text_input37");
    if (equation.toString().includes("'")==false&&equation.toString().includes('"')==false) {
      upanddownscroll = upanddownscroll+10;
      setText("text_area2", ("graphcustommade(\""+((equation + "\",") + ((leftandrightscroll + ",") + upanddownscroll)))+")");
      eval(getText("text_area2"));
    }
  } else if ((event.key=="s")) {
    var equation = getText("text_input37");
    if (equation.toString().includes("'")==false&&equation.toString().includes('"')==false) {
      upanddownscroll = upanddownscroll+-10;
      setText("text_area2", ("graphcustommade(\""+((equation + "\",") + ((leftandrightscroll + ",") + upanddownscroll)))+")");
      eval(getText("text_area2"));
    }
  } else {
    
  }
});
// 
onEvent("button65", "click", function(event) {
  enlarge = enlarge+2;
  eval(getText("text_area2"));
});
onEvent("button66", "click", function(event) {
  enlarge = enlarge+enlarge/-5;
  eval(getText("text_area2"));
});
// 
// 
function graphlinear(slope, yintercept) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var i = -160/enlarge; i < 160/enlarge; i=i+0.05) {
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge * (i*slope+yintercept)));
    penDown();
    dot(1);
  }
}
onEvent("button11", "click", function(event) {
  backbuttonforgraphs = "Linear";
  enlarge = 1;
  setScreen("letsgraph");
  var slope = getNumber("text_input1");
  var yintercept = getNumber("text_input2");
  setText("text_area2", "graphlinear("+slope+","+yintercept+")");
  graphlinear(slope, yintercept);
});
setText("text_input6", "+");
setText("text_input4", "0");
function graphexpo(base, yintercept) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  if (getText("text_input6") == "-") {
    for (var z = -160/enlarge; z < 160/enlarge; z=z+0.01) {
      penUp();
      moveTo(transformx(z*enlarge), transformy(enlarge * (-1 * Math.pow(base,z)+yintercept)));
      penDown();
      dot(1);
    }
  } else {
    for (var i = -160/enlarge; i < 160/enlarge; i=i+0.01) {
      penUp();
      moveTo(transformx(i*enlarge), transformy(enlarge * (Math.pow(base,i)+yintercept)));
      penDown();
      dot(1);
    }
  }
}
onEvent("button14", "click", function(event) {
  backbuttonforgraphs = "exponential_";
  enlarge = 1;
  setScreen("letsgraph");
  var base = getNumber("text_input3");
  var yintercept = getNumber("text_input4");
  setText("text_area2", (("graphexpo("+base)+","+yintercept)+")");
  graphexpo(base, yintercept);
});
//button17
function graphparabolic(a, b, c) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var i = -160/enlarge; i < 160/enlarge; i=i+0.05) {
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge * (a*(i*i) + (b*i + c))));
    penDown();
    dot(1);
  }
}
onEvent("button17", "click", function(event) {
  backbuttonforgraphs = "parabolic";
  enlarge = 1;
  setScreen("letsgraph");
  var a = getNumber("text_input7");
  var b = getNumber("text_input8");
  var c = getNumber("text_input9");
  setText("text_area2", (("graphparabolic("+a)+","+b+","+c)+")");
  graphparabolic(a, b, c);
});
// 
function graphsin(a, b) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var i = -160/enlarge; i < 160/enlarge; i=i+0.05) {
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge * (a * Math.sin(((2 * Math.PI) * i) / b))));
    penDown();
    dot(1);
  }
}
onEvent("button21", "click", function(event) {
  backbuttonforgraphs = "sine";
  enlarge = 1;
  setScreen("letsgraph");
  var a = getNumber("text_input10");
  var b = getNumber("text_input11");
  setText("text_area2", (("graphsin("+a)+","+b)+")");
  graphsin(a, b);
});
// 
function graphcos(a, b) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var i = -160/enlarge; i < 160/enlarge; i=i+0.05) {
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge * (a * Math.cos(((2 * Math.PI) * i) / b))));
    penDown();
    dot(1);
  }
}
onEvent("button27", "click", function(event) {
  backbuttonforgraphs = "cosine";
  enlarge = 1;
  setScreen("letsgraph");
  var a = getNumber("text_input12");
  var b = getNumber("text_input13");
  setText("text_area2", (("graphcos("+a)+","+b)+")");
  graphcos(a, b);
});
// 
function graphtan(a, b) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var i = -160/enlarge; i < 160/enlarge; i=i+0.01) {
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge * (a * Math.tan(((2 * Math.PI) * i) / b))));
    penDown();
    dot(1);
  }
}
onEvent("button30", "click", function(event) {
  backbuttonforgraphs = "tangent";
  enlarge = 1;
  setScreen("letsgraph");
  var a = getNumber("text_input14");
  var b = getNumber("text_input15");
  setText("text_area2", (("graphtan("+a)+","+b)+")");
  graphtan(a, b);
});
// 
setText("text_input18", "0");
setText("text_input20", "0");
function graphellipse2(a, b, x1, y1) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  function myFunction() {
    for (var i = (-160-x1) / enlarge; i < (160-x1) / enlarge; i=i+0.05) {
      penUp();
      moveTo(transformx((i+x1) * enlarge), transformy(Math.sqrt((1 - (i*i) / (a*a)) * (b*b))) + y1*-1);
      penDown();
      dot(1);
      penUp();
      moveTo(transformx((i+x1) * enlarge), transformy(-1 * Math.sqrt((1 - (i*i) / (a*a)) * (b*b))) + y1*-1);
      penDown();
      dot(1);
    }
  }
  for (var i = (-160-x1) / enlarge; i < (160-x1) / enlarge; i=i+0.05) {
    penUp();
    moveTo(transformx((i+x1) * enlarge), transformy((Math.sqrt((1 - (i*i) / (a*a)) * (b*b)) + 0) * enlarge) + y1*-1*enlarge);
    penDown();
    dot(1);
    penUp();
    moveTo(transformx((i+x1) * enlarge), transformy((-1 * Math.sqrt((1 - (i*i) / (a*a)) * (b*b)) + 0) * enlarge) + y1*-1*enlarge);
    penDown();
    dot(1);
  }
}
onEvent("button34", "click", function(event) {
  backbuttonforgraphs = "Ellipse";
  enlarge = 1;
  setScreen("letsgraph");
  var x1 = getNumber("text_input18");
  var a = getNumber("text_input19");
  var y1 = getNumber("text_input20");
  var b = getNumber("text_input21");
  setText("text_area2", (("graphellipse2("+a)+","+b+","+x1+","+y1)+")");
  graphellipse2(a, b, x1, y1);
  function graphellipse1(a, b) {
    erase();
    penUp();
    moveTo(160, 255);
    penDown();
    dot(5);
    for (var i = -160; i < 160; i=i+0.01) {
      penUp();
      moveTo(transformx(i), transformy(Math.sqrt((1 - (i*i) / (a*a)) * (b*b))));
      penDown();
      dot(1);
      penUp();
      moveTo(transformx(i), transformy(-1 * Math.sqrt((1 - (i*i) / (a*a)) * (b*b))));
      penDown();
      dot(1);
    }
  }
  function graphellipse(x1, a, y1, b) {
    erase();
    penUp();
    moveTo(160, 255);
    penDown();
    dot(5);
    for (var xcoor = -160; xcoor < 160; xcoor=xcoor+1) {
      for (var ycoor = -180; ycoor<180; ycoor=ycoor+1) {
        var value = Math.pow((transformx(xcoor) - x1) / (a * a),2) + Math.pow((transformy(ycoor) - y1) / (b * b),2) > 1;
        if (!value) {
          penUp();
          moveTo(transformx(xcoor), transformy(ycoor));
          penDown();
          dot(1);
        }
      }
    }
  }
});
function transformx(x) {
  return (x+160);
}
function transformy(y) {
  return (225-y);
}
// 
// 
function erase() {
  moveTo(165, 234);
  penColor("white");
  dot(300);
  penColor("black");
}
// 
function graphhyperbola_previous(a, b) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var i = -160/enlarge; i < 160/enlarge; i=i+0.05) {
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge * Math.sqrt((1 + i*i / (a*a)) * (b*b))));
    penDown();
    dot(1);
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge*-1 * Math.sqrt((1 + i*i / (a*a)) * (b*b))));
    penDown();
    dot(1);
  }
}
function graphhyperbola(a, b) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var i = -160/enlarge; i < 160/enlarge; i=i+0.05) {
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge * Math.sqrt((1 + i*i / (b*1)) * (a*1))));
    penDown();
    dot(1);
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge*-1 * Math.sqrt((1 + i*i / (b*1)) * (a*1))));
    penDown();
    dot(1);
  }
}
onEvent("button42", "click", function(event) {
  backbuttonforgraphs = "hyperbola";
  enlarge = 1;
  setScreen("letsgraph");
  var b = getNumber("text_input17");
  var a = getNumber("text_input16");
  setText("text_area2", (("graphhyperbola("+a)+","+b)+")");
  graphhyperbola(a, b);
});
// 
function graphsqrt(x1, y1) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var i = -160/enlarge; i < 160/enlarge; i=i+0.05) {
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge * (Math.sqrt(i+x1)+y1)));
    penDown();
    dot(1);
  }
}
onEvent("button59", "click", function(event) {
  backbuttonforgraphs = "squareroot";
  enlarge = 1;
  setScreen("letsgraph");
  var x1 = getNumber("text_input22");
  var y1 = getNumber("text_input23");
  setText("text_area2", (("graphsqrt("+x1)+","+y1)+")");
  graphsqrt(x1, y1);
});
// 
function graphpower(exponent, yintercept) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var z = -160/enlarge; z < 160/enlarge; z=z+0.001) {
    penUp();
    moveTo(transformx(z*enlarge), transformy(enlarge * (Math.pow(z,exponent)+yintercept)));
    penDown();
    dot(1);
  }
}
onEvent("button70", "click", function(event) {
  backbuttonforgraphs = "power";
  enlarge = 5;
  setScreen("letsgraph");
  var exponent = getNumber("text_input28");
  var yintercept = getNumber("text_input27");
  setText("text_area2", (("graphpower("+exponent)+","+yintercept)+")");
  graphpower(exponent, yintercept);
});
// 
function graphrational(a, b, c, a2, b2, c2) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var i = -160/enlarge; i < 160/enlarge; i=i+0.05) {
    penUp();
    moveTo(transformx(i*enlarge), transformy(enlarge*((a*(i*i) + (b*i + c)) / (a2*(i*i) + (b2*i + c2)))));
    penDown();
    dot(1);
  }
}
onEvent("button75", "click", function(event) {
  backbuttonforgraphs = "rational";
  enlarge = 10;
  setScreen("letsgraph");
  var a = getNumber("text_input29");
  var b = getNumber("text_input30");
  var c = getNumber("text_input31");
  var a2 = getNumber("text_input32");
  var b2 = getNumber("text_input33");
  var c2 = getNumber("text_input34");
  setText("text_area2", (("graphrational("+a)+","+b+","+c+","+a2+","+b2+","+c2)+")");
  graphrational(a, b, c, a2, b2, c2);
});
// 
// 
//
function graphstepfunction(x1, y1) {
  erase();
  drawgrid();
  penUp();
  moveTo(160, 225);
  penDown();
  dot(5);
  for (var z = -160/enlarge; z < 160/enlarge; z=z+0.05) {
    penUp();
    moveTo(transformx(z*enlarge), transformy(enlarge * (Math.floor(z+x1) + y1)));
    penDown();
    dot(1);
  }
}
onEvent("button84", "click", function(event) {
  backbuttonforgraphs = "greatestinteger";
  enlarge = 10;
  setScreen("letsgraph");
  var x1 = getNumber("text_input35");
  var y1 = getNumber("text_input36");
  setText("text_area2", (("graphstepfunction("+x1)+","+y1)+")");
  graphstepfunction(x1, y1);
});
//
//
//
function graphcustommade(equation, leftandrightscroll, upanddownscroll) {
  erase();
  drawgrid(leftandrightscroll, upanddownscroll);
  //Don't need to draw the origin
  //settingpenwitdh
  penWidth(3);
  // 
  penUp();
  moveTo(0, transformy((enlarge * eval(equation))+upanddownscroll));
  penDown();
  var set = (-160-leftandrightscroll)/enlarge-(-160/enlarge);
  for (var x = (-160/enlarge)+set*1; x < 160/enlarge+set*1; x=x+0.05) {
    moveTo(transformx((x*enlarge)+leftandrightscroll), transformy((enlarge * eval(equation))+upanddownscroll));
    var firstnum = transformy((enlarge * eval(equation))+upanddownscroll);
    x = x+0.05;
    var secondnum = transformy((enlarge * eval(equation))+upanddownscroll);
    x = x+-0.05;
    //this condition will turn true if the value fluctuates from a negative to a positive or a positive to a negative.
    if (firstnum*secondnum < 0) {
      penUp();
    } else {
      penDown();
    }
  }
  penWidth(1);
}
onEvent("button91", "click", function(event) {
  backbuttonforgraphs = "custommade";
  enlarge = 1;
  setScreen("letsgraph");
  var equation = getText("text_input37");
  if (equation.toString().includes("'")==false&&equation.toString().includes('"')==false) {
    setText("text_area2", ("graphcustommade(\""+((equation + "\",") + ((leftandrightscroll + ",") + upanddownscroll)))+")");
    graphcustommade(equation, leftandrightscroll, upanddownscroll);
  }
});
//back buttons
onEvent("button53", "click", function(event) {
  setScreen("trigonometry");
});
onEvent("button46", "click", function(event) {
  setScreen("screen4");
});
onEvent("button52", "click", function(event) {
  setScreen("screen4");
});
onEvent("button47", "click", function(event) {
  setScreen("screen4");
});
onEvent("button45", "click", function(event) {
  setScreen("screen4");
});
onEvent("button51", "click", function(event) {
  setScreen("screen1");
});
onEvent("button48", "click", function(event) {
  setScreen("screen4");
});
onEvent("button54", "click", function(event) {
  setScreen("screen1");
  hideElement("dropdown1");
  setText("dropdown1", "Calculator");
});
onEvent("button50", "click", function(event) {
  setScreen("trigonometry");
});
onEvent("button49", "click", function(event) {
  setScreen("trigonometry");
});
onEvent("button55", "click", function(event) {
  setScreen("screen4");
});
onEvent("button60", "click", function(event) {
  setScreen("screen4");
});
onEvent("button71", "click", function(event) {
  setScreen("screen4");
});
onEvent("button77", "click", function(event) {
  setScreen("screen4");
});
onEvent("button64", "click", function(event) {
  setScreen(backbuttonforgraphs);
});
onEvent("button67", "click", function(event) {
  setScreen("screen1");
  hideElement("dropdown1");
  setText("dropdown1", "Calculator");
});
onEvent("button85", "click", function(event) {
  setScreen("screen4");
});
onEvent("button94", "click", function(event) {
  setScreen("screen4");
});
onEvent("button96", "click", function(event) {
  setScreen("screen1");
  hideElement("dropdown1");
  setText("dropdown1", "Calculator");
});
onEvent("button155", "click", function(event) {
  setScreen("screen1");
  hideElement("dropdown1");
  setText("dropdown1", "Calculator");
});
onEvent("button182", "click", function(event) {
  setScreen("screen1");
  hideElement("dropdown1");
  setText("dropdown1", "Calculator");
});
onEvent("button188", "click", function(event) {
  setScreen("screen1");
  hideElement("dropdown1");
  setText("dropdown1", "Calculator");
});
onEvent("button189", "click", function(event) {
  setScreen("commentsandcredits");
});
setActiveCanvas("canvas1");
function drawgrid(x1, y1) {
  if (x1 == undefined || y1 == undefined) {
    x1 = 0;
    y1 = 0;
    drawgraphwithoutorigin();
  } else {
    drawgraphwithoutorigin();
    penUp();
    moveTo(transformx(x1), transformy(y1));
    penDown();
    dot(5);
  }
  function drawgraphwithoutorigin() {
    penWidth(1);
    for (var column = x1; column < 160; column=column+20*enlarge) {
      if (column===x1) {
        penColor("blue");
      } else {
        penColor("black");
      }
      penUp();
      moveTo(transformx(column), 0);
      penDown();
      moveTo(transformx(column), 450);
      penUp();
    }
    for (var column2 = x1; -160<column2; column2=column2+-20*enlarge) {
      if (column2===x1) {
        penColor("blue");
      } else {
        penColor("black");
      }
      penUp();
      moveTo(transformx(column2), 0);
      penDown();
      moveTo(transformx(column2), 450);
      penUp();
    }
    for (var row = y1; row < 225; row=row+20*enlarge) {
      if (row===y1) {
        penColor("blue");
      } else {
        penColor("black");
      }
      penUp();
      moveTo(0, transformy(row));
      penDown();
      moveTo(320, transformy(row));
      penUp();
    }
    for (var row2 = y1; -225<row2; row2=row2+-20*enlarge) {
      if (row2===y1) {
        penColor("blue");
      } else {
        penColor("black");
      }
      penUp();
      moveTo(0, transformy(row2));
      penDown();
      moveTo(320, transformy(row2));
      penUp();
    }
    penColor("black");
  }
}
// 
onEvent("dropdown4", "click", function(event) {
  var thetextforconvert = getText("dropdown4");
  if (thetextforconvert==="Area") {
    setProperty("dropdown2", "options", ["Square kilometer", "Square meter", "Square mile", "Square yard", "Square foot", "Square inch", "Hectare", "Acre"]);
    setProperty("dropdown3", "options", ["Square kilometer", "Square meter", "Square mile", "Square yard", "Square foot", "Square inch", "Hectare", "Acre"]);
  } else if ((thetextforconvert==="Length")) {
    setProperty("dropdown2", "options", ["Kilometer", "Meter" ,"Centimeter", "Millimeter", "Micrometer", "Nanometer" ,"Mile", "Yard", "Foot", "Inch", "Nautical Mile"]);
    setProperty("dropdown3", "options", ["Kilometer", "Meter" ,"Centimeter", "Millimeter", "Micrometer", "Nanometer" ,"Mile", "Yard", "Foot", "Inch", "Nautical Mile"]);
  } else if ((thetextforconvert==="Data Transfer Rate")) {
    setProperty("dropdown2", "options", ["Bit per second","Kilobit per second","Kilobyte per second","Kibibit per second","Megabit per second","Megabyte per second","Mebibit per second","Gigabit per second","Gigabyte per second","Gibibit per second","Terabit per second","Terabyte per second","Tebibit per second"]);
    setProperty("dropdown3", "options", ["Bit per second","Kilobit per second","Kilobyte per second","Kibibit per second","Megabit per second","Megabyte per second","Mebibit per second","Gigabit per second","Gigabyte per second","Gibibit per second","Terabit per second","Terabyte per second","Tebibit per second"]);
  } else if ((thetextforconvert==="Plane Angle")) {
    setProperty("dropdown2", "options", ["Degree","Gradian","Milliradian","Minute of arc","Radian","Second of arc"]);
    setProperty("dropdown3", "options", ["Degree","Gradian","Milliradian","Minute of arc","Radian","Second of arc"]);
  } else if ((thetextforconvert==="Temperature")) {
    setProperty("dropdown3", "options", ["Celsius","Fahrenheit", "Kelvin"]);
    setProperty("dropdown2", "options", ["Celsius","Fahrenheit", "Kelvin"]);
  } else if ((thetextforconvert==="Digital Storage")) {
    setProperty("dropdown2", "options", ["Bit","Kilobit","Kibibit","Megabit","Mebibit","Gigabit","Gibibit","Terabit","Tebibit","Petabit","Pebibit","Byte","Kilobyte","Kibibyte","Megabyte","Mebibyte","Gigabyte","Gibibyte","Terabyte","Tebibyte","Petabyte","Pebibyte"]);
    setProperty("dropdown3", "options", ["Bit","Kilobit","Kibibit","Megabit","Mebibit","Gigabit","Gibibit","Terabit","Tebibit","Petabit","Pebibit","Byte","Kilobyte","Kibibyte","Megabyte","Mebibyte","Gigabyte","Gibibyte","Terabyte","Tebibyte","Petabyte","Pebibyte"]);
  } else if (thetextforconvert==="Frequency") {
    setProperty("dropdown2", "options", ["Hertz","Kilohertz","Megahertz","Gigahertz"]);
    setProperty("dropdown3", "options", ["Hertz","Kilohertz","Megahertz","Gigahertz"]);
  } else if ((thetextforconvert==="Mass")) {
    setProperty("dropdown3", "options", ["Metric ton","Kilogram","Gram","Milligram","Microgram","Imperial ton","US ton","Stone","Pound","Ounce"]);
    setProperty("dropdown2", "options", ["Metric ton","Kilogram","Gram","Milligram","Microgram","Imperial ton","US ton","Stone","Pound","Ounce"]);
  } else if ((thetextforconvert==="Time")) {
    setProperty("dropdown2", "options", ["Nanosecond","Microsecond","Millisecond","Second","Minute","Hour","Day","Week","Month","Year","Decade","Century"]);
    setProperty("dropdown3", "options", ["Nanosecond","Microsecond","Millisecond","Second","Minute","Hour","Day","Week","Month","Year","Decade","Century"]);
  } else if ((thetextforconvert==="Speed")) {
    setProperty("dropdown2", "options", ["Miles per hour","Foot per second","Meter per second","Kilometers per hour","Knot"]);
    setProperty("dropdown3", "options", ["Miles per hour","Foot per second","Meter per second","Kilometers per hour","Knot"]);
  } else if ((thetextforconvert==="Energy")) {
    setProperty("dropdown3", "options", ["Joule","Kilojoule","Gram calorie","Kilocalorie","Watt hour", "Kilowatt hour", "Electronvolt", "British thermal unit", "US therm", "Foot-pound"]);
    setProperty("dropdown2", "options", ["Joule","Kilojoule","Gram calorie","Kilocalorie","Watt hour", "Kilowatt hour", "Electronvolt", "British thermal unit", "US therm", "Foot-pound"]);
  } else if (thetextforconvert==="Volume") {
    setProperty("dropdown3", "options", ["US liquid gallon", "US liquid quart", "US liquid pint", "US legal cup", "US fluid ounce", "US tablespoon", "US teaspoon", "Cubic meter", "Liter", "Milliliter", "Imperial gallon", "Imperial quart", "Imperial pint", "Imperial cup", "Imperial fluid ounce", "Imperial tablespoon", "Imperial teaspoon", "Cubic foot", "Cubic inch"]);
    setProperty("dropdown2", "options", ["US liquid gallon", "US liquid quart", "US liquid pint", "US legal cup", "US fluid ounce", "US tablespoon", "US teaspoon", "Cubic meter", "Liter", "Milliliter", "Imperial gallon", "Imperial quart", "Imperial pint", "Imperial cup", "Imperial fluid ounce", "Imperial tablespoon", "Imperial teaspoon", "Cubic foot", "Cubic inch"]);
  } else if ((thetextforconvert==="Fuel Economy")) {
    setProperty("dropdown2", "options", ["US Miles per gallon", "Miles per gallon (Imperial)", "Kilometer per liter", "Liter per 100 kilometers"]);
    setProperty("dropdown3", "options", ["US Miles per gallon", "Miles per gallon (Imperial)", "Kilometer per liter", "Liter per 100 kilometers"]);
  } else if (thetextforconvert==="Pressure") {
    setProperty("dropdown2", "options", ["Atmosphere", "Bar", "Pascal", "Pound-force per square inch", "Torr"]);
    setProperty("dropdown3", "options", ["Atmosphere", "Bar", "Pascal", "Pound-force per square inch", "Torr"]);
  } else {
    
  }
  myFunction();
  function myFunction() {
    var dropdown2 = getText("dropdown2");
    var dropdown3 = getText("dropdown3");
    if (dropdown2 == "Liter per 100 kilometers" || dropdown3 == "Liter per 100 kilometers") {
      setTimeout(function() {
        setText("text_input25", convert_lper100km(getText("dropdown2"), getText("dropdown3"), getNumber("text_input24")));
      }, 200);
    } else {
      if (getText("dropdown4") == "Temperature") {
        setTimeout(function() {
          setText("text_input25", convert_temperature(getText("dropdown2"), getText("dropdown3"), getNumber("text_input24")));
        }, 200);
      } else {
        setTimeout(function() {
          getKeyValue(getText("dropdown2"), function (value1) {
            getKeyValue(getText("dropdown3"), function (value2) {
              setText("text_area59", ("1 "+dropdown2+" = "+eval((value2+"/"+value1)).toFixed(5))+" "+dropdown3);
              setText("text_input25", getNumber("text_input24") * eval((value2+"/")+value1));
            });
          });
        }, 200);
      }
    }
  }
});
// 
function convert_temperature(input1, input2, num) {
  if (input1==input2) {
    return num;
  } else {
    var CelsiustoFahrenheit = num*9/5+32;
    var CelsiustoKelvin = num+273.15;
    var FahrenheittoCelsius = (num-32)/(9/5);
    var FahrenheittoKelvin = (num+459.67)/(9/5);
    var KelvintoCelsius = num-273.15;
    var KelvintoFahrenheit = num*(9/5) - 459.67;
    return eval((input1+"to")+input2);
  }
}
function convert_lper100km(input1, input2, num) {
  if (input1==input2) {
    return num;
  } else {
    input1 = input1.replace(/ /g, "");
    input2 = input2.replace(/ /g, "");
    input1 = input1.replace(/\)/g, "");
    input2 = input2.replace(/\)/g, "");
    input1 = input1.replace(/\(/g, "");
    input2 = input2.replace(/\(/g, "");
    var Literper100kilometerstoLiterper100kilometers = 1;
    var USMilespergallontoLiterper100kilometers = 100*3.785411784  / (1.609344 *num);
    var Literper100kilometerstoUSMilespergallon = 100*3.785411784  / (1.609344 *num);
    var MilespergallonImperialtoLiterper100kilometers = (100*4.54609)  / (1.609344 *num);
    var Literper100kilometerstoMilespergallonImperial = (100*4.54609)  / (1.609344 *num);
    var KilometerperlitertoLiterper100kilometers = 100/num;
    var Literper100kilometerstoKilometerperliter = 100/num;
    return (eval((input1+"to")+input2));
  }
}
onEvent("text_input24", "keydown", function(event) {
  var dropdown2 = getText("dropdown2");
  var dropdown3 = getText("dropdown3");
  if (dropdown2 == "Liter per 100 kilometers" || dropdown3 == "Liter per 100 kilometers") {
    setTimeout(function() {
      setText("text_input25", convert_lper100km(getText("dropdown2"), getText("dropdown3"), getNumber("text_input24")));
    }, 200);
  } else {
    if (getText("dropdown4") == "Temperature") {
      setTimeout(function() {
        setText("text_input25", convert_temperature(getText("dropdown2"), getText("dropdown3"), getNumber("text_input24")));
      }, 200);
    } else {
      setTimeout(function() {
        getKeyValue(getText("dropdown2"), function (value1) {
          getKeyValue(getText("dropdown3"), function (value2) {
            setText("text_input25", getNumber("text_input24") * eval((value2+"/")+value1));
          });
        });
      }, 200);
    }
  }
});
onEvent("text_input25", "keydown", function(event) {
  var dropdown2 = getText("dropdown2");
  var dropdown3 = getText("dropdown3");
  if (dropdown2 == "Liter per 100 kilometers" || dropdown3 == "Liter per 100 kilometers") {
    setTimeout(function() {
      setText("text_input24", convert_lper100km(getText("dropdown3"), getText("dropdown2"), getNumber("text_input25")));
    }, 200);
  } else {
    if (getText("dropdown4") == "Temperature") {
      setTimeout(function() {
        setText("text_input24", convert_temperature(getText("dropdown3"), getText("dropdown2"), getNumber("text_input25")));
      }, 200);
    } else {
      setTimeout(function() {
        getKeyValue(getText("dropdown3"), function (value1) {
          getKeyValue(getText("dropdown2"), function (value2) {
            setText("text_input24", getNumber("text_input25") * eval((value2+"/")+value1));
          });
        });
      }, 200);
    }
  }
});
onEvent("dropdown2", "change", function(event) {
  var dropdown2 = getText("dropdown2");
  var dropdown3 = getText("dropdown3");
  if (dropdown2 == "Liter per 100 kilometers" || dropdown3 == "Liter per 100 kilometers") {
    setTimeout(function() {
      setText("text_input25", convert_lper100km(getText("dropdown2"), getText("dropdown3"), getNumber("text_input24")));
    }, 200);
  } else {
    if (getText("dropdown4") == "Temperature") {
      setTimeout(function() {
        setText("text_input25", convert_temperature(getText("dropdown2"), getText("dropdown3"), getNumber("text_input24")));
      }, 200);
    } else {
      setTimeout(function() {
        getKeyValue(getText("dropdown2"), function (value1) {
          getKeyValue(getText("dropdown3"), function (value2) {
            setText("text_area59", ("1 "+dropdown2+" = "+eval((value2+"/"+value1)).toFixed(5))+" "+dropdown3);
            setText("text_input25", getNumber("text_input24") * eval((value2+"/")+value1));
          });
        });
      }, 200);
    }
  }
});
onEvent("dropdown3", "change", function(event) {
  var dropdown2 = getText("dropdown2");
  var dropdown3 = getText("dropdown3");
  if (dropdown2 == "Liter per 100 kilometers" || dropdown3 == "Liter per 100 kilometers") {
    setTimeout(function() {
      setText("text_input25", convert_lper100km(getText("dropdown2"), getText("dropdown3"), getNumber("text_input24")));
    }, 200);
  } else {
    if (getText("dropdown4") == "Temperature") {
      setTimeout(function() {
        setText("text_input25", convert_temperature(getText("dropdown2"), getText("dropdown3"), getNumber("text_input24")));
      }, 200);
    } else {
      setTimeout(function() {
        getKeyValue(getText("dropdown2"), function (value1) {
          getKeyValue(getText("dropdown3"), function (value2) {
            setText("text_area59", ("1 "+dropdown2+" = "+eval((value2+"/"+value1)).toFixed(5))+" "+dropdown3);
            setText("text_input25", getNumber("text_input24") * (eval((value2+"/")+value1)));
          });
        });
      }, 200);
    }
  }
});
// 
//length
var kmtokm = 1;
var kmtom = 1000;
var kmtocm = 100000;
var kmtomm = 1000000;
var kmtomicrometer = 1000000000;
var kmtonanometer = 1000000000000;
var kmtomile = 0.621371;
var kmtoyard = 1093.6132983;
var kmtoft = 3280.84;
var kmtoin = 39370.1;
var kmtonauticalmile = 0.539957;
//area
var sqkmtosqkm = 1;
var sqkmtosqm = Math.pow(kmtom,2);
var sqkmtosqmile = Math.pow(kmtomile,2);
var sqkmtosqyard = Math.pow(kmtoyard,2);
var sqkmtosqft = Math.pow(kmtoft,2);
var sqkmtosqin = Math.pow(kmtoin,2);
var sqkmtosqhectare = 100;
var sqkmtosqacre = 247.105;
//datatransferrate
var bipstobips = 1;
var bipstokibips = 0.001;
var bipstokibyps = 0.000125;
var bipstokibibips = 1/1024;
var bipstomegabips = 0.000001;
var bipstomegabyps = 0.000000125;
var bipstomebibips = 1/1048576;
var bipstogibips = 0.000000001;
var bipstogibyps = 1/(8000000000);
var bipstogibibips = 1/1073741824;
var bipstotebips = 0.000000000001;
var bipstotebyps = 1/(8000000000000);
var bipstotebibips = 1/1099511627776;
//plane angle
var dtod = 1;
var dtogra = 10/9;
var dtomra = 17.453292520;
var dtomoa = 60;
var dtorad = Math.PI/180;
var dtosoa = 3600;
//Temperature:notcomplete
//finishedon1/3/2018
var ktok = 1;
var ktoc = -273.15;
var ktof = -458.87;
//dibital storage
var btob = 1;
var btoby = 0.125;
//Digital Storage
var btopebi = 1e-15;
var btopebibi = 1/Math.pow(2,50);
var btopeby = 1/8e+15;
var btopebiby = 1/Math.pow(2,53);
//digital storage: bibytes
var btokibiby = 1/8192;
var btomebiby = 1/8388608;
var btogibiby = 1/8589934592;
var btotebiby = 1/8796093022208;
//digital storage: bits
var btokibi = 1e-3;
var btomebi = 1e-6;
var btogibi = 1e-9;
var btotebi = 1e-12;
//digital storage: bibits
var btokibibi = 1/1024;
var btomebibi = 1/Math.pow(1024,2);
var btogibibi = 1/Math.pow(1024,3);
var btotebibi = 1/Math.pow(1024,4);
//digital storage: bytes
var btokiby = 1/8e+3;
var btomeby = 1/8e+6;
var btogiby = 1/8e+9;
var btoteby = 1/8e+12;
//Frequency
var htoh = 1;
var htok = 0.001;
var htom = 1e-6;
var htog = 1e-9;
//Mass
var MetrictoMetric = 1;
var MetrictoKilo = 1000;
var MetrictoGram = 1e+6;
var MetrictoMilli = 1e+9;
var MetrictoMicro = 1e+12;
var MetrictoImp = 1/1.0160469088;
var MetrictoUS = 1/0.90718474;
var MetrictoStn = 2204.625*(1/14);
var Metrictolb = 2204.625;
var Metrictoou = 35274;
//Time
var nanotonano = 1;
var nanotomicro = 0.001;
var nanotomilli = 1e-6;
var nanotoseco = 1e-9;
var nanotominu = 1e-9/60;
var nanotohour = 1e-9/3600;
var nanotoday = 1e-9/86400;
var nanotoweek = 1e-9/604800;
var nanotomon = 1/2629746000000000;
var nanotoyear = 1/(2629746000000000*12);
var nanotodecade = 1/(2629746000000000*12*10);
var nanotocen = 1/(2629746000000000*12*100);
//speed 
var mphtomph = 1;
var mphtoftps = 22/15;
var mphtomeps = 1397/3125;
var mphtokmph = 25146/15625;
var mphtoknot = 50292/57875;
//energy
var joutojou = 1;
var joutokijou = 0.001;
var joutogramcalorie = 1/4.184;
var joutokicalorie = 1/4184;
var joutowthr = 1/3600;
var joutokiwthr = 1/3.6e+6;
var joutoelevolt = 6241509343260179000;
var joutobtu = 1/1055.05585262;
var joutoustherm = 1/105480400;
var joutoftlb = 1/1.3558179483314004;
//volume
var usligatousliga = 1;
var usligatousliqt = 4;
var usligatouslipt = 8;
var usligatouslecup = "";
var usligatousflou = 128;
var usligatoustablespoon = 256;
var usligatousteaspoon = 768;
var usligatocubm = 1/264.1720523581484;
var usligatolit = 3.785411784;
var usligatomlit = 3785.411784;
var usligatoimga = 3785.411784/4546.09;
var usligatoimqt = usligatoimga*4;
var usligatoimpt = usligatoimqt*2;
var usligatoimcup = usligatoimga*16;
var usligatoimflou = usligatoimga*160;
var usligatoimtablespoon = usligatoimga*256;
var usligatoimteaspoon = usligatoimga*768;
var usligatocubft = 231/1728;
var usligatocubin = 231;
// 
function character_code() {
  (String.prototype).charCodeUTF32 = function(){   
      return ((((this.charCodeAt(0)-0xD800)*0x400) + (this.charCodeAt(1)-0xDC00) + 0x10000));
  };
  console.log(("🔒".charCodeUTF32()).toString(16));
}
//Fuel economy: not complete
//fuel economy now complete!
var usmpgatousmpga = 1;
var usmpgatompgai = 4.54609/3.785411784;
var usmpgatokmpl = 1 / (3.785411784 / 1.609344);
var usmpgatolp100km = (3.785411784 / 1.609344) * 100;
//pressure
var atmtoatm = 1;
var atmtobar = 1.01325;
var atmtopascal = 101325;
var atmtopoundforce = 14.695948775872305152;
var atmtotorr = 760;
function innerhtml() {
  var theinnerhtml = ("<p style=\"font-size:18px\">"+(getText("text_area7") + ((" Ref."+"<a href=\"https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-trig-ratios-intro/v/basic-trigonometry\" target=\"blank\"> Khan Academy </a>")+ "."))) +"</p>";
  innerHTML("text_area7",theinnerhtml);
  var theinnerhtml1 = ("<p style=\"font-size:18px\">"+(getText("text_area5") + ((" See"+"<button id=\"quadraticformula\" >Quadratic Formula Solver</button>")+ "."))) +"</p>";
  innerHTML("text_area5",theinnerhtml1);
  innerHTML("text_area8",("<p style=\"font-size:18px\">"+(getText("text_area8") + ((" Ref."+"<a href=\"https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-trig-ratios-intro/v/basic-trigonometry\" target=\"blank\"> Khan Academy </a>")+ "."))) +"</p>");
  innerHTML("text_area37",("<p style=\"font-size:18px\">"+(getText("text_area37") + ((" Ref."+"<a href=\"https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-trig-ratios-intro/v/basic-trigonometry\" target=\"blank\"> Khan Academy </a>")+ "."))) +"</p>");
  // 
  //imagehref
  innerHTML("button123",'<a href="http://www.coolmath.com/sites/cmat/files/images/06-lines-06.gif" target="_blank">Formula</a>');
  innerHTML("button124",'<a href="http://cdn.virtualnerd.com/tutorials_json/Alg1_13_03_0001/assets/Alg1_13_03_0001_D_01_02.png" target="_blank">Formula</a>');
  innerHTML("button125",'<a href="http://images.algebraden.com/geometry/big/sss-rule-of-congruent-triangles.jpg" target="_blank">Image</a>');
  innerHTML("button127",'<a href="https://www.wikihow.com/images/thumb/7/7d/Find-the-Magnitude-of-a-Vector-Step-7.jpg/aid2913287-v4-728px-Find-the-Magnitude-of-a-Vector-Step-7.jpg" target="_blank">Formula</a>');
  //<p><a href="#C4">Jump to Chapter 4</a></p><h2>Chapter 1</h2><p>This chapter explains ba bla bla</p><h2>Chapter 2</h2><p>This chapter explains ba bla bla</p><h2>Chapter 3</h2><p>This chapter explains ba bla bla</p><h2 id="C4">Chapter 4</h2><p>This chapter explains ba bla bla</p><h2>Chapter 5</h2><p>This chapter explains ba bla bla</p><h2>Chapter 6</h2><p>This chapter explains ba bla bla</p><h2>Chapter 7</h2><p>This chapter explains ba bla bla</p><h2>Chapter 8</h2><p>This chapter explains ba bla bla</p><h2>Chapter 9</h2><p>This chapter explains ba bla bla</p><h2>Chapter 10</h2><p>This chapter explains ba bla bla</p><h2>Chapter 11</h2><p>This chapter explains ba bla bla</p><h2>Chapter 12</h2><p>This chapter explains ba bla bla</p><h2>Chapter 13</h2><p>This chapter explains ba bla bla</p><h2>Chapter 14</h2><p>This chapter explains ba bla bla</p><h2>Chapter 15</h2><p>This chapter explains ba bla bla</p><h2>Chapter 16</h2><p>This chapter explains ba bla bla</p><h2>Chapter 17</h2><p>This chapter explains ba bla bla</p>
  //Smooth Scroll
  setStyle("text_area20","scroll-behavior: smooth;");
  setStyle("text_area18","scroll-behavior: smooth;");
  setStyle("text_area26","scroll-behavior: smooth;");
  setStyle("text_area28","scroll-behavior: smooth;");
  setStyle("text_area13","scroll-behavior: smooth;");
  setStyle("text_area24","scroll-behavior: smooth;");
  setStyle("text_area22","scroll-behavior: smooth;");
  setStyle("text_area34","scroll-behavior: smooth;");
  setStyle("text_area36","scroll-behavior: smooth;");
  setStyle("text_area15","scroll-behavior: smooth;");
  setStyle("text_area11","scroll-behavior: smooth;");
  setStyle("text_area30","scroll-behavior: smooth;");
  setStyle("text_area32","scroll-behavior: smooth;");
  //Jump to... 
  var text1 = "Type in the x and y coordinates of two points (L,M) to get the magnitude and direction between points L and M."+"\n"+"___________________________";
  var text2 = "For example to get the magnitude and direction between (1,3) and (5,2), type in those numbers to get the result."+"\n"+"___________________________";
  var text3 = "//Note: For the four values (x1, y1, x2, y2), if you don't type in a value it counts as a 0.";
  innerHTML("text_area20",((((((("<p style=\"font-size:17px\" >Jump to: <a href=\"#Dis20\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex20\">Example \n </a> ,")+"\n"+"<a href=\"#Note20\">Note \n </a> ")+"\n"+"</p><p id=\"Dis20\" style=\"font-size:17px\">")+text1)+"</p><p id= \"Ex20\" style=\"font-size:17px\" >")+text2+"</p><p id=\"Note20\" style=\"font-size:17px\" >")+text3+"</p>");
  var text4 = ("Type in the num in the text input and choose an option (degrees, or -gon). Choose degrees if you want to give the sum of interior angles and want to know the number of sides of that polygon; Choose -gon if you want to input the number of sides of a polygon and want to know the sum of the interior angles in that polygon."+"\n")+"___________________________";
  var text5 = ("For example to get the polygon that when you sum the interior angle it is 180, type 180 and select degrees as your option.\n To get sum of the interior angles of a triangle, type in 3 and select -gon as your option."+"\n")+"___________________________";
  var text6 = "//Note: For the one value \n(num), if you don't type in a value it counts as a 0.";
  innerHTML("text_area18",((((((((("<p style=\"font-size:17px\" >Jump to: <a href=\"#Dis18\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex18\">Example \n </a> ,")+"\n"+"<a href=\"#Note18\">Note \n </a> ")+"\n"+"</p><p id=\"Dis18\" style=\"font-size:17px\">")+text4)+"</p><p id= \"Ex18\" style=\"font-size:17px\" >")+text5)+"</p><p id=\"Note18\" style=\"font-size:17px\" >")+text6)+"</p>");
  var text7 = ("Type in the radius (r) and central angle (Angle(degrees)) of a sector to find its area."+"\n")+"___________________________";
  var text8 = ("For example to get the area of a sector that has a central angle of 100 degrees and radius of 5 , type in those numbers to get the result."+"\n")+"___________________________";
  var text9 = "//Note: For the two values \n(r, degrees), if you don't type in a value it counts as a 0.";
  innerHTML("text_area26",((((((((("<p style=\"font-size:17px\" >Jump to: <a href=\"#Dis26\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex26\">Example \n </a> ,")+"\n"+"<a href=\"#Note26\">Note \n </a> ")+"\n"+"</p><p id=\"Dis26\" style=\"font-size:17px\">")+text7)+"</p><p id= \"Ex26\" style=\"font-size:17px\" >")+text8)+"</p><p id=\"Note26\" style=\"font-size:17px\" >")+text9)+"</p>");
  var text10 = ("Type in the length of sides (s) and number of sides (n) of a polygon to find its area."+"\n")+"___________________________";
  var text11 = ("For example to get the area of a polygon that has a length of side as 10 and its number of sides as 6 , type in those numbers to get the result."+"\n")+"___________________________";
  var text12 = "//Note: For the two values \n(s,n), if you don't type in a value it counts as a 0.";
  innerHTML("text_area28",((((((((("<p style=\"font-size:17px\" >Jump to: <a href=\"#Dis28\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex28\">Example \n </a> ,")+"\n"+"<a href=\"#Note28\">Note \n </a> ")+"\n"+"</p><p id=\"Dis28\" style=\"font-size:17px\">")+text10)+"</p><p id= \"Ex28\" style=\"font-size:17px\" >")+text11)+"</p><p id=\"Note28\" style=\"font-size:17px\" >")+text12)+"</p>");
  var text13 = ("Type in the x and y coordinates of two points to get the distance between them."+"\n")+"___________________________";
  var text14 = ("For example to get the distance between (-1,1) and (3,4), type in those numbers to get the result."+"\n")+"___________________________";
  var text15 = "//Note: For the four values \n(x1, y1, x2, y2), if you don't type in a value it counts as a 0.";
  innerHTML("text_area13",((((((((("<p style=\"font-size:17px\" >Jump to: <a href=\"#Dis13\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex13\">Example \n </a> ,")+"\n"+"<a href=\"#Note13\">Note \n </a> ")+"\n"+"</p><p id=\"Dis13\" style=\"font-size:17px\">")+text13)+"</p><p id= \"Ex13\" style=\"font-size:17px\" >")+text14)+"</p><p id=\"Note13\" style=\"font-size:17px\" >")+text15)+"</p>");
  var text16 = ("Type in the radius and coordinates of the center  (Cx,Cy) of a circle to get its equation."+"\n")+"___________________________";
  var text17 = ("For example to get the equation of a circle that has a radius of 9 and center of (4,3), type in those numbers to get the result."+"\n")+"___________________________";
  var text18 = "//Note: For the three values \n(radius, Cx, Cy), if you don't type in a value it counts as a 0.";
  innerHTML("text_area24",((((((((("<p style=\"font-size:17px\" >Jump to: <a href=\"#Dis24\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex24\">Example \n </a> ,")+"\n"+"<a href=\"#Note24\">Note \n </a> ")+"\n"+"</p><p id=\"Dis24\" style=\"font-size:17px\">")+text16)+"</p><p id= \"Ex24\" style=\"font-size:17px\" >")+text17)+"</p><p id=\"Note24\" style=\"font-size:17px\" >")+text18)+"</p>");
  var text19 = ("Type in the radius (r) and central angle (Angle(degrees)) of an arc to find its arc length."+"\n")+"___________________________";
  var text20 = ("For example to get the length of arc that has a central angle of 100 degrees and radius of 5 , type in those numbers to get the result."+"\n")+"___________________________";
  var text21 = "//Note: For the two values \n(r, degrees), if you don't type in a value it counts as a 0.";
  innerHTML("text_area22",((((((((("<p style=\"font-size:17px\" >Jump to: <a href=\"#Dis22\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex22\">Example \n </a> ,")+"\n"+"<a href=\"#Note22\">Note \n </a> ")+"\n"+"</p><p id=\"Dis22\" style=\"font-size:17px\">")+text19)+"</p><p id= \"Ex22\" style=\"font-size:17px\" >")+text20)+"</p><p id=\"Note22\" style=\"font-size:17px\" >")+text21)+"</p>");
  var text22 = ("Type in the total amount in a set (s) and amount in each sub-set (n) of a data set to find its permutation and combination."+"\n")+"___________________________";
  var text23 = ("For example to get the permutation and combination of a set which has a total amount of 6 and a sub-set of 2, type in those numbers to get the result."+"\n")+"___________________________";
  var text24 = "//Note: For the two values \n(n,r), if you don't type in a value it counts as a 0.";
  innerHTML("text_area34",((((((((("<p style=\"font-size:17px\" >Jump to: <a href=\"#Dis34\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex34\">Example \n </a> ,")+"\n"+"<a href=\"#Note34\">Note \n </a> ")+"\n"+"</p><p id=\"Dis34\" style=\"font-size:17px\">")+text22)+"</p><p id= \"Ex34\" style=\"font-size:17px\" >")+text23)+"</p><p id=\"Note34\" style=\"font-size:17px\" >")+text24)+"</p>");
  var text25 = ("Type in the Probability of event A (P(A)) and Probability of event B (P(B)) to find its intersection, complement, union and Exclusive OR. "+"\n")+"___________________________";
  var text26 = ("For example to get the complement, union, intersection etc. of two events that have a probability of 0.5 and 0.7, type in those numbers to get the result."+"\n")+"___________________________";
  var text27 = "//Note: For the two values \n(P(A),P(B)), if you don't type in a value it counts as a 0.\nThe two values must be greater than or equal to 0 and less than or equal to 1.";
  innerHTML("text_area36",((((((((("<p style=\"font-size:17px\" >Jump to: <a href=\"#Dis36\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex36\">Example \n </a> ,")+"\n"+"<a href=\"#Note36\">Note \n </a> ")+"\n"+"</p><p id=\"Dis36\" style=\"font-size:17px\">")+text25)+"</p><p id= \"Ex36\" style=\"font-size:17px\" >")+text26)+"</p><p id=\"Note36\" style=\"font-size:17px\" >")+text27)+"</p>");
  var text28 = ("Type in the x and y coordinates of six points  (3 points for each triangle) to determine whether the 2 triangles (△ABC and △KLM ) are congruent are not."+"\n")+"___________________________";
  var text29 = ("For example to determine if the triangles  A(-3, 3), B(-1, 3), C(-3, 1) and  K(1, 4), L(3, 4), M(1, 6) are congruent, type in those numbers for each point to get the result."+"\n")+"___________________________";
  var text30 = "//Note: For the 12 values \n(Ax,Ay,Bx,By,Cx,Cy,Kx,Ky,Lx,Ly,Mx,My), if you don't type in a value it counts as a 0.";
  innerHTML("text_area15",((((((((("<p style=\"font-size:15px\" >Jump to: <a href=\"#Dis15\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex15\">Example \n </a> ,")+"\n"+"<a href=\"#Note15\">Note \n </a> ")+"\n"+"</p><p id=\"Dis15\" style=\"font-size:17px\">")+text28)+"</p><p id= \"Ex15\" style=\"font-size:17px\" >")+text29)+"</p><p id=\"Note15\" style=\"font-size:17px\" >")+text30)+"</p>");
  var text31 = ("Type in the x and y coordinates of two points to get the slope between them."+"\n")+"___________________________";
  var text32 = ("For example to get the slope between (1,3) and (5,2), type in those numbers to get the result."+"\n")+"___________________________";
  var text33 = "//Note: For the four values \n(x1, y1, x2, y2), if you don't type in a value it counts as a 0.";
  innerHTML("text_area11",((((((((("<p style=\"font-size:15px\" >Jump to: <a href=\"#Dis11\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex11\">Example \n </a> ,")+"\n"+"<a href=\"#Note11\">Note \n </a> ")+"\n"+"</p><p id=\"Dis11\" style=\"font-size:17px\">")+text31)+"</p><p id= \"Ex11\" style=\"font-size:17px\" >")+text32)+"</p><p id=\"Note11\" style=\"font-size:17px\" >")+text33)+"</p>");
  var text34 = ("First choose an option from the drop down (Prism / Regular Pyramid).Input 2 values: Perimeter of Base (Pb), Area of Base (Ab) and Height (h)"+"\n")+"___________________________";
  var text35 = ("For example to find the surface area of a Cylinder, choose Prism for your option (as a cylinder is a circular based prism), input the perimeter of its base in the first input box; next, input the area of its base in the 2nd input box and finally input its Height in the 3rd input box, to get the result."+"\n")+"___________________________";
  var text36 = "//Note: For the three values \n(Pb, Ab, h), if you don't type in a value it counts as a 0.";
  innerHTML("text_area30",((((((((("<p style=\"font-size:15px\" >Jump to: <a href=\"#Dis30\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex30\">Example \n </a> ,")+"\n"+"<a href=\"#Note30\">Note \n </a> ")+"\n"+"</p><p id=\"Dis30\" style=\"font-size:17px\">")+text34)+"</p><p id= \"Ex30\" style=\"font-size:17px\" >")+text35)+"</p><p id=\"Note30\" style=\"font-size:17px\" >")+text36)+"</p>");
  var text37 = ("First choose an option from the drop down (Prism / Regular Pyramid).Input 2 values: Area of Base (Ab) and Height (h)"+"\n")+"___________________________";
  var text38 = ("For example to find the volume of a Cylinder, choose Prism for your option (as a cylinder is a circular based prism), input the area of its base in the first input box and input its height in the 2nd input box, to get the result."+"\n")+"___________________________";
  var text39 = "//Note: For the two values \n(Ab, h), if you don't type in a value it counts as a 0.";
  innerHTML("text_area32",(((((((((("<p style=\"font-size:15px\" >Jump to: <a href=\"#Dis32\"> Description \n</a> ,"+"\n")+"<a href=\"#Ex32\">Example \n </a> ,")+"\n")+"<a href=\"#Note32\">Note \n </a> ")+"\n"+"</p><p id=\"Dis32\" style=\"font-size:17px\">")+text37)+"</p><p id= \"Ex32\" style=\"font-size:17px\" >")+text38)+"</p><p id=\"Note32\" style=\"font-size:17px\" >")+text39)+"</p>");
  // 
  var url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABmklEQVQ4T7XUP4gPcBjH8ddD/pw/MVikKyQGsVlkMJhYlCuLZLiUqFuIZJINAx1KXEYkKQZduo3FwHDdZLBQSp2ciMOjR9/T78TlJ576Dt+nb+/v83yez/cbmfkaS/BBdzELCzAaERsjM9/idkTs645DZj7E0ohYPwW6GRH9fwF6gOX/BTSKK5jsoqqFOIr3nRUt7gLw89GxTlBVtAfnsB33cQQXsQXXcQmXsRrn8ajlxjtB36eWmacwUMCIOJGZ17CrchExlJkl7gb0R8TdzHyCuZ2gr+2GTViG8tZjbG4ee45nrbp5GMMLbK18J2gRPhUdgfzNviAVX9qq89M0qtt3tp534wYO4E6r4mzT6x7W4Hg5GtX6xK80OoODuBARh5tGfTgWEYOZOYK12BsRI02zaYacg9JhBcoKE02DlZiP8abbKryaCVSPrx5tD2a3/jv3n/GxPdKXM4GGI6IvM8tH+8svETGQmbewAycxiGH0/ivQOhzC0zaMySmx36DG/6etlT2qzbJASfHjPzqNbaiPqtt4h6GIuPoNIO7pE6XO7QUAAAAASUVORK5CYII=";
  setStyle("=","cursor:url("+url+"),auto;");
  url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABFklEQVQ4T8WUsUqDMRSFv0sRdBD6BkJHBzcfwlkKfQARKS5SUJwdfASnLo5Ch+4dHQRHB6duhW4dxLlHriQlbfO38DfQjAn3y7kn58YovExSBxib2WcJtgN/gDczu9orUNI7cJaImAP92golXQAvwEkC3Ql4AzwDzZ2BknIw525WKOkJuAQezWzoFRnYJCi9B0aVHgZYDzgCvOg6+JW26fu3fpmkll+YBa7AokUz4AA4DhsLWBq3NWAFbDWiWdiawgzsG3gFHpLXrIQtAYEpED3zsy/3zcw+kof4jZ5VTVVseQAcAm2gkcJioaTzfwVbZn7hIXAXkn8KdF1ZndmuPXrbWo5RqCNqqSb+h56vIsuKUBJIceAfGoeieDO4p68AAAAASUVORK5CYII=";
  setStyle("button91","cursor:url("+url+"),auto;");
  // 
  setStyle("radio_button1","cursor: all-scroll;");
  setStyle("radio_button2","cursor: all-scroll;");
  setStyle("radio_button3","cursor: all-scroll;");
  // 
  url = "https://png.icons8.com/ios-glyphs/0.5x/assignment-late.png";
  setStyle("Note20","cursor:url("+url+"),auto;");
  setStyle("Note18","cursor:url("+url+"),auto;");
  setStyle("Note26","cursor:url("+url+"),auto;");
  setStyle("Note28","cursor:url("+url+"),auto;");
  setStyle("Note13","cursor:url("+url+"),auto;");
  setStyle("Note24","cursor:url("+url+"),auto;");
  setStyle("Note22","cursor:url("+url+"),auto;");
  setStyle("Note34","cursor:url("+url+"),auto;");
  setStyle("Note36","cursor:url("+url+"),auto;");
  setStyle("Note15","cursor:url("+url+"),auto;");
  setStyle("Note11","cursor:url("+url+"),auto;");
  setStyle("Note30","cursor:url("+url+"),auto;");
  setStyle("Note32","cursor:url("+url+"),auto;");
  // 
  url = "https://png.icons8.com/ios-glyphs/0.2x/note.png";
  setStyle("Dis20","cursor:url("+url+"),auto;");
  setStyle("Dis18","cursor:url("+url+"),auto;");
  setStyle("Dis26","cursor:url("+url+"),auto;");
  setStyle("Dis28","cursor:url("+url+"),auto;");
  setStyle("Dis13","cursor:url("+url+"),auto;");
  setStyle("Dis24","cursor:url("+url+"),auto;");
  setStyle("Dis22","cursor:url("+url+"),auto;");
  setStyle("Dis34","cursor:url("+url+"),auto;");
  setStyle("Dis36","cursor:url("+url+"),auto;");
  setStyle("Dis15","cursor:url("+url+"),auto;");
  setStyle("Dis11","cursor:url("+url+"),auto;");
  setStyle("Dis30","cursor:url("+url+"),auto;");
  setStyle("Dis32","cursor:url("+url+"),auto;");
  // 
  var buttonids = 1;
  var texta = ["","ABSOLUTE VALUE","ACRE","ACUTE ANGLE","ADD","ADDEND","ADDITIVE INVERSES","ADJACENT","ALGORITHM","ALTERNATE EXTERIOR ANGLES","ALTERNATE INTERIOR ANGLES","A.M.","AMOUNT","ANGLE","ANSWER","APPLY","APPROXIMATELY","ARC","AREA","AREA MODEL","ARITHMETIC SEQUENCE","AROUND","ARRAY","ASSOCIATIVE PROPERTY","ASSOCIATIVE PROPERTY OF ADDITION","ASSOCIATIVE PROPERTY OF MULTIPLICATION","ASYMPTOTE","AT LEAST","ATTRIBUTE","AVAILABILITY (OF A PRODUCT)","AVERAGE","AVERAGE RATE OF CHANGE"];
  var thehtmltext = "<p id=\"A\">";
  for (var j = 1; j < texta.length; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ texta[j]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textb = ["BALANCE","BAR GRAPH (BAR CHART) ","BASE-10 NUMBER SYSTEM ","BASE (OF A FIGURE) ","BASE (OF AN EXPONENT) ","BATCH ","BENCHMARK ","BENCHMARK FRACTIONS ","BETWEEN ","BICONDITIONAL STATEMENT ","BINOMIAL ","BISECT ","BOX-AND-WHISKER PLOT ","BREAK APART"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"B\">";
  for (j=0; j < textb.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textb[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textc = ["CALCULATE ","CAPACITY ","CATEGORY ","CENTER ","CENTRAL ANGLE ","CHARACTERISTIC ","CHOOSE ","CHORD ","CIRCLE ","CIRCUMFERENCE ","CIRCUMSCRIBED ANGLE ","CIRCUMSCRIBED FIGURE ","CLASSIFY ","COEFFICIENT ","COLLECT ","COLUMN ","COMBINE ","COMMON DENOMINATOR ","COMMON FACTOR ","COMMON MULTIPLE ","COMMON RATIO ","COMMUTATIVE PROPERTY ","COMPARE (FIGURES) ","COMPARE (NUMBERS) ","COMPLEMENTARY ANGLES ","COMPLETE ","COMPLETING THE SQUARE ","COMPOSITE FIGURE ","COMPOSITE NUMBER ","COMPOST ","COMPOUND INTEREST ","COMPOUND PROBABILITY ","CONCAVE ","CONDITION ","CONDITIONAL STATEMENT ","CONE ","CONGRUENT ","CONJECTURE ","CONSECUTIVE ","CONSTANT TERM ","CONTAINER ","CONTRAPOSITIVE ","CONVERSE ","CONVEX ","COORDINATE PAIR ","COORDINATE PLANE ","CORRECT ","CORRELATION ","CORRESPONDING ANGLES ","CORRESPONDING SIDES ","COSINE RATIO ","COST ","CROSS SECTION ","CUBE ","CUBE (VALUE) ","CUP ","CUSTOMARY MEASUREMENT SYSTEM ","CYLINDER"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"C\">";
  for (j=0; j < textc.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textc[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textd = ["DATA ","DECIMAL ","DECIMAL APPROXIMATION ","DECOMPOSE (DECOMPOSITION) ","DECREASE ","DEGREE ","DELTA ","DEMAND (OF A PRODUCT) ","DENOMINATOR ","DENSITY ","DESCRIBE ","DIAGONAL ","DIAGRAM ","DIAMETER ","DIFFERENCE ","DIGIT ","DILATION ","DIMENSIONS ","DIRECTION ","DIRECTLY PROPORTIONAL ","DIRECT VARIATION ","DISPLAY ","DISTANCE ","DISTRIBUTIVE PROPERTY ","DIVIDE ","DIVIDEND ","DIVISOR ","DOMAIN ","DOT PLOT ","DOUBLE ","DOZEN"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"D\">";
  for (j=0; j < textd.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textd[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var texte = ["EARN ","EDGE ","ELAPSED TIME ","EMPTY ","END ","ENDPOINT ","ENOUGH ","EQUAL ","EQUALLY ","EQUALLY LIKELY EVENTS ","EQUATION ","EQUIANGULAR ","EQUIDISTANT ","EQUILATERAL TRIANGLE ","EQUIVALENT ","EQUIVALENT EXPRESSIONS ","EQUIVALENT FRACTIONS ","EQUIVALENT RATIOS ","ERROR ","ESTIMATE ","EVALUATE ","EVEN (NUMBER) ","EVENT ","EXACTLY ","EXCLUDED VALUES ","EXPANDED EXPONENTIAL FORM ","EXPANDED FORM (PLACE VALUE) ","EXPERIMENTAL PROBABILITY ","EXPLAIN ","EXPONENT ","EXPONENTIAL DECAY","EXPONENTIAL GROWTH", "EXPRESSION", "EXTERIOR ANGLE"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"E\">";
  for (j=0; j < texte.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ texte[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textf = ["FACE ","FACT FAMILY ","FACTOR ","FACTOR PAIR ","FACTOR RAINBOW ","FACTOR TABLE ","FACTOR TREE ","FAR ","FAVORABLE OUTCOME ","FEWER ","FIFTH ","FIGURE (GEOMETRIC) ","FILL IN ","FINAL ","FIRST QUARTILE ","FIVE-NUMBER SUMMARY ","FORMULA ","FOURTH ","FRACTION ","FREQUENCY ","FUNCTION"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"F\">";
  for (j=0; j < textf.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textf[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textg = ["GALLON ","GEOMETRIC SEQUENCE ","GRAM ","GRAPH ","GREATER THAN ","GREATEST COMMON FACTOR ","GROUP ","GROWTH FACTOR"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"G\">";
  for (j=0; j < textg.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textg[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var texth = ["HALF (HALVES) ","HALF-PLANE ","HANDSPAN ","HEIGHT ","HISTOGRAM ","HORIZONTAL ","HOUR ","HUNDRED ","HUNDREDTH ","HUNDREDTH GRID (DECIMAL GRID) ","HYPOTENUSE"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"H\">";
  for (j=0; j < texth.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ texth[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var texti = ["IDENTIFY ","IDENTITY PROPERTY OF ADDITION ","IDENTITY PROPERTY OF MULTIPLICATION ","IMAGE ","IMAGINARY UNIT, I","IMPROPER FRACTION ","INCH ","INCORRECT ","INCREASE ","INEQUALITY ","INSCRIBED ANGLE ","INSCRIBED FIGURE ","INSIDE ","INTEGERS ","INTEREST ","INTERIOR ANGLE ","INTERPRET ","INTERQUARTILE RANGE ","INTERSECTION ","INTERVAL ","INVERSE ","INVERSELY PROPORTIONAL ","INVERSE OF A CONDITIONAL STATEMENT ","INVERSE OPERATIONS ","INVERSE RELATIONSHIP ","IRRATIONAL NUMBER ","ISOSCELES TRIANGLE"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"I\">";
  for (j=0; j < texti.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ texti[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textk = ["Key"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"K\">";
  for (j=0; j < textk.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textk[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textl = ["LATERAL SURFACE AREA ","LAW OF LARGE NUMBERS ","LEAST COMMON DENOMINATOR ","LEAST COMMON MULTIPLE ","LEGS ","LENGTH ","LESS THAN ","LIBRARY ","LIKELIHOOD ","LIKELY ","LIKE TERMS ","LINE ","LINEAR PAIR (ANGLES) ","LINEAR RELATIONSHIP ","LINE OF BEST FIT ","LINE OF SYMMETRY ","LINE PLOT ","LINE SEGMENT ","LOCATE ","LOCATION ","LOGARITHM ","LONG ","LONG DIVISION ","LONGER ","LOWER QUARTILE"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"L\">";
  for (j=0; j < textl.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textl[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textm = ["MASS ","MATHEMATICAL MODEL ","MEAN ","MEAN ABSOLUTE DEVIATION ","MEASURE ","MEDIAN ","MENTAL MATH ","METER ","METRIC SYSTEM ","MILE ","MINUTE ","MIXED NUMBER ","MODE ","MODEL ","MORE THAN ","MULTIPLE ","MULTIPLICATIVE IDENTITY ","MULTIPLICATIVE INVERSES ","MULTIPLY"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"M\">";
  for (j=0; j < textm.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textm[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textn = ["NEAREST","NEGATIVE NUMBER","NET","NORMAL DISTRIBUTION","NUMBER LINE","NUMERATOR"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"N\">";
  for (j=0; j < textn.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textn[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var texto = ["OBTUSE ANGLE ","ODD (NUMBER) ","OPERATION ","OPPOSITES ","ORDER ","ORDER OF OPERATIONS ","ORGANIZE ","ORIGIN ","OUNCE ","OUTCOME ","OVERESTIMATE"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"O\">";
  for (j=0; j < texto.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ texto[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textp = ["PACKAGE ","PARABOLA ","PARALLEL ","PARALLELOGRAM ","PARENTHESES ","PATTERN ","PER ","PERCENT ","PERFECT SQUARE ","PERIMETER ","PERIOD ","PERPENDICULAR ","PIECE ","PINT ","PI (Π) ","PLACE VALUE ","PLANE ","P.M. ","POINT ","POINT-SLOPE FORM (OF A LINE) ","POLYGON ","POLYNOMIAL ","POSITIVE NUMBER ","POUND ","POWERS OF TEN ","PRIME FACTORIZATION ","PRIME NUMBER ","PRINCIPAL ","PRISM ","PROBABILITY ","PROCESS ","PRODUCE ","PRODUCT ","PROFIT ","PROOF ","PROPORTION ","PROPORTIONAL ","PROVIDE ","PYRAMID ","PYTHAGOREAN THEOREM"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"P\">";
  for (j=0; j < textp.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textp[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textq = ["QUADRANTS ","QUADRATIC (EQUATION) ","QUADRATIC FORMULA ","QUADRILATERAL ","QUARTILE ","QUOTIENT"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"Q\">";
  for (j=0; j < textq.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textq[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textr = ["RADIAN ","RADICAL EXPRESSION ","RADIUS ","RANGE ","RANGE OF A FUNCTION ","RATE ","RATIO ","RATIONAL NUMBER ","RAY ","REAL NUMBER ","REASONABLE ","RECIPE ","RECIPROCAL ","RECTANGLE ","RECTANGULAR PRISM ","RECURSIVE FORMULA ","REFLECTION ","REFLECTION SYMMETRY ","REFLEXIVE PROPERTY OF EQUALITY ","REGROUP ","REGULAR POLYGON ","RELATED FACTS ","REMAIN ","REMAINDER ","REPEATING DECIMAL ","REPRESENT ","RESULT ","REVENUE ","RHOMBUS ","RIGHT ANGLE ","RIGHT PRISM ","RIGHT TRIANGLE ","RIGID TRANSFORMATION ","RISE ","ROOTS OF A FUNCTION ","ROTATION ","ROTATIONAL SYMMETRY ","ROUND (A VALUE) ","ROW ","RUN"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"R\">";
  for (j=0; j < textr.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textr[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var texts = ["SAME SIDE EXTERIOR ANGLES ","SAME SIDE INTERIOR ANGLES ","SAMPLE SPACE ","SCALE FACTOR ","SCALENE TRIANGLE ","SCALE (ON A GRAPH) ","SCATTER PLOT ","SCORE ","SECTION ","SECTOR ","SELECT ","SEQUENCE ","SHADED ","SHAPE ","SHOW ","SIDE ","SIDE OF A POLYGON ","SIMILAR ","SIMILAR FIGURES ","SIMPLE INTEREST ","SIMPLEST FORM (FRACTION) ","SINE RATIO ","SITUATION ","SIXTH ","SIZE ","SLICE ","SLOPE ","SLOPE-INTERCEPT FORM OF AN EQUATION ","SOLUTION ","SOLVE ","SPACE ","SPEED ","SPHERE ","SPREAD (OF DATA) ","SQUARE ","SQUARE NUMBER ","SQUARE ROOT ","SQUARE UNIT ","SQUARE (VALUE) ","STANDARD DEVIATION ","STANDARD FORM ","STATEMENT ","STEM-AND-LEAF PLOT ","STRAIGHT ANGLE ","STRATEGY ","SUBSTITUTION ","SUBTEND ","SUBTRACT ","SUM ","SUPPLEMENTARY ANGLES ","SURFACE AREA ","SURVEY ","SYMBOL ","SYMMETRY ","SYSTEM OF LINEAR EQUATIONS"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"S\">";
  for (j=0; j < texts.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ texts[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textt = ["TABLE ","TAKE APART ","TALLY MARKS ","TANGENT LINE ","TANGENT RATIO ","TEMPERATURE ","TEN ","TENTH ","TEN THOUSAND ","TERM ","TERMINATING DECIMAL ","THEORETICAL PROBABILITY ","THIRD ","THIRD QUARTILE ","THOUSAND ","THOUSANDTH ","TOTAL ","TRAIL ","TRANSFORMATION ","TRANSFORMATION RULE ","TRANSITIVE PROPERTY OF EQUALITY ","TRANSLATION ","TRANSVERSAL ","TRAPEZOID ","TREE DIAGRAM ","TRIAL ","TRIGONOMETRIC RATIO ","TRINOMIAL ","TWICE"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"T\">";
  for (j=0; j < textt.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textt[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textu = ["UNEQUAL ","UNIT CUBE ","UNIT FRACTION ","UNIT (OF MEASUREMENT) ","UNIT RATE ","UNKNOWN ","UPPER QUARTILE"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"U\">";
  for (j=0; j < textu.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textu[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textv = ["VALUE ","VARIABLE ","VELOCITY ","VERTEX ","VERTICAL ","VERTICAL ANGLE ","VOLUME"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"V\">";
  for (j=0; j < textv.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textv[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textw = ["WEEK ","WEIGH ","WEIGHT ","WHOLE ","WHOLE NUMBERS ","WIDTH ","WORD FORM ","WORK ","WRONG"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"W\">";
  for (j=0; j < textw.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textw[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textx = ["X-AXIS","X-INTERCEPT"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"X\">";
  for (j=0; j < textx.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textx[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var texty = ["YARD","Y-AXIS","YEAR","Y-INTERCEPT"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"Y\">";
  for (j=0; j < texty.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ texty[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textz = ["ZERO ","ZERO PROPERTY ","ZEROS OF A FUNCTION"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"Z\">";
  for (j=0; j < textz.length + 0; j++) {
    thehtmltext = (thehtmltext+"<button id=\"bt"+buttonids)+"\">"+ textz[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  innerHTML("text_area47",thehtmltext+"</p>");
  // 
  var allthealphabets = ["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  for (var i = 1; i < 27; i++) {
    innerHTML("button"+(i+128),(("<a href=\"#"+allthealphabets[i])+"\">"+allthealphabets[i])+"</a>");
  }
}
innerhtml();
// 
var discription;
var theimage;
readRecords("discriptions", {}, function(records) {
  discription = (records[(1-1)]).name;
  setText("text_area51", discription);
  setText("text_area51", "");
});
onEvent("glossary", "click", function(event) {
  if (event.srcElementId.includes("bt")) {
    setText("text_area51", "");
    var title = getText(event.srcElementId);
    readRecords("discriptions", {}, function(records) {
      var num = Number((event.srcElementId).replace(/bt/g, ""));
      discription = (records[num-1]).name;
      innerHTML("text_area51",((("<p style=\"font-size:20px\">"+(title + ("<br><br>" + discription)))+"")+"")+"</p>");
    });
    function myFunction() {
      readRecords("theimages", {}, function(records) {
        var num = Number((event.srcElementId).replace(/bt/g, ""));
        theimage = (records[num-1]).name;
      });
    }
  }
});
function formulaprog() {
  var buttonids = 1;
  var texta = ["","ANGLE SUMS", "AREA", "ARITHMETIC SEQUENCES"];
  var thehtmltext = "<p id=\"formulaA\">";
  for (var j = 1; j < texta.length; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ texta[j]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textc = ["CAPACITY AND VOLUME","CIRCLE","CIRCUMFERENCE AND PERIMETER","CONE","CUSTOMARY LENGTH","CYLINDER"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaC\">";
  for (j=0; j < textc.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textc[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textd = ["DISTANCE FORMULA","DISTANCE, RATE, AND TIME"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaD\">";
  for (j=0; j < textd.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textd[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textg = ["GEOMETRIC SEQUENCES"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaG\">";
  for (j=0; j < textg.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textg[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textl = ["LINEAR EQUATIONS"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaL\">";
  for (j=0; j < textl.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textl[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textm = ["MASS AND WEIGHT ","METRIC LENGTH (DISTANCE) ","MIDPOINT FORMULA"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaM\">";
  for (j=0; j < textm.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textm[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textp = ["PARALLELOGRAMS ","PERIMETER AND CIRCUMFERENCE ","PYRAMID ","PYTHAGOREAN THEOREM"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaP\">";
  for (j=0; j < textp.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textp[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textq = ["QUADRATIC FORMULA"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaQ\">";
  for (j=0; j < textq.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textq[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textr = ["RECTANGLE","RECTANGULAR PRISM"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaR\">";
  for (j=0; j < textr.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textr[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var texts = ["SIMPLE INTEREST ","SLOPE FORMULA ","SPECIAL RIGHT TRIANGLES ","SPHERE ","SQUARE ","SURFACE AREA 1 ","SURFACE AREA 2"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaS\">";
  for (j=0; j < texts.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ texts[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textt = ["TEMPERATURE CONVERSION ","TIME ","TIME 2 ","TRAPEZOID ","TRIANGLE"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaT\">";
  for (j=0; j < textt.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textt[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  var textv = ["VOLUME"];
  thehtmltext = thehtmltext+"</p>";
  thehtmltext = thehtmltext+"<p id=\"formulaV\">";
  for (j=0; j < textv.length + 0; j++) {
    thehtmltext = ((thehtmltext+"<button id=\"formulabt")+buttonids)+"\">"+ textv[(j-0)]+" </button> <br>";
    buttonids = buttonids+1;
  }
  // 
  innerHTML("text_area55",thehtmltext+"</p>");
  // 
  innerHTML("button"+156,(("<a href=\"#formula"+"A")+"\">"+"A")+"</a>");
  innerHTML("button"+158,(("<a href=\"#formula"+"C")+"\">"+"C")+"</a>");
  innerHTML("button"+159,(("<a href=\"#formula"+"D")+"\">"+"D")+"</a>");
  innerHTML("button"+162,(("<a href=\"#formula"+"G")+"\">"+"G")+"</a>");
  innerHTML("button"+167,(("<a href=\"#formula"+"L")+"\">"+"L")+"</a>");
  innerHTML("button"+168,(("<a href=\"#formula"+"M")+"\">"+"M")+"</a>");
  innerHTML("button"+171,(("<a href=\"#formula"+"P")+"\">"+"P")+"</a>");
  innerHTML("button"+172,(("<a href=\"#formula"+"Q")+"\">"+"Q")+"</a>");
  innerHTML("button"+173,(("<a href=\"#formula"+"R")+"\">"+"R")+"</a>");
  innerHTML("button"+174,(("<a href=\"#formula"+"S")+"\">"+"S")+"</a>");
  innerHTML("button"+175,(("<a href=\"#formula"+"T")+"\">"+"T")+"</a>");
  innerHTML("button"+177,(("<a href=\"#formula"+"V")+"\">"+"V")+"</a>");
}
formulaprog();
onEvent("formulas", "click", function(event) {
  if (event.srcElementId.includes("formulabt")) {
    readRecords("theimages", {}, function(records) {
      var num = Number((event.srcElementId).replace(/formulabt/g, ""));
      theimage = (records[num-1]).name;
      innerHTML("text_area56","<img src="+theimage+">");
    });
  }
});
// 
var thelastscreenforquadraticformula;
onEvent("quadraticformula", "click", function(event) {
  setScreen("Quadraticformulasolver");
  thelastscreenforquadraticformula = "parabolic";
});
onEvent("button92", "click", function(event) {
  var a = getNumber("text_input38");
  var b = getNumber("text_input39");
  var c = getNumber("text_input40");
  var insidesqrt = b * b - 4 * (a * c);
  var root1;
  var root2;
  if (insidesqrt<0) {
    insidesqrt = insidesqrt*-1;
    root1 = ("" + (b*-1) / (2*a)+(" + ")) + (Math.sqrt(insidesqrt) / (2*a) + "i");
    root2 = ("" + (b*-1) / (2*a)+(" - ")) + (Math.sqrt(insidesqrt) / (2*a) + "i");
  } else {
    root1 = ((b*-1) + Math.sqrt(insidesqrt)) / (2*a);
    root2 = ((b*-1) - Math.sqrt(insidesqrt)) / (2*a);
  }
  setText("text_area9", (((("Equation --> "+a)+"x²+ ")+b)+"x+ ")+c);
  setText("text_area9", (getText("text_area9")+"\n"+"Roots of this Equation are:  \n")+root1+" , "+root2+" .");
});
onEvent("button95", "click", function(event) {
  setScreen(thelastscreenforquadraticformula);
});
// 
// 
//-----<Geometry Section>-----
//Geometry Buttons
onEvent("button97", "click", function(event) {
  setScreen("geometry:slopesoflines");
});
onEvent("button99", "click", function(event) {
  setScreen("geometry:distancebetweenpoints");
});
onEvent("button101", "click", function(event) {
  setScreen("geometry:provingtrianglescongruent");
});
onEvent("button103", "click", function(event) {
  setScreen("geometry:anglesofpolygons");
});
onEvent("button105", "click", function(event) {
  setScreen("geometry:vectors");
});
onEvent("button107", "click", function(event) {
  setScreen("geometry:measuringanglesandarcs");
});
onEvent("button109", "click", function(event) {
  setScreen("geometry:equationsofcircles");
});
onEvent("button111", "click", function(event) {
  setScreen("geometry:areasofcirclesandsectors");
});
onEvent("button113", "click", function(event) {
  setScreen("geometry:areasofregularpolygons");
});
onEvent("button115", "click", function(event) {
  setScreen("geometry:surfaceareas");
});
onEvent("button117", "click", function(event) {
  setScreen("geometry:volumes");
});
onEvent("button119", "click", function(event) {
  setScreen("geometry:permutationsandcombinations");
});
onEvent("button121", "click", function(event) {
  setScreen("geometry:probability");
});
onEvent("button126", "click", function(event) {
  setScreen("geometry:pointsofconcurrency");
});

// 
//Geometry Back Buttons
onEvent("button98", "click", function(event) {
  setScreen("geometry");
});
onEvent("button100", "click", function(event) {
  setScreen("geometry");
});
onEvent("button102", "click", function(event) {
  setScreen("geometry");
});
onEvent("button104", "click", function(event) {
  setScreen("geometry");
});
onEvent("button106", "click", function(event) {
  setScreen("geometry");
});
onEvent("button108", "click", function(event) {
  setScreen("geometry");
});
onEvent("button110", "click", function(event) {
  setScreen("geometry");
});
onEvent("button112", "click", function(event) {
  setScreen("geometry");
});
onEvent("button114", "click", function(event) {
  setScreen("geometry");
});
onEvent("button116", "click", function(event) {
  setScreen("geometry");
});
onEvent("button118", "click", function(event) {
  setScreen("geometry");
});
onEvent("button120", "click", function(event) {
  setScreen("geometry");
});
onEvent("button122", "click", function(event) {
  setScreen("geometry");
});
onEvent("button128", "click", function(event) {
  setScreen("geometry");
});
// 
//slope of lines 
onEvent("geometry:slopesoflines", "keydown", function(event) {
  setTimeout(function() {
    var x1 = getNumber("text_input41");
    var y1 = getNumber("text_input42");
    var x2 = getNumber("text_input43");
    var y2 = getNumber("text_input44");
    if (getText("text_input41") == "") {
      x1 = 0;
    }
    if (getText("text_input42") == "") {
      y1 = 0;
    }
    if (getText("text_input43") == "") {
      x2 = 0;
    }
    if (getText("text_input44") == "") {
      y2 = 0;
    }
    var slope = (y2-y1) / (x2-x1);
    slope = slope.toFixed(3);
    setText("text_area10", "The slope of the line that passes through the points ("+x1+","+y1+") and ("+x2+","+y2+") is "+ slope+".");
  }, 10);
});
//distance between points
onEvent("geometry:distancebetweenpoints", "keydown", function(event) {
  setTimeout(function() {
    var x1 = getNumber("text_input45");
    var y1 = getNumber("text_input46");
    var x2 = getNumber("text_input47");
    var y2 = getNumber("text_input48");
    if (getText("text_input45") == "") {
      x1 = 0;
    }
    if (getText("text_input46") == "") {
      y1 = 0;
    }
    if (getText("text_input47") == "") {
      x2 = 0;
    }
    if (getText("text_input48") == "") {
      y2 = 0;
    }
    var distance = Math.sqrt((x2-x1) * (x2-x1)+(y2-y1) * (y2-y1));
    distance = distance.toFixed(3);
    setText("text_area12", (("The distance between the points ("+x1)+","+y1+") and ("+x2+","+y2+") is "+ distance)+".");
  }, 10);
});
//proving triangles congruent
onEvent("geometry:provingtrianglescongruent", "keydown", function(event) {
  function distance(x1, y1, x2, y2) {
    return (Math.sqrt((x2-x1) * (x2-x1)+(y2-y1) * (y2-y1)));
  }
  var AB;
  setTimeout(function() {
    for (var i = 49; i < 61; i++) {
      eval("var input"+i+" = getNumber(\"text_input"+i+"\")");
      var x = ((("if (getText(\"text_input"+i)+"\") == \"\") {input")+i)+" = 0}";
      console.log(x);
      eval(x);
    }
    AB = distance(input49, input50, input51, input52);
    BC = distance(input53, input54, input51, input52);
    AC = distance(input49, input50, input53, input54);
    // 
    KL = distance(input55, input56, input57, input58);
    LM = distance(input59, input60, input57, input58);
    KM = distance(input55, input56, input59, input60);
    // 
    if (AB == KL && (BC == LM && AC == KM)) {
      setText("text_area14", "△ABC ≅ △KLM as AB ≅ KL, BC ≅ LM and AC ≅ KM");
    } else {
      setText("text_area14", "△ABC ≇ △KLM as AB ≇ KL, BC ≇ LM or AC ≇ KM");
    }
  }, 10);
});
//angles of polygons
onEvent("geometry:anglesofpolygons", "keydown", function(event) {
  setTimeout(function() {
    var num = getNumber("text_input61");
    // 
    if (getText("dropdown5") == "-gon") {
      setText("text_area17", (("The sum of the interior angles in a "+num)+"-gon : ")+(180*(num-2)).toFixed(3));
    }
    if (getText("dropdown5") == "°") {
      setText("text_area17", (("The number of sides of a polygon which has the sum of interior angles of "+num)+" degrees: ")+(num/180+2).toFixed(3));
    }
  }, 10);
});
onEvent("dropdown5", "click", function(event) {
  setTimeout(function() {
    var num = getNumber("text_input61");
    // 
    if (getText("dropdown5") == "-gon") {
      setText("text_area17", (("The sum of the interior angles in a "+num)+"-gon : ")+(180*(num-2)).toFixed(3));
    }
    if (getText("dropdown5") == "°") {
      setText("text_area17", (("The number of sides of a polygon which has the sum of interior angles of "+num)+" degrees: ")+(num/180+2).toFixed(3));
    }
  }, 10);
});
//Vectors
onEvent("geometry:vectors", "keydown", function(event) {
  setTimeout(function() {
    var x1 = getNumber("text_input62");
    var y1 = getNumber("text_input63");
    var x2 = getNumber("text_input64");
    var y2 = getNumber("text_input65");
    if (getText("text_input62") == "") {
      x1 = 0;
    }
    if (getText("text_input63") == "") {
      y1 = 0;
    }
    if (getText("text_input64") == "") {
      x2 = 0;
    }
    if (getText("text_input65") == "") {
      y2 = 0;
    }
    var magnitude = (Math.sqrt((x2-x1) * (x2-x1)+(y2-y1) * (y2-y1)));
    var direction = (180 / Math.PI) * Math.atan((y2 - y1) / (x2 - x1));
    magnitude = magnitude.toFixed(3);
    direction = direction.toFixed(3);
    setText("text_area19", "The magnitude of vector LM is "+magnitude+".\n The vector LM has a direction of "+direction+" degrees.");
  }, 10);
});
//Measuring Angles and Arcs
onEvent("geometry:measuringanglesandarcs", "keydown", function(event) {
  setTimeout(function() {
    var r = getNumber("text_input66");
    var deg = getNumber("text_input67");
    if (getText("text_input66") == "") {
      r = 0;
    }
    if (getText("text_input67") == "") {
      deg = 0;
    }
    var arclength = (deg/360)*(2*r*Math.PI);
    arclength = arclength.toFixed(3);
    setText("text_area21", "The length of arc which has a central angle of "+deg+" degrees, and has a radius of "+r+" : "+arclength);
  }, 10);
});
//Equations of cirlces
onEvent("geometry:equationsofcircles", "keydown", function(event) {
  setTimeout(function() {
    var radius = getNumber("text_input71");
    var Cx = getNumber("text_input69");
    var Cy = getNumber("text_input70");
    if (getText("text_input71") == "") {
      radius = 0;
    }
    if (getText("text_input69") == "") {
      Cx = 0;
    }
    if (getText("text_input70") == "") {
      Cy = 0;
    }
    var equation = "(x - "+Cx+")² + (y - "+Cy+")² = "+(radius*radius);
    setText("text_area23", equation);
  }, 10);
});
//Areas of Circles and Sectors
onEvent("geometry:areasofcirclesandsectors", "keydown", function(event) {
  setTimeout(function() {
    var r = getNumber("text_input72");
    var deg = getNumber("text_input73");
    if (getText("text_input72") == "") {
      r = 0;
    }
    if (getText("text_input73") == "") {
      deg = 0;
    }
    var sectorarea = (deg/360)*((r*r)*Math.PI);
    sectorarea = sectorarea.toFixed(3);
    setText("text_area25", ("The area of sector which has a central angle of "+deg)+" degrees, and has a radius of "+r+" : "+sectorarea);
  }, 10);
});
//areas of regular polygons
onEvent("geometry:areasofregularpolygons", "keydown", function(event) {
  setTimeout(function() {
    var s = getNumber("text_input74");
    var n = getNumber("text_input75");
    if (getText("text_input74") == "") {
      s = 0;
    }
    if (getText("text_input75") == "") {
      n = 0;
    }
    var p = s*n;
    var a = s/(2 * Math.tan((180/n) * (Math.PI / 180)));
    var Area = (a*p)/2;
    Area = Area.toFixed(3);
    setText("text_area27", ((("The area of the regular polygon which has the length of sides as "+s)+" , and its number of sides as ")+n)+" : "+Area);
  }, 10);
});
//Surface areas
onEvent("dropdown6", "click", function(event) {
  setTimeout(function() {
    var Perimeter = getNumber("text_input76");
    var Area = getNumber("text_input77");
    var Height = getNumber("text_input78");
    if (getText("text_input76") == "") {
      Perimeter = 0;
    }
    if (getText("text_input77") == "") {
      Area = 0;
    }
    if (getText("text_input78") == "") {
      Height = 0;
    }
    var SurfaceArea;
    if (getText("dropdown6")=="Prism") {
      SurfaceArea = 2 * Area + Perimeter * Height;
      SurfaceArea = slope.toFixed(3);
      setText("text_area29", ("The area of this "+getText("dropdown6")+" is: ")+SurfaceArea);
    } else if (getText("dropdown6")=="Regular pyramid") {
      var apothem = (2*Area)/Perimeter;
      var slantheight = Math.sqrt(Height*Height+(apothem*apothem));
      SurfaceArea = 0.5 * (Perimeter * slantheight) + Area;
      SurfaceArea = slope.toFixed(3);
      setText("text_area29", ("The area of this "+getText("dropdown6")+" is: ")+SurfaceArea);
    } else {
      setText("text_area29", "Please choose an option");
    }
  }, 10);
});
onEvent("geometry:surfaceareas", "keydown", function(event) {
  setTimeout(function() {
    var Perimeter = getNumber("text_input76");
    var Area = getNumber("text_input77");
    var Height = getNumber("text_input78");
    if (getText("text_input76") == "") {
      Perimeter = 0;
    }
    if (getText("text_input77") == "") {
      Area = 0;
    }
    if (getText("text_input78") == "") {
      Height = 0;
    }
    var SurfaceArea;
    if (getText("dropdown6")=="Prism") {
      SurfaceArea = 2 * Area + Perimeter * Height;
      SurfaceArea = slope.toFixed(3);
      setText("text_area29", ("The area of this "+getText("dropdown6")+" is: ")+SurfaceArea);
    } else if (getText("dropdown6")=="Regular pyramid") {
      var apothem = (2*Area)/Perimeter;
      var slantheight = Math.sqrt(Height*Height+(apothem*apothem));
      SurfaceArea = 0.5 * (Perimeter * slantheight) + Area;
      SurfaceArea = slope.toFixed(3);
      setText("text_area29", ("The area of this "+getText("dropdown6")+" is: ")+SurfaceArea);
    } else {
      setText("text_area29", "Please choose an option");
    }
  }, 10);
});
//volume
onEvent("dropdown7", "click", function(event) {
  setTimeout(function() {
    var Area = getNumber("text_input79");
    var Height = getNumber("text_input80");
    if (getText("text_input79") == "") {
      Area = 0;
    }
    if (getText("text_input80") == "") {
      Height = 0;
    }
    var Volume;
    if (getText("dropdown7")=="Prism") {
      Volume = Area*Height;
      Volume = Volume.toFixed(3);
      setText("text_area31", (("The volume of this "+getText("dropdown7"))+" is: ")+Volume);
    } else if (getText("dropdown7")=="Regular pyramid") {
      Volume = Area*Height/3;
      Volume = Volume.toFixed(3);
      setText("text_area31", (("The volume of this "+getText("dropdown7"))+" is: ")+Volume);
    } else {
      setText("text_area31", "Please choose an option");
    }
  }, 10);
});
onEvent("geometry:volumes", "keydown", function(event) {
  setTimeout(function() {
    var Area = getNumber("text_input79");
    var Height = getNumber("text_input80");
    if (getText("text_input79") == "") {
      Area = 0;
    }
    if (getText("text_input80") == "") {
      Height = 0;
    }
    var Volume;
    if (getText("dropdown7")=="Prism") {
      Volume = Area*Height;
      Volume = Volume.toFixed(3);
      setText("text_area31", (("The volume of this "+getText("dropdown7"))+" is: ")+Volume);
    } else if (getText("dropdown7")=="Regular pyramid") {
      Volume = Area*Height/3;
      Volume = Volume.toFixed(3);
      setText("text_area31", (("The volume of this "+getText("dropdown7"))+" is: ")+Volume);
    } else {
      setText("text_area31", "Please choose an option");
    }
  }, 10);
});
//permutationandcombination
onEvent("geometry:permutationsandcombinations", "keydown", function(event) {
  var Mathb = {factorial : function(num) {
         if (num === 0 || num === 1)
             return 1; else {
           return num*(Mathb.factorial(num-1));
         }
      }};
  setTimeout(function() {
    var n = getNumber("text_input81");
    var r = getNumber("text_input82");
    if (getText("text_input81") == "") {
      n = 0;
    }
    if (getText("text_input82") == "") {
      r = 0;
    }
    var numofpermutations = Mathb.factorial(n) / Mathb.factorial(n-r);
    var numofcombinations = Mathb.factorial(n) / (Mathb.factorial(r) * Mathb.factorial(n-r));
    numofpermutations = numofpermutations.toFixed(3);
    numofcombinations = numofcombinations.toFixed(3);
    setText("text_area33", "Permutations of a sample set which has a total amount in a set of "+n+" and amount in each sub-set of "+r+" : "+numofpermutations+".");
    setText("text_area33", getText("text_area33") + ("\n" + (("Combinations of a sample set which has a total amount in a set of "+n)+" and amount in each sub-set of "+r+" : "+numofcombinations+".")));
  }, 10);
});
//Probability
onEvent("geometry:probability", "keydown", function(event) {
  setTimeout(function() {
    var A = getNumber("text_input83");
    var B = getNumber("text_input84");
    if (getText("text_input83") == "") {
      A = 0;
    }
    if (getText("text_input84") == "") {
      B = 0;
    }
    var complementofA = 1-A;
    var complementofB = 1-B;
    var intersectionofaandb = A*B;
    var unionofaandb = (A+B)-intersectionofaandb;
    var exclusiveorofaandb = (A+B) - 2 * intersectionofaandb;
    setText("text_area35", "Complement of event A (P(A')): "+ complementofA);
    setText("text_area35", (getText("text_area35") + "\n") + ("Complement of event B (P(B')): "+ complementofB));
    setText("text_area35", (getText("text_area35") + "\n") + ("Probability of event A and/or B (P(A∪B)): "+ unionofaandb));
    setText("text_area35", (getText("text_area35") + "\n") + ("Probability of event A and B (P(A∩B)): "+ intersectionofaandb));
    setText("text_area35", (getText("text_area35") + "\n") + ("Probability of event A and B, but not both: "+ exclusiveorofaandb));
  }, 10);
});
//Points of Concurrency
var radio1 = true;
onEvent("radio_button1", "mousedown", function(event) {
  radio1 = true;
  onEvent("geometry:pointsofconcurrency", "mousemove", function(event) {
    if (radio1==true) {
      drawlines();
      if (getText("dropdown8") == "Choose an option") {
        
      } else {
        eval("draw"+getText("dropdown8")+"lines()");
      }
      setPosition("radio_button1", event.x+-13, event.y+-13);
    }
  });
});
// 
var radio2 = true;
onEvent("radio_button2", "mousedown", function(event) {
  radio2 = true;
  onEvent("geometry:pointsofconcurrency", "mousemove", function(event) {
    if (radio2==true) {
      drawlines();
      if (getText("dropdown8") == "Choose an option") {
        
      } else {
        eval("draw"+getText("dropdown8")+"lines()");
      }
      setPosition("radio_button2", event.x-13, event.y-13);
    }
  });
});
// 
var radio3 = true;
onEvent("radio_button3", "mousedown", function(event) {
  radio3 = true;
  onEvent("geometry:pointsofconcurrency", "mousemove", function(event) {
    if (radio3==true) {
      drawlines();
      if (getText("dropdown8") == "Choose an option") {
        
      } else {
        eval("draw"+getText("dropdown8")+"lines()");
      }
      setPosition("radio_button3", event.x-13, event.y-13);
    }
  });
});
function distance(x1, y1, x2, y2) {
  var one = x1-x2;
  var two = y1-y2;
  return (Math.sqrt(one*one+two*two));
}
// 
onEvent("geometry:pointsofconcurrency", "mouseup", function(event) {
  radio1 = false;
  radio2 = false;
  radio3 = false;
});
//http://jwilson.coe.uga.edu/EMAT6680/Dunbar/Assignment4/Assignment4_KD.htm
setActiveCanvas("canvas2");
function drawlines() {
  clearCanvas();
  line(getProperty("radio_button1", "x")+13, getProperty("radio_button1", "y")+13, getProperty("radio_button2", "x")+13, getProperty("radio_button2", "y")+13);
  line(getProperty("radio_button2", "x")+13, getProperty("radio_button2", "y")+13, getProperty("radio_button3", "x")+13, getProperty("radio_button3", "y")+13);
  line(getProperty("radio_button1", "x")+13, getProperty("radio_button1", "y")+13, getProperty("radio_button3", "x")+13, getProperty("radio_button3", "y")+13);
}
function drawCentroidlines() {
  var midx23 = ((getProperty("radio_button2", "x")+13) + (getProperty("radio_button3", "x")+13)) / 2;
  var midy23 = ((getProperty("radio_button2", "y")+13) + (getProperty("radio_button3", "y")+13)) / 2;
  var midx13 = ((getProperty("radio_button1", "x")+13) + (getProperty("radio_button3", "x")+13)) / 2;
  var midy13 = ((getProperty("radio_button1", "y")+13) + (getProperty("radio_button3", "y")+13)) / 2;
  var midx12 = ((getProperty("radio_button1", "x")+13) + (getProperty("radio_button2", "x")+13)) / 2;
  var midy12 = ((getProperty("radio_button1", "y")+13) + (getProperty("radio_button2", "y")+13)) / 2;
  line(getProperty("radio_button1", "x")+13, getProperty("radio_button1", "y")+13, midx23, midy23);
  line(getProperty("radio_button2", "x")+13, getProperty("radio_button2", "y")+13, midx13, midy13);
  line(getProperty("radio_button3", "x")+13, getProperty("radio_button3", "y")+13, midx12, midy12);
}
function drawOrthocenterlines() {
  var x1 = getProperty("radio_button1", "x")+-147;
  var y1 = transformy(getProperty("radio_button1", "y")+13);
  var x2 = getProperty("radio_button2", "x")+-147;
  var y2 = transformy(getProperty("radio_button2", "y")+13);
  var x3 = getProperty("radio_button3", "x")+-147;
  var y3 = transformy(getProperty("radio_button3", "y")+13);
  var m12 = (y1-y2)/(x1-x2);
  var m23 = (y2-y3)/(x2-x3);
  var m13 = (y1-y3)/(x1-x3);
  //1var
  var A1 = m23*-1;
  var B1 = 1;
  var C1 = A1*x2 + y2;
  var D1 = 1/m23;
  var E1 = 1;
  var F1 = D1*x1+y1;
  //1sol
  var ax1 = (C1*E1-B1*F1) / ((A1*E1) - (B1*D1));
  var ay1 = (A1*F1-C1*D1) / ((A1*E1) - (B1*D1));
  //2var
  var A2 = m13*-1;
  var B2 = 1;
  var C2 = A2*x3 + y3;
  var D2 = 1/m13;
  var E2 = 1;
  var F2 = D2*x2+y2;
  //2sol
  var ax2 = (C2*E2-B2*F2) / (A2*E2 - B2*D2);
  var ay2 = (A2*F2-C2*D2) / (A2*E2 - B2*D2);
  //3var
  var A3 = m12*-1;
  var B3 = 1;
  var C3 = A3*x1 + y1;
  var D3 = 1/m12;
  var E3 = 1;
  var F3 = D3*x3+y3;
  //3sol
  var ax3 = (C3*E3-B3*F3) / (A3*E3 - B3*D3);
  var ay3 = (A3*F3-C3*D3) / (A3*E3 - B3*D3);
  line(getProperty("radio_button1", "x")+13, getProperty("radio_button1", "y")+13, transformx(ax1), transformy(ay1));
  line(getProperty("radio_button2", "x")+13, getProperty("radio_button2", "y")+13, transformx(ax2), transformy(ay2));
  line(getProperty("radio_button3", "x")+13, getProperty("radio_button3", "y")+13, transformx(ax3), transformy(ay3));
}
function date_2_1_2018orthocenter() {
  var ax3 = (((m12*x1*y1) - y1) + (((1/m12)*(x3)) + y3)) / (m12+(1/m12));
  var ax1 = (((m23*x2)*y2 - y2) + ((1/m23)*(x1) + y1)) / (m23+1/m23);
  var ax2 = (((m13*x3)*y3 - y3) + ((1/m13)*(x2) + y2)) / (m13+1/m13);
  var ay3 = (m12*(ax3-x1))+y1;
  var ay1 = m23*(ax1-x2)+y2;
  var ay2 = m13*(ax2-x3)+y3;
}
function drawCircumcenterlines() {
  var midx23 = ((getProperty("radio_button2", "x")+13) + (getProperty("radio_button3", "x")+13)) / 2;
  var midy23 = ((getProperty("radio_button2", "y")+13) + (getProperty("radio_button3", "y")+13)) / 2;
  var midx13 = ((getProperty("radio_button1", "x")+13) + (getProperty("radio_button3", "x")+13)) / 2;
  var midy13 = ((getProperty("radio_button1", "y")+13) + (getProperty("radio_button3", "y")+13)) / 2;
  var midx12 = ((getProperty("radio_button1", "x")+13) + (getProperty("radio_button2", "x")+13)) / 2;
  var midy12 = ((getProperty("radio_button1", "y")+13) + (getProperty("radio_button2", "y")+13)) / 2;
  // 
  var x1 = getProperty("radio_button1", "x")+-147;
  var y1 = transformy(getProperty("radio_button1", "y")+13);
  var x2 = getProperty("radio_button2", "x")+-147;
  var y2 = transformy(getProperty("radio_button2", "y")+13);
  var x3 = getProperty("radio_button3", "x")+-147;
  var y3 = transformy(getProperty("radio_button3", "y")+13);
  var m12 = (y1-y2)/(x1-x2);
  var m23 = (y2-y3)/(x2-x3);
  var m13 = (y1-y3)/(x1-x3);
  //1var
  var A1 = m23*-1;
  var B1 = 1;
  var C1 = A1*x2 + y2;
  var D1 = 1/m12;
  var E1 = 1;
  var F1 = D1*((x1+x2)/2)+((y1+y2)/2);
  //1sol
  var ax1 = (C1*E1-B1*F1) / ((A1*E1) - (B1*D1));
  var ay1 = (A1*F1-C1*D1) / ((A1*E1) - (B1*D1));
  //2var
  var A2 = m13*-1;
  var B2 = 1;
  var C2 = A2*x3 + y3;
  var D2 = 1/m23;
  var E2 = 1;
  var F2 = D2*((x2+x3)/2)+(y2+y3)/2;
  //2sol
  var ax2 = (C2*E2-B2*F2) / (A2*E2 - B2*D2);
  var ay2 = (A2*F2-C2*D2) / (A2*E2 - B2*D2);
  //3var
  var A3 = m12*-1;
  var B3 = 1;
  var C3 = A3*x1 + y1;
  var D3 = 1/m13;
  var E3 = 1;
  var F3 = D3*((x1+x3)/2)+(y1+y3)/2;
  //3sol
  var ax3 = (C3*E3-B3*F3) / (A3*E3 - B3*D3);
  var ay3 = (A3*F3-C3*D3) / (A3*E3 - B3*D3);
  // 
  line(midx12, midy12, transformx(ax1), transformy(ay1));
  line(midx23, midy23, transformx(ax2), transformy(ay2));
  line(midx13, midy13, transformx(ax3), transformy(ay3));
}
function drawIncenterlines() {
  var midx23 = ((getProperty("radio_button2", "x")+13) + (getProperty("radio_button3", "x")+13)) / 2;
  var midy23 = ((getProperty("radio_button2", "y")+13) + (getProperty("radio_button3", "y")+13)) / 2;
  var midx13 = ((getProperty("radio_button1", "x")+13) + (getProperty("radio_button3", "x")+13)) / 2;
  var midy13 = ((getProperty("radio_button1", "y")+13) + (getProperty("radio_button3", "y")+13)) / 2;
  var midx12 = ((getProperty("radio_button1", "x")+13) + (getProperty("radio_button2", "x")+13)) / 2;
  var midy12 = ((getProperty("radio_button1", "y")+13) + (getProperty("radio_button2", "y")+13)) / 2;
  line(getProperty("radio_button1", "x")+13, getProperty("radio_button1", "y")+13, midx23, midy23);
  line(getProperty("radio_button2", "x")+13, getProperty("radio_button2", "y")+13, midx13, midy13);
  line(getProperty("radio_button3", "x")+13, getProperty("radio_button3", "y")+13, midx12, midy12);
}
// 
//comments, credits
//couldn't use data_no.
onEvent("button183", "click", function(event) {
  setScreen("likeandunlike");
  readRecords("vote", {}, function(records) {
    var updatedRecord = records[0];
    updatedRecord.data = updatedRecord.data+1;
    updateRecord("vote", updatedRecord);
    setTimeout(function() {
      drawChartFromRecords("chart1", "pie", "vote", ["likeorunlike", "data"]);
      drawChartFromRecords("chart2", "bar", "vote", ["likeorunlike", "data"]);
    }, 500);
  });
});
onEvent("button185", "click", function(event) {
  var ideas = getText("text_area58");
  setText("text_area58", "Thank You!");
  readRecords("ideas_and_comments", {}, function(records) {
    var updatedRecord = records[0];
    updatedRecord.text = updatedRecord.text+ideas+"\n";
    updateRecord("ideas_and_comments", updatedRecord);
  });
});
// 
var screensaver = getTime();
onEvent("screen1", "click", function(event) {
  screensaver = getTime();
});
onEvent("image31", "click", function(event) {
  setScreen("screen1");
});
