// 
var api_key = '';
var zoom = 0.1;
var lat = 30.31;
setText("text_input1", lat);
var lon = -81.64;
setText("text_input2", lon);
// 
var Pic_Dimention = 100;
var Pic_ArrayX = 4;
var Pic_ArrayY = 4;
var XImages = Pic_ArrayX;
var YImages = Pic_ArrayY;
if (YImages>(450/Pic_Dimention)) {
  YImages = (450/Pic_Dimention);
}
if (XImages>320/Pic_Dimention) {
  XImages = 320/Pic_Dimention;
}
lat = lat+((YImages+1)/2 - 1)*zoom;
lon = lon-((XImages+1)/2 - 1)*zoom;
var TOTAL = Pic_ArrayX*Pic_ArrayY;
function PicturesDisplay() {
  for (var j = 1; j <= TOTAL; j++) {
    image("imagE"+j, "");
    setPosition("imagE"+j, Pic_Dimention*((j-1)%Pic_ArrayX), Pic_Dimention*Math.floor((j-1)/Pic_ArrayX), Pic_Dimention, Pic_Dimention);
  }
}
function Picture(idImage, i, j) {
  //before: https://api.nasa.gov/planetary/earth/imagery/
  var Url = ((((("https://api.nasa.gov/planetary/earth/assets/?lon="+(lon+i*zoom))+"&lat="+(lat+j*(zoom*-1)))+"")+"")+"&cloud_score=True&dim="+zoom+"&api_key=")+api_key;
  startWebRequest(Url, function(status, type, content) {
    if (content.substring(0, 1)=="{") {
      var contentJson = JSON.parse(content);
      setImageURL(idImage, contentJson.url);
    }
  });
}
var i = 1;
api_key=btoa("¼L\x99\x8B­®Ê\x8A\x14\x06Û#>¾Ræ:¸nâ'Ï\x13\x02qÌô¬xN");
setTimeout(function() {
  PicturesDisplay();
  timedLoop(200, function() {
    Picture('imagE'+i,(i-1)%Pic_ArrayX,  Math.floor((i-1)/Pic_ArrayX));
    i = i+1;
    if (i>TOTAL) {
      stopTimedLoop();
    }
  });
}, 500);

function LOAD() {
  i = 1;
  lat = getNumber("text_input1");
  lon = getNumber("text_input2");
  if (YImages>(450/Pic_Dimention)) {
    YImages = (450/Pic_Dimention);
  }
  if (XImages>320/Pic_Dimention) {
    XImages = 320/Pic_Dimention;
  }
  lat = lat+((YImages+1)/2 - 1)*zoom;
  lon = lon-((XImages+1)/2 - 1)*zoom;
  setTimeout(function() {
    timedLoop(200, function() {
      Picture('imagE'+i,(i-1)%Pic_ArrayX,  Math.floor((i-1)/Pic_ArrayX));
      i = i+1;
      if (i>TOTAL) {
        stopTimedLoop();
      }
    });
  }, 500);
}
onEvent("button1", "click", function( ) {
  LOAD();
});
onEvent("screen1", "keydown", function(event) {
  if (event.key=="Down") {
    zoom = zoom+0.1;
    LOAD();
  } else if (event.key=="Up") {
    zoom = zoom/2;
    LOAD();
  }
});
