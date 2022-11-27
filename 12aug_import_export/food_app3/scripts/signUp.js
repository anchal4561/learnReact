let users = JSON.parse(localStorage.getItem("userData")) || [];


class User{
    constructor(){
        this.site="food"
    }

    #validateUsername(username) {
        let value = username.includes("@") ? false : true;
        return value;
    }

    #validatePassword(password) {
        let value = password.includes("123") ? false : true;
        return value;
    }

    signUp(username,password){
        let isValidated=false;
        isValidated=this.#validateUsername(username) && this.#validatePassword(password);
        if(isValidated){
            this.username=username;
            this.password=password;
            console.log("User registered successfully")
            users.push(this)
            console.log(users);
            localStorage.setItem("authentication",true)
            localStorage.setItem("loginUser",JSON.stringify(this));
            localStorage.setItem("userData",JSON.stringify(users))
            window.location.href="index.html"

        }
        else{
            console.log("Please enter correct data")
        }
    } 
}



let s1;
document.querySelector("#signUp").addEventListener("click",signUpfun)

function signUpfun(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let flag=true;
    if (username == "" || password == "") {
        alert("Fill all credentials")
        flag = false;
        return;
    }

    users.forEach((element)=>{
        if(element.username==username){
            alert("USer already exists")
        }
    })

    if (flag === true) {
        s1 = new User();
        s1.signUp(username, password)
        console.log(users);
        window.location.href = "index.html"
        return alert("Signup Successfully")
    }
}