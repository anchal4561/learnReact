//api call to fake store api
//getdata=>fetch>url
//append-> data-location?

async function getData(url){
    try{
    let res=await fetch(url)
    let data = await res.json()
     return data;
    }
    catch(err){
        console.log("error",err)
    }
}

function append(data,container){
    data.forEach(({title,image})=>{
        let div=document.createElement('div')
        let p=document.createElement('p')
        let img=document.createElement('img')
        
        p.innerText=title;
        img.src=image
        div.append(img,p);
        container.append(div)
    })

}

export {getData,append};