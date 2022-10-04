const getData=async (page_number)=>
{
    try{
    let res = await fetch(`http://localhost:3000/posts?_page=${page_number}&_limit=3`)
    let data=await res.json();
    console.log("Data:",data)
  //  showButtons(data.length,1)
    appendData(data)
    }
    catch(error){
        console.log(error)
    }
}

getData()
//json-server --watch db.json

let container=document.getElementById("container")
//what and where
function appendData(data){
    data.forEach(({title})=>{
        let p=document.createElement("p")
        p.innerText=title
        container.append(p)
    })
}



const showButtons =(results,per_page)=>{
    //10 buttons
    let buttons_div=document.getElementById('buttons');
    // let results=11;
    // let per_page=3
    let buttons=Math.ceil(results/per_page)
    for(let i=1;i<=buttons;i++){
        let button=document.createElement("button")
        button.innerText=i
        button.onclick=function(){
            getData(i);
        }
        buttons_div.append(button)
    }
    
}

// const pagination=(page_no)=>{
//     console.log("page no:",page_no)

//     //do i need t show data
//     //append data

// }

showButtons(11,3)