let args=process.argv;
let opeartion=args[2]
const fs=require("fs")

fs.mkdir("test",(err)=>{
    console.log("folder created")
})

if(opeartion=="create"){
fs.writeFile("test.txt","Content",(err)=>{
    console.log("file is created")
})
}

if(opeartion=="append"){
fs.appendFile("./test.txt","COntent is append here",(err)=>{
    console.log("Append data")
})
}

// fs.readFile("./test.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
if(opeartion=="rename"){
fs.rename("./test.txt","./newtest.txt",(err)=>{
    console.log("rename")
})
}
if(opeartion=="delete"){
fs.unlink("./newtest.txt",(err)=>{
    console.log("file deleted")
})
}

const path = require('path');
const directory = './';

// use readdir method to read the files of the direcoty 
fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    // get the details of the file 
    let fileDetails = fs.lstatSync(path.resolve(directory, file));
    // check if the file is directory 
    if (fileDetails.isDirectory()) {
      console.log('Directory: ' + file);
    } else {
      console.log('File: ' + file);
    }
  });
});