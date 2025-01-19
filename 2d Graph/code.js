setText("text_input12_2d", "-17");
setText("text_input11_2d", "17");
setText("text_input14_2d", "-19.0517");
setText("text_input13_2d", "19.0517");
setText("text_input7_2d", "1");
setText("text_input8_2d", "1");
setText("text_input9_2d", "5");
setText("text_input10_2d", "5");
setText("text_input20_2d", "-10");
setText("text_input21_2d", "10");
var func_color1 = getProperty("text_input1_2d", "border-color");
var func_color2 = getProperty("text_input2_2d", "border-color");
var func_color3 = getProperty("text_input3_2d", "border-color");
var func_color4 = getProperty("text_input4_2d", "border-color");
var func_color5 = getProperty("text_input5_2d", "border-color");
var func_color6 = getProperty("text_input6_2d", "border-color");
var Para_color1 = '#08f';
var Para_color2 = '#f33';
var Para_color3 = '#360';
function drawThe2dGraph() {
  var a = getText("text_input12_2d");
  var b = getText("text_input11_2d");
  var c = getText("text_input14_2d");
  var d = getText("text_input13_2d");
  var e = getText("text_input7_2d");
  var f = getText("text_input8_2d");
  var g = getText("text_input9_2d");
  var h = getText("text_input10_2d");
  // 
  var eq1 = getText("text_input1_2d");
  var eq2 = getText("text_input2_2d");
  var eq3 = getText("text_input3_2d");
  var eq4 = getText("text_input4_2d");
  var eq5 = getText("text_input5_2d");
  var eq6 = getText("text_input6_2d");
  // 
  var t1 = getText("text_input20_2d");
  var t2 = getText("text_input21_2d");
  var theurl = 'https://graphsketch.com/render.php?eqn1_color=1&eqn1_eqn=&eqn2_color=2&eqn2_eqn=&eqn3_color=3&eqn3_eqn=&eqn4_color=4&eqn4_eqn=&eqn5_color=5&eqn5_eqn=&eqn6_color=6&eqn6_eqn=&x_min=-17&x_max=17&y_min=-19.0517&y_max=19.0517&x_tick=1&y_tick=1&x_label_freq=5&y_label_freq=5&do_grid=0&do_grid=1&bold_labeled_lines=0&bold_labeled_lines=1&line_width=4&image_w=290&image_h=325';
  if (getText('dropdown1_2d')=="Functions") {
    theurl = encodeURI('https://graphsketch.com/render.php?eqn1_color=1&eqn1_eqn='+eq1+'&eqn2_color=2&eqn2_eqn='+eq3+'&eqn3_color=3&eqn3_eqn='+eq5+'&eqn4_color=4&eqn4_eqn='+eq2+'&eqn5_color=5&eqn5_eqn='+eq4+'&eqn6_color=6&eqn6_eqn='+eq6+('&x_min='+a+'&x_max='+b+'&y_min='+c+'&y_max='+d+'&x_tick='+e+'&y_tick='+f+'&x_label_freq='+g+'&y_label_freq='+h+'&do_grid=0&do_grid=1&bold_labeled_lines=0&bold_labeled_lines=1&line_width=4&image_w=290&image_h=325'));
  } else {
    theurl = encodeURI('https://graphsketch.com/render.php?mode=para&eqn1_color=1&eqn1_x='+eq1+'&eqn1_y='+eq2+'&eqn2_color=2&eqn2_x='+eq3+'&eqn2_y='+eq4+'&eqn3_color=3&eqn3_x='+eq5+'&eqn3_y='+eq6+(('&x_min='+a+'&x_max='+b+'&y_min='+c+'&y_max='+d+'&t_min='+t1+'&t_max='+t2+'&x_tick=')+e+'&y_tick='+f+'&x_label_freq='+g+'&y_label_freq='+h+'&do_grid=0&do_grid=1&bold_labeled_lines=0&bold_labeled_lines=1&line_width=4&image_w=290&image_h=325'));
  }
  theurl = theurl.replace(/\+/g, "%2B");
  setImageURL("image1_2d", theurl);
}
onEvent("button1_2d", "click", function(event) {
  drawThe2dGraph();
});
onEvent("dropdown1_2d", "change", function( ) {
  setText("text_input1_2d", "");
  setText("text_input2_2d", "");
  setText("text_input3_2d", "");
  setText("text_input4_2d", "");
  setText("text_input5_2d", "");
  setText("text_input6_2d", "");
  setImageURL("image1_2d", 'https://graphsketch.com/render.php?eqn1_color=1&eqn1_eqn=&eqn2_color=2&eqn2_eqn=&eqn3_color=3&eqn3_eqn=&eqn4_color=4&eqn4_eqn=&eqn5_color=5&eqn5_eqn=&eqn6_color=6&eqn6_eqn=&x_min=-17&x_max=17&y_min=-19.0517&y_max=19.0517&x_tick=1&y_tick=1&x_label_freq=5&y_label_freq=5&do_grid=0&do_grid=1&bold_labeled_lines=0&bold_labeled_lines=1&line_width=4&image_w=290&image_h=325');
  setTimeout(function() {
    var x = getText("dropdown1_2d");
    if (x=="Functions") {
      hideElement("label11_2d");
      hideElement("text_input20_2d");
      hideElement("text_input21_2d");
      for (var i = 1; i < 7; i++) {
        setProperty(("text_input"+i)+"_2d", "placeholder", "f(x)");
        setProperty(("text_input"+i)+"_2d", "border-color", eval('func_color'+i));
      }
    } else {
      showElement("label11_2d");
      showElement("text_input20_2d");
      showElement("text_input21_2d");
      for (var i = 1; i < 7; i++) {
        if (i%2==1) {
          var id = (i+1)/2;
          setProperty(("text_input"+i)+"_2d", "placeholder", "x(t)");
          setProperty(("text_input"+i)+"_2d", "border-color", eval('Para_color'+id));
        } else {
          var id1 = (i+0)/2;
          setProperty(("text_input"+i)+"_2d", "placeholder", "y(t)");
          setProperty(("text_input"+i)+"_2d", "border-color", eval('Para_color'+id1));
        }
      }
    }
  }, 200);
});
//graphControls_move_zoom
onEvent("image11_2d", "click", function( ) {
  setText("text_input12_2d", getNumber("text_input12_2d") - getNumber("text_input9_2d") * getNumber("text_input7_2d"));
  setText("text_input11_2d", getNumber("text_input11_2d") - getNumber("text_input9_2d") * getNumber("text_input7_2d"));
  drawThe2dGraph();
});
onEvent("image21_2d", "click", function( ) {
  setText("text_input12_2d", getNumber("text_input12_2d") + getNumber("text_input9_2d") * getNumber("text_input7_2d"));
  setText("text_input11_2d", getNumber("text_input11_2d") + getNumber("text_input9_2d") * getNumber("text_input7_2d"));
  drawThe2dGraph();
});
onEvent("image41_2d", "click", function( ) {
  setText("text_input13_2d", getNumber("text_input13_2d") - getNumber("text_input8_2d") * getNumber("text_input10_2d"));
  setText("text_input14_2d", getNumber("text_input14_2d") - getNumber("text_input8_2d") * getNumber("text_input10_2d"));
  drawThe2dGraph();
});
onEvent("image31_2d", "click", function( ) {
  setText("text_input13_2d", getNumber("text_input13_2d") + getNumber("text_input8_2d") * getNumber("text_input10_2d"));
  setText("text_input14_2d", getNumber("text_input14_2d") + getNumber("text_input8_2d") * getNumber("text_input10_2d"));
  drawThe2dGraph();
});
onEvent("zoomin_2d", "click", function( ) {
  var avgx = (getNumber("text_input12_2d")+getNumber("text_input11_2d"))/2;
  var x1 = avgx - getNumber("text_input12_2d");
  var x2 = getNumber("text_input11_2d") - avgx;
  setText("text_input12_2d", avgx-x1/1.5);
  setText("text_input11_2d", avgx+x2/1.5);
  var avgy = (getNumber("text_input13_2d")+getNumber("text_input14_2d"))/2;
  var y1 = avgy - getNumber("text_input14_2d");
  var y2 = getNumber("text_input13_2d") - avgy;
  setText("text_input14_2d", avgy-y1/1.5);
  setText("text_input13_2d", avgy+y2/1.5);
  setNumber("text_input9_2d", 5);
  setNumber("text_input7_2d",AutomateXYLabels(11,12));
  setNumber("text_input10_2d", 5);
  setNumber("text_input8_2d",AutomateXYLabels(13,14));
  drawThe2dGraph();
});
onEvent("zoomout_2d", "click", function( ) {
  var avgx = (getNumber("text_input12_2d")+getNumber("text_input11_2d"))/2;
  var x1 = avgx - getNumber("text_input12_2d");
  var x2 = getNumber("text_input11_2d") - avgx;
  setText("text_input12_2d", avgx-x1*1.5);
  setText("text_input11_2d", avgx+x2*1.5);
  var avgy = (getNumber("text_input13_2d")+getNumber("text_input14_2d"))/2;
  var y1 = avgy - getNumber("text_input14_2d");
  var y2 = getNumber("text_input13_2d") - avgy;
  setText("text_input14_2d", avgy-y1*1.5);
  setText("text_input13_2d", avgy+y2*1.5);
  setNumber("text_input9_2d", 5);
  setNumber("text_input7_2d",AutomateXYLabels(11,12));
  setNumber("text_input10_2d", 5);
  setNumber("text_input8_2d",AutomateXYLabels(13,14));
  drawThe2dGraph();
});
onEvent("screen1_2d", "keydown", function(event) {
  var key = event.key;
  var allowedKeys = ['a','s','d','w','Up','Down'];
  if (event.targetId=='screen1_2d' && allowedKeys.indexOf(key) != -1) {
    if (key=='a') {
      setText("text_input12_2d", getNumber("text_input12_2d") - getNumber("text_input9_2d") * getNumber("text_input7_2d"));
      setText("text_input11_2d", getNumber("text_input11_2d") - getNumber("text_input9_2d") * getNumber("text_input7_2d"));
    }
    if (key=='d') {
      setText("text_input12_2d", getNumber("text_input12_2d") + getNumber("text_input9_2d") * getNumber("text_input7_2d"));
      setText("text_input11_2d", getNumber("text_input11_2d") + getNumber("text_input9_2d") * getNumber("text_input7_2d"));
    }
    if (key=='w') {
      setText("text_input13_2d", getNumber("text_input13_2d") + getNumber("text_input8_2d") * getNumber("text_input10_2d"));
      setText("text_input14_2d", getNumber("text_input14_2d") + getNumber("text_input8_2d") * getNumber("text_input10_2d"));
    }
    if (key=='s') {
      setText("text_input13_2d", getNumber("text_input13_2d") - getNumber("text_input8_2d") * getNumber("text_input10_2d"));
      setText("text_input14_2d", getNumber("text_input14_2d") - getNumber("text_input8_2d") * getNumber("text_input10_2d"));
    }
    // 
    var avgx;
    var avgy;
    if ((cursorX >= 15 && cursorX <= 305) && (cursorY >= 15 && cursorY <= 340)) {
      avgx = graphX;
      avgy = graphY;
    } else {
      avgx = (getNumber("text_input12_2d")+getNumber("text_input11_2d"))/2;
      avgy = (getNumber("text_input13_2d")+getNumber("text_input14_2d"))/2;
    }
    var x1 = avgx - getNumber("text_input12_2d");
    var x2 = getNumber("text_input11_2d") - avgx;
    var y1 = avgy - getNumber("text_input14_2d");
    var y2 = getNumber("text_input13_2d") - avgy;
    if (key=='Up') {
      setText("text_input12_2d", avgx-x1/1.5);
      setText("text_input11_2d", avgx+x2/1.5);
      setText("text_input14_2d", avgy-y1/1.5);
      setText("text_input13_2d", avgy+y2/1.5);
      setNumber("text_input9_2d", 5);
      setNumber("text_input7_2d",AutomateXYLabels(11,12));
      setNumber("text_input10_2d", 5);
      setNumber("text_input8_2d",AutomateXYLabels(13,14));
    }
    if (key=='Down') {
      setText("text_input12_2d", avgx-x1*1.5);
      setText("text_input11_2d", avgx+x2*1.5);
      setText("text_input14_2d", avgy-y1*1.5);
      setText("text_input13_2d", avgy+y2*1.5);
      setNumber("text_input9_2d", 5);
      setNumber("text_input7_2d",AutomateXYLabels(11,12));
      setNumber("text_input10_2d", 5);
      setNumber("text_input8_2d",AutomateXYLabels(13,14));
    }
    drawThe2dGraph();
  }
});
var cursorX = 0;
var cursorY = 0;
var graphX = 0;
var graphY = 0;
onEvent("screen1_2d", "mousemove", function(event) {
  cursorX = event.x;
  cursorY = event.y;
  if ((cursorX >= 15 && cursorX <= 305) && (cursorY >= 15 && cursorY <= 340)) {
    graphX = ((getNumber("text_input11_2d") - getNumber("text_input12_2d"))*(cursorX-15))/290+getNumber('text_input12_2d');
    graphY = getNumber('text_input13_2d')-((getNumber("text_input13_2d") - getNumber("text_input14_2d"))*(cursorY-15))/325;
    setText("Pos_2d", (("("+graphX.toFixed(2))+","+graphY.toFixed(2))+")");
  } else {
    setText("Pos_2d", "Not on Graph");
  }
});
onEvent("screen1_2d", "click", function(event) {
  if ((event.x >= 15 && event.x <= 305) && (event.y >= 15 && event.y <= 340)) {
    var graphX1 = ((getNumber("text_input11_2d") - getNumber("text_input12_2d"))*(cursorX-15))/290+getNumber('text_input12_2d');
    var graphY1 = getNumber('text_input13_2d')-((getNumber("text_input13_2d") - getNumber("text_input14_2d"))*(cursorY-15))/325;
    setText("Pos_2d", (("("+graphX1.toFixed(2))+","+graphY1.toFixed(2))+")");
  } else {
    setText("Pos_2d", "Not on Graph");
  }
});
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
//automating it like desmos
function AutomateXYLabels(box1,box2) {
  var XLabel = (getNumber("text_input"+box1+"_2d") - getNumber("text_input"+box2+"_2d")) / 5;
  var NumberOfDigits = Math.round(getBaseLog(10,XLabel));
  var NearestArray = [1,2,5];
  var MultiplyNearestArrayBy = [NumberOfDigits-1,NumberOfDigits];
  var XLabelList = [];
  var LeastDiff = [];
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
      appendItem(XLabelList, NearestArray[j]*Math.pow(10,MultiplyNearestArrayBy[i]));
      appendItem(LeastDiff, Math.abs(NearestArray[j]*Math.pow(10,MultiplyNearestArrayBy[i])-XLabel));
    }
  }
  XLabel = XLabelList[(LeastDiff.indexOf(eval("Math.min("+LeastDiff.toString()+")")))];
  return (XLabel/5);
}
