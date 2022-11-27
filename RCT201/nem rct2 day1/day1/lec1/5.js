const fs=require("fs")
let db=require("./db.json")

db.posts.push({id:1,message:"New Post"})
console.log(db);
// fs.writeFile("./db.json",
// JSON.stringify(db),
// {
//     encoding:"utf-8"
// },
// ()=>{}
// )


fs.writeFileSync("./db.json",
JSON.stringify(db)
)
