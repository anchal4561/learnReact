
// class User{
//     constructor(n){
//         this.organisation='Masai';
//     }

//     validateUsername(username){
//         //username includes symbol '#',invalid username
//         // if(username.includes('#')){
//         //     return false
//         // }
//         // else{
//         //     return true;
//         // }

//         //if else consition using ternary opertor
//         //condtion ? ifsuccessfull():ifnotSuccessfull()
    
//         let value=username.includes('#')?false:true;
//         return value;
//     }

//     validatePassword(password){
//        let value= password.includes('123')?false:true
//         return value;
//     }

//     signup(username,password){
//         //we need to validate user data
//         let isValidated=false;
//         //to validate what are we checking {username,password}

//     }
// }

// //fact: es6 class is constructor func
// //constructor func return object
// let u1=new User('utkarsh')
// console.log('u1:',u1)





////////////////////////////////////
//stack

//es6 class:we are doing same thing as Cf but synatx different
//constructor function
//fun,return,new,this
class Stack{
     constructor(){
        this.length=0;
        this.stack_contents=[];//stack is array internally
     }
     //spread operator to convert in array
    push(...el){

        el.forEach((element)=>{
            this.stack_contents.push(element)
            this.length++;
        })
        return this.stack_contents;
    }

    remove(){
      let removed_val=  this.stack_contents.pop()
        this.length--;
        return removed_val;
    }
}

//try to create a new stack and try pushing
let stack1=new Stack()
stack1.push(1,2,3,4);
console.log('stack1:',stack1)
stack1.remove();
console.log('new_stack',stack1)

let arr=new Array(1,2,3)
let arr2=[1,2,3];
console.log('arr2:',arr2)
//es 6 class returs object

//class is constructor function, it syntax diff just

//enumerable

//lexical
{
let x=20;
}

var x;//global

function outer(){
     let msg='I m outer'
     return function(){
        console.log("hello world")
     }
}

let x=outer();
console.log('x:',x)
x()

//create ,execute, destroy-general
//create ,execute, does not destroy-special
