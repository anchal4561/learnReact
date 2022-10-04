//search bar type brahmastra
//accept search bar value[onclick]
//url
//append data

//get movie data from yotube fetch
//we need url
//appendData();
//key - AIzaSyDZyHsvYD76OsMQi4PYSpSwsC_WrA8sTYo
//url- "https://youtube.googleapis.com/youtube/v3/search?q=brahmastra&key=[YOUR_API_KEY]"
//yt identify dtaa by videoid
//writing in es6
let API_key='AIzaSyDZyHsvYD76OsMQi4PYSpSwsC_WrA8sTYo';
let container=document.getElementById("container")
 let getData=async ()=>{

    try{
        let query=document.getElementById("query").value ;
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_key}&part=snippet&maxResults=20`)
        //let data =await res.json();
        let {items} =await res.json();
       // console.log('data',data);
        //let array_of_videos=data.items;
        let array_of_videos=items;
        console.log('array of videos',array_of_videos)
        appendVideos(array_of_videos)
    }
    catch(error){
        console.log("error")
    }
}


    let appendVideos = (data) => {

        container.innerHTML = null;
    
        data.forEach(({ snippet: { title }, id: { videoId }}) => {
        // let title=el.snippet.title
        // let videoId=el.id.videoId;
        let div=document.createElement('div');
        let iframe=document.createElement('iframe')
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.width='100%'
        iframe.height='100%'
        iframe.allow='fullscreen'
        let name=document.createElement('h5');
        name.innerText=title;
        div.append(iframe,name)
        container.append(div);
    })
}