var sweets=["kaju","laddu","kova","rasgulla","burfi"]
sweets.forEach(function(elem,index,array){
    console.log(e)

}
)

for each vs Map
1. for each wont return anything,it will return undefined2
2. map will return array
3. foreach has extra charges-[]
4. map no addditional charges-by default return array

let nums=[1,4,5,6,7]
let arr=[]
nums.forEach(function(el){
    console.log(el*2);
    arr,push(el)
})
console.log(arr)
let doublefun=function(el){
    return el*2;
}

var res=nums.map(doublefun)
console.log(res)

// filter are same as map but return only which satisfy the condition
let res= nums.filter(function(el){
    return el*2==0
})
console.log(res);

//reduce->adding all swwets at once
//syntax of reduce
array.reduce(function(sum,el,i,arr){
    return
})
var res=nums.reduce(function(sum,el,i,arr){
    return sum+el
})

//without initial value of sum
//sum =1->first value of arr;
//1+4;
//5+5;
//10+6;
//16+7==23


//2 -case:with initial value
let summer=function(acc,el,i,arr){
    return acc+el
};
let res=nums.reduce(summer,20);
console.log(res)
//20+1=sum -21;
//21+4-> sum=25
//25+5
//30+6
//36+7=43

//.................................

//chaining
forEach,map,filter,reduce->array
array.forEach->undefined
array.map-array
array.filter->array
array.reduce-single Number

forEach().map()-nlot possible
map().forEach()-possible
map().filter()-> possible
filter().reduce()-possible


