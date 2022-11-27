let arr=["assignment", "problem", "media", "upload"]
let is_frst_last_a=function(el){
    return  (el[0]=="a"|| el[el.length-1]=="a")
}
let res =arr.filter(is_frst_last_a)
console.log(res)

