function navbar(){
    return `
    <div id="navbar">
        <div><h3>Food Court</h3></div>
        <div>
            <a href="index.html">Search</a>
            <a href="reciepeOfDay.html">Receipe of the Day</a>
            <a href="random.html">Random</a>
            <p id="signupLink"> <a href="signUp.html">SignUp</a></p>
            <p id="loginLink"><a href="login.html">Login</a></p>
            <p id="logOut"><a href="index.html">Logout</a></p>
            <p id="name"></p>
        </div>
    </div>`
}

function navbarJS(){
    let loginUser=JSON.parse(localStorage.getItem("loginUser"));
    let authentication = JSON.parse(localStorage.getItem("authentication"));

    if(authentication===true){
        document.querySelector("#signupLink").style.display="none";
        document.querySelector("#loginLink").style.display = "none";
        document.querySelector("#logOut").style.display = "inline";
        document.querySelector("#name").style.display = "inline";
        document.querySelector("#name").innerText=loginUser.username;
    }
    if (authentication === false){
        document.querySelector("#logOut").style.display ="none";
        document.querySelector("#name").style.display ="none";
        document.querySelector("#signupLink").style.display = "inline";
        document.querySelector("#loginLink").style.display = "inline";
    }
    document.querySelector("#logOut").addEventListener("click", function(){
        localStorage.setItem("authentication", false)
        window.location.href = "index.html"
    })
}



export  {navbar,navbarJS};