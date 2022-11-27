let container =document.querySelector("#container");

async function getTrendingMovies(){
    
    try{
        let res = await fetch("https://api.themoviedb.org/4/list/1?api_key=ce6032e8dce19470e176869ec50ad9bb");

        let data = await res.json();
         
        console.log(data);
        appendTrendingMovies(data)
    }
    catch(err){
        console.log(err)
    }
}

getTrendingMovies()


function appendTrendingMovies(data){
    container.innerHTML="";
    data.results.forEach(function(el){
           
        let div= document.createElement("div");

        let name = document.createElement("h2");
        name.innerText = el.original_title;

        let poster = document.createElement("img");
        poster.src = `https://www.themoviedb.org/t/p/w500/${el.poster_path}`

        let rating = document.createElement("p");
        rating.innerText =`Rating : ${el.vote_average}`;

        div.append(poster, name, rating)
        container.append(div)

    })
}