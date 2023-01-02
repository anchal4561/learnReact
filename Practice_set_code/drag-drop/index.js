let data=["Item 1","Item 2","Item 3","Item 4","Item 5"]

const ul=document.querySelector("ul")
const createList=()=>{
    data.forEach((item,i)=>{
        const li=document.createElement("li");
        li.setAttribute("list_item",i);
        li.innerHTML=`
        <div class="user">
        <p class="icon">&#9868</p><h4>${item}</h4>
        </div>
        `;

        ul.append(li)

    })
    makeDraggable()
    
}

createList()

function makeDraggable(){
    const lists=ul.querySelector("li")
    for(let li of lists){

        li.draggable=true;
        
        li.ondragstart=()=>console.log('dragstart')
        li.ondragenter=()=>console.log('dragEnter')
        li.ondragleave=()=>console.log('dragLeave')  
        li.ondragover=()=>console.log('dragOver')
        li.ondragend=()=>console.log("dragEnd")
        li.ondrop=()=>console.log('dragDrop')
    }
}