

let name1={
    name : "Amar",
    skill : "Singer",
    city: "Goa",
    skills(){
    console.log("Amar is also a"+" "+this.skill)
}
}
let name2={
    name : "Akbar",
    skill : "Chef",
    city: "Mumbai",
    skills(){
    console.log("Akbar is also a"+" "+this.skill)
}
}
let name3={
    name : "Anthony",
    skill : "Magician",
    city: "Kashmir",
    skills(){
    console.log("Anthony is also a"+" "+this.skill)
}
}
let x=name1.skills.bind(name2);
x()
name2.skills.apply(name3);
name3.skills.call(name1);