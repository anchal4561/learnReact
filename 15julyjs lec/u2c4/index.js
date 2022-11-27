// All the JS Code for the Add Students Page Goes Here
let data=JSON.parse(localStorage.getItem("admission"))||[]
let form= document.querySelector("form")
form.addEventListener("submit",studFun)
function studFun(){
    event.preventDefault();
    let obj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        mobile: document.querySelector("#phone").value,
    gender: document.querySelector("#gender").value,
    course: document.querySelector("#course").value,
    }
    data.push(obj);
    localStorage.setItem("admission",JSON.stringify(data))
    alert("data Submitted")
}