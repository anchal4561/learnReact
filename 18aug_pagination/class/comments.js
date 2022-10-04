let url="https://jsonplaceholder.typicode.com/comments"
let data=[];
let getData=async ()=>
{
    let res= await fetch(url);
    res =await res.json();
    return res;
}


let main=async ()=> {
    data=await getData();
    //by default frst page -index-0
    renderDom(0);
    //console.log(data)
    showButtons(1)
}

main()

let renderDom=(index)=>{
    let cont=document.getElementById('container');
    cont.innerHTML=null;

    //index=0;
    let start=10*index;//0
    let end=start+10//9
    let per_page_data=data.slice(start,end)
//slice dont include last index
    per_page_data.forEach(({id,name})=>{
        let p=document.createElement("p")
        p.innerText=`${id} ${name}`;
        cont.append(p)
    })
    showButtons(index+1)
}

//how many pages there?
let showButtons=(page)=>{
    let btns=document.getElementById('buttons');
    btns.innerHTML=null;
    let start=1;
    if (page>4){// if click on page-5
        start=page-1//4
    }
    for(let i=start;i<=start+9;i++){
        let b=document.createElement('button');
        b.innerText=i;
        b.onclick=()=>{
            renderDom(i-1)
        }
        btns.append(b);

    }
}

