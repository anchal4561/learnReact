let Register = async () =>{
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
    }
    catch(error){
        console.log(error)
    }
}
let Login=async ()=>{
    let login_data={
        username:document.querySelector("#login_username").value,
        password:document.querySelector("#login_password").value
    }

    let res=await fetch('https://masai-api-mocker.herokuapp.com/auth/login' , {
        method: 'POST',
        body: JSON.stringify(login_data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data=await res.json();
    console.log(data);
    let{username}=login_data
    let {token}=data
    let profData=await getProfile(username,token);
    console.log(profData);
    localStorage.setItem("userData",JSON.stringify(profData))
    window.location.href="admin.html"

}

let getProfile=async (username,token)=>{
    console.log(username,token)
    let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${token}`
        }
    })
    let data=await res.json()
    return data;
}
