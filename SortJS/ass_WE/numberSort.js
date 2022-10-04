let numbers = [0, 1 , 2, 30, 10, 25, 40, 30 ];
let y=numbers.sort(function(a,b)
{
    return (a-b)
})
console.log(y)
let y2=numbers.sort(function(a,b)
{
    return (b-a)
})
console.log(y2)