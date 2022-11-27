let studentLS = JSON.parse(localStorage.getItem("studentData"))||[];
    append(studentLS);

    let trash=JSON.parse(localStorage.getItem("trash"))||[]

    function append(xyz){
    let container= document.getElementById("container")
    container.innerHTML=null;
    xyz.forEach(function(el,index){

        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src=el.image
        let name = document.createElement("p")
        name.innerText=el.name
        let course =document.createElement("p")
        course.innerText=el.course
        let unit = document.createElement("p")
        unit.innerText=el.unit 
        let batch = document.createElement("p")
        batch.innerText=el.batch       
        let button= document.createElement("button")
        button.innerText="Remove"
        button.addEventListener("click",function(){
            trash.push(studentLS[index])
            studentLS.splice(index,1);
            append(studentLS);

            localStorage.setItem("studentData",JSON.stringify(studentLS))
            localStorage.setItem("trash",JSON.stringify(trash))
        });
        div.append(img,name,course,unit,batch,button)
        container.append(div)
    })
}