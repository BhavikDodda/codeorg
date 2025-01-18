var TEMP, MIN, MAX, CONDITION, WIND, HUMIDITY, PRESSURE, IMAGEID, CITYNAME;
var ZIP = "jacksonville", APIKEY = "fdf4374744737e3bb84d449000783f93", UNITS = "imperial";
var weatherDone = false, forecastDone = false;
var HourlyTemp = [], HourlyHigh = [], HourlyLow = [], HourlyIcon = [], WeatherTimings= [];

setChecked("FahrenheitRadio", true);
setScreen("LoadingScreen");
getData();

onEvent("RefreshButton", "click", function() {
  setScreen("LoadingScreen");
  getData();
});

onEvent("SettingsIcon", "click", function() {
  setScreen("SettingsScreen");
});

onEvent("SettingsEnterButton", "click", function() {
  if(getChecked("FahrenheitRadio")) {
    UNITS = "imperial";
  } else {
    UNITS = "metric";
  }
  if(getText("CityInput") !== "") {
    ZIP = getText("CityInput");
  }
  setScreen("LoadingScreen");
  getData();
});

onEvent("ReturnToSettingsButton", "click", function() {
  setScreen("SettingsScreen");
});

onEvent("RetryButton", "click", function() {
  setScreen("LoadingScreen");
  getData();
});

function getData() {
  startTime=0;
  endTime=5;
  startWebRequest(("http://api.openweathermap.org/data/2.5/weather?q=" + ZIP) + "&APPID=" + APIKEY + "&units=" + UNITS, function(status, type, content) {
    
    if(status == 200) {
      weatherDone = false;
      
      var CONTENT = JSON.parse(content);
      
      TEMP = parseInt(CONTENT.main.temp);
      MIN = parseInt(CONTENT.main.temp_min);
      MAX = parseInt(CONTENT.main.temp_max);
      WIND = parseInt(CONTENT.wind.speed);
      HUMIDITY = parseInt(CONTENT.main.humidity);
      PRESSURE = CONTENT.main.pressure;
      
      CONDITION = CONTENT.weather[0].main;
      IMAGEID = CONTENT.weather[0].icon;
      CITYNAME = CONTENT.name;
      
      weatherDone = true;
      loadComplete();
    } else if(status == 404) {
      setScreen("404Screen");
      return;
    } else {
      setScreen("ErrorScreen");
      return;
    }
  });
  
  startWebRequest(("http://api.openweathermap.org/data/2.5/forecast?q=" + ZIP + "&APPID=" + APIKEY) + "&units=" + UNITS, function(status, type, content) {
    if(status == 200) {
      forecastDone = false;
      var CONTENT = JSON.parse(content);
      
      for(var i = 0; i < CONTENT.cnt; i++) {
        HourlyTemp[i] = parseInt(CONTENT.list[i].main.temp);
        HourlyLow[i] = parseInt(CONTENT.list[i].main.temp_min);
        HourlyHigh[i] = parseInt(CONTENT.list[i].main.temp_max);
        HourlyIcon[i] = CONTENT.list[i].weather[0].icon;
        WeatherTimings[i] = CONTENT.list[i].dt_txt;
      }
      
      forecastDone = true;
      loadComplete();
    } else if(status == 404) {
      setScreen("404Screen");
      return;
    } else{
      setScreen("ErrorScreen");
      return;
    }
  });
}

function loadComplete() {
  if(weatherDone && forecastDone) {
    updateScreen();
    setScreen("ConditionsScreen");
  }
}
var startTime=0;
var endTime=5;
function updateScreen() {
  setActiveCanvas("HourlyBackgroundCanvas");
  setStrokeColor("#FFFFFF");
  line(64, 295, 64, 425);
  line(128, 295, 128, 425);
  line(192, 295, 192, 425);
  line(256, 295, 256, 425);
  
  if(UNITS == "imperial") {
    setText("TemperatureLabel", TEMP + " °F");
    setText("HighLabel", MAX + " °F");
    setText("LowLabel", MIN + " °F");
    setText("WindLabel", WIND + " MPH");

    for(var i = startTime; i < endTime; i++) {
      var i2= i - startTime;
      setText((i2 + 1) * 3 + "HourHighLow", HourlyHigh[i] + " | " + HourlyLow[i]);
      setText((i2 + 1) * 3 + "HourTemp", HourlyTemp[i] + " °F");
      setText("HourLabel"+(i2+1), WeatherTimings[i].substring(WeatherTimings[i].indexOf(" "), WeatherTimings[i].length));
      setText("DayLabel"+(i2+1), WeatherTimings[i].substring(0, WeatherTimings[i].indexOf(" ")));
    }
  } else {
    setText("TemperatureLabel", TEMP + " °C");
    setText("HighLabel", MAX + " °C");
    setText("LowLabel", MIN + " °C");
    setText("WindLabel", WIND + " M/S");
    
    for(var j = startTime; j < endTime; j++) {
      var j2 = j-startTime
      setText((j2 + 1) * 3 + "HourHighLow", HourlyHigh[j] + " | " + HourlyLow[j]);
      setText((j2 + 1) * 3 + "HourTemp", HourlyTemp[j] + " °C");
      setText("HourLabel"+(j2+1), WeatherTimings[j].substring(WeatherTimings[j].indexOf(" "), WeatherTimings[j].length));
      setText("DayLabel"+(j2+1), WeatherTimings[j].substring(0, WeatherTimings[j].indexOf(" ")));
    }
  }
  setText("LocationLabel", CITYNAME);
  setText("ConditionLabel", CONDITION);
  setText("HumidityLabel", HUMIDITY + "%");
  setText("PressureLabel", PRESSURE + " hPa");
  setImageURL("ConditionImage", "http://openweathermap.org/img/w/" + IMAGEID + ".png");
  
  setImageURL("3HourImage", "http://openweathermap.org/img/w/" + HourlyIcon[startTime+0] + ".png");
  setImageURL("6HourImage", "http://openweathermap.org/img/w/" + HourlyIcon[startTime+1] + ".png");
  setImageURL("9HourImage", "http://openweathermap.org/img/w/" + HourlyIcon[startTime+2] + ".png");
  setImageURL("12HourImage", "http://openweathermap.org/img/w/" + HourlyIcon[startTime+3] + ".png");
  setImageURL("15HourImage", "http://openweathermap.org/img/w/" + HourlyIcon[startTime+4] + ".png");
}
onEvent("button1_weather", "click", function( ) {
  startTime=startTime-5;
  endTime=endTime-5;
  if (startTime>=0) {
    updateScreen();
    showElement("button2_weather");
  } else {
    hideElement("button1_weather");
  }
});
onEvent("button2_weather", "click", function( ) {
  startTime=startTime+5;
  endTime=endTime+5;
  if (endTime<WeatherTimings.length+1) {
    updateScreen();
    showElement("button1_weather");
  } else {
    hideElement("button2_weather");
  }
});
// 
onEvent("button1_moreInfo", "click", function( ) {
  setScreen("AirPollution");
});
onEvent("button2_back", "click", function( ) {
  setScreen("ConditionsScreen");
});
var pollLat = 23;
var polLong = 10;
var CurrYear = new Date().getFullYear();
AirPollution('co', 'chart1_CO');
function AirPollution(type, chart) {
  startWebRequest((("https://api.openweathermap.org/pollution/v1/"+type)+"/"+pollLat)+","+polLong+"/"+CurrYear+"Z.json?appid="+APIKEY, function(status, type, content) {
    if (content[0]=="{") {
      content = JSON.parse(content);
      var DATAARRAY = [];
      for (var i = 0; i < content.data.length; i++) {
        var TheValue = Number((content.data)[i].value);
        appendItem(DATAARRAY, { Data: "Row "+(i+1), "CO Index": (TheValue*1000000) ,"at. pressure":(content.data[i].pressure)/80,"precision":1000000*content.data[i].precision});
      }
      drawChart(chart, "line", DATAARRAY);
    }
  });
}
