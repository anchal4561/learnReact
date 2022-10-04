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


function appendData(data){
    container.innerHTML=null;
    let name=document.createElement("p")
    name.innerText=`Name- ${data.name}`
    let temp=document.createElement("p")
    temp.innerText=`Temp-${data.main.temp}`
    let humidity=document.createElement("p")
    humidity.innerText=`Humidity-${data.main.humidity}`
    let pressure=document.createElement("p")
    pressure.innerText=`Pressure-${data.main.pressure}`
    container.append(name,temp,humidity,pressure)
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}

//go to openweather documentation
//figure out the url that  w e can use to get data

//url -https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//fetch()
//make api request to get weather data for your city

// let x=getValue(`city`)
// let y=getValue(`name`)
// let z=getValue(`age`)
// function getValue(val)
// {
//  return document.getElementById(val),value
// }