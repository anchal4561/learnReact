//student managememnt system
//User
//student,admin based upon User
//architecture

//commonfor both 

//signup,login are common methods
//createAssignment(){not common for both}

let users=[];
class User{
    #password;//use it like this.#password throughout the class
    constructor()
    {
        this.organisation='masai'
        //username and pass being added here from line no 40,41
    }

     #validateUsername(username){
        // if username includes @ return false
       let value=username.includes('@')? false : true 
        return value;
     }
     #validatePassword(password){
        // if username includes @ return false
       let value=password.includes('123')? false : true 
        return value;
     }

     login(username,password){
        if (username===this.username && password===this.#password)
        {
            console.log("Login Successfull")
        }
        else{
            console.log("Authentication failed")
        }
    }

      signUp(username,password){
        //we need to validate what user types
        let isValidated=false;
        //we need to check two things useranme,password
        //|| ,&& operator
        isValidated=this.#validateUsername(username) && this.#validatePassword(password)
        
        if(isValidated){
            this.username=username
            this.#password=password
            console.log("User registered successfully")
            users.push(this)
        }
        else{
            console.log('Please enter correct details')
        }
      }

}


//
// let u1=new User();
// //let u2=new User();
// //how to encapsulate method


// u1.signUp('pablo','pablopass')
// u1.login('pablo','pablopass')

//u2.signUp('shaktiman','gita')

//user need
//signup
//login
//developers need
//validateUsername
//validatePassword
// //encapsulation

// console.log(users)





//inheritance
class Student extends User{

    constructor(){
        super()// super is function which take parent class property means User class
        this.numofAssignment=0;
    }

    submitAssignment(){
        this.numofAssignment++;
        console.log("%c Accepted",' color:green')

    }
}

class Admin extends User{
     constructor(){
        super()
        this.numofAdminAssignment=0
        this.noofLecture=0;
        this.noofUsers=0;
     }

     removeUser(username){
        //remove person with username
         users= users.filter((element)=>{
            return element.username !=username;
        })
     }

     addUser(username,password){
        let s3=new Student()
        s3.username=username
        s3.password=password
        console.log("User created successfully")
        users.push(s3)
     }

     createAssignment(){
        this.numofAdminAssignment++;
        console.log("%c Assignment Created", "color:green");
    }

    removeAssignment() {
        this.numofAdminAssignment--;
        console.log("%c Assignment Removed", "color:red");
    }

    addLecture() {
        this.noofLecture++;
        console.log("%c Lecture Added", "color:green");
    }

    removeLecture() {
        this.noofLecture--;
        console.log("%c Lecture Removed", "color:red");
    }
}

// let s1=new Student()
// s1.signUp('pappu','pappupass');
// s1.login('pappu','pappupass');
// let s2 = new Student();
// s2.signUp('pappu2','pappupass2');
// s2.login('pappu2','pappupass2');
// // s1.submitAssignment();
// // s1.submitAssignment();

// //console.log(s1.numofAssignment)

// let admin=new Admin()
// admin.signUp('johny','johnypass');
// admin.login('johny','johnypass');


// console.log("initially",users);
// admin.removeUser('pappu2');
// admin.removeUser('pappu');

// console.log("after",users);

//console.log(users);

let s1;
function Signup(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username.includes("masai")){
        s1 = new Admin();
        s1.signUp(username, password)
    }else{
         s1 = new Student();
        s1.signUp(username, password)
        
    }
    console.log(users)
}

function Login(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username.includes("masai")){
       // s1 = new Admin();
        s1.login(username, password)
        s1.createAssignment();
        s1.createAssignment();
        console.log("Total assignment created by admin: ",s1.numofAdminAssignment)
        s1.removeAssignment();
        console.log("noofAdminAssignment  after removed by admin:",s1.numofAdminAssignment)
        s1.addLecture();
        s1.addLecture();
        console.log("Total lecture created by admin: ",s1.noofLecture)
        s1.removeLecture();
        console.log("no of lecture after removed by admin:",s1.noofLecture)
        s1.removeUser('pappu')
        console.log("after deleted",users)
        console.log("before users:",users)
        s1.addUser('Ram','Shyam');
        s1.addUser('anu','shanu')
        console.log("After added",users)
    }else{
        // s1 = new Student();
        s1.login(username, password)
        s1.submitAssignment()
        s1.submitAssignment()
        console.log(s1.numofAssignment)
    }
    console.log(users)
}