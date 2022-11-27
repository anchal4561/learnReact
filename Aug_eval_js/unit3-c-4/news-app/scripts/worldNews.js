let user=JSON.parse(localStorage.getItem("user"));
let container=document.querySelector("#news_container")
let getNews=async(country)=>{
    try{

        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${country}`)
         let data =await res.json();
         console.log("data:",data)
        appendData(data)
    }
    catch(error){
        console.log(error);
    }
}


getNews(user.country)


let appendData=(data)=>{
    container.innerHTML=null;
    data.articles.forEach(({urlToImage,title,description,author})=>{
        let div=document.createElement("div")
        div.setAttribute("class","news");
        div.addEventListener("click",function(){
            let obj={
                urlToImage,
                title,
                author,
                description
            }
            localStorage.setItem("news",JSON.stringify(obj))
            window.location.href="news.html"
        })
        let image = document.createElement("img");
        image.src = urlToImage;
   
        let news_title = document.createElement("h2");
        news_title.innerText = title;
   
        let news_author = document.createElement("h4");
        news_author.innerText = author
   
        div.append(image,news_title,news_author)
        container.append(div)

    })
}


//searchby type
let searchNews=async()=>{
    let query=document.querySelector("#search").value;
    try{
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${query}`)
        let data = await res.json();
        console.log(data)
          appendData(data)
    }catch(error){
        console.log(error)
    }
}



//by countries

let indiaNews = async ()=>{
    try {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)
        let data = await res.json();
        console.log(data)
        appendData(data)


    } catch (error) {
        console.log(error)
    }
}
let nzNews = async () => {
    try {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`)
        let data = await res.json();
        console.log(data)
        appendData(data)


    } catch (error) {
        console.log(error)
    }
}
let ukNews = async () => {
    try {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`)
        let data = await res.json();
        console.log(data)
        appendData(data)


    } catch (error) {
        console.log(error)
    }
}
let usaNews = async () => {
    try {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`)
        let data = await res.json();
        console.log(data)
        appendData(data)


    } catch (error) {
        console.log(error)
    }
}
let chinaNews = async () => {
    try {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`)
        let data = await res.json();
        console.log(data)
        appendData(data)


    } catch (error) {
        console.log(error)
    }
}