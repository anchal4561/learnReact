let data;

let container = document.getElementById("container");

function display(data) {
    container.innerHTML = null;

    if (data == undefined) {
        let error_img = document.createElement("img")
        error_img.src = "https://cdn.vectorstock.com/i/1000x1000/83/08/error-on-laptop-display-color-icon-vector-41648308.webp"

        container.append(error_img)
    } else {
        data.forEach(function (el) {

            let div = document.createElement("div")

            let title = document.createElement("h3")
            title.innerText = el.Title

            let year = document.createElement("p")
            year.innerText = el.Year

            let type = document.createElement("p")
            type.innerText = el.Type

            let poster = document.createElement("img")
            poster.src = el.Poster

            div.append(poster, title, year,type)
            container.append(div)
        })
    }
}


async function movies() {
    let search = document.querySelector("#search").value;
    try {
        let res = await fetch(`https://www.omdbapi.com/?apikey=3d7d786d&s=${search}`);
        data = await res.json();
        data=data.Search
        display(data);

    } catch (error) {
        console.log("error");
        display()

    }
}



async function filter(){
    let search = document.querySelector("#search").value;
    let query=document.getElementById('query').value;
    try {
        let res = await fetch(`https://www.omdbapi.com/?apikey=3d7d786d&s=${search}&y=${query}`);
        data = await res.json();
        data=data.Search
        display(data);

    } catch (error) {
        display()
    }
}


function sortingYear(){
    let sorting_year= document.querySelector('#sort_year').value;
    //let  x=[...data]
    if(sorting_year==="LH"){
     let LH_year=data.sort(function(a,b){
        return a.Year-b.Year;
     })  
     display(LH_year) 
    }
    else if (sorting_year==="HL"){
        let HL_year=data.sort(function(a,b){
            return b.Year-a.Year;
         })  
         display(HL_year)
    }
}
