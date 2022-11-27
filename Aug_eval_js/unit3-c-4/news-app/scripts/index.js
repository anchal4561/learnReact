/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

document.querySelector("#submit").addEventListener("click",function(){
    let obj={
        name:document.querySelector("#name").value,
        image : document.querySelector("#image").value,
        email:document.querySelector("#email").value,
        country:document.querySelector("#country").value
        }
        console.log("obj:",obj);
        localStorage.setItem("user",JSON.stringify(obj))
})