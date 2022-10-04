document.querySelector("#add_more_product").addEventListener("click",function(){
    window.location.href="index.html"

})

let productLS=JSON.parse(localStorage.getItem("products"))||[]
display(productLS)

function display(data){
    document.querySelector("#all_products").innerHTML=null
    data.forEach(function(el,index){
        let div=document.createElement("div")
        let type= document.createElement("p")
        type.innerText="Type : "+el.type;
    
        let description =document.createElement("p");
        description.innerText="Description : "+el.desc;
    
        let price=document.createElement("p");
        price.innerText="Price : "+el.price;
    
        let image= document.createElement("img");
        image.src=el.image;

        let btn=document.createElement("button")

        btn.innerText="Remove"
        btn.id="remove_prod"
        btn.addEventListener("click",function(){
            productLS.splice(index,1)
            localStorage.setItem("products",JSON.stringify(productLS))
            display(productLS)
        })
        div.append(image,type,description,price,btn)
       document.querySelector("#all_products").append(div)
})
}