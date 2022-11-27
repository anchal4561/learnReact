let arr=[1,2,3,4,5,6]
let isdivisble=function(el){
    return  el%3==0;
  }

let cubes=function(el){
  return  el**3;
}
let sum=function(acc,el){
    return  acc+el;
  }
let res=arr.filter(isdivisble).map(cubes).reduce(sum);
console.log(res);