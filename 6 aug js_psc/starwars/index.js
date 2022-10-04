

async function getCharacter(){
    try{
        let query = document.querySelector("#character").value;

        let res = await fetch(`https://swapi.dev/api/people/?search=${query}`)

        let data = await res.json();

        console.log(data);

        display(data)

    }
    catch(error){
        console.log("error");
    }

}   
let maindiv =document.querySelector("#main1");
let container=document.querySelector("#main");
let searchBox = document.querySelector("#character");

function display(xyz){
    
    container.innerHTML = "";
    
    xyz.results.forEach(function(el){
        maindiv.style.display="block"
        //searchBox.addEventListener("click",searchData)
        //function searchData(){
        // let div1=document.createElement("div")
        // div1.id="main"
        let div = document.createElement("div")
        div.addEventListener("click", function(){
         localStorage.setItem("movieData" , JSON.stringify(el))
           window.location.href="detail.html"
        })
        let p=document.createElement("p");
        p.innerText=el.name;
        p.style.color="white";
        container.append(div)
        div.append(p)
        //}
    })

}


let id;
function debounce(func,delay){

    if (id) {
        clearTimeout(id);
    }

id = setTimeout(function(){
   func();
},delay)
}