let news=JSON.parse(localStorage.getItem("news"))
console.log(news);
let news_container=document.querySelector("#show_news")
let displayNews=(news)=>{
    news_container.innerHTML=null;
    let image=document.createElement("img");
    image.src = news.urlToImage;
     let title = document.createElement("h2");
     title.innerText=news.title;
     let description = document.createElement("p");
     description.innerText = news.description;
     let author = document.createElement("h5");
     author.innerText = news.author
     news_container.append(image,title,description,author)
    }

displayNews(news)

