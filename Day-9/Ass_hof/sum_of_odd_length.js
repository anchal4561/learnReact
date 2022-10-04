let arr =["A", "Good", "Problem"]
let str_length=function(el){
    return el.length
}
let isLengthOdd= function(el){
    return (el)%2==1;
}
let sum=function(acc,el){
    return acc+el;
}
let res=arr.map(str_length).filter(isLengthOdd).reduce(sum);
console.log(res)