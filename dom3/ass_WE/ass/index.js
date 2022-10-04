// fill in javascript code here
document.querySelector("form").addEventListener("submit",doctorRecord)
let docArr=[]
function doctorRecord(event){
    event.preventDefault();
    let docName=document.querySelector("#name").value
    let docId = document.querySelector("#docID").value;
    let specialize = document.querySelector("#dept").value;
    let experience = document.querySelector("#exp").value;
    let mail = document.querySelector("#email").value;
    let mobile=document.querySelector("#mbl").value; 
    let docObj={
        name:docName,
        id:docId,
        specialization:specialize,
        expe:experience,
        email:mail,
        mob:mobile
    };
    docArr.push(docObj)
    displayTable(docArr)
    function displayTable(docArr){
        document.querySelector("tbody").innerHTML=""
        docArr.forEach(function(ele){
            let row=document.createElement("tr")
            row.style.backgroundColor="white"
            let col1=document.createElement("td")
            col1.innerText= ele.name
            let col2=document.createElement("td")
            col2.innerText= ele.id
            let col3=document.createElement("td")
            col3.innerText= ele.specialization
            let col4=document.createElement("td")
            col4.innerText= ele.expe
            let col5=document.createElement("td")
            col5.innerText= ele.email
            let col6=document.createElement("td")
            col6.innerText= ele.mob
            let col7=document.createElement("td")
            if(ele.expe>5){
                col7.innerText="Senior"
            }
            else if(ele.expe>2 && ele.expe<5){
                col7.innerText="Junior"
            }
            else{
                col7.innerText="Trainee";

            }
            let col8=document.createElement("td")
            col8.innerText= "Delete"
            col8.style.cursor="pointer"
            col8.style.color="red"
            col8.addEventListener("click",deleteFun)
            function deleteFun(event)
            {
                event.target.parentNode.remove()
            }
            row.append(col1,col2,col3,col4,col5,col6,col7,col8)
            document.querySelector("tbody").append(row);

        })
    }
}
