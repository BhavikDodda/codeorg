//Done on 8/5/2020 at 9:54 am
//-Bhavik Dodda
onEvent("text_input2", "keydown", function(event) {
  if (event.key=="Enter") {
    if (getText('text_input1').includes(",")) {
      calculate();
    }
  }
});
function calculate() {
  for (var del = 0; del < ListOfGroupings.length; del++) {
    deleteElement(ListOfGroupings[del]);
  }
  ListOfGroupings = [];
  var VariablesList = eval(('[\''+(getText("text_input1")).replace(/,/g, "','"))+'\']');
  var NumbersAre = eval(('['+getText("text_input2"))+']');
  var val1 = 1;
  var val2 = 0;
  if (getText("dropdown1")=='Σm') {
    val1 = 0;
    val2 = 1;
  }
  for (var j = 1; j < 17; j++) {
    setText("but"+(j+0), val1);
  }
  for (var i = 0; i < NumbersAre.length; i++) {
    setText("but"+transform(NumbersAre[i]+1), val2);
  }
  // 
  var DataValues = [];
  var TrueOrFalseArray = [];
  for (var i = 1; i < 17; i++) {
    appendItem(DataValues, getNumber("but"+i));
    appendItem(TrueOrFalseArray, false);
  }
  var GroupsArray = [];
  var CheckNum = 0;
  if (getProperty("radio_button1", "checked")) {
    CheckNum = 1;
  }
  // 
  var ScanArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  if (ShouldIGroupEm(CheckNum, ScanArray, TrueOrFalseArray, DataValues)) {
    appendItem(GroupsArray, ScanArray);
    TrueOrFalseArray = modifyTrueOrFalseArray(TrueOrFalseArray, ScanArray);
  }
  //2x4
  var StartPosValuesX = [1, 2, 3, 4];
  var StartPosValuesY = [0,0,0,0];
  for (var l1 = 0; l1 < StartPosValuesX.length; l1++) {
    ScanArray = CreatingScanArray([2,4],StartPosValuesX[l1],StartPosValuesY[l1]);
    if (ShouldIGroupEm(CheckNum, ScanArray, TrueOrFalseArray, DataValues)) {
      appendItem(GroupsArray, ScanArray);
      TrueOrFalseArray = modifyTrueOrFalseArray(TrueOrFalseArray, ScanArray);
    }
  }
  //4x2
  StartPosValuesX = [1,1,1,1];
  StartPosValuesY = [0,1,2,3];
  for (var l2 = 0; l2 < StartPosValuesX.length; l2++) {
    ScanArray = CreatingScanArray([4,2],StartPosValuesX[l2],StartPosValuesY[l2]);
    if (ShouldIGroupEm(CheckNum, ScanArray, TrueOrFalseArray, DataValues)) {
      appendItem(GroupsArray, ScanArray);
      TrueOrFalseArray = modifyTrueOrFalseArray(TrueOrFalseArray, ScanArray);
    }
  }
  //1x4
  StartPosValuesX = [1,2,3,4];
  StartPosValuesY = [0,0,0,0];
  for (var l3 = 0; l3 < StartPosValuesX.length; l3++) {
    ScanArray = CreatingScanArray([1,4],StartPosValuesX[l3],StartPosValuesY[l3]);
    if (ShouldIGroupEm(CheckNum, ScanArray, TrueOrFalseArray, DataValues)) {
      appendItem(GroupsArray, ScanArray);
      TrueOrFalseArray = modifyTrueOrFalseArray(TrueOrFalseArray, ScanArray);
    }
  }
  //4x1
  StartPosValuesX = [1,1,1,1];
  StartPosValuesY = [0,1,2,3];
  for (var l4 = 0; l4 < StartPosValuesX.length; l4++) {
    ScanArray = CreatingScanArray([4,1],StartPosValuesX[l4],StartPosValuesY[l4]);
    if (ShouldIGroupEm(CheckNum, ScanArray, TrueOrFalseArray, DataValues)) {
      appendItem(GroupsArray, ScanArray);
      TrueOrFalseArray = modifyTrueOrFalseArray(TrueOrFalseArray, ScanArray);
    }
  }
  //2x2
  StartPosValuesX = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4];
  StartPosValuesY = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3];
  for (var l5 = 0; l5 < StartPosValuesX.length; l5++) {
    ScanArray = CreatingScanArray([2,2],StartPosValuesX[l5],StartPosValuesY[l5]);
    if (ShouldIGroupEm(CheckNum, ScanArray, TrueOrFalseArray, DataValues)) {
      appendItem(GroupsArray, ScanArray);
      TrueOrFalseArray = modifyTrueOrFalseArray(TrueOrFalseArray, ScanArray);
    }
  }
  //1x2 & 2x1 & 1x1
  StartPosValuesX = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4];
  StartPosValuesY = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3];
  //1x2
  for (var l6 = 0; l6 < StartPosValuesX.length; l6++) {
    ScanArray = CreatingScanArray([1,2],StartPosValuesX[l6],StartPosValuesY[l6]);
    if (ShouldIGroupEm(CheckNum, ScanArray, TrueOrFalseArray, DataValues)) {
      appendItem(GroupsArray, ScanArray);
      TrueOrFalseArray = modifyTrueOrFalseArray(TrueOrFalseArray, ScanArray);
    }
  }
  //2x1
  for (var l7 = 0; l7 < StartPosValuesX.length; l7++) {
    ScanArray = CreatingScanArray([2,1],StartPosValuesX[l7],StartPosValuesY[l7]);
    if (ShouldIGroupEm(CheckNum, ScanArray, TrueOrFalseArray, DataValues)) {
      appendItem(GroupsArray, ScanArray);
      TrueOrFalseArray = modifyTrueOrFalseArray(TrueOrFalseArray, ScanArray);
    }
  }
  //1x1
  for (var l8 = 0; l8 < StartPosValuesX.length; l8++) {
    ScanArray = CreatingScanArray([1,1],StartPosValuesX[l8],StartPosValuesY[l8]);
    if (ShouldIGroupEm(CheckNum, ScanArray, TrueOrFalseArray, DataValues)) {
      appendItem(GroupsArray, ScanArray);
      TrueOrFalseArray = modifyTrueOrFalseArray(TrueOrFalseArray, ScanArray);
    }
  }
  
  //markTheGroups
  for (var g = 0; g < GroupsArray.length; g++) {
    var minimumNum = eval("Math.min("+GroupsArray[g].toString()+")");
    var maximumNum = eval("Math.max("+GroupsArray[g].toString()+")");
    var rc = randomNumber(0, 255);
    var gc = randomNumber(0, 255);
    var bc = randomNumber(0, 255);
    
    var rbc = randomNumber(0, 255);
    var gbc = randomNumber(0, 255);
    var bbc = randomNumber(0, 255);
    var GroupLen = GroupsArray[g].length;
    if (GroupLen==1) {
      GroupLen = 9;
    }
    if (GroupLen==2) {
      GroupLen = 7;
    }
    if (GroupLen==4) {
      GroupLen = 4;
    }
    if (GroupLen==8) {
      GroupLen = 1;
    }
    if (GroupLen==16) {
      GroupLen = 0.5;
    }
    if ((GroupsArray[g])[0] == minimumNum && GroupsArray[g][GroupsArray[g].length-1] == maximumNum) {
      var x1 = ((minimumNum+0)-1)%4+1;
      var y1 = (minimumNum-x1)/4;
      var x2 = ((maximumNum+0)-1)%4+1;
      var y2 = (maximumNum-x2)/4;
      MarkTheGroup(GroupLen,[(Xstart(x1)), Ystart(y1)], [(Xend(x2)),(Yend(y2))], '15px 15px 15px 15px', 'lab'+g, 'rgba('+rc+', '+gc+', '+bc+', 0.3)','rgba('+rbc+', '+gbc+', '+bbc+', 1)');
    } else if (GroupsArray[g].length==8||GroupsArray[g].length==4||GroupsArray[g].length==2) {
      if ((GroupsArray[g])[0]==16&&GroupsArray[g][3]==1) {
        MarkTheGroup(GroupLen,[(Xstart(4)), (Ystart(3))], [(Xend(4)),(Yend(3))], '15px 0px 0px 0px', 'labF1'+g, 'rgba('+rc+', '+gc+', '+bc+', 0.3)','rgba('+rbc+', '+gbc+', '+bbc+', 1)');
        MarkTheGroup(GroupLen,[(Xstart(1)), (Ystart(3))], [(Xend(1)),(Yend(3))], '0px 15px 0px 0px', 'labF2'+g, 'rgba('+rc+', '+gc+', '+bc+', 0.3)','rgba('+rbc+', '+gbc+', '+bbc+', 1)');
        MarkTheGroup(GroupLen,[(Xstart(4)), (Ystart(0))], [(Xend(4)),(Yend(0))], '0px 0px 0px 15px', 'labF3'+g, 'rgba('+rc+', '+gc+', '+bc+', 0.3)','rgba('+rbc+', '+gbc+', '+bbc+', 1)');
        MarkTheGroup(GroupLen,[(Xstart(1)), (Ystart(0))], [(Xend(1)),(Yend(0))], '0px 0px 15px 0px', 'labF4'+g, 'rgba('+rc+', '+gc+', '+bc+', 0.3)','rgba('+rbc+', '+gbc+', '+bbc+', 1)');
        // 
      } else {
        var LRorUD = '';
        if (GroupsArray[g].indexOf(4) != -1) {
          if ((GroupsArray[g])[(GroupsArray[g].indexOf(4)+1)]==1) {
            LRorUD = 'LR';
            Subgroup(GroupsArray[g], 'LtoR');
          }
        } else if (GroupsArray[g].indexOf(8)!=-1) {
          if ((GroupsArray[g])[(GroupsArray[g].indexOf(8)+1)]==5) {
            LRorUD = 'LR';
            Subgroup(GroupsArray[g], 'LtoR');
          }
        } else if (GroupsArray[g].indexOf(12)!=-1) {
          if ((GroupsArray[g])[(GroupsArray[g].indexOf(12)+1)]==9) {
            LRorUD = 'LR';
            Subgroup(GroupsArray[g], 'LtoR');
          }
        } else if (GroupsArray[g].indexOf(16)!=-1) {
          if ((GroupsArray[g])[(GroupsArray[g].indexOf(16)+1)]==13) {
            LRorUD = 'LR';
            Subgroup(GroupsArray[g], 'LtoR');
          }
        }
        if (LRorUD=='') {
          Subgroup(GroupsArray[g], 'DtoU');
        }
      }
    } else {
      
    }
  }
  function Subgroup(Groupis, Mode) {
    var FirstSubgroup = [];
    var SecondSubgroup = [];
    for (var i = 0; i < Groupis.length; i++) {
      if (Mode=='LtoR') {
        if (i%2==0) {
          appendItem(FirstSubgroup, Groupis[i]);
        } else {
          appendItem(SecondSubgroup, Groupis[i]);
        }
      } else {
        if (i<Groupis.length/2) {
          appendItem(FirstSubgroup, Groupis[i]);
        } else {
          appendItem(SecondSubgroup, Groupis[i]);
        }
      }
    }
    var minimumNumFirst = eval("Math.min("+FirstSubgroup.toString()+")");
    var maximumNumFirst = eval("Math.max("+FirstSubgroup.toString()+")");
    var x1First = ((minimumNumFirst+0)-1)%4+1;
    var y1First = (minimumNumFirst-x1First)/4;
    var x2First = ((maximumNumFirst+0)-1)%4+1;
    var y2First = (maximumNumFirst-x2First)/4;
    var BorderRadFirst = '15px 15px 0px 0px';
    if (Mode=='LtoR') {
      BorderRadFirst = '15px 0px 0px 15px';
    }
    MarkTheGroup(GroupLen,[(Xstart(x1First)), (Ystart(y1First))], [(Xend(x2First)),(Yend(y2First))], BorderRadFirst, 'labF1'+g, 'rgba('+rc+', '+gc+', '+bc+', 0.3)','rgba('+rbc+', '+gbc+', '+bbc+', 1)');
    var minimumNumSecond = eval("Math.min("+SecondSubgroup.toString()+")");
    var maximumNumSecond = eval("Math.max("+SecondSubgroup.toString()+")");
    var x1Second = ((minimumNumSecond+0)-1)%4+1;
    var y1Second = (minimumNumSecond-x1Second)/4;
    var x2Second = ((maximumNumSecond+0)-1)%4+1;
    var y2Second = (maximumNumSecond-x2Second)/4;
    var BorderRadSecond = '0px 0px 15px 15px';
    if (Mode=='LtoR') {
      BorderRadSecond = '0px 15px 15px 0px';
    }
    MarkTheGroup(GroupLen,[(Xstart(x1Second)), (Ystart(y1Second))], [(Xend(x2Second)),(Yend(y2Second))], BorderRadSecond, 'labF2'+g, 'rgba('+rc+', '+gc+', '+bc+', 0.3)','rgba('+rbc+', '+gbc+', '+bbc+', 1)');
  }
  //Coming up with the Formula 
  var OutputFormulaArray = [];
  var soptrue = getProperty("radio_button1", "checked");
  for (var Grs = 0; Grs < GroupsArray.length; Grs++) {
    var MinText = '(';
    var C1_0 = true;
    var C1_1 = true;
    var C2_0 = true;
    var C2_1 = true;
    var C3_0 = true;
    var C3_1 = true;
    var C4_0 = true;
    var C4_1 = true;
    for (var Gr = 0; Gr < GroupsArray[Grs].length; Gr++) {
      var BinText = pad(DecToBin(transform((GroupsArray[Grs])[Gr])-1),4);
      if (BinText[0]=="0") {
        C1_1 = false;
      } else {
        C1_0 = false;
      }
      if (BinText[1]=="0") {
        C2_1 = false;
      } else {
        C2_0 = false;
      }
      if (BinText[2]=="0") {
        C3_1 = false;
      } else {
        C3_0 = false;
      }
      if (BinText[3]=="0") {
        C4_1 = false;
      } else {
        C4_0 = false;
      }
    }
    var inside = '+';
    if (soptrue) {
      inside = '᛫';
    }
    var CArray = [C1_0,C1_1,C2_0,C2_1,C3_0,C3_1,C4_0,C4_1];
    for (var m1234 = 1; m1234 < 5; m1234++) {
      for (var m01 = 0; m01 < 2; m01++) {
        var prime = "'";
        if (soptrue&&m01==1) {
          prime = '';
        }
        if (soptrue==false&&m01==0) {
          prime = '';
        }
        if (CArray[2*(m1234-1)+m01]) {
          MinText = MinText+VariablesList[m1234-1]+prime+inside;
        }
      }
    }
    appendItem(OutputFormulaArray, MinText.substring(0,MinText.length-1)+")");
  }
  // 
  var outside = '᛫';
  if (soptrue) {
    outside = '+';
  }
  setText("text_area1", OutputFormulaArray.toString().replace(/,/g, outside));
}
// 
function CreatingScanArray(DimenArray, StartPosX, StartPosY) {
  var XDimen = DimenArray[0];
  var YDimen = DimenArray[1];
  var OutputArray = [];
  for (var i = 0; i < YDimen; i++) {
    for (var j = 0; j < XDimen; j++) {
      appendItem(OutputArray, getTheAccordingNum([StartPosX,StartPosY],[j,i]));
    }
  }
  return OutputArray;
}
function getTheAccordingNum(StartArray, AddArray) {
  var x = (StartArray[0]+AddArray[0]-1)%4+1;
  var y = (StartArray[1]+AddArray[1])%4;
  return 4*y+x;
}
function modifyTrueOrFalseArray(ArrayToBeModified, PosValues) {
  for (var i = 0; i < PosValues.length; i++) {
    ArrayToBeModified[PosValues[i]-1] = true;
  }
  return ArrayToBeModified;
}
function ShouldIGroupEm(NumCk, Where, Already, theData) {
  var AlreadyGrouped = true;
  var Eligible = true;
  for (var i = 0; i < Where.length; i++) {
    if (Already[Where[i]-1]==false) {
      AlreadyGrouped = false;
    }
    if (theData[Where[i]-1]!=NumCk) {
      Eligible = false;
    }
  }
  return !(AlreadyGrouped)&&Eligible;
}
onEvent("button1", "click", function( ) {
  if (getText('text_input1').includes(",")) {
    calculate();
  }
});
function transform(x) {
  var outputx = (x-1)%4+1;
  var outputy = (x-outputx)/4;
  if (outputx==3) {
    outputx = 4;
  } else {
    if (outputx==4) {
      outputx = 3;
    }
  }
  if (outputy==2) {
    outputy = 3;
  } else {
    if (outputy==3) {
      outputy = 2;
    }
  }
  return 4*outputy+outputx;
}
myFunction();
function myFunction() {
  for (var k = 0; k < 4; k++) {
      for (var l = 1; l < 5; l++) {
        var idis = k*4+l;
        button("but"+idis, idis);
        setStyle('but'+idis, 'padding: 0px; margin: 0px; border-style: solid; height: 60px; width: 60px; background-color: rgb(73, 45, 156); color: rgb(255, 255, 255); border-color: rgb(14, 12, 12); border-radius: 6px; font-family: Verdana, Geneva, sans-serif; font-size: 18px;');
        setPosition("but"+idis, 40+62*(l-1), 62*k+195);
      }
    }
}
// 
function Xstart(x) {
  return (44+62*(x-1));
}
function Ystart(y) {
  return (62*y+199);
}
function Xend(x) {
  return (96+62*(x-1));
}
function Yend(y) {
  return (62*y+251);
}
var ListOfGroupings = [];
function MarkTheGroup(BrdrSpace,StartArray, EndArray, RoundedCorners, id, bg,borC) {
  appendItem(ListOfGroupings, id);
  textLabel(id, "");
  setPosition(id, StartArray[0]+BrdrSpace, StartArray[1]+BrdrSpace, EndArray[0]-StartArray[0]-2*BrdrSpace, EndArray[1]-StartArray[1]-2*BrdrSpace);
  
  setStyle(id,(((("border-color:"+borC+";border-width:4px;border-radius:"+RoundedCorners)+";")+"background-color:")+'#fdfdff00')+"");
}
// 
onEvent("screen1", "mouseover", function(event) {
  if (event.toElementId.includes("lab")) {
    for (var i = 0; i < ListOfGroupings.length; i++) {
      setStyle(ListOfGroupings[i],'background-color:#fdfdff00');
    }
    setStyle(event.toElementId,'background-color:#ffffff61');
    if (event.toElementId.includes("F")) {
      var CodeNum = event.toElementId.substring(5,event.toElementId.length);
      for (var l = 1; l < 5; l++) {
        var checkId = ('labF'+l)+CodeNum;
        
        if (ListOfGroupings.indexOf(checkId)!=-1) {
          setStyle(checkId,'background-color:#ffffff61');
        }
      }
    }
  } else {
    for (var i = 0; i < ListOfGroupings.length; i++) {
      setStyle(ListOfGroupings[i],'background-color:#fdfdff00');
    }
  }
});
function DecToBin(x) {
  return ((x >>> 0).toString(2));
}
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

setStyle("dropdown1","border-radius: 10px 0px 0px 10px");
setStyle("lael3","border-radius: 0px 15px 15px 0px");
