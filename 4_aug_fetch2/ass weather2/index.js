let key = "8c1f9443b8df13f43638df6c485553d7";
let data;
let forcast;
async function getWeather() {

    let city = document.querySelector("#city").value;
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        data = await res.json();

        display(data)
        console.log(data)
        getForcast()
    }
    catch (err) {
        console.log(err);
    }
}

async function getForcast() {

    let city = document.querySelector("#city").value;
    try {
        let res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`)

        forcast = await res2.json();

        displayForcast(forcast)

        console.log(forcast)
    }
    catch (err) {
        console.log(err);
    }
}



let container = document.querySelector("#container");
let map = document.querySelector("#gmap_canvas")

function display(data) {
    container.innerHTML = "";

    var time = document.createElement("p");
    time.innerText = realtime()

    let name = document.createElement("p");
    name.innerText = `City - ${data.name} | ${data.sys.country}`

    let temp = document.createElement("p");
    temp.innerText = `Temperature - ${data.main.temp}`;

    let maxtemp = document.createElement("p");
    maxtemp.innerText = `Max Temperature - ${data.main.temp_max}`;

    let mintemp = document.createElement("p");
    mintemp.innerText = `Min Temperature - ${data.main.temp_min}`;

    let humidity = document.createElement("p");
    humidity.innerText = `Humidity - ${data.main.humidity}`;

    let pressure = document.createElement("p");

    pressure.innerText = `Pressure - ${data.main.pressure}`;

    let windSpeed = document.createElement("p");

    windSpeed.innerText = `Wind Speed - ${data.wind.speed}`;

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

    let icon = document.createElement("img");
    let iconId = data.weather[0].icon;
    icon.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    sunRiseDiv.append(riseicon, sunrise)
    sunSetDiv.append(seticon, sunset)
    container.append(time, name, icon, temp, mintemp, maxtemp, humidity, pressure, sunRiseDiv, sunSetDiv)
}



let box = document.querySelector("#forcast");

function displayForcast(forcast){
    box.innerHTML=null;
      
    forcast.list.forEach(function(el){
    
       let div=document.createElement("div");

       let day=document.createElement("h3");
        day.innerText = forcastDay(el.dt)
       let maxTemp = document.createElement("p");
        maxTemp.innerText = el.main.temp_max;
        let minTemp = document.createElement("p");
        minTemp.innerText = el.main.temp_min;
      

        div.append(day, maxTemp,minTemp)
       box.append(div)
    })
}

function forcastDay(unixTime){
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let dt = new Date(unixTime*1000)
    //console.log(">>",dt)
    let day = days[dt.getDay()];
    console.log(day)
    return day
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