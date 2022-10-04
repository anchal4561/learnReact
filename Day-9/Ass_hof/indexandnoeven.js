let arr=[2, 4, 5, 3, 6, 8]
let indexandnumbereven=function(el,i){
    return (el%2==0 && i%2==0)
}
let res=arr.filter(indexandnumbereven)
console.log(res)