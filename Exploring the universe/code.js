//Done Programming!!!
function padding(times, str) {
    //https://nemisj.com/obscure-way-repeat-string/
    var string = ((1 << (times-0) - str.length).toString(2).replace(/./g, "0"))+str;
    return (string.substring(1, string.length));
  }
var once = true;
var api_key = "";
getKeyValue("API code", function (value) {
  api_key = value;
});
function Mars() {
  var rover = "curiosity";
  var url = "";
  var camera = "";
  // 
  
  var yesterday = new Date(Date.now() - 864e5);
  // setting maximum
  var maximumdate = (((yesterday.getFullYear()+'-')+padding(2,(yesterday.getMonth()+1).toString()))+'-'+padding(2,(yesterday.getDate()).toString()))+'';
  var minimumdate = "2012-08-07";
  // 
  function thecode() {
    if (once) {
      once = false;
      write(('<input type="date" id="Calendar" width="200" max="'+maximumdate)+'" min="'+minimumdate+'">');
      setProperty("Calendar", "height", 40);
      setProperty("Calendar", "width", 160);
      button("button1_mars", "See Image");
      setPosition("button1_mars", 170, 5, 95, 40);
      setProperty("button1_mars", "background-color", "#ffeb00");
      setProperty("button1_mars", "text-color", "blue");
      setStyle("button7", "z-index:999;");
    }
     
    function UpdateDetailsAndRunCode() {
      if (getText("dropdown2_mars") == "Any Camera") {
        url = ((("https://api.nasa.gov/mars-photos/api/v1/rovers/"+rover)+"/photos?earth_date="+getText("Calendar"))+"&api_key=")+api_key;
      } else {
        url = (((("https://api.nasa.gov/mars-photos/api/v1/rovers/"+rover)+"/photos?earth_date="+getText("Calendar"))+"&camera="+getText("dropdown2_mars"))+"&api_key=")+api_key;
      }
      // 
      startWebRequest(url, function(status, type, content) {
        if (content!=='{"photos":[]}') {
          var contentJson = JSON.parse(content);
          // 
          camera = contentJson.photos[0].camera.full_name;
          // 
          setText("text_area1_mars", ("This image was taken by "+getText("dropdown1_mars"))+"'s "+camera+" on "+getText("Calendar")+".");
          setImageURL("image1_mars", (contentJson.photos)[0].img_src);
          innerHTML("button1_mars",("<a href='https://studio.code.org/media?u="+getImageURL("image1_mars"))+"'target='_blank'>See Image</a>");
        } else {
          setText("text_area1_mars", "Sorry, Information isn't available for the specific Rover/ Camera/ Date.");
        }
      });
    }
    onEvent("dropdown2_mars", "change", function( ) {
      UpdateDetailsAndRunCode();
    });
    onEvent("Calendar", "input", function(event) {
      UpdateDetailsAndRunCode();
    });
  }
  thecode();
  // 
  onEvent("dropdown1_mars", "input", function(event) {
    rover = getText("dropdown1_mars").toLowerCase();
    //on 19/8/2018, added console.log and setlatestimage function
    // 
    set_cameras_dropdown(rover);
    set_max_and_min(function( ) {
      once=true;
      deleteElement("Calendar");
      deleteElement("button1_mars");
      thecode();
      setlatestimage(api_key);
    });
  });
  // 
  function set_max_and_min(Code) {
    var theurl = "https://api.nasa.gov/mars-photos/api/v1/manifests/"+rover+"/?api_key="+api_key;
    // 
    startWebRequest(theurl, function(status, type, content) {
      var contentJson = JSON.parse(content);
      maximumdate = (contentJson.photo_manifest).max_date;
      minimumdate = (contentJson.photo_manifest).landing_date;
      Code();
      // 
    });
  }
  function set_cameras_dropdown(rover_name) {
    if (rover_name=="curiosity") {
      setProperty("dropdown2_mars", "options", ["Any Camera","FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"]);
    }
    if (rover_name=="opportunity") {
      setProperty("dropdown2_mars", "options", ["Any Camera","FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]);
    }
    if (rover_name=="spirit") {
      setProperty("dropdown2_mars", "options", ["Any Camera","FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]);
    }
  }
  //set latest image
  function setlatestimage(api) {
    //added rover option instead of setting default value to "curiosity" on 19/8/2018.
    url = "https://api.nasa.gov/mars-photos/api/v1/rovers/"+rover+"/latest_photos?api_key="+api;
    startWebRequest(url, function(status, type, content) {
      var contentJson = JSON.parse(content);
      setText("Calendar", contentJson.latest_photos[0].earth_date);
      setImageURL("image1_mars", (contentJson.latest_photos)[0].img_src);
      innerHTML("button1_mars",("<a href='https://studio.code.org/media?u="+getImageURL("image1_mars"))+"'target='_blank'>See Image</a>");
      setText("text_area1_mars", (("This image was taken by "+getText("dropdown1_mars"))+"'s "+contentJson.latest_photos[0].camera.full_name)+" on "+getText("Calendar")+".");
    });
  }
  getKeyValue("API code", function (value) {
    setlatestimage(value);
  });
  //Rovers info
  setStyle("text_area4","border-radius:5px");
  setStyle("text_area3","border-radius:5px");
  onEvent("button2_mars", "click", function(event) {
    setScreen("cameras_info");
  });
  onEvent("Back", "click", function(event) {
    setScreen("screen1_mars");
  });
  //more images
  //https://www.w3schools.com/html/html_images.asp
  //<a href=""><img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;"></a>
  onEvent("button3", "click", function(event) {
    setScreen("Moreimages");
    // 
    var thecode = "";
    //I could just have used "url" but that doesn't work if I run this code at the start of the program as the content/object uses "latest_photos" to store images instead of just "photos"
    var url_ = "";
    if (getText("dropdown2_mars") == "Any Camera") {
      url_ = ((("https://api.nasa.gov/mars-photos/api/v1/rovers/"+rover)+"/photos?earth_date="+getText("Calendar"))+"&api_key=")+api_key;
    } else {
      url_ = (((("https://api.nasa.gov/mars-photos/api/v1/rovers/"+rover)+"/photos?earth_date="+getText("Calendar"))+"&camera="+getText("dropdown2_mars"))+"&api_key=")+api_key;
    }
    startWebRequest(url_, function(status, type, content) {
      var contentJson = JSON.parse(content);
      // 
      for (var i = 0; i < contentJson.photos.length; i++) {
        var image_src = ((contentJson.photos)[i]).img_src;
        image_src = image_src.toString();
        var rover_camera = ((contentJson.photos)[i]).camera.full_name;
        function withouttitle() {
          thecode+= (('<a href="https://studio.code.org/media?u='+image_src)+'" target="_blank"><img src="https://studio.code.org/media?u=')+image_src+'"  style="float:left;width:120px;height:120px;"></a>';
        }
        //fixed warnings on 19/8/2018 by deleting a semicolon (;) after "rover_camera" and before "src=..."
        thecode+= (('<a href="https://studio.code.org/media?u='+image_src)+'" target="_blank"><img title="Image taken by the '+rover_camera+'" src="https://studio.code.org/media?u=')+image_src+'"  style="float:left;width:120px;height:120px;"></a>';
      }
      innerHTML("text_area5",thecode);
    });
  });
  onEvent("button4", "click", function(event) {
    setScreen("screen1_mars");
  });
}
function Hubble() {
  // 
  setStyle("image1_hubble", ('transform: scaleY('+50/150)+') scaleX('+90/290+');border-color:white;border-width:6px;border-radius:10px;left: 120px;top: -0px;transition:all 1.5s cubic-bezier(0.63, 0.2, 1, 1)');
  //3/4/2019
  var Starting = "http://hubblesite.org/api";
  onEvent("button1", "click", function( ) {
    setStyle("text_input1_hubble",'transform: translate(-210px,0px);transition:all 0.5s cubic-bezier(0.63, 0.2, 1, 1)');
    LoadDetails("news");
  });
  onEvent("dropdown1", "change", function( ) {
    setStyle("text_input1_hubble",'transform: translate(-210px,0px);transition:all 0.5s cubic-bezier(0.63, 0.2, 1, 1)');
    LoadDetails("images");
  });
  onEvent("dropdown2", "change", function( ) {
    setStyle("text_input1_hubble",'transform: translate(-210px,0px);transition:all 0.5s cubic-bezier(0.63, 0.2, 1, 1)');
    LoadDetails("videos");
  });
  onEvent("button2", "click", function( ) {
    setStyle("text_input1_hubble",'transform: translate(210px,0px);transition:all 0.5s cubic-bezier(0, 0.03, 0.34, 0.83)');
    LoadDetails("glossary");
  });
  var B = "";
  function LoadDetails(A) {
    B = "";
    if (A=="images") {
      B = getText("dropdown1");
    } else if ((A=="videos")) {
      B = getText("dropdown2");
    }
    B = B.toLowerCase();
    B = B.replace(" ", "");
    if (B=="images") {
      B = "";
    }
    if (B=="videos") {
      B = "";
    }
    if (B=="tonightssky") {
      B = "tonights_sky";
    }
    startWebRequest((Starting+"/v3/"+A+"/")+B, function(status, type, content) {
      FormattingData(content, A);
    });
  }
  //4/4/2019
  function FormattingData(A, Type) {
    innerHTML("text_area2", "");
    A = JSON.parse(A);
    var HTMLCode = "";
    if (Type=="news") {
      HTMLCode+="<h1>News</h1>";
      for (var i = 0; i < A.length; i++) {
        HTMLCode+=("<div style='background-color:#E2E2E2;'>"+"")+"";
        HTMLCode+=(("<p style='cursor: help;font-size: 15px; line-height: 2.5; color: #20499b;' id='NewsTitle"+A[i].news_id)+"'>"+A[i].name)+"</p>";
        HTMLCode+=((("<a href='"+A[i].url)+"' target='_blank'><span style='color:green'>")+A[i].url)+"</span></a>";
        HTMLCode+="</div><br><hr>";
      }
      innerHTML("text_area2", HTMLCode);
    } else if (Type=="images") {
      //5/4/2019
      HTMLCode+="<h1>Images</h1>";
      for (var i = 0; i < A.length; i++) {
        HTMLCode+=("<div style='background-color:#E2E2E2;'>"+"")+"";
        HTMLCode+=(("<p style='cursor: help;font-size: 15px; line-height: 2.5; color: #20499b;' id='ImageTitle"+A[i].id)+"'>"+A[i].name)+"</p>";
        HTMLCode+="</div><br><hr>";
      }
      innerHTML("text_area2", HTMLCode);
    } else if (Type=="videos") {
      //5/4/2019
      HTMLCode+="<h1>Videos</h1>";
      for (var i = 0; i < A.length; i++) {
        HTMLCode+=("<div style='background-color:#E2E2E2;'>"+"")+"";
        HTMLCode+="<img src='"+A[i].image+"'>";
        HTMLCode+=(("<p style='width:160px; padding:5px; float:right; cursor: help;font-size: 15px; line-height: 2.5; color: #20499b;' id='VideoTitle"+A[i].id)+"'>"+A[i].name)+"</p>";
        HTMLCode+="</div><br><hr>";
      }
      innerHTML("text_area2", HTMLCode);
    } else if (Type=="glossary") {
      //5/4/2019
      HTMLCode+="<h1>Glossary</h1>";
      for (var i = 0; i < A.length; i++) {
        HTMLCode+=("<div style='background-color:#E2E2E2;'>"+"")+"";
        HTMLCode+=(("<p style='padding:15px; font-size: 20px; color: green;' id='glossary"+i)+"'>"+(A[i]).name)+"</p>";
        HTMLCode+=(("<p style='padding:5px; font-size: 15px; line-height: 2.5; color: #20499b;' id='glossaryDef"+i)+"'>"+(A[i]).definition)+"</p>";
        HTMLCode+="</div><br><hr>";
      }
      innerHTML("text_area2", HTMLCode);
    }
  }
  //5/4/2019
  onEvent("screen1_hubble", "click", function(event) {
    if (event.srcElementId.includes("NewsTitle")) {
      var TheNewsId = event.srcElementId.substring(9, event.srcElementId.length);
      startWebRequest("http://hubblesite.org/api/v3/news_release/"+TheNewsId, function(status, type, content) {
        content = JSON.parse(content);
        var D = new Date(content.publication);
        D = D.toDateString();
        var HTMLCode = "";
        HTMLCode+=("<div style='background-color: #f2f2f2;'>"+"")+"";
        HTMLCode+=("<h2 style='color:#20499b;'>"+content.name)+"</h2>";
        HTMLCode+=("<p>Release Date: "+D)+".</p><hr>";
        HTMLCode+=("<img style='max-width:265px;padding:10px;' src='"+content.keystone_image_1x)+"'>";
        HTMLCode+=("<p style='padding:5px'>"+content.abstract)+"</p>";
        HTMLCode+=((("<a href='"+content.url)+"' target='_blank'><span style='color:green'>")+content.url)+"</span></a>";
        HTMLCode+=("</div>"+"")+"";
        innerHTML("text_area2", HTMLCode);
      });
    } else if ((event.srcElementId.includes("ImageTitle"))) {
      var TheImageId = event.srcElementId.substring(10, event.srcElementId.length);
      startWebRequest("http://hubblesite.org/api/v3/image/"+TheImageId, function(status, type, content) {
        content = JSON.parse(content);
        var HTMLCode = "";
        HTMLCode+=("<div style='background-color: #f2f2f2;'>"+"")+"";
        HTMLCode+=("<h2 style='color:#20499b;'>"+content.name)+"</h2>";
        HTMLCode+=("<img style='max-width:265px;padding:10px;' src='"+content.image_files[1].file_url)+"'>";
        content.description = content.description.replace(/\r\n/g, "<br>");
        content.description = content.description.replace(/\u003ca href=\"([\S]+)"\u003e([\S\s]+)\u003c\/a\u003e/g, "<a href='$1' target='_blank'>$2</a>");
        HTMLCode+=("<p style='padding:5px'>"+content.description)+"</p>";
        var Url = "http://hubblesite.org/image/"+TheImageId+"/"+B;
        HTMLCode+=((("<a href='"+Url)+"' target='_blank'><span style='color:green'>")+Url)+"</span></a>";
        HTMLCode+=("</div>"+"")+"";
        innerHTML("text_area2", HTMLCode);
      });
    } else if ((event.srcElementId.includes("VideoTitle"))) {
      var TheVideoUrl = event.srcElementId.substring(10, event.srcElementId.length);
      startWebRequest("http://hubblesite.org/api/v3/video/"+TheVideoUrl, function(status, type, content) {
        content = JSON.parse(content);
        var HTMLCode = "";
        HTMLCode+=("<div style='background-color: #f2f2f2;'>"+"")+"";
        HTMLCode+=("<h2 style='color:#20499b;'>"+content.name)+"</h2>";
        HTMLCode+="<div id='parentDiv'>";
        HTMLCode+=("<img style='position:relative;max-width:265px;padding:10px;z-index:1' src='"+content.image_retina)+"'>";
        if (content.youtube_id==undefined) {
          if (content.html_5_video != undefined) {
            HTMLCode+=(("<a href='"+(content.html_5_video).video_url)+"' target='_blank'><img style='position:relative;top: -100px; left: 110px; max-width:50px;z-index:2' src='"+"https://studio.code.org/v3/assets/uEGNfP4KU4gl26rvlVHqbsvpgIDll91zsPs4pB17oxg/youtubethumb_play_button_large%20(1).png")+"'></a>";
          }
        } else {
          HTMLCode+=("<a href='https://www.youtube.com/watch?v="+content.youtube_id+"' target='_blank'><img style='position:relative;top: -100px; left: 110px; max-width:50px;z-index:2' src='"+"https://studio.code.org/v3/assets/uEGNfP4KU4gl26rvlVHqbsvpgIDll91zsPs4pB17oxg/youtubethumb_play_button_large%20(1).png")+"'></a>";
        }
        HTMLCode+="</div>";
        content.short_description = (content.short_description).replace(/\r\n/g, "<br>");
        content.short_description = (content.short_description).replace(/\u003ca href=\"([\S]+)"\u003e([\S\s]+)\u003c\/a\u003e/g, "<a href='$1' target='_blank'>$2</a>");
        HTMLCode+=("<p style='padding:5px'>"+content.short_description)+"</p>";
        var Url2 = ("http://hubblesite.org/video/"+TheVideoUrl)+"/"+B;
        HTMLCode+=((("<a href='"+Url2)+"' target='_blank'><span style='color:green'>")+Url2)+"</span></a>";
        HTMLCode+=("</div>"+"")+"";
        innerHTML("text_area2", HTMLCode);
      });
    }
  });
  LiveFeed();
  function LiveFeed() {
    startWebRequest("http://hubblesite.org/api/v3/external_feed/st_live", function(status, type, content) {
      content = (JSON.parse(content))[0];
      var D = new Date(content.pub_date);
      D = D.toDateString();
      var HTMLCode1 = "";
      HTMLCode1+=("<div style='background-color: #f2f2f2;'>"+"")+"";
      HTMLCode1+=("<h2 style='color:#20499b;'>"+"What is Hubble looking at now?")+"</h2>";
      HTMLCode1+=("<h3 style='color:#20499b;'>"+content.title)+"</h3>";
      HTMLCode1+=("<p>Release Date: "+D)+".</p><hr>";
      HTMLCode1+=("<img style='max-width:290px' src='"+content.image)+"'>";
      HTMLCode1+="<p>"+content.description+"</p>";
      HTMLCode1+=((("<a href='"+content.link)+"' target='_blank'><span style='color:green'>")+content.link)+"</span></a>";
      HTMLCode1+=("</div>"+"")+"";
      innerHTML("text_area2", HTMLCode1);
    });
  }
  //glossary
  onEvent("text_input1_hubble", "keydown", function(event) {
    if (event.key=="Enter") {
      startWebRequest("http://hubblesite.org/api/v3/glossary/"+getText("text_input1_hubble").replace(/ /g, "_"), function(status, type, content) {
        //6/4/2019
        content = JSON.parse(content);
        var HTMLCode = "";
        HTMLCode+=("<h1>"+"Glossary")+"</h1>";
        HTMLCode+=("<div style='background-color:#E2E2E2;'>"+"")+"";
        HTMLCode+=(("<p style='padding:15px;font-size: 20px; color: green;' id='"+"")+"'>"+getText("text_input1_hubble"))+"</p>";
        HTMLCode+=(("<p style='padding:5px;font-size: 15px; line-height: 2.5; color: #20499b;' id='"+"")+"'>"+content.definition)+"</p>";
        HTMLCode+="</div><br><hr>";
        innerHTML("text_area2", HTMLCode);
      });
    }
  });
}
var once2 = true;
function APOD_NasaApi() {
  if (once2) {
    once2 = false;
    var today_apod = new Date();
    var maximumdate_apod = (((today_apod.getFullYear()+'-')+padding(2,(today_apod.getMonth()+1).toString()))+'-'+padding(2,(today_apod.getDate()).toString()))+'';
    write('<input type="date" id="Calendar2" width="200" min="1995-06-20" max="'+maximumdate_apod+'"> ');
    setProperty("Calendar2", "height", 40);
    setProperty("Calendar2", "width", 155);
    deleteElement("button1_apod");
    button("button1_apod", "See Image");
    setPosition("button1_apod", 165, 5, 100, 40);
    setProperty("button1_apod", "background-color", "#ffeb00");
    setProperty("button1_apod", "text-color", "blue");
    setStyle("button10", "z-index:999;");
  }
  apod_LatestImage();
  function apod_LatestImage() {
    var url_apod2 = ("https://api.nasa.gov/planetary/apod?api_key="+api_key+"")+"";
    startWebRequest(url_apod2, function(status, type, content) {
      eval("content="+content);
      setText("label1_apod", "Title: "+content.title);
      setText("Calendar2", content.date);
      setImageURL("image1_apod", content.url);
      setText("text_area1_apod", content.explanation);
      // 
      var media_url_apod = content.url;
      innerHTML("button1_apod",('<a href="'+media_url_apod)+'" target="_blank">See '+content.media_type+'</a>');
    });
  }
  onEvent("Calendar2", "input", function(event) {
    var url_apod = "https://api.nasa.gov/planetary/apod?api_key="+api_key+"&date="+getText("Calendar2");
    startWebRequest(url_apod, function(status, type, content) {
      eval("content="+content);
      setText("label1_apod", "Title: "+content.title);
      setImageURL("image1_apod", content.url);
      setText("text_area1_apod", content.explanation);
      // 
      var media_url_apod = content.url;
      innerHTML("button1_apod",('<a href="'+media_url_apod)+'" target="_blank">See '+content.media_type+'</a>');
    });
  });
}
var once3 = true;
//done some update to this section on 10th nov 2019
var THEPLACESARRAY = [];
var LATSANDLONGS = [];
var countries_listarray = ["Andorra","Argentina","AmericanSamoa","Austria","Australia","Bangladesh","Belgium","Bulgaria","Brazil","Canada","Switzerland","CzechRepublic","Germany","Denmark","DominicanRepublic","Spain","Finland","FaroeIslands","France","GreatBritain","FrenchGuyana","Guernsey","Greenland","Guadeloupe","Guatemala","Guam","Guyana","Croatia","Hungary","IsleofMan","India","Iceland","Italy","Jersey","Japan","Liechtenstein","SriLanka","Lithuania","Luxembourg","Monaco","Moldavia","MarshallIslands","Macedonia","NorthernMarianaIslands","Martinique","Mexico","Malaysia","Holland","Norway","NewZealand","Phillippines","Pakistan","Poland","SaintPierreandMiquelon","PuertoRico","Portugal","FrenchReunion","Russia","Sweden","Slovenia","Svalbard&JanMayenIslands","SlovakRepublic","SanMarino","Thailand","Turkey","UnitedStates","Vatican","VirginIslands","Mayotte","SouthAfrica"];
var countryCodes_list = ["AD","AR","AS","AT","AU","BD","BE","BG","BR","CA","CH","CZ","DE","DK","DO","ES","FI","FO","FR","GB","GF","GG","GL","GP","GT","GU","GY","HR","HU","IM","IN","IS","IT","JE","JP","LI","LK","LT","LU","MC","MD","MH","MK","MP","MQ","MX","MY","NL","NO","NZ","PH","PK","PL","PM","PR","PT","RE","RU","SE","SI","SJ","SK","SM","TH","TR","US","VA","VI","YT","ZA"];
setProperty("dropdown8", "options", countries_listarray);
setStyle("dropdown8","border-radius: 15px 0px 0px 15px");
setStyle("text_input3","border-radius: 0px 15px 15px 0px");
setProperty("dropdown8", "value", "India");
function Earth_api() {
  var zoom = 0.1;
  var lon = 100.75;
  var lat = 1.5;
  if (once3) {
    once3 = false;
    button("button1_Earth", "+");
    button("button2_Earth", "-");
    setPosition("button1_Earth", 200, 5, 55, 40);
    setPosition("button2_Earth", 260, 5, 55, 40);
    setProperty("button1_Earth", "font-size", 28);
    setProperty("button2_Earth", "font-size", 28);
    setText("text_input1", lat);
    setText("text_input2", lon);
  }
  onEvent("text_input3", "keydown", function(event) {
    if (event.key=="Enter") {
      setinfo();
    }
  });
  onEvent("button2_Earth", "click", function(event) {
    zoom = zoom+0.05;
    setinfo(getNumber("text_input1"), getNumber("text_input2"));
  });
  onEvent("button1_Earth", "click", function(event) {
    zoom = zoom+-0.05;
    setinfo(getNumber("text_input1"), getNumber("text_input2"));
  });
  onEvent("dropdown4", "change", function( ) {
    var changedto = getText("dropdown4");
    var Index = THEPLACESARRAY.indexOf(changedto);
    setText("text_input1", LATSANDLONGS[Index][0]);
    setText("text_input2", LATSANDLONGS[Index][1]);
    setinfo(getNumber("text_input1"), getNumber("text_input2"));
  });
  function setinfo(a1, a2) {
    var COUNTRY_SET = getText("dropdown8");
    var Index_country = countries_listarray.indexOf(COUNTRY_SET);
    var TheCountryCodeIs = countryCodes_list[Index_country];
    startWebRequest("http://api.zippopotam.us/"+TheCountryCodeIs+"/"+getText("text_input3"), function(status, type, content) {
      if (a1==undefined) {
        THEPLACESARRAY = [];
        LATSANDLONGS = [];
        if (!(content[0]=="{")) {
          var x = prompt("Incorrect value");
        } else {
          var contentZip = JSON.parse(content);
          for (var i = 0; i < contentZip.places.length; i++) {
            var somerandomtext = [(contentZip.places)[i].latitude,contentZip.places[i].longitude];
            appendItem(THEPLACESARRAY, contentZip.places[i]["place name"]+" → "+somerandomtext.toString());
            appendItem(LATSANDLONGS, [contentZip.places[i].latitude,contentZip.places[i].longitude]);
          }
          setProperty("dropdown4", "options", THEPLACESARRAY);
          setText("text_input1", (contentZip.places)[0].latitude);
          setText("text_input2", contentZip.places[0].longitude);
        }
      }
      lat = getNumber("text_input1");
      lon = getNumber("text_input2");
      var url = ((("https://api.nasa.gov/planetary/earth/imagery/?lon="+lon+"&lat="+lat+"")+"")+"&cloud_score=True&dim="+zoom+"&api_key=")+api_key;
      startWebRequest(url, function(status, type, content) {
        var contentJson = JSON.parse(content);
        url = JSON.stringify(contentJson.url);
        setImageURL("image1_earth", url.substring(1, url.length-1));
        setText("text_area1", "Cloud Score: "+contentJson.cloud_score);
        
      });
    });
  }
  onEvent("text_input1", "keydown", function(event) {
    if (event.key=="Enter") {
      setinfo(getNumber("text_input1"), getNumber("text_input2"));
    }
  });
  onEvent("text_input2", "keydown", function(event) {
    if (event.key=="Enter") {
      setinfo(getNumber("text_input1"), getNumber("text_input2"));
    }
  });
}
var once4 = true;
var imageURL_epic;
var i_epic = 0;
var epicLength = 1;
function EPIC_API() {
  if (once4) {
    once4 = false;
    write('<input style="background:blue; color:white" type="date"  id="Calendar_epic" >');
    setProperty("Calendar_epic", "height", 45);
    button("button1_epic", "View");
    setProperty("button1_epic", "font-size", 18);
    setPosition("button1_epic", 215, 5, 100, 45);
    startWebRequest('https://api.nasa.gov/EPIC/api/enhanced/all?api_key='+api_key, function(status, type, content) {
      if (!(content[1]=="]")) {
        content = JSON.parse(content);
        setText("Calendar_epic", content[0].date);
        LoadImage_EPIC();
      }
    });
  }
  function LoadImage_EPIC() {
    var theDate = getText("Calendar_epic");
    var DateObject = new Date(theDate);
    //Extract date, month, year: https://stackoverflow.com/questions/33312318/how-to-extract-values-from-html-input-type-date-using-jquery
    var date = DateObject.getDate();
    date = (date).pad(2);
    var month = DateObject.getMonth()+1;
    month = month.pad(2);
    var year = DateObject.getFullYear();
    startWebRequest(("https://api.nasa.gov/EPIC/api/natural/date/"+theDate)+"?api_key="+api_key, function(status, type, content) {
      if (!(content[1]=="]")) {
        content = JSON.parse(content);
        var imageCode = (content[i_epic]).image;
        epicLength = content.length;
        imageURL_epic = (("https://epic.gsfc.nasa.gov/archive/natural/"+year)+"/"+month+"/"+date+"/png/"+imageCode)+".png";
        console.log(imageURL_epic);
        setImageURL("image3_epic", imageURL_epic);
      }
    });
  }
  onEvent("Calendar_epic", "input", function(event) {
    i_epic = 0;
    hideElement("button20_epic");
    showElement("button30_epic");
    LoadImage_EPIC();
  });
  onEvent("button30_epic", "click", function(event) {
    i_epic = i_epic+1;
    LoadImage_EPIC();
    setTimeout(function() {
      showElement("button20_epic");
      if (i_epic==epicLength-1) {
        hideElement("button30_epic");
      }
    }, 500);
  });
  onEvent("button20_epic", "click", function(event) {
    i_epic = i_epic+-1;
    LoadImage_EPIC();
    setTimeout(function() {
      showElement("button30_epic");
      if (i_epic==0) {
        hideElement("button20_epic");
      }
    }, 500);
  });
  Number.prototype.pad = function(size) {
      var s = String(this);
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
  };
  // 
  onEvent("button1_epic", "click", function(event) {
    setScreen("screen2_epic");
    setImageURL("image2_epic", imageURL_epic);
  });
  onEvent("screen2_epic", "mousemove", function(event) {
    if (event.x>=5&&event.x<=315) {
      if (event.y>=5&&(event.y)<=400) {
        var x1 = event.x - 5;
        var y1 = event.y - 5;
        setProperty("image2_epic", "x", x1*-5+0);
        setProperty("image2_epic", "y", y1*-4.12+0);
      }
    }
  });
  onEvent("button10_epic", "click", function( ) {
    setScreen("screen1_epic");
  });
}
onEvent("button5", "click", function( ) {
  setScreen("screen1_hubble");
  Hubble();
});
onEvent("button6", "click", function( ) {
  setScreen("screen1_mars");
  Mars();
});
onEvent("button9", "click", function( ) {
  setScreen("screen1_apod");
  APOD_NasaApi();
});
onEvent("button11", "click", function( ) {
  setScreen("screen1_earth");
  Earth_api();
});
onEvent("button12", "click", function( ) {
  setScreen("screen1_epic");
  EPIC_API();
});
onEvent("button16", "click", function( ) {
  setScreen("screen1_insight");
  InSight_API();
});
onEvent("button7", "click", function( ) {
  setScreen("Main");
});
onEvent("button8", "click", function( ) {
  setScreen("Main");
});
onEvent("button10", "click", function( ) {
  setScreen("Main");
});
onEvent("button13", "click", function( ) {
  setScreen("Main");
});
onEvent("button14", "click", function( ) {
  setScreen("Main");
});
onEvent("button18", "click", function( ) {
  setScreen("Main");
});
//17/7/2019
onEvent("button15", "click", function( ) {
  setScreen("ImageVideo");
});
onEvent("button18_Image", "click", function( ) {
  setScreen("Main");
});
onEvent("text_input4_Image", "keydown", function(event) {
  if (event.key=="Enter") {
    ImagePosition = 0;
    NasaImage();
  }
});
onEvent("button19_Image", "click", function() {
  ImagePosition = 0;
  NasaImage();
});
var ImagePosition = 0;
var ImagesLength = 1;
function NasaImage() {
  var term = getText("text_input4_Image");
  stopSound();
  if (term=="") {
    
  } else {
    startWebRequest("https://images-api.nasa.gov/search?q="+term, function(status, type, content) {
      var content = JSON.parse(content);
      ImagesLength = (content.collection).items.length;
      var TheDescription = (content.collection).items[ImagePosition].data[0].description;
      var Media = (content.collection).items[ImagePosition].data[0].media_type;
      setText("text_area8_Image", TheDescription);
      if (Media=="image") {
        var IDFORIMAGE = ((content.collection).items[ImagePosition].data)[0].nasa_id;
        var TheImageURLis = ("https://images-assets.nasa.gov/image/"+IDFORIMAGE)+"/"+IDFORIMAGE+"~"+ImageCodeExtension+".jpg";
        innerHTML("text_area7_Image", (((''+'')+'<img style="max-width: 260px;border-width:5px;border-radius:5px;border-color:#169de0;padding-left:10px" src="')+TheImageURLis)+'"/>');
        innerHTML("button17_Image", ('<a href="'+TheImageURLis)+'" target="_blank">See Image</a>');
      }
      if (Media=="video") {
        var IDFORIMAGE2 = ((content.collection).items[ImagePosition].data)[0].nasa_id;
        var TheVideoImageURLis = (("https://images-assets.nasa.gov/video/"+IDFORIMAGE2)+"/"+IDFORIMAGE2)+"~"+ImageCodeExtension+".jpg";
        var TheVideoURLis2 = ((("https://images-assets.nasa.gov/video/"+IDFORIMAGE2)+"/"+IDFORIMAGE2)+"~"+"orig")+".mp4";
        innerHTML("text_area7_Image", (((''+'')+'<img style="max-width: 260px;border-width:5px;border-radius:5px;border-color:#169de0;padding-left:10px" src="')+TheVideoImageURLis)+'"/>');
        innerHTML("button17_Image", ('<a href="'+TheVideoURLis2)+'" target="_blank">See Video</a>');
      }
      if (Media=="audio") {
        var IDFORIMAGE3 = ((content.collection).items[ImagePosition].data)[0].nasa_id;
        var AudioIs = ((("https://images-assets.nasa.gov/audio/"+IDFORIMAGE3)+"/"+IDFORIMAGE3)+"~"+"orig")+".mp3";
        playSound(AudioIs);
        innerHTML("text_area7_Image", (((''+'')+'<img style="max-width:260px;border-width:0px;border-radius:5px;border-color:#169de0;padding-left:40px" src="')+'https://cdn.dribbble.com/users/846207/screenshots/6450707/audio_spectrum_line_animation.gif')+'"/>');
        innerHTML("button17_Image", ('<a href="'+AudioIs)+'" target="_blank">Audio</a>');
      }
    });
  }
}
var ImageCodeExtension = "large";
onEvent("ImageVideo", "keydown", function(event) {
  if (event.key==" ") {
    if (event.shiftKey) {
      if (ImageCodeExtension=="large") {
        ImageCodeExtension = "orig";
      } else {
        ImageCodeExtension = "large";
      }
      NasaImage();
    }
  }
});
onEvent("button30_Image", "click", function(event) {
    ImagePosition = ImagePosition+1;
    NasaImage();
    setTimeout(function() {
      showElement("button20_Image");
      if (ImagePosition==ImagesLength-1) {
        hideElement("button30_Image");
      }
    }, 500);
  });
onEvent("button20_Image", "click", function(event) {
    ImagePosition = ImagePosition+-1;
    NasaImage();
    setTimeout(function() {
      showElement("button30_Image");
      if (ImagePosition==0) {
        hideElement("button20_Image");
      }
    }, 500);
  });
// 5/10/2019 - Saturday
function InSight_API() {
  startWebRequest("https://api.nasa.gov/insight_weather/?api_key="+api_key+"&feedtype=json&ver=1.0", function(status, type, content) {
    content = JSON.parse(content);
    var thesols = content.sol_keys;
    insertItem(thesols, 0, "Sol (Martian Day):");
    setProperty("dropdown3", "options", thesols);
    onEvent("dropdown3", "change", function( ) {
      if (isNaN(Number(getText("dropdown3"))) == false) {
        
        var sol_data = content[(getText("dropdown3"))];
        
        setText("button19", sol_data.First_UTC);
        setText("button22", sol_data.Last_UTC);
        setText("label7", "Season: "+sol_data.Season);
        setImageURL("image6", sol_data.Season+".jpg");
        var ChartData = [];
        for (var i = 0; i < 16; i++) {
          if ((sol_data.WD)[i]==undefined) {
            
          } else {
            var WD_data = (sol_data.WD)[i];
            appendItem(ChartData, {compassPoint:WD_data.compass_point,Frequency:WD_data.ct});
          }
        }
        
        drawChart("chart1_", "bar",ChartData);
      }
    });
  });
}
//broadcast
function getCurrentTime() {
  var d = new Date();
  var month = d.getMonth();
  month = month+1;
  var date = d.getDate();
  var year = d.getFullYear();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var text = " AM";
  if (hour>12) {
    hour = hour-12;
    text = " PM";
  }
  return (((((month+"/")+date+"/"+year+"-"+hour+":"+minute+text)+"")+"")+"");
}
var CreatingArray;
var CodeArray;
TranslateUpdate();
function TranslateUpdate() {
  startWebRequest(("https://translate.yandex.net/api/v1.5/tr.json/getLangs?key="+'trnsl.1.1.20190406T140610Z.78a1aaf1421284be.05452a97159475154a8701856fa8a5b646943da5')+"&ui=en", function(status, type, content) {
    if (content[0]=="H") {
      
    } else {
      content = JSON.parse(content);
      var Languages = JSON.stringify(content.langs);
      CreatingArray = Languages.substring(1, Languages.length-1);
      CodeArray = Languages.substring(1, Languages.length-1);
      CreatingArray = JSON.parse(("["+CreatingArray.replace(/"[A-Za-z]+":("[A-Za-z ]+")/g,"$1"))+"]");
      CodeArray = JSON.parse(("["+CodeArray.replace(/("[A-Za-z]+"):("[A-Za-z ]+")/g,"$1"))+"]");
      setProperty("dropdown6", "options", CreatingArray);
      setProperty("dropdown7", "options", CreatingArray);
      setProperty("dropdown6", "value", "English");
      setProperty("dropdown7", "value", "English");
    }
  });
}
TranslatorInChat();
function TranslatorInChat() {
  onEvent("dropdown7", "change", function( ) {
    setTimeout(function() {
      var translateCode = CodeArray[(CreatingArray.indexOf(getText("dropdown6")))]+"-"+CodeArray[(CreatingArray.indexOf(getText("dropdown7")))];
      var X = encodeURI(getText("text_input10"));
      startWebRequest(((("https://translate.yandex.net/api/v1.5/tr.json/translate?key="+'trnsl.1.1.20190406T140610Z.78a1aaf1421284be.05452a97159475154a8701856fa8a5b646943da5')+"&text=")+X)+"&lang="+(translateCode), function(status, type, content) {
        if (content[0]=="{") {
          content = JSON.parse(content);
          if (content.code==200) {
            setText("text_input10", (content.text)[0]);
          }
        }
      });
    }, 200);
  });
}
onEvent("button25", "click", function( ) {
  setScreen("Main");
});
// 
updateTheVariables();
setTimeout(function() {
  onEvent("button20", "click", function( ) {
    setScreen("chat");
  });
  onEvent("image8", "click", function( ) {
    setScreen("chat");
  });
  hideElement("button21");
  update();
}, 1000);
onEvent("button24", "click", function() {
  DataTablesUpdate(getText("text_input10"), getText("dropdown5"), getCurrentTime());
  setText("text_input10", "");
});
onRecordEvent("Messages", function(record, eventType) {
  updateTheVariables();
  update();
});
function DataTablesUpdate(themessage, theperson, thetime) {
  createRecord("Messages"+'', {message:themessage}, function(record) {
    
  });
  createRecord("People"+'', {person:theperson}, function(record) {
    
  });
  createRecord("Timings"+'', {Time:thetime}, function(record) {
    updateTheVariables();
  });
}
var messages;
var people;
var timings;
function updateTheVariables() {
  readRecords("Messages"+'', {}, function(records) {
    messages = records;
  });
  readRecords("People"+'', {}, function(records) {
    people = records;
  });
  readRecords("Timings"+'', {}, function(records) {
    timings = records;
  });
}
setStyle("text_area3","scroll-behavior: smooth;");
function FormattingTheChat(input) {
  var T = input;
  var THETIME = getTime();
  if (input.includes(":")) {
    //Made a correction in the below line on 30/4/2019
    T = T.replace(/Image:( |)("[\S]*")/gi, '<img src=$2  style="max-width: 165px;"/>');
    var ListOfAudioMatches = T.match(/Audio:("[\S]*")/gi);
    if (ListOfAudioMatches != null) {
      T = T.replace(/Audio:("[\S]*")/gi, ('<div id='+THETIME+(ListOfAudioMatches[0]).replace("Audio:", ""))+'>Click Me!</div>');
    }
    T = T.replace(/Word:"([\s\S]*)"([\s\S]*)/gi, ('<div id="$2'+THETIME)+'Word_$1">$1.docx</div>');
    T = T.replace(/HTML:"([\s\S]*)"([\s\S]*)/gi, ('<div id="$2'+THETIME)+'HTML_$1">$1.docx</div>');
  } else {
    T = T.replace(/_([*$A-Za-z0-9 <>:/]*)_/gi, '<b>$1</b>');
    T = T.replace(/\*([_$A-Za-z0-9 <>:/]*)\*/gi, '<i>$1</i>');
    T = T.replace(/\$([_\*A-Za-z0-9 <>:/]*)\$/gi, '<u>$1</u>');
  }
  return(T);
}
function update() {
  var CurrentTime = getTime();
  setTimeout(function() {
    // 
    var innerHtml = "";
    innerHtml = "<button><a href=\"#SKIPToBottom"+CurrentTime+"\">Scroll to the bottom</a></button>";
    for (var i = 0; i < messages.length; i++) {
      var Message = messages[i].message;
      var Time = timings[i].Time;
      var Person = people[i].person;
      Message = FormattingTheChat(Message);
      innerHtml = (innerHtml+"<div style='color: #333;text-align: right;font-size: 15px;line-height: 15px;text-transform: capitalize; width:270px; float:right; padding-right:5px; position:relative; top:5px;'>")+Person+"</div>";
      innerHtml = (((innerHtml+"<div style='float:right; width:300'><button style='padding:10px; background-color:blue; color:white; border-radius:10px; max-width: 300px; display: inline-block; float:right; line-height: 25px;'>")+""+"")+Message+"</button><span style='font-size:10px; padding:10px; padding-top:12px; float:right'>")+Time+"</span></div>";
    }
    innerHtml = innerHtml+"<div style=\"line-height: 15px; width:270px; float:left; padding-left:5px; position:relative; top:5px\" id=\"SKIPToBottom"+CurrentTime+"\"></div>";
    innerHTML("text_area3",innerHtml);
  }, 2000);
}
//Comments and Credits
onEvent("button17", "click", function( ) {
  setScreen("commentsandcredits");
});
onEvent("button188", "click", function( ) {
  setScreen("Main");
});
var Text58 = getText("text_area58");
onEvent("text_area58", "click", function( ) {
  if (getText("text_area58") == Text58) {
    setText("text_area58", "");
  }
});
onEvent("button185", "click", function(event) {
  var ideas = getText("text_area58");
  setText("text_area58", "Thank You!");
  createRecord("ideas_and_comments", {Comment:ideas}, function(record) {
    
  });
});
onEvent("button189", "click", function( ) {
  setScreen("commentsandcredits");
});
onEvent("button183", "click", function(event) {
  setScreen("likeandunlike");
  setTimeout(function() {
    getKeyValue("Like", function (value) {
      setKeyValue("Like", value+1, function () {
        getKeyValue("Dislike", function (value2) {
          drawChart("chart1", "bar", [
          	({ label: "Like", value: value+1 }),
          	({ label: "Dislike", value: value2 })
          ]);
          drawChart("chart2", "pie", [
          	({ label: "Like", value: value+1 }),
          	({ label: "Dislike", value: value2 })
          ]);
        });
      });
    });
  }, 500);
});
onEvent("button184", "click", function(event) {
  setScreen("likeandunlike");
  setTimeout(function() {
    getKeyValue("Dislike", function (value) {
      setKeyValue("Dislike", value+1, function () {
        getKeyValue("Like", function (value2) {
          drawChart("chart1", "bar", [
          	({ label: "Like", value: value2 }),
          	({ label: "Dislike", value: (value+1) })
          ]);
          drawChart("chart2", "pie", [
          	({ label: "Like", value: value2 }),
          	({ label: "Dislike", value: (value+1) })
          ]);
        });
      });
    });
  }, 500);
});
