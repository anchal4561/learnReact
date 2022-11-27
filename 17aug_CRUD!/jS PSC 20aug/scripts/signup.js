
let Register = async (e) =>{
    //e.preventDefault();
    console.log("inside")
    let user = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        username: document.querySelector("#username").value,
        mobile: document.querySelector("#mobile").value,
        description: document.querySelector("#description").value,
    }

    try{
        let res=await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method:'post',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let data=await res.json();
        console.log(data)
        alert("Registered successhully")
        window.location.href="index.html"
    }
    catch(error){
        console.log(error)
    }
}