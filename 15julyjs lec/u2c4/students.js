// All the Code for All Students Page Goes Here
let data=JSON.parse(localStorage.getItem("admission"))||[]
let acceptedData=JSON.parse(localStorage.getItem("admission-accepted"))||[]
let rejectedData=JSON.parse(localStorage.getItem("admission-rejected")) || [];
display(data)
function display(data)
{
    document.querySelector("tbody").innerHTML=null;
    data.forEach(function (el,index){
        let tr=document.createElement("tr");
      let td1=document.createElement("td");
      td1.innerText=el.name
      let td2=document.createElement("td");
      td2.innerText=el.email;
      let td3=document.createElement("td");
      td3.innerText=el.course;
      let td4 = document.createElement("td");
      td4.innerText=el.gender;
      let td5 = document.createElement("td");
      td5.innerText=el.mobile;
      let td6 = document.createElement("td");
      td6.innerText="Admitted"
      td6.style.cursor="pointer"
      td6.style.color="darkgreen"
      td6.style.fontWeight="bold"
      td6.addEventListener("click",function(){
        acceptedData.push(el);
        data.splice(index,1);
        display(data)
        localStorage.setItem("admission",JSON.stringify(data));
        localStorage.setItem("admission-accepted",JSON.stringify(acceptedData))
      })
      let td7 = document.createElement("td");
      td7.innerText="Rejected"
      td7.style.cursor="pointer"
      td7.style.color="red"
      td7.style.fontWeight="bold"
         td7.addEventListener("click", function () {
           rejectedData.push(el);
           data.splice(index, 1);
           display(data);
           localStorage.setItem("admission", JSON.stringify(data));
           localStorage.setItem("admission-rejected",JSON.stringify(rejectedData))
    })
    document.querySelector("tbody").append(tr)
    tr.append(td1,td2,td3,td4,td5,td6,td7)
}
    )
}
let courseFilter=document.querySelector("#filter");
courseFilter.addEventListener("change", doFilter);

function doFilter(){
    if(courseFilter.value=="all"){
        display(data)
    }else{
        let dataFiltered = data.filter(function(el){
            return el.course==courseFilter.value;
        })
        display(dataFiltered)
    }
    
}