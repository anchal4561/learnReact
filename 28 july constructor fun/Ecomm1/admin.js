let productLS =JSON.parse(localStorage.getItem("Products")) || [];
function addProduct(e)
{
    e.preventDefault();
    let form =document.querySelector("#product_form");
    let name=form.name.value;
    let category=form.category.value;
    let url=form.image.value;
    let price=form.price.value;
    let gender=form.gender.value;
    let sold;
    if(document.querySelector("#sold:checked")){
        sold=true;
    }
    else{
        sold=false;
    }
    let obj=new saveProduct(name,category,url,price,gender,sold)
    productLS.push(obj);
    localStorage.setItem("Products",JSON.stringify(productLS))
    console.log(productLS)
}

function saveProduct(name,category,url,price,gender,sold){
    this.name=name;
    this.category=category;
    this.img_url=url
    this.price=price;
    this.gender=gender;
    this.sold=sold;
}