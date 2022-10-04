function storeImage(){
    let url=document.getElementById('url').value;
    //first time
    let images=JSON.parse(localStorage.getItem('images'))||[]
    images.push(url)
    localStorage.setItem('images',JSON.stringify(images))
}

//what-images
//where -ls

let count=0;
let id;
function start(){
    document.querySelector("#container").innerHTML=null;
    let time=document.querySelector("#delay").value || 3000;
    let images=JSON.parse(localStorage.getItem('images'))
    let container =document.getElementById('container')
    container.innerHTML=null
    //append?
    //we have images? -URL's
    //do we need to access each url?
    //images[1]==index++ after every 3 sec
    //images[2]
    //images[3]
    let img=document.createElement('img')
    img.src=images[count]
        container.append(img);
        count++;
        document.querySelector("#timer").innerText=count
   id= setInterval(function(){
    if(count===images.length){
        count=0
        document.querySelector("#timer").innerText=count
    }

        img.src=images[count]
        container.append(img);
        count++;
        document.querySelector("#timer").innerText=count
        console.log("count:",count)
    },3000)
}


//create Ineterval
//stop interval
//createInterval

function pause(){
    console.log("paused",count)
    clearInterval(id);
}

