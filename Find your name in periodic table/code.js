var name;
var periodictableno;
var twoletterssymbolscount = 0;
onEvent("screen1", "keydown", function(event) {
  if (event.key=="Enter") {
    setText("text_area1", "");
    while ((getText("text_input1") !== "")) {
      for (var i = 1; i < 132; i++) {
        name = getText("text_input1").toLowerCase();
        periodictableno = (numberperiodictable(i)).symbol;
        if (periodictableno.length == 2) {
          twoletterssymbolscount = twoletterssymbolscount+1;
          if (name.indexOf(periodictableno) == 0) {
            setText("text_input1", getText("text_input1").substring(2, (getText("text_input1")).length));
            newline("text_area1", writetext(("『"+capitalize(periodictableno))+"』", i, (numberperiodictable(i)).id));
          }
        } else {
          if (twoletterssymbolscount>=104) {
            if (name.indexOf(periodictableno) == 0) {
              setText("text_input1", getText("text_input1").substring(1, (getText("text_input1")).length));
              newline("text_area1", writetext(("『"+capitalize(periodictableno))+"』", i, (numberperiodictable(i)).id));
            }
          }
        }
      }
    }
  }
});
function numberperiodictable(n) {
  if (n==1) {
    var element = {id:"Hydrogen", symbol:"h"};
  } else if (n==2) {
    var element = {id:"Helium", symbol:"he"};
  } else if (n==3) {
    var element = {id:"Lithium", symbol:"li"};
  } else if (n==4) {
    var element = {id:"Beryllium", symbol:"be"};
  } else if (n==5) {
    var element = {id:"Boron", symbol:"b"};
  } else if (n==6) {
    var element = {id:"Carbon", symbol:"c"};
  } else if (n==7) {
    var element = {id:"Nitrogen", symbol:"n"};
  } else if (n==8) {
    var element = {id:"Oxygen", symbol:"o"};
  } else if (n==9) {
    var element = {id:"Fluorine", symbol:"f"};
  } else if (n==10) {
    var element = {id:"Neon", symbol:"ne"};
  } else if (n==11) {
    var element = {id:"Sodium", symbol:"na"};
  } else if (n==12) {
    var element = {id:"Magnesium", symbol:"mg"};
  } else if (n==13) {
    var element = {id:"Aluminum", symbol:"al"};
  } else if (n==14) {
    var element = {id:"Silicon", symbol:"si"};
  } else if (n==15) {
    var element = {id:"Phosphorus", symbol:"p"};
  } else if (n==16) {
    var element = {id:"Sulfur", symbol:"s"};
  } else if (n==17) {
    var element = {id:"Chlorine", symbol:"cl"};
  } else if (n==18) {
    var element = {id:"Argon", symbol:"ar"};
  } else if (n==19) {
    var element = {id:"Potassium", symbol:"k"};
  } else if (n==20) {
    var element = {id:"Calcium", symbol:"ca"};
  } else if (n==21) {
    var element = {id:"Scandium", symbol:"sc"};
  } else if (n==22) {
    var element = {id:"Titanium", symbol:"ti"};
  } else if (n==23) {
    var element = {id:"Vanadium", symbol:"v"};
  } else if (n==24) {
    var element = {id:"Chromium", symbol:"cr"};
  } else if (n==25) {
    var element = {id:"Manganese", symbol:"mn"};
  } else if (n==26) {
    var element = {id:"Iron", symbol:"fe"};
  } else if (n==27) {
    var element = {id:"Cobalt", symbol:"co"};
  } else if (n==28) {
    var element = {id:"Nickel", symbol:"ni"};
  } else if (n==29) {
    var element = {id:"Copper", symbol:"cu"};
  } else if (n==30) {
    var element = {id:"Zinc", symbol:"zn"};
  } else if (n==31) {
    var element = {id:"Gallium", symbol:"ga"};
  } else if (n==32) {
    var element = {id:"Germanium", symbol:"ge"};
  } else if (n==33) {
    var element = {id:"Arsenic", symbol:"as"};
  } else if (n==34) {
    var element = {id:"Selenium", symbol:"se"};
  } else if (n==35) {
    var element = {id:"Bromine", symbol:"br"};
  } else if (n==36) {
    var element = {id:"Krypton", symbol:"kr"};
  } else if (n==37) {
    var element = {id:"Rubidium", symbol:"rb"};
  } else if (n==38) {
    var element = {id:"Strontium", symbol:"sr"};
  } else if (n==39) {
    var element = {id:"Yttrium", symbol:"y"};
  } else if (n==40) {
    var element = {id:"Zirconium", symbol:"zr"};
  } else if (n==41) {
    var element = {id:"Niobium", symbol:"nb"};
  } else if (n==42) {
    var element = {id:"Molybdenum", symbol:"mo"};
  } else if (n==43) {
    var element = {id:"Technetium", symbol:"tc"};
  } else if (n==44) {
    var element = {id:"Ruthenium", symbol:"ru"};
  } else if (n==45) {
    var element = {id:"Rhodium", symbol:"rh"};
  } else if (n==46) {
    var element = {id:"Palladium", symbol:"pd"};
  } else if (n==47) {
    var element = {id:"Silver", symbol:"ag"};
  } else if (n==48) {
    var element = {id:"Cadmium", symbol:"cd"};
  } else if (n==49) {
    var element = {id:"Indium", symbol:"in"};
  } else if (n==50) {
    var element = {id:"Tin", symbol:"sn"};
  } else if (n==51) {
    var element = {id:"Antimony", symbol:"sb"};
  } else if (n==52) {
    var element = {id:"Tellurium", symbol:"te"};
  } else if (n==53) {
    var element = {id:"Iodine", symbol:"i"};
  } else if (n==54) {
    var element = {id:"Xenon", symbol:"xe"};
  } else if (n==55) {
    var element = {id:"Cesium", symbol:"cs"};
  } else if (n==56) {
    var element = {id:"Barium", symbol:"ba"};
  } else if (n==57) {
    var element = {id:"Lanthanum", symbol:"la"};
  } else if (n==58) {
    var element = {id:"Cerium", symbol:"ce"};
  } else if (n==59) {
    var element = {id:"Praseodymium", symbol:"pr"};
  } else if (n==60) {
    var element = {id:"Neodymium", symbol:"nd"};
  } else if (n==61) {
    var element = {id:"Promethium", symbol:"pm"};
  } else if (n==62) {
    var element = {id:"Samarium", symbol:"sm"};
  } else if (n==63) {
    var element = {id:"Europium", symbol:"eu"};
  } else if (n==64) {
    var element = {id:"Gadolinium", symbol:"gd"};
  } else if (n==65) {
    var element = {id:"Terbium", symbol:"tb"};
  } else if (n==66) {
    var element = {id:"Dysprosium", symbol:"dy"};
  } else if (n==67) {
    var element = {id:"Holmium", symbol:"ho"};
  } else if (n==68) {
    var element = {id:"Erbium", symbol:"er"};
  } else if (n==69) {
    var element = {id:"Thulium", symbol:"tm"};
  } else if (n==70) {
    var element = {id:"Ytterbium", symbol:"yb"};
  } else if (n==71) {
    var element = {id:"Lutetium", symbol:"lu"};
  } else if (n==72) {
    var element = {id:"Hafnium", symbol:"hf"};
  } else if (n==73) {
    var element = {id:"Tantalum", symbol:"ta"};
  } else if (n==74) {
    var element = {id:"Tungsten", symbol:"w"};
  } else if (n==75) {
    var element = {id:"Rhenium", symbol:"re"};
  } else if (n==76) {
    var element = {id:"Osmium", symbol:"os"};
  } else if (n==77) {
    var element = {id:"Iridium", symbol:"ir"};
  } else if (n==78) {
    var element = {id:"Platinum", symbol:"pt"};
  } else if (n==79) {
    var element = {id:"Gold", symbol:"au"};
  } else if (n==80) {
    var element = {id:"Mercury", symbol:"hg"};
  } else if (n==81) {
    var element = {id:"Thallium", symbol:"ti"};
  } else if (n==82) {
    var element = {id:"Lead", symbol:"pb"};
  } else if (n==83) {
    var element = {id:"Bismuth", symbol:"bi"};
  } else if ((n==84)) {
    var element = {id:"Polonium", symbol:"po"};
  } else if (n==85) {
    var element = {id:"Astatine", symbol:"at"};
  } else if (n==86) {
    var element = {id:"Radon", symbol:"rn"};
  } else if (n==87) {
    var element = {id:"Francium", symbol:"fr"};
  } else if (n==88) {
    var element = {id:"Radium", symbol:"ra"};
  } else if (n==89) {
    var element = {id:"Actinium", symbol:"ac"};
  } else if (n==90) {
    var element = {id:"Thorium", symbol:"th"};
  } else if (n==91) {
    var element = {id:"Protactinium", symbol:"pa"};
  } else if (n==92) {
    var element = {id:"Uranium", symbol:"u"};
  } else if (n==93) {
    var element = {id:"Neptunium", symbol:"np"};
  } else if (n==94) {
    var element = {id:"Plutonium", symbol:"pu"};
  } else if (n==95) {
    var element = {id:"Americium", symbol:"am"};
  } else if (n==96) {
    var element = {id:"Curium", symbol:"cm"};
  } else if (n==97) {
    var element = {id:"Berkelium", symbol:"bk"};
  } else if (n==98) {
    var element = {id:"Californium", symbol:"cf"};
  } else if (n==99) {
    var element = {id:"Einsteinium", symbol:"es"};
  } else if (n==100) {
    var element = {id:"Fermium", symbol:"fm"};
  } else if (n==101) {
    var element = {id:"Mendelevium", symbol:"md"};
  } else if (n==102) {
    var element = {id:"Nobelium", symbol:"no"};
  } else if (n==103) {
    var element = {id:"Lawrencium", symbol:"lr"};
  } else if (n==104) {
    var element = {id:"Rutherfordium", symbol:"rf"};
  } else if (n==105) {
    var element = {id:"Dubnium", symbol:"db"};
  } else if (n==106) {
    var element = {id:"Seaborgium", symbol:"sg"};
  } else if (n==107) {
    var element = {id:"Bohrium", symbol:"bh"};
  } else if (n==108) {
    var element = {id:"Hassium", symbol:"hs"};
  } else if (n==109) {
    var element = {id:"Meitnerium", symbol:"mt"};
  } else if (n==110) {
    var element = {id:"Darmstadtium", symbol:"ds"};
  } else if (n==111) {
    var element = {id:"Roentgenium", symbol:"rg"};
  } else if (n==112) {
    var element = {id:"Copernicium", symbol:"cn"};
  } else if (n==113) {
    var element = {id:"Nihonium", symbol:"nh"};
  } else if (n==114) {
    var element = {id:"Flerovium", symbol:"fl"};
  } else if (n==115) {
    var element = {id:"Muscovium", symbol:"mc"};
  } else if (n==116) {
    var element = {id:"Livermorium", symbol:"lv"};
  } else if (n==117) {
    var element = {id:"Technetium", symbol:"tc"};
  } else if (n==118) {
    var element = {id:"Oganesson", symbol:"og"};
  } else if (n==119) {
    var element = {id:"Gundanium", symbol:"g"};
  } else if (n==120) {
    var element = {id:"Latinum", symbol:"l"};
  } else if (n==121) {
    var element = {id:"Tyberium", symbol:"t"};
  } else if (n==122) {
    var element = {id:"Quadium", symbol:"q"};
  } else if (n==123) {
    var element = {id:"Dilithium", symbol:"d"};
  } else if (n==124) {
    var element = {id:"Adamantium", symbol:"a"};
  } else if (n==125) {
    var element = {id:"Etherium", symbol:"e"};
  } else if (n==126) {
    var element = {id:"Jasmium", symbol:"j"};
  } else if (n==127) {
    var element = {id:"Mithril", symbol:"m"};
  } else if (n==128) {
    var element = {id:"Xenium", symbol:"x"};
  } else if (n==129) {
    var element = {id:"Rearden", symbol:"r"};
  } else if (n==130) {
    var element = {id:"Zanium", symbol:"z"};
  } else {
    var element = {id:"Space", symbol:" "};
  }
  return element;
}
function writetext(symbol, atomicnumber, atomicname) {
  if (atomicnumber==131) {
    atomicnumber = "";
  }
  return (capitalize(symbol) + (("; At.no: "+atomicnumber) + "; Element: "+atomicname));
}
function capitalize(x) {
  return (x[0].toUpperCase() + x.substring(1, x.length));
}
function newline(n, text) {
  setText(n, getText(n) + ("\n" + text));
}
