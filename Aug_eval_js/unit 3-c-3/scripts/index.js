// Store the wallet amount to your local storage with key "amount"
let walletAmount=JSON.parse(+localStorage.getItem("amount"))||0;
document.querySelector("#wallet").innerText=walletAmount
let container=document.querySelector("#amount")
let add_to_wallet_btn=document.querySelector("#add_to_wallet")

add_to_wallet_btn.addEventListener("click",function(){
    
    let input=document.querySelector("#amount").value;

    walletAmount+=(+input);
    document.querySelector("#wallet").innerText=walletAmount
    localStorage.setItem("amount",JSON.stringify(walletAmount))
    
})