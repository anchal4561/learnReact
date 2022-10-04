function sideBar(){
    console.log("inside sidebar")
    return `
    <div id="sideBarDiv">
    <img id="image" alt="">
    <h2 id="name"></h2>
    <h4 id="email"></h4>
    <h4 id="country"></h4>
    </div>`
}

function showDetails(){
    console.log("inside sidebar details")
    let user=JSON.parse(localStorage.getItem("user"))
    document.querySelector("#image").src=user.image;
    document.querySelector("#name").innerText = user.name;
    document.querySelector("#email").innerText=user.email;
    document.querySelector("#country").innerText=user.country

}

export{sideBar,showDetails}