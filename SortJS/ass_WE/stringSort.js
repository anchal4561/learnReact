let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
let y= animals.sort(function (a,b){
    if(a>b) return 1
    if(a<b) return -1
    return 0
})
console.log(y)
let y2= animals.sort(function (a,b){
    if(a>b) return -1
    if(a<b) return 1
    return 0
})
console.log(y2)