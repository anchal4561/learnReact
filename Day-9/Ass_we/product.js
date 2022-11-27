let arr=[1,2,3,4]
let product=function(acc,el){
  return  acc*el;
}
let res=arr.reduce(product);
console.log(res);