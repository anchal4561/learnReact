let API_key='AIzaSyDZyHsvYD76OsMQi4PYSpSwsC_WrA8sTYo';
let container=document.getElementById("search_results")

let getData=async ()=>{

    try{
        let query=document.getElementById("query").value ;
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_key}&part=snippet&maxResults=20`);
        let {items} =await res.json();
        let array_of_videos=items;
        console.log('array of vidos',array_of_videos)
        appendVideos(array_of_videos)
    }
    catch(error){
        console.log("error")
    }
}

let appendVideos = (data) => {

    container.innerHTML = null;

    data.forEach(({ snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }) => {

        let div = document.createElement("div");
        div.addEventListener("click" , () =>{
            let obj={
                title : title,
                videoId: videoId 
            }
             
            localStorage.setItem("videoData", JSON.stringify(obj))

            window.location.href="video.html"
        })
        let image = document.createElement("img")

        image.src = url;

        let name = document.createElement('h5');
        name.innerText = title;

        div.append(image, name);
        container.append(div)
        console.log(title, url)
    });
};