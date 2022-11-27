// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let walletAmount=JSON.parse(+localStorage.getItem("amount"))|| 0;
document.querySelector("#wallet").innerText = walletAmount;
let container=document.querySelector("#movies")
let searchMovie=function(){
    let query=document.querySelector("#search").value ;
    getMovies(query)
}

async function getMovies(query){
    try{
        let res=await fetch(`https://www.omdbapi.com/?apikey=3d7d786d&s=${query}`)
        let data=await res.json();
        display(data.Search)
        console.log("Data:",data)
    }
    catch(error){
        console.log(error)
    }
}

//debouncing
let id;
let debouncing = function(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(() => {
        func();
    }, delay);
}

let display=function(data){
    container.innerHTML=null;
    //destructuring
    data.forEach(function({Title,Poster}){
        let div=document.createElement("div")
        div.setAttribute("class","movie_div")
        let img=document.createElement("img")
        img.src=Poster;
        let title=document.createElement("p")
        title.innerText=Title;
        let btn=document.createElement("button");
        btn.innerText="Book Now"
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",function(){
            let obj={}
            obj.Poster=Poster;
            obj.Title=Title;
            localStorage.setItem("movie",JSON.stringify(obj))
            window.location.href="checkout.html"
        })
        div.append(img,title,btn)
        container.append(div)
    })
}