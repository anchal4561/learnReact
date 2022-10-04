function nikeProductCF(n,p){
    this.name=n;
    this.price=p;

}
let arr=[];
function nikeProduct(event){
    event.preventDefault();
    let form=document.getElementById("productForm")
let name=form.name.value;
let price=form.price.value;
let prod= new nikeProductCF(name,price)
arr.push(prod)
console.log("arr",arr)
}