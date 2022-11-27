// Add the coffee to local storage with key "coffee"
let coffeeLS = JSON.parse(localStorage.getItem("coffee")) || [];
document.querySelector("#coffee_count").innerText = coffeeLS.length;
async function getData(){
    try{
        let res=await fetch("https://masai-api.herokuapp.com/coffee/menu")
        let data=await res.json();
        display(data)
        console.log("data:",data)
    }
    catch(error){
        console.log(error)
    }
}

getData()

let container=document.querySelector("#menu")
function display(data){
 container.innerHTML=null;

 data.menu.data.forEach(function(ele){
    let div=document.createElement("div");
    let image=document.createElement("img")
    image.src=ele.image;
    let title=document.createElement("h2");
    title.innerText=ele.title;
    let price=document.createElement("p");
    price.innerText=ele.price;
    let btn=document.createElement("button")
    btn.innerText="Add to bucket"
    btn.setAttribute("id","add_to_bucket");
    btn.addEventListener("click",function(){
        coffeeLS.push(ele)
        document.querySelector("#coffee_count").innerText=coffeeLS.length;
        localStorage.setItem("coffee",JSON.stringify(coffeeLS))
    })
    div.append(image,title,price,btn);
    container.append(div)
})

}