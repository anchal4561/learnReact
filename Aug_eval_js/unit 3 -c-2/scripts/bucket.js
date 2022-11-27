// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffeeLS = JSON.parse(localStorage.getItem("coffee"));

display(coffeeLS)

function display(data) {
    let container = document.querySelector("#bucket")
    container.innerHTML = null;
    let total = 0;
    data.forEach(function (el, index) {
        total += el.price
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let title = document.createElement("h3");
        title.innerText = el.title;

        let price = document.createElement("p");
        price.innerText = el.price

        let btn = document.createElement("button");
        btn.innerText = "Remove"
        btn.setAttribute("id", "remove_coffee");
        btn.addEventListener("click", function () {
            coffeeLS.splice(index, 1)
            display(coffeeLS)
            localStorage.setItem("coffee", JSON.stringify(coffeeLS))
        })

        div.append(image, title, price, btn);
        container.append(div)
    })
    document.querySelector("#total_amount").innerText = total;
}