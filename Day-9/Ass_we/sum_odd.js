let arr=[1,2,3,4]
let isodd=function(el){
  return  el%2==1;
}
let sum=function(acc,el){
    return  acc+el;
  }
let res=arr.filter(isodd).reduce(sum);
console.log(res);