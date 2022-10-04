let container = document.querySelector("#container")

let data = JSON.parse(localStorage.getItem("videoData"));

function searchResult() {
    let query = document.querySelector("#query").value;
    localStorage.setItem("query", query)
    console.log(query)
    window.location.href = "search.html"
}

let appendVideos = (data) => {
    container.innerHTML = null;

        let div = document.createElement("div");

        let iframe = document.createElement("iframe")

        iframe.src = `https://www.youtube.com/embed/${data.videoId}`;

        iframe.width = "600px";
        iframe.height = "400px";
        iframe.allow = "fullscreen"

        let name = document.createElement('h5');
        name.innerText = data.title;

        div.append(iframe, name);
        container.append(div) 
};
appendVideos(data)