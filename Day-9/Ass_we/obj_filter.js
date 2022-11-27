let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

  let isBanglore=function(el){
    return el.place=="Banglore";
  }
  
  let result= users.filter(isBanglore).map(function(el){
      return el.firstName+" "+el.lastName
  })
  console.log(result);