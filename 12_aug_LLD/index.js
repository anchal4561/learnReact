class Vehicle
{
    constructor(type,regNumber){
        this.type=type;
        this.regNumber=regNumber;
    }
}

//inherit this vehicle class into diff classes

class Car extends Vehicle{
    constructor(type,regNumber){
        super(type,regNumber);//take property of parent class
        
    }
}
// let c1=new Car('car','mh29')
// console.log('c1:',c1);

class Truck extends Vehicle{
    constructor(type,regNumber){
        super(type,regNumber);//take property of parent class
        
    }
}
class Bike extends Vehicle{
    constructor(type,regNumber){
        super(type,regNumber);//take property of parent class
        
    }
}


//slot -> floor -> parking lot
class Slot{
    #isBooked
    constructor(number,type){
        this.number=number
        this.type=type;
        this.#isBooked=false//we need to change ths value based on booking
    }
    //need to set >is booked

    get _isBooked(){
        return this.#isBooked;
    }
    set _isBooked(bool){
        this.#isBooked=bool;
    }
}

// let s1=new Slot(1,'bike');
// console.log('s1:',s1);

// //s1._isBooked(true)
// s1._isBooked=true;
// console.log('s1:',s1);

// console.log(s1._isBooked);

///each pF has 3 slots.we need to create 3 slots and push it to PF

class ParkingFloor{
    constructor(floorNumber,maxSlots)
    {
        this.floorNumber=floorNumber;
        this.parkingSpots=[];

        for(let i=0;i<maxSlots;i++){
            if(i===0){
                this.parkingSpots.push(new Slot(i,"Truck"))
            }
            else if(i===1){
                this.parkingSpots.push(new Slot(i,"Bike"))
            }
            else if(i===2){
                this.parkingSpots.push(new Slot(i,"Car"))
            }
        }
    }
}

// let pf=new ParkingFloor(1,3);
// console.log('pf:',pf)


class ParkingLot{
    constructor(numberofFloors){
        this.numberofFloors=numberofFloors;
        this.floors=[]

        for(let i=0;i<numberofFloors;i++){
            this.floors.push(new ParkingFloor(i,numberofFloors))
        }
    }


    
//we need to check if slot is empty{isBooked=false}

findSlot(type){
    //how many slot we have
    //each floor -3 slots
    //do i need to check each flooor?
    //do I need to check eac slot of that floor?

    for(let i=0;i<this.numberofFloors;i++){
        //i=0-ist floor
        for(let slot of this.floors[i].parkingSpots){
           //all the slot available here,now what?
           if(slot.type===type && !slot._isBooked)
           {
            return {floorNumber:i,found_slot:slot}
           }
            // console.log(slot)
        }
    }
}


parkVehicle(vehicle){
    console.log("Park vehicle")
    let slot=this.findSlot(vehicle.type)
    slot.found_slot._isBooked=true//is_boked is setter which sets #isBooked
    console.log('slot:',slot)
    return [slot.found_slot._isBooked,slot]
}

ticket(vehicle){
    let parking = this.parkVehicle(vehicle)
   console.log("parking:",parking)
    if(parking[0]===true){
     return  {type:parking[1].found_slot.type,floorNumber:parking[1].floorNumber,slot:parking[1].found_slot.number}
   
   
   }else{
     return "sorry"
   }
   }

//issueTicket()
//ticket is object

}
//how to connect LLD to frontend?
//1. worked on parking system
// i want  to park vehicle
//inputbox=>type,regNo -> park button -> onclick->park()

function park(){
    let pl=new ParkingLot(3)
    if(type==='Car'){
        var c1= new Car(name,regNumber);
    }
    p1.parkVehicle(c1)
}

//class Ticket{
//}

let pl=new ParkingLot(3)
let c1=new Car('Car','MH29')
let c2=new Car('Car','MH21')
let c3=new Car('Car','MH20')
// pl.parkVehicle(c1);
// pl.parkVehicle(c2);
pl.ticket(c2)
pl.ticket(c3)
let x= pl.ticket(c1)

console.log("Ticket::::::::::::",x)



