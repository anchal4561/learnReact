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





type User = {
    name: string;
    age: number;
    occupation: string;
  };
  
  const userData = ({ name, age, occupation }: User) => {
    return typeof age + " " + typeof name + " " + typeof occupation;
  };
  
  console.log(userData({ name: "anchal", age: 22, occupation: "engineer" }));
  
  type Admin = {
    name: string;
    age: number;
    role: string;
  };
  
  const adminData = ({ name, age, role }: Admin) => {
    return typeof name + " " + typeof age + " " + typeof role;
  };
  
  console.log(adminData({ name: "Anchal", age: 22, role: "sd" }));