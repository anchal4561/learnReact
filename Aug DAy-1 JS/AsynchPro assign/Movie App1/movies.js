document.querySelector("#add_more_product").addEventListener("click", function(){
    window.location.href="index.html"
})

let movieData=JSON.parse(localStorage.getItem('movies'))||[]
display (movieData)

function display(data)
{
    document.querySelector("#all_movies").innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div")
        let name=document.createElement("p")
        name.innerText="Name: "+el.name;
        let date =document.createElement("p");
       date.innerText = "Release date : " + el.release_date;
    
    let poster = document.createElement("img");
    poster.src = el.poster;

    let rating=document.createElement("p");
    rating.innerText=" IMDb Rating : "+el.rating;

    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.id="remove_prod"
    btn.style.color="red"
    btn.addEventListener("click",function(){
        movieData.splice(index,1);
        localStorage.setItem('movies',JSON.stringify(movieData))
        display(movieData);
    })
    div.append(name,date,poster,rating,btn)
    document.querySelector("#all_movies").append(div)    
})
}


let sortByRating=document.querySelector("#sortByRating")
sortByRating.addEventListener("change",function(){
    if(sortByRating.value=="low"){
        let result=movieData.sort(function(a,b){
            return a.rating-b.rating
        })
        display(result)
    }
    if (sortByRating.value == "high") {
        let result = movieData.sort(function (a,b) {
           return b.rating-a.rating;
        })
        display(result)
     }
})