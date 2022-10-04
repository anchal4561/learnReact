//https://swapi.dev/api/people/?search=${query}

let id;
async function getData(){
    let query=document.getElementById("query").value ;
    let url=`https://swapi.dev/api/people/?search=${query}`;
    let res=await fetch(url);
    let data=await res.json();
    console.log('data',data);
    console.log(data.results)
    return data.results   
}

function appendData(data){
    let container=document.getElementById('results');
    container.innerHTML=null;
    data.forEach(function(el){
        let p= document.createElement("p")
        p.innerText=el.name;
        container.append(p)
    })
}

async function main(){
    let data=await getData();
    console.log('data',data)
    appendData(data)
}

function debounce(func,delay){
    if(id)
 {
    clearTimeout(id);
 }

clearTimeout();
 id=  setTimeout(function(){
       func(); //main()
    },delay)
}
