document.querySelector("#show_movies").addEventListener("click", function(){
    window.location.href="movies.html"
})

let movieData=JSON.parse(localStorage.getItem("movies"))||[]
function addMovie(e){
    e.preventDefault();
    let form =document.querySelector("#movies");
    let name=form.name.value;
    let date=form.date.value;
    let poster=form.poster.value;
    let rating=form.rating.value;
    let m1=new addMovieCF(name,date,poster,rating);
    console.log(m1)
    movieData.push(m1);
    localStorage.setItem("movies",JSON.stringify(movieData)) 
}

function addMovieCF(n,d,p,r){
    this.name=n;
    this.release_date=d;
    this.poster=p;
    this.rating=r;
}
