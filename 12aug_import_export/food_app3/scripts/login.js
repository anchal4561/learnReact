let users = JSON.parse(localStorage.getItem("userData")) || [];

let flag = localStorage.getItem("authenticationentication") || false;
// console.log(flag)

document.querySelector("#login").addEventListener("click", checkCredentials)

function checkCredentials(event) {

    if (users.length === 0) {
        alert("No user till Now");
        return
    }
    let logInMail = document.querySelector("#username").value;
    let logInPassword = document.querySelector("#password").value;
    console.log(logInMail, logInPassword)

    if (logInMail == "" || logInPassword == "") {
        alert("Fill all credentials")
        localStorage.setItem("authentication", false)
        return;
    }
    else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == logInMail && users[i].password == logInPassword) {
                localStorage.setItem("authentication", true)
                localStorage.setItem("loginUser", JSON.stringify(users[i]));
                window.location.href = "index.html"
                return alert("Login Successful")
            }
        } alert("Wrong Credentials")
        localStorage.setItem("authentication", false)
    }
}
Footer