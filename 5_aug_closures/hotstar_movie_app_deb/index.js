//input box
//add an output event listener
//grab the value
let movies_div=document.getElementById("movies")
let id;
async function main(){
    try{
    let query=document.getElementById('query').value ;
    //console.log('query:',query)
    
    //what kind of data we neded
    //we need  movie data from omdb
    let res=await fetch(`http://www.omdbapi.com/?apikey=7cc2c43f&s=${query}`);
    let data=await res.json();
    console.log('data:',data)
        let actual_data=data.Search;
        console.log('actual_data',actual_data)
        if(actual_data!==undefined){
        appendMovies(actual_data);
        }
    }

    catch(err){
        console.log('err:',err)
    }
}


let maindiv =document.querySelector("#main1");
let container=document.querySelector("#main");

function appendMovies(data){
    movies_div.innerHTML=null;
    
    data.forEach(function(el){
        
    let div = document.createElement("div")
    div.addEventListener("click",function(){
        maindiv.style.display="block"
        maindiv.style.backgroundImage="url('https://pbs.twimg.com/ext_tw_video_thumb/1479056860242006021/pu/img/j9PdPDfpWgs2p0w3.jpg')"
    // let div2 = document.createElement("div")
    // div2.style.backgroundImage="url('https://pbs.twimg.com/ext_tw_video_thumb/1479056860242006021/pu/img/j9PdPDfpWgs2p0w3.jpg')"
        let name2=document.createElement('p')
        name2.innerText=el.Title;
        let poster2=document.createElement("img")
        poster2.src=el.Poster
        let year2=document.createElement("p")
        year2.innerText=el.Year
        //div2.append()
        container.append(div)
        div.append(name2,year2,poster2);
    })
    let name=document.createElement('p')
    name.innerText=el.Title;
    let poster=document.createElement("img")
    poster.src=el.Poster
    movies_div.append(div);
    div.append(poster,name)
})
}


// function movieDetails(data){
//     data.forEach(function(el){
//         let div = document.createElement("div")
//         let name=document.createElement('p')
//         name.innerText=el.Title;
//         let poster=document.createElement("img")
//         poster.src=el.Poster
//         let year=document.createElement("p")
//         year.innerText=el.Year
//         displayMovies.append(div);
//         div.append(year,poster,name)
// })
// }
//debouncing


function debounce(func,delay){
    //a-> debounce-> main>setTimeout('a')-?id=1
    //av-debounce-> main ->setTimeout('av')->id=2
    //ave-debounce-> main ->setTimeout('ave')->id=3
 
 //current word-ave
  //setTimeout('av')

  //we dont need setTimeout('ave')-> fetch('ave')
 
    if(id)
 {
    clearTimeout(id);
 }

clearTimeout();
 id=    setTimeout(function(){
        func(); //main()
    },delay)
}

