let div = document.getElementById('main');

function getData() {
    return true;
}

// myPromise is object and Promise is function.
let myPromise = new Promise(function (resolve, reject) {

    let data = false;

    setTimeout(function () {
        data = getData();

        if (data) {
            resolve("sweets");
        } else {
            reject("chappal")
        }
    }, 3000)
});

myPromise.then(function (res) {
    console.log('res:', res)
    document.querySelector("#container").style.display = "none"  
    document.querySelector("#container1").style.display="grid"   
})

myPromise.catch(function (err) {
    console.log('err:', err);
    document.querySelector("#container").style.display = "none"
    document.querySelector("#container2").style.display = "grid"
})

myPromise.finally(function () {
    console.log('ran');
});

console.log('myPromise:', myPromise);