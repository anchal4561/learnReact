let a4: number=10;
console.log(a4)

const d:null=null;
const e:undefined=undefined;
const c:boolean=true;
const f:Array<number>=[1,2,34];
const f1:number[]=[1,2,34]
const f2: Array<string>=["a","b","c"];
const f3:string[]=["A","B","F"];

//array of objects
const i1:Array<Object>=[
    {id:1, name:"Name 1",employeed:true},
    {id:2, name:"Name 2",employeed:true},
    {id:3, name:"Name 3",employeed:true},

];

const i2:Array<{
    id:Number;
    name:String;
    employeed:boolean;
    age?:{
        value:Number
    }
}>=[
    {id:1, name:"Name 1",employeed:true,age:{value:20}},
    {id:2, name:"Name 2",employeed:true},
    {id:3, name:"Name 3",employeed:true},

];
//arrray of arary
const t2:Array<Array <number| string>>=[
    [0,"ad"],
    [1,"adw"],
    [2,"ads"]
]

//or 
let x:number |string;
x=1;
x="JAVA"

//or opeartor
const v:Array<number|string>=["222",2,"df"]

// {
//     tasks:[]
//     posts:[]
// }

const j:{
    tasks:number[];
    posts:string[];
}={
    tasks:[],
    posts:[]
}


const k1:Record<string,number[]>={
    tasks:[1,3,2],
    posts:[1,2,3]
}


//Array of specific strings
const l1:Array<"India"|"China"|"Japan">=[
    "India",
    "China"
]

type Country="India"|"China"|"Japan"

type Gender="Male"|"Female"
type User={
    name:String;
    age:number;
    gender:Gender;
}

const m1:Array<User>=[
    {name:"a",age:22, gender:"Male"},
    {name:"b",age:23, gender:"Female"},
    {name:"c",age:24, gender:"Male"},
]


//tuple in js
const h222:[number,string]=[2,"dbhk"]

const ha1:Array<[number,string]>=[
    [2,"sjbhjkb"]
]


const add=(a:number,b:number):number=>a+b;
add(1,2);


const dosomething=(a:number,b:number):void=>{
    console.log(a+b)
}

dosomething(1,1);


type Engine="V8"|"4 stroke"|"3 stroke";
// type EngineType="Petrol"|"Diesel"|"CNG"|"EV"

//enum
enum EngineType{
    Petrol="Petrol",
    Deisel="Deisel",
    CNG="CNG",
    EV="Electric Vehicle"
}

class Car{
    tyres:number;
    engine:Engine;
    engineTypes:EngineType[]
    constructor(tyres:number,engine:Engine,engineTypes:EngineType[]){
        this.tyres=tyres;
        this.engine=engine;
        this.engineTypes=engineTypes;
    }

    getTypes(){
        return this.tyres;
    }

    getEngine(){
        return this.engine;
    }

    getEngineType(){
        return this.engineTypes;
    }
   
}

class Nexon extends Car{
    constructor(tyres:number,engine:Engine,engineTypes:EngineType[]){
        super(tyres,engine,engineTypes)
    }

    setTyres(newTyresCount){
        this.tyres=newTyresCount
    }
}

const india=new Car(4,"3 stroke",[EngineType.CNG,EngineType.Deisel,EngineType.EV])
const nexon=new Car(4,"V8",[EngineType.EV])

const nexon2=new Nexon(5,"V8",[EngineType.EV]);

nexon2.setTyres(5)



