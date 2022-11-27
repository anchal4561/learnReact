let arr=[1,2,3,4]
let res=arr.reduce(function(acc,el){
    return acc*el
},1)
console.log(res)


//
let isodd=function(el){
    return el%2==1;
}
let summer=function(acc,el){
    return acc+el;
}
let res3=arr.filter(isodd).reduce(summer);
console.log(res);