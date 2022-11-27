let movieData = JSON.parse(localStorage.getItem("movieData"))

console.log(movieData)

let container =document.querySelector("#displayMovie")

let detailsDiv=document.createElement("div");
let movieName = document.createElement("h1")
movieName.innerText = movieData.name

let personalInfoDiv = document.createElement("div")
let personalInfoh1=document.createElement("h1")
personalInfoh1.innerText="Personal Info"
let birthYear=document.createElement("p");
birthYear.innerText=`Birth Year: ${movieData.birth_year}`;
let gender=document.createElement("p");
gender.innerText=`Gender: ${movieData.gender}`;
let height=document.createElement("p")
height.innerText=`Height: ${movieData.height}`;
personalInfoDiv.append(personalInfoh1,birthYear,gender,height)

let anatomyDiv = document.createElement("div")
let anatomyh1=document.createElement("h1")
anatomyh1.innerText="Anatomy"

let eyeColor=document.createElement("p");
eyeColor.innerText=`Eye Color: ${movieData.eye_color}`
let mass=document.createElement("p")
mass.innerText=`Mass: ${movieData.mass}`
let hairColor=document.createElement("p");
hairColor.innerText=`Hair Color: ${movieData.hair_color}`
anatomyDiv.append(anatomyh1,eyeColor,mass,hairColor)

let goBackBtn=document.createElement("button")
goBackBtn.innerText="Go Back"
goBackBtn.addEventListener("click",function(){
    window.location.href="index.html"
})
detailsDiv.append(personalInfoDiv,anatomyDiv)
container.append(movieName,detailsDiv,goBackBtn)
