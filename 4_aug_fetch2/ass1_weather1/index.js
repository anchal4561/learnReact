let key="8c1f9443b8df13f43638df6c485553d7"
let container=document.getElementById("container");
let map=document.getElementById("gmap_canvas");

let data;
async function getWeather(){
    try{
    let city=document.getElementById("city").value;
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    data=await res.json();
    console.log("data:",data)
    appendData(data);
    }
    catch(err){
        console.log("err:",err);
    }   
}
function realtime() {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var ampm = "am";
    if (hr > 12) {
        hr -= 12;
        ampm = "pm";
    } else if (hr == 0) {
        hr = 12
    }
    var date = d.getDate();
    var month = months[d.getMonth()];
    let day = days[d.getDay()];
    return day+" "+month + " " + date + "," + " " + hr + ":" + min + ampm;
}

function convertTime(unixTime) {
    let dt = new Date(unixTime * 1000)
    let h = dt.getHours()
    let m = "0" + dt.getMinutes()

    var ampm = "am";
    if (h > 12) {
        h -= 12;
        ampm = "pm";
    } else if (h == 0) {
        h = 12
    }
    let t = h + ":" + m.substr(-2) + " " + ampm;
    return t
}

function appendData(data){
    container.innerHTML=null;
    var time = document.createElement("p");
    time.innerText = realtime()
    let name=document.createElement("p")
    name.innerText=`Name- ${data.name}|${data.sys.country}`
    let icon = document.createElement("img");
    let iconId = data.weather[0].icon;
    icon.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    let temp=document.createElement("p")
    temp.innerText=`Temp-${data.main.temp}`

    let maxtemp = document.createElement("p");
    maxtemp.innerText = `Max Temperature - ${data.main.temp_max}`;

    let mintemp = document.createElement("p");
    mintemp.innerText = `Min Temperature - ${data.main.temp_min}`;

    let humidity=document.createElement("p")
    humidity.innerText=`Humidity-${data.main.humidity}`
    let pressure=document.createElement("p")
    pressure.innerText=`Pressure-${data.main.pressure}`
    let windSpeed = document.createElement("p");
    windSpeed.innerText = `Wind Speed - ${data.wind.speed}`;
    let clouds = document.createElement("p");
    let clouds_type = data.weather[0].description;
    console.log(">>>",)
    clouds.innerText=`Clouds-${clouds_type}`


    let sunRiseDiv = document.createElement("div");
    sunRiseDiv.setAttribute("class", "sun")
    let riseicon = document.createElement("img")
    riseicon.src = 'https://img.icons8.com/color/2x/sunrise.png'
    let sunrise = document.createElement("p");
    let sunriseTime = convertTime(data.sys.sunrise)
    sunrise.innerText = `${sunriseTime}`;

    let sunSetDiv = document.createElement("div");
    sunSetDiv.setAttribute("class", "sun")
    let seticon = document.createElement("img");
    seticon.src = 'https://img.icons8.com/color/2x/sunset.png'
    let sunset = document.createElement("p");
    let sunsetTime = convertTime(data.sys.sunset)
    sunset.innerText = `${sunsetTime}`;

    sunRiseDiv.append(riseicon, sunrise)
    sunSetDiv.append(seticon, sunset)
    container.append(time, name, icon, temp, mintemp, maxtemp, humidity, pressure, windSpeed,clouds,sunRiseDiv, sunSetDiv)
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}
