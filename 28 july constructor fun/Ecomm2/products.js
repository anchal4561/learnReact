let productLS=JSON.parse(localStorage.getItem("Products"))||[]
let tbody=document.querySelector("tbody")
display(productLS);
function display(prod){
    document.querySelector("tbody").innerHTML=null;
    let count=0;
    prod.forEach(function(ele,index){
        count++;
        let tr=document.createElement("tr")
        let name=document.createElement("td")
        name.textContent=ele.name;
        let category=document.createElement("td")
        category.innerText=ele.category;
        let price=document.createElement("td")
        price.innerText=ele.price;
        let gender=document.createElement("td")
        gender.textContent=ele.gender;
        let sold=document.createElement("td")
        sold.textContent=ele.sold;
        if(ele.sold==true){
            sold.style.backgroundColor="green"
        }
        else{
            sold.style.backgroundColor="red"
        }
        sold.addEventListener("click",function(){
            if(productLS[index].sold==true){
                productLS[index].sold=false;
                localStorage.setItem("Products",JSON.stringify(productLS))
                display(productLS)
            }
            else{
                productLS[index].sold=true;
                localStorage.setItem("Products",JSON.stringify(productLS))
                display(productLS)

            }
        })

        let deleteE1=document.createElement("td")
        deleteE1.textContent="Delete"
        deleteE1.style.color="red";
        deleteE1.addEventListener("click",function(){
            productLS.splice(index,1)
            localStorage.setItem("Products",JSON.stringify(productLS))
            display(productLS)
        })
        tr.append(name,category,price,gender,sold,deleteE1);
        tbody.append(tr);
    })
    document.querySelector("#totalcount").innerText=count;
}