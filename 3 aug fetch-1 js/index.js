//fetch is going to tkae time
//it should not block other code
//fetch needs to b e a promise
//this is async call

//.then & .catch
//asyncwait

//I want to make an api call
// let x= fetch()
// console.log("x:",x)

//fetch is an API
//Prototype is inheritance
//prototype is a tool
//inheritance is a concept implemented through prototype in js
//API is used using a tool callled fetch()

// fetch('https://fakestoreapi.com/products').then(function(res){
//     return res.json();//collecting stream
    
// }).then(function(res){
//     console.log("res:",res);
// }).catch(function(err){
//     console.log("err:".err)
// })

//convert  above code into async wait

let container=document.getElementById('container')
let data;
async function getData(){
    try{
    let res= await fetch('https://fakestoreapi.com/products')
    //convert stream into actual data
    data = await res.json();
    appendProducts(data)
    }
    catch(err){
        console.log("err:",err)
    }
}

getData();


//we need to append

function appendProducts(el)
{
    container.innerHTML=""
    //data-array of object
    data.forEach(function(el){
        let div=document.createElement('div')
        let img=document.createElement('img')
        img.src=el.image
        let title=document.createElement('p')
        title.innerText=el.title
        let price=document.createElement('p')
        price.innerText=el.price;
        div.append(img,title,price);
        container.append(div)
    })
}

function sortLH()
{
    
 data=data.sort(function(a,b){
    return a.price-b.price;
 })   
 appendProducts(data);
}

function sortHL()
{
 data=data.sort(function(a,b){
    return b.price-a.price;
 })   
 appendProducts(data);
}


// filter
//how to keep original data
//dynamic filtering

function filter(){
    let query=document.getElementById('query').value;
   console.log("query:",query)

    //let copy_data=data;
    data=data.filter(function(el){
       return  el.title.toLowerCase().includes(query)
    })
    appendProducts(data)
}

//.sort
//.filter

//create a  copy of array which does not change original array
//let copy_data=[...data]//spread-operator