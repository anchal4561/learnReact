// fill in javascript code here
let form=document.querySelector("form")
let tbody=document.querySelector("tbody")
let empArr=[];
form.addEventListener("submit",function(event){
    event.preventDefault()
    let empObj={
        name:form.name.value,
        id:form.employeeID.value,
        department:form.department.value,
        experience:form.exp.value,
        email:form.email.value,
        mob:form.mbl.value
    }
    empArr.push(empObj)
    display(empArr)

})

function display(empArr){
    tbody.innerHTML=""
    empArr.forEach(function(data,index){
        let tr=document.createElement("tr")
        let name=document.createElement("td")
        name.textContent=data.name
        let id = document.createElement("td");
        id.textContent = data.id;
    
        let department = document.createElement("td");
        department.textContent = data.department;
    
        let exp = document.createElement("td");
        exp.textContent = data.experience;
    
        let mail = document.createElement("td");
        mail.textContent = data.email;
    
        let mobile = document.createElement("td");
        mobile.textContent = data.mob;
    
        let role = document.createElement("td");
        if (data.experience > 5) {
          role.textContent = "Senior";
        } else if (data.experience >= 2 && data.experience <= 5) {
          role.textContent = "Junior";
        } else if (data.experience <= 1) {
          role.textContent = "Fresher";
        }
        let deleteEl =document.createElement("td")
        deleteEl.innerText= "Delete"
        deleteEl.style.cursor="pointer"
        deleteEl.style.color="red"
        deleteEl.addEventListener("click",deleteFun)
            function deleteFun(event)
            {
                //delete empArr[index]
                event.target.parentNode.remove()
            }
        tr.append(name, id, department, exp, mail, mobile, role, deleteEl);
        tbody.append(tr);
    })
}
document.querySelector("button").addEventListener("click", function(){
    let department=document.querySelector("#filterDepartment").value;
    if(department=="All Department"){
      display(empArr)
    }else{
    let newArr = empArr.filter(function (data) {
      return data.department == department;
    });
    display(newArr);
    }
})