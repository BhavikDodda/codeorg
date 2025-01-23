var arrayside1;
var arrayside2;
var arrayside3;
var arrayside4;
var arrayside5;
var arrayside6;
var moves = [];
var times = 0;
onEvent("button2", "click", function(event) {
  eval(("moves = ["+getText("text_input1"))+"]");
  console.log(moves);
  times = 0;
  var x;
  x = "itisfalse";
  while ((x ==="itisfalse")) {
    for (var i = 0; (i < moves.length && x=="itisfalse"); i++) {
      eval(moves[i])();
    }
    times = times+1;
    if (solved()===true) {
      x = "itistrue";
    } else {
      x = "itisfalse";
    }
    setText("text_area1", times);
  }
  setKeyValue(getText("text_input1"), times.toString());
});
function myFunction() {
  arrayside1 = [(getText("text_area20")),(getText("text_area21")),(getText("text_area22")),(getText("text_area9")),(getText("text_area23")),(getText("text_area19")),(getText("text_area26")),(getText("text_area25")),(getText("text_area6"))];
  arrayside2 = [(getText("text_area8")),(getText("text_area11")),(getText("text_area12")),(getText("text_area13")),(getText("text_area14")),(getText("text_area15")),(getText("text_area16")),(getText("text_area17")),(getText("text_area18"))];
  arrayside3 = [(getText("text_area24")),(getText("text_area27")),(getText("text_area28")),(getText("text_area30")),(getText("text_area29")),(getText("text_area31")),(getText("text_area32")),(getText("text_area33")),(getText("text_area34"))];
  arrayside4 = [(getText("text_area44")),(getText("text_area45")),(getText("text_area50")),(getText("text_area51")),(getText("text_area52")),(getText("text_area49")),(getText("text_area46")),(getText("text_area48")),(getText("text_area47"))];
  arrayside5 = [(getText("text_area53")),(getText("text_area54")),(getText("text_area57")),(getText("text_area59")),(getText("text_area58")),(getText("text_area55")),(getText("text_area61")),(getText("text_area60")),(getText("text_area56"))];
  arrayside6 = [(getText("text_area35")),(getText("text_area36")),(getText("text_area39")),(getText("text_area42")),(getText("text_area41")),(getText("text_area38")),(getText("text_area40")),(getText("text_area43")),(getText("text_area37"))];
}
arrayside1 = ["o","w","b","g","o","r","w","g","g"];
arrayside2 = ["o","r","g","w","w","r","b","w","r"];
arrayside3 = ["o","o","r","b","y","b","o","o","g"];
arrayside4 = ["r","y","w","b","r","o","y","y","g"];
arrayside5 = ["b","b","y","y","g","y","y","g","w"];
arrayside6 = ["b","o","w","r","b","w","y","g","r"];
myFunction();
for (var i = 0; i < 9; i++) {
  var side1 = [20,21,22,9,23,19,26,25,6];
  var side2 = [8,11,12,13,14,15,16,17,18];
  var side3 = [24,27,28,30,29,31,32,33,34];
  var side4 = [44,45,50,51,52,49,46,48,47];
  var side5 = [53,54,57,59,58,55,61,60,56];
  var side6 = [35,36,39,42,41,38,40,43,37];
  setText("text_area"+side1[i], arrayside1[i]);
  setText("text_area"+side2[i], arrayside2[i]);
  setText("text_area"+side3[i], arrayside3[i]);
  setText("text_area"+side4[i], arrayside4[i]);
  setText("text_area"+side5[i], arrayside5[i]);
  setText("text_area"+side6[i], arrayside6[i]);
}
function solved() {
  if ((((((getText("text_area8") == getText("text_area13") && getText("text_area13") == getText("text_area16")) && (getText("text_area11") == getText("text_area14") && getText("text_area14") == getText("text_area17"))) && ((getText("text_area12") == getText("text_area15") && getText("text_area15") == getText("text_area18")) && (getText("text_area13") == getText("text_area14") && getText("text_area14") == getText("text_area15")))) && ((getText("text_area20") == getText("text_area9") && getText("text_area9") == getText("text_area26")) && (getText("text_area21") == getText("text_area23") && getText("text_area23") == getText("text_area25"))) && ((getText("text_area22") == getText("text_area19") && getText("text_area19") == getText("text_area6")) && (getText("text_area9") == getText("text_area23") && getText("text_area23") == getText("text_area19")))) &&((getText("text_area24") == getText("text_area30") && getText("text_area30") == getText("text_area32")) && (getText("text_area27") == getText("text_area29") && getText("text_area29") == getText("text_area33"))) && ((getText("text_area28") == getText("text_area31") && getText("text_area31") == getText("text_area34")) && (getText("text_area30") == getText("text_area29") && getText("text_area29") == getText("text_area31"))) ) && ((((getText("text_area44") == getText("text_area51") && getText("text_area51") == getText("text_area46")) && (getText("text_area45") == getText("text_area52") && getText("text_area52") == getText("text_area48"))) && ((getText("text_area50") == getText("text_area49") && getText("text_area49") == getText("text_area47")) && (getText("text_area51") == getText("text_area52") && getText("text_area52") == getText("text_area49")))) && ((((getText("text_area53") == getText("text_area59") && getText("text_area59") == getText("text_area61")) && (getText("text_area54") == getText("text_area58") && getText("text_area58") == getText("text_area60"))) && ((getText("text_area57") == getText("text_area55") && getText("text_area55") == getText("text_area56")) && (getText("text_area59") == getText("text_area58") && getText("text_area58") == getText("text_area55")))) && (((getText("text_area35") == getText("text_area42") && getText("text_area42") == getText("text_area40")) && (getText("text_area36") == getText("text_area41") && getText("text_area41") == getText("text_area43"))) && ((getText("text_area39") == getText("text_area38") && getText("text_area38") == getText("text_area37")) && (getText("text_area42") == getText("text_area41") && getText("text_area41") == getText("text_area38"))))))) {
    return true;
  } else {
    return false;
  }
}
function l_() {
  arrayside1[0] = getText("text_area35");
  arrayside1[3] = getText("text_area42");
  arrayside1[6] = getText("text_area40");
  arrayside4[0] = getText("text_area53");
  arrayside4[3] = getText("text_area59");
  arrayside4[6] = getText("text_area61");
  arrayside5[0] = getText("text_area20");
  arrayside5[3] = getText("text_area9");
  arrayside5[6] = getText("text_area26");
  arrayside6[0] = getText("text_area44");
  arrayside6[3] = getText("text_area51");
  arrayside6[6] = getText("text_area46");
  // 
  arrayside2[0] = getText("text_area12");
  arrayside2[1] = getText("text_area15");
  arrayside2[2] = getText("text_area18");
  arrayside2[3] = getText("text_area11");
  arrayside2[5] = getText("text_area17");
  arrayside2[6] = getText("text_area8");
  arrayside2[7] = getText("text_area13");
  arrayside2[8] = getText("text_area16");
  setText("text_area20", arrayside1[0]);
  setText("text_area9", arrayside1[3]);
  setText("text_area26", arrayside1[6]);
  setText("text_area44", arrayside4[0]);
  setText("text_area51", arrayside4[3]);
  setText("text_area46", arrayside4[6]);
  setText("text_area53", arrayside5[0]);
  setText("text_area59", arrayside5[3]);
  setText("text_area61", arrayside5[6]);
  setText("text_area35", arrayside6[0]);
  setText("text_area42", arrayside6[3]);
  setText("text_area40", arrayside6[6]);
  // 
  setText("text_area8", arrayside2[0]);
  setText("text_area11", arrayside2[1]);
  setText("text_area12", arrayside2[2]);
  setText("text_area13", arrayside2[3]);
  setText("text_area15", arrayside2[5]);
  setText("text_area16", arrayside2[6]);
  setText("text_area17", arrayside2[7]);
  setText("text_area18", arrayside2[8]);
}
function l() {
  arrayside1[0] = getText("text_area53");
  arrayside1[3] = getText("text_area59");
  arrayside1[6] = getText("text_area61");
  arrayside4[0] = getText("text_area35");
  arrayside4[3] = getText("text_area42");
  arrayside4[6] = getText("text_area40");
  arrayside5[0] = getText("text_area44");
  arrayside5[3] = getText("text_area51");
  arrayside5[6] = getText("text_area46");
  arrayside6[0] = getText("text_area20");
  arrayside6[3] = getText("text_area9");
  arrayside6[6] = getText("text_area26");
  // 
  arrayside2[0] = getText("text_area16");
  arrayside2[1] = getText("text_area13");
  arrayside2[2] = getText("text_area8");
  arrayside2[3] = getText("text_area17");
  arrayside2[5] = getText("text_area11");
  arrayside2[6] = getText("text_area18");
  arrayside2[7] = getText("text_area15");
  arrayside2[8] = getText("text_area12");
  setText("text_area20", arrayside1[0]);
  setText("text_area9", arrayside1[3]);
  setText("text_area26", arrayside1[6]);
  setText("text_area44", arrayside4[0]);
  setText("text_area51", arrayside4[3]);
  setText("text_area46", arrayside4[6]);
  setText("text_area53", arrayside5[0]);
  setText("text_area59", arrayside5[3]);
  setText("text_area61", arrayside5[6]);
  setText("text_area35", arrayside6[0]);
  setText("text_area42", arrayside6[3]);
  setText("text_area40", arrayside6[6]);
  // 
  setText("text_area8", arrayside2[0]);
  setText("text_area11", arrayside2[1]);
  setText("text_area12", arrayside2[2]);
  setText("text_area13", arrayside2[3]);
  setText("text_area15", arrayside2[5]);
  setText("text_area16", arrayside2[6]);
  setText("text_area17", arrayside2[7]);
  setText("text_area18", arrayside2[8]);
}
function r_() {
  arrayside1[2] = getText("text_area57");
  arrayside1[5] = getText("text_area55");
  arrayside1[8] = getText("text_area56");
  arrayside4[2] = getText("text_area39");
  arrayside4[5] = getText("text_area38");
  arrayside4[8] = getText("text_area37");
  arrayside5[2] = getText("text_area50");
  arrayside5[5] = getText("text_area49");
  arrayside5[8] = getText("text_area47");
  arrayside6[2] = getText("text_area22");
  arrayside6[5] = getText("text_area19");
  arrayside6[8] = getText("text_area6");
  // 
  arrayside3[0] = getText("text_area28");
  arrayside3[1] = getText("text_area31");
  arrayside3[2] = getText("text_area34");
  arrayside3[3] = getText("text_area27");
  arrayside3[5] = getText("text_area33");
  arrayside3[6] = getText("text_area24");
  arrayside3[7] = getText("text_area30");
  arrayside3[8] = getText("text_area32");
  setText("text_area22", arrayside1[2]);
  setText("text_area19", arrayside1[5]);
  setText("text_area6", arrayside1[8]);
  setText("text_area50", arrayside4[2]);
  setText("text_area49", arrayside4[5]);
  setText("text_area47", arrayside4[8]);
  setText("text_area57", arrayside5[2]);
  setText("text_area55", arrayside5[5]);
  setText("text_area56", arrayside5[8]);
  setText("text_area39", arrayside6[2]);
  setText("text_area38", arrayside6[5]);
  setText("text_area37", arrayside6[8]);
  // 
  setText("text_area24", arrayside3[0]);
  setText("text_area27", arrayside3[1]);
  setText("text_area28", arrayside3[2]);
  setText("text_area30", arrayside3[3]);
  setText("text_area31", arrayside3[5]);
  setText("text_area32", arrayside3[6]);
  setText("text_area33", arrayside3[7]);
  setText("text_area34", arrayside3[8]);
}
function r() {
  arrayside1[2] = getText("text_area39");
  arrayside1[5] = getText("text_area38");
  arrayside1[8] = getText("text_area37");
  arrayside4[2] = getText("text_area57");
  arrayside4[5] = getText("text_area55");
  arrayside4[8] = getText("text_area56");
  arrayside5[2] = getText("text_area22");
  arrayside5[5] = getText("text_area19");
  arrayside5[8] = getText("text_area6");
  arrayside6[2] = getText("text_area50");
  arrayside6[5] = getText("text_area49");
  arrayside6[8] = getText("text_area47");
  // 
  arrayside3[0] = getText("text_area32");
  arrayside3[1] = getText("text_area30");
  arrayside3[2] = getText("text_area24");
  arrayside3[3] = getText("text_area33");
  arrayside3[5] = getText("text_area27");
  arrayside3[6] = getText("text_area34");
  arrayside3[7] = getText("text_area31");
  arrayside3[8] = getText("text_area28");
  setText("text_area22", arrayside1[2]);
  setText("text_area19", arrayside1[5]);
  setText("text_area6", arrayside1[8]);
  setText("text_area50", arrayside4[2]);
  setText("text_area49", arrayside4[5]);
  setText("text_area47", arrayside4[8]);
  setText("text_area57", arrayside5[2]);
  setText("text_area55", arrayside5[5]);
  setText("text_area56", arrayside5[8]);
  setText("text_area39", arrayside6[2]);
  setText("text_area38", arrayside6[5]);
  setText("text_area37", arrayside6[8]);
  // 
  setText("text_area24", arrayside3[0]);
  setText("text_area27", arrayside3[1]);
  setText("text_area28", arrayside3[2]);
  setText("text_area30", arrayside3[3]);
  setText("text_area31", arrayside3[5]);
  setText("text_area32", arrayside3[6]);
  setText("text_area33", arrayside3[7]);
  setText("text_area34", arrayside3[8]);
}
function f() {
  arrayside1[6] = getText("text_area16");
  arrayside1[7] = getText("text_area17");
  arrayside1[8] = getText("text_area18");
  arrayside3[6] = getText("text_area26");
  arrayside3[7] = getText("text_area25");
  arrayside3[8] = getText("text_area6");
  arrayside2[6] = getText("text_area50");
  arrayside2[7] = getText("text_area45");
  arrayside2[8] = getText("text_area44");
  arrayside4[2] = getText("text_area32");
  arrayside4[1] = getText("text_area33");
  arrayside4[0] = getText("text_area34");
  // 
  arrayside6[0] = getText("text_area40");
  arrayside6[1] = getText("text_area42");
  arrayside6[2] = getText("text_area35");
  arrayside6[3] = getText("text_area43");
  arrayside6[5] = getText("text_area36");
  arrayside6[6] = getText("text_area37");
  arrayside6[7] = getText("text_area38");
  arrayside6[8] = getText("text_area39");
  setText("text_area26", arrayside1[6]);
  setText("text_area25", arrayside1[7]);
  setText("text_area6", arrayside1[8]);
  setText("text_area16", arrayside2[6]);
  setText("text_area17", arrayside2[7]);
  setText("text_area18", arrayside2[8]);
  setText("text_area32", arrayside3[6]);
  setText("text_area33", arrayside3[7]);
  setText("text_area34", arrayside3[8]);
  setText("text_area44", arrayside4[0]);
  setText("text_area45", arrayside4[1]);
  setText("text_area50", arrayside4[2]);
  // 
  setText("text_area35", arrayside6[0]);
  setText("text_area36", arrayside6[1]);
  setText("text_area39", arrayside6[2]);
  setText("text_area42", arrayside6[3]);
  setText("text_area38", arrayside6[5]);
  setText("text_area40", arrayside6[6]);
  setText("text_area43", arrayside6[7]);
  setText("text_area37", arrayside6[8]);
}
function f_() {
  arrayside4[2] = getText("text_area16");
  arrayside4[1] = getText("text_area17");
  arrayside4[0] = getText("text_area18");
  arrayside2[6] = getText("text_area26");
  arrayside2[7] = getText("text_area25");
  arrayside2[8] = getText("text_area6");
  arrayside3[6] = getText("text_area50");
  arrayside3[7] = getText("text_area45");
  arrayside3[8] = getText("text_area44");
  arrayside1[6] = getText("text_area32");
  arrayside1[7] = getText("text_area33");
  arrayside1[8] = getText("text_area34");
  // 
  arrayside6[0] = getText("text_area39");
  arrayside6[1] = getText("text_area38");
  arrayside6[2] = getText("text_area37");
  arrayside6[3] = getText("text_area36");
  arrayside6[5] = getText("text_area43");
  arrayside6[6] = getText("text_area35");
  arrayside6[7] = getText("text_area42");
  arrayside6[8] = getText("text_area40");
  setText("text_area26", arrayside1[6]);
  setText("text_area25", arrayside1[7]);
  setText("text_area6", arrayside1[8]);
  setText("text_area16", arrayside2[6]);
  setText("text_area17", arrayside2[7]);
  setText("text_area18", arrayside2[8]);
  setText("text_area32", arrayside3[6]);
  setText("text_area33", arrayside3[7]);
  setText("text_area34", arrayside3[8]);
  setText("text_area44", arrayside4[0]);
  setText("text_area45", arrayside4[1]);
  setText("text_area50", arrayside4[2]);
  // 
  setText("text_area35", arrayside6[0]);
  setText("text_area36", arrayside6[1]);
  setText("text_area39", arrayside6[2]);
  setText("text_area42", arrayside6[3]);
  setText("text_area38", arrayside6[5]);
  setText("text_area40", arrayside6[6]);
  setText("text_area43", arrayside6[7]);
  setText("text_area37", arrayside6[8]);
}
function b() {
  arrayside1[0] = getText("text_area24");
  arrayside1[1] = getText("text_area27");
  arrayside1[2] = getText("text_area28");
  arrayside2[0] = getText("text_area20");
  arrayside2[1] = getText("text_area21");
  arrayside2[2] = getText("text_area22");
  arrayside3[0] = getText("text_area47");
  arrayside3[1] = getText("text_area48");
  arrayside3[2] = getText("text_area46");
  arrayside4[6] = getText("text_area12");
  arrayside4[7] = getText("text_area11");
  arrayside4[8] = getText("text_area8");
  // 
  arrayside5[0] = getText("text_area61");
  arrayside5[1] = getText("text_area59");
  arrayside5[2] = getText("text_area53");
  arrayside5[3] = getText("text_area60");
  arrayside5[5] = getText("text_area54");
  arrayside5[6] = getText("text_area56");
  arrayside5[7] = getText("text_area55");
  arrayside5[8] = getText("text_area57");
  setText("text_area20", arrayside1[0]);
  setText("text_area21", arrayside1[1]);
  setText("text_area22", arrayside1[2]);
  setText("text_area8", arrayside2[0]);
  setText("text_area11", arrayside2[1]);
  setText("text_area12", arrayside2[2]);
  setText("text_area24", arrayside3[0]);
  setText("text_area27", arrayside3[1]);
  setText("text_area28", arrayside3[2]);
  setText("text_area46", arrayside4[6]);
  setText("text_area48", arrayside4[7]);
  setText("text_area47", arrayside4[8]);
  // 
  setText("text_area53", arrayside5[0]);
  setText("text_area54", arrayside5[1]);
  setText("text_area57", arrayside5[2]);
  setText("text_area59", arrayside5[3]);
  setText("text_area55", arrayside5[5]);
  setText("text_area61", arrayside5[6]);
  setText("text_area60", arrayside5[7]);
  setText("text_area56", arrayside5[8]);
}
function b_() {
  arrayside4[8] = getText("text_area24");
  arrayside4[7] = getText("text_area27");
  arrayside4[6] = getText("text_area28");
  arrayside3[0] = getText("text_area20");
  arrayside3[1] = getText("text_area21");
  arrayside3[2] = getText("text_area22");
  arrayside2[0] = getText("text_area47");
  arrayside2[1] = getText("text_area48");
  arrayside2[2] = getText("text_area46");
  arrayside1[0] = getText("text_area8");
  arrayside1[1] = getText("text_area11");
  arrayside1[2] = getText("text_area12");
  // 
  arrayside5[0] = getText("text_area57");
  arrayside5[1] = getText("text_area55");
  arrayside5[2] = getText("text_area56");
  arrayside5[3] = getText("text_area54");
  arrayside5[5] = getText("text_area60");
  arrayside5[6] = getText("text_area53");
  arrayside5[7] = getText("text_area59");
  arrayside5[8] = getText("text_area61");
  setText("text_area20", arrayside1[0]);
  setText("text_area21", arrayside1[1]);
  setText("text_area22", arrayside1[2]);
  setText("text_area8", arrayside2[0]);
  setText("text_area11", arrayside2[1]);
  setText("text_area12", arrayside2[2]);
  setText("text_area24", arrayside3[0]);
  setText("text_area27", arrayside3[1]);
  setText("text_area28", arrayside3[2]);
  setText("text_area46", arrayside4[6]);
  setText("text_area48", arrayside4[7]);
  setText("text_area47", arrayside4[8]);
  // 
  setText("text_area53", arrayside5[0]);
  setText("text_area54", arrayside5[1]);
  setText("text_area57", arrayside5[2]);
  setText("text_area59", arrayside5[3]);
  setText("text_area55", arrayside5[5]);
  setText("text_area61", arrayside5[6]);
  setText("text_area60", arrayside5[7]);
  setText("text_area56", arrayside5[8]);
}
function u() {
  arrayside2[2] = getText("text_area35");
  arrayside2[5] = getText("text_area36");
  arrayside2[8] = getText("text_area39");
  arrayside3[0] = getText("text_area61");
  arrayside3[3] = getText("text_area60");
  arrayside3[6] = getText("text_area56");
  arrayside5[6] = getText("text_area18");
  arrayside5[7] = getText("text_area15");
  arrayside5[8] = getText("text_area12");
  arrayside6[0] = getText("text_area32");
  arrayside6[1] = getText("text_area30");
  arrayside6[2] = getText("text_area24");
  // 
  arrayside1[0] = getText("text_area26");
  arrayside1[1] = getText("text_area9");
  arrayside1[2] = getText("text_area20");
  arrayside1[3] = getText("text_area25");
  arrayside1[5] = getText("text_area21");
  arrayside1[6] = getText("text_area6");
  arrayside1[7] = getText("text_area19");
  arrayside1[8] = getText("text_area22");
  setText("text_area12", arrayside2[2]);
  setText("text_area15", arrayside2[5]);
  setText("text_area18", arrayside2[8]);
  setText("text_area24", arrayside3[0]);
  setText("text_area30", arrayside3[3]);
  setText("text_area32", arrayside3[6]);
  setText("text_area61", arrayside5[6]);
  setText("text_area60", arrayside5[7]);
  setText("text_area56", arrayside5[8]);
  setText("text_area35", arrayside6[0]);
  setText("text_area36", arrayside6[1]);
  setText("text_area39", arrayside6[2]);
  // 
  setText("text_area20", arrayside1[0]);
  setText("text_area21", arrayside1[1]);
  setText("text_area22", arrayside1[2]);
  setText("text_area9", arrayside1[3]);
  setText("text_area19", arrayside1[5]);
  setText("text_area26", arrayside1[6]);
  setText("text_area25", arrayside1[7]);
  setText("text_area6", arrayside1[8]);
}
function u_() {
  arrayside3[0] = getText("text_area39");
  arrayside3[3] = getText("text_area36");
  arrayside3[6] = getText("text_area35");
  arrayside2[2] = getText("text_area56");
  arrayside2[5] = getText("text_area60");
  arrayside2[8] = getText("text_area61");
  arrayside6[0] = getText("text_area12");
  arrayside6[1] = getText("text_area15");
  arrayside6[2] = getText("text_area18");
  arrayside5[6] = getText("text_area24");
  arrayside5[7] = getText("text_area30");
  arrayside5[8] = getText("text_area32");
  // 
  arrayside1[0] = getText("text_area22");
  arrayside1[1] = getText("text_area19");
  arrayside1[2] = getText("text_area6");
  arrayside1[3] = getText("text_area21");
  arrayside1[5] = getText("text_area25");
  arrayside1[6] = getText("text_area20");
  arrayside1[7] = getText("text_area9");
  arrayside1[8] = getText("text_area26");
  setText("text_area12", arrayside2[2]);
  setText("text_area15", arrayside2[5]);
  setText("text_area18", arrayside2[8]);
  setText("text_area24", arrayside3[0]);
  setText("text_area30", arrayside3[3]);
  setText("text_area32", arrayside3[6]);
  setText("text_area61", arrayside5[6]);
  setText("text_area60", arrayside5[7]);
  setText("text_area56", arrayside5[8]);
  setText("text_area35", arrayside6[0]);
  setText("text_area36", arrayside6[1]);
  setText("text_area39", arrayside6[2]);
  // 
  setText("text_area20", arrayside1[0]);
  setText("text_area21", arrayside1[1]);
  setText("text_area22", arrayside1[2]);
  setText("text_area9", arrayside1[3]);
  setText("text_area19", arrayside1[5]);
  setText("text_area26", arrayside1[6]);
  setText("text_area25", arrayside1[7]);
  setText("text_area6", arrayside1[8]);
}
function d() {
  arrayside3[2] = getText("text_area37");
  arrayside3[5] = getText("text_area43");
  arrayside3[8] = getText("text_area40");
  arrayside2[0] = getText("text_area57");
  arrayside2[3] = getText("text_area54");
  arrayside2[6] = getText("text_area53");
  arrayside6[6] = getText("text_area8");
  arrayside6[7] = getText("text_area13");
  arrayside6[8] = getText("text_area16");
  arrayside5[0] = getText("text_area28");
  arrayside5[1] = getText("text_area31");
  arrayside5[2] = getText("text_area34");
  // 
  arrayside4[0] = getText("text_area46");
  arrayside4[1] = getText("text_area51");
  arrayside4[2] = getText("text_area44");
  arrayside4[3] = getText("text_area48");
  arrayside4[5] = getText("text_area45");
  arrayside4[6] = getText("text_area47");
  arrayside4[7] = getText("text_area49");
  arrayside4[8] = getText("text_area50");
  setText("text_area8", arrayside2[0]);
  setText("text_area13", arrayside2[3]);
  setText("text_area16", arrayside2[6]);
  setText("text_area28", arrayside3[2]);
  setText("text_area31", arrayside3[5]);
  setText("text_area34", arrayside3[8]);
  setText("text_area53", arrayside5[0]);
  setText("text_area54", arrayside5[1]);
  setText("text_area57", arrayside5[2]);
  setText("text_area40", arrayside6[6]);
  setText("text_area43", arrayside6[7]);
  setText("text_area37", arrayside6[8]);
  // 
  setText("text_area44", arrayside4[0]);
  setText("text_area45", arrayside4[1]);
  setText("text_area50", arrayside4[2]);
  setText("text_area51", arrayside4[3]);
  setText("text_area49", arrayside4[5]);
  setText("text_area46", arrayside4[6]);
  setText("text_area48", arrayside4[7]);
  setText("text_area47", arrayside4[8]);
}
function d_() {
  arrayside2[0] = getText("text_area40");
  arrayside2[3] = getText("text_area43");
  arrayside2[6] = getText("text_area37");
  arrayside3[2] = getText("text_area53");
  arrayside3[5] = getText("text_area54");
  arrayside3[8] = getText("text_area57");
  arrayside5[0] = getText("text_area16");
  arrayside5[1] = getText("text_area13");
  arrayside5[2] = getText("text_area8");
  arrayside6[6] = getText("text_area34");
  arrayside6[7] = getText("text_area31");
  arrayside6[8] = getText("text_area28");
  // 
  arrayside4[0] = getText("text_area50");
  arrayside4[1] = getText("text_area49");
  arrayside4[2] = getText("text_area47");
  arrayside4[3] = getText("text_area45");
  arrayside4[5] = getText("text_area48");
  arrayside4[6] = getText("text_area44");
  arrayside4[7] = getText("text_area51");
  arrayside4[8] = getText("text_area46");
  setText("text_area8", arrayside2[0]);
  setText("text_area13", arrayside2[3]);
  setText("text_area16", arrayside2[6]);
  setText("text_area28", arrayside3[2]);
  setText("text_area31", arrayside3[5]);
  setText("text_area34", arrayside3[8]);
  setText("text_area53", arrayside5[0]);
  setText("text_area54", arrayside5[1]);
  setText("text_area57", arrayside5[2]);
  setText("text_area40", arrayside6[6]);
  setText("text_area43", arrayside6[7]);
  setText("text_area37", arrayside6[8]);
  // 
  setText("text_area44", arrayside4[0]);
  setText("text_area45", arrayside4[1]);
  setText("text_area50", arrayside4[2]);
  setText("text_area51", arrayside4[3]);
  setText("text_area49", arrayside4[5]);
  setText("text_area46", arrayside4[6]);
  setText("text_area48", arrayside4[7]);
  setText("text_area47", arrayside4[8]);
}
