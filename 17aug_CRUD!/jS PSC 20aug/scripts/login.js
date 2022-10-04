let Login=async ()=>{

    console.log("login")
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
    console.log("data",data);
    alert("Logged in successfully")
    console.log("username:",login_data.username,"token:",data.token)
    saveUser(login_data.username,data.token,60000)
    // let{username}=login_data
    // let {token}=data
    // let profData=await getProfile(username,token);
    // console.log(profData);
    // localStorage.setItem("userData",JSON.stringify(profData))
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


let saveUser=(username,token,time)=>{
    let user={
        username,
        token,
    }
    localStorage.setItem('user_details',JSON.stringify(user));
    setTimeout(()=>{
        localStorage.setItem("user_details",JSON.stringify(null));
    },time)
}