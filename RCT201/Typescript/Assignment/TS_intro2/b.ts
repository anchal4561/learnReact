//intereface for an object

type object1={
  title:string;
  status:boolean;
  id:number;
}

type fullname={
    first_name:string;
    last_name?:string
}

let getName=({first_name,last_name}:fullname):string=>{
 if(last_name==undefined){
    return first_name;

 }  
 else{
    return first_name+" "+last_name
 } 
}

console.log(getName({first_name:"Anchal",last_name:"Agrawal"}))





//3.address

type address={
    houseNumber:number;
    street:string;
    city:string;
    state:string
    postalcode:number;
    country:string
}


type personalDetails={
    Prefix?:string;
    Phones:Array<number>
    address:string[]
    email?:string;
    firstname:string;
    lastname:string;
    middlename:string
}


//5
const array:Array<personalDetails>=[]
const phonebook=(object:personalDetails)=>array.push(object)

phonebook({
    address:["ngfjs","snfj"],
    firstname:"andfjy",
    lastname:"dfj"
})