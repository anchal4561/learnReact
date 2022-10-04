


let studentLS = JSON.parse(localStorage.getItem("studentData")) || [];
function addStudent(e){
  e.preventDefault();
    let form = document.querySelector('#student_data');
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;

    let object= new saveStudent(name,course,unit,image,batch);
    studentLS.push(object);
    localStorage.setItem("studentData", JSON.stringify(studentLS));
    display()
}


function saveStudent(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`Ft-Web${b}`;
}

let nav = document.querySelector("#navbar")

function display() {
  nav.innerHTML = null;
  let obj = {}
  calculate(obj)
  for (let key in obj) {
    let span = document.createElement("span")
    span.innerText = key + ":" + obj[key] + "   ||     "
    nav.append(span)

  }
}
function calculate(obj) {
  for (let i = 0; i < studentLS.length; i++) {
    if (!obj[studentLS[i].batch]) {
      obj[studentLS[i].batch] = 1;
    } else {
      obj[studentLS[i].batch]++;
    }
  }
}
display()