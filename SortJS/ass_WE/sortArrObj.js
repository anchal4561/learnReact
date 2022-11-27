let employees = [
  {
    firstName: "john",
    lastName: "doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },

  {
    firstName: "ana",
    lastName: "rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },

  {
    firstName: "zion",
    lastName: "albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];

//sort by firstname (Ascending)
let x=employees.sort(function (a,b){
    if(a.firstName > b.firstName) return 1;
    if(a.firstName < b.firstName) return -1;
    
})
console.log(x)

// Sorting by FirstName (Descending)
let y = employees.sort(function (a, b) {
  if (a.firstName > b.firstName) return -1;
  if (a.firstName < b.firstName) return 1;
  return 0;
});
console.log(y);

//sorting by age(ascending)
let p=employees.sort(function(a,b){
    return a.age - b.age
})

console.log(p)

//sorting by age(descending)
let q=employees.sort(function(a,b){
    return b.age - a.age
})

console.log(q)