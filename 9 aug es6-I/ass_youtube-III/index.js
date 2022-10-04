let API = "AIzaSyDdU8c9py3LI3lLVvutB59wOhx_ekU3j38";

let container = document.querySelector("#search_results");

let array_of_videos;

let query;
function searchResult(){
    query = document.getElementById("query").value || localStorage.getItem("query"); 
    console.log(query)
    getFilteredData()
}



let getFilteredData = async () => {
  
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`
    );

    let { items } = await res.json();

    array_of_videos = items;

    console.log(array_of_videos);

      displaySearchVideos(array_of_videos);
  } catch (error) {}
};

let getData = async () => {
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&fields=items(id%2Csnippet(title%2cchannelTitle%2Cthumbnails(medium(url))))&key=${API}&maxResults=20`
    );

    let { items } = await res.json();

    array_of_videos = items;

    console.log(array_of_videos);

    appendVideos(array_of_videos);
  } catch (error) {}
};

getData();

let appendVideos = (data) => {
  container.innerHTML = null;

  data.forEach(({snippet: { title },id,snippet: {thumbnails: {medium: { url }}}}) => {
      let div = document.createElement("div");
      div.addEventListener("click", () => {
        let obj = {
          title: title,
          videoId: id,
        };
        localStorage.setItem("videoData", JSON.stringify(obj));

        window.location.href = "video.html";
      });
      let image = document.createElement("img");

      image.src = url;

      let name = document.createElement("h5");
      name.innerText = title;

      div.append(image, name);
      container.append(div);
      console.log(title, url, id);
    }
  );
};

let displaySearchVideos = (data) => {

    container.innerHTML = null;

    data.forEach(({ snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }) => {
        
      console.log(videoId)

        let div = document.createElement("div");
        div.addEventListener("click", () => {
            let obj = {
                title: title,
                videoId: videoId,
            }

            localStorage.setItem("videoData", JSON.stringify(obj))

            window.location.href = "video.html"
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


let filter = () => {
    let sort1 = document.querySelector("#filter");
        console.log(sort1.value)
        if (sort1.value === "oldtonew") {
            let x = array_of_videos.sort((a, b) => {
                return new Date(a.snippet.publishedAt) - new Date(b.snippet.publishedAt)
            })
             displaySearchVideos(x)
        } 
        else if (sort1.value === "newtoold")  {
            let x = array_of_videos.sort((a, b) => {
                return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
            })
             displaySearchVideos(x)
        }
}