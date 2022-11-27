// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletAmount = JSON.parse(+localStorage.getItem("amount")) || 0;
document.querySelector("#wallet").innerText = walletAmount;

let movie=JSON.parse(localStorage.getItem("movie"))
console.log("movie:",movie)
display(movie);

function display({Poster, Title}){
    let title = document.createElement('h2');
    title.innerText = Title;
 
    let poster = document.createElement('img')
    poster.src=Poster
 
    document.querySelector("#movie").append(title,poster)
 }

 let checkout_btn=document.querySelector("#confirm");
 checkout_btn.addEventListener("click",function(){
    let amount=+(document.querySelector("#number_of_seats").value)*100;
    console.log(amount,walletAmount)
    //
    if(amount<=walletAmount){
        walletAmount-=amount;
        document.querySelector("#wallet").innerText=walletAmount;
        alert("Booking successfull")
        localStorage.setItem("amount",walletAmount);
    }
    else{
        alert("Insufficient Balance!")
    }
})