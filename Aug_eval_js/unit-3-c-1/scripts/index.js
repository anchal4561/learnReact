//store the products array in localstorage as "products"

//constructor function
function saveProducts(typ,des,pr,img){
    this.type=typ;
    this.desc=des;
    this.price=pr;
    this.image=img;
}

let productLS=JSON.parse(localStorage.getItem("products"))||[];
 
function saveProduct(e){
    
    let form=document.querySelector("#products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let s=new saveProducts(type,desc,price,image)
    console.log(s)
    productLS.push(s);
    localStorage.setItem("products",JSON.stringify(productLS))


}


//
document.querySelector("#show_products").addEventListener("click",function()
{
    window.location.href="inventory.html"
})