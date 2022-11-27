let arr=[1,2,3,4]
let isodd=function(el){
  return  el%2==1;
}
let res=arr.filter(isodd);
console.log(res);