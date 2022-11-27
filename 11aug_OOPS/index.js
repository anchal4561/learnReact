//OOPS
//1.Inheritance
//2.encapsulation->creating priavte variables
// class Car{
//     #count;
//     constructor(){
//         this.name=n;
//         this.brand=b;
//         this.#count=100;
//     }
//     showDetails(){
//         console.log(`${this.name} ${this.brand}`)
//     }
// }
// let c1=new Car('dezire','suzuki')

// //abstraction-hiding complexity

// class Employee{
//     constructor(){
//         this.type='enginner'
//     }
// }

// class Manager extends Employee{
//     constructor(){
//         super();
//         this.sub_type='manager'
//     }
//     display()
//     {
//         console.log(this.sub_type)
//     }
// }

// let m1=new Manager();
// console.log('m1',m1)



///Polymorphism- methods same in diff class

class Vehicle{
    run(){
    console.log('vehicle is running');
}
}

class Car extends Vehicle{
    run(){
    console.log('vehicle is running');
}
}
class Truck extends Vehicle{
    run(){
    console.log('vehicle is running');
}
}

var v1=new Vehicle();
var v2=new Car();
var v3=new Truck();
v1.run();