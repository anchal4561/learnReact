async function addProduct(){
    let id=document.getElementById('id').value;
    let title=document.getElementById('title').value;
    let author=document.getElementById('author').value;
 let send_this_data={
//when key and value name same
    id,
    title,
    author
 }
//local storage
//append
//send data to server
//how to talk to server
//make get req using fetch

//tell fetch req type
//fetch(URL,{})
let response=await fetch(' http://localhost:3000/posts',{
    //method req name
    method:'POST',
    body:JSON.stringify(send_this_data),
    headers:{
    'Content-Type':'application/json',
    },

})
let data=await response.json();
console.log("Data:",data)

}


async function deletePost(){
    let id=document.getElementById('delete_id').value ;
    let res=await fetch(`http://localhost:3000/posts/${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
        },
})
let data=await res.json();
console.log("Data:",data)

}

let container = document.querySelector("#showList")
async function showData(){
    let res = await fetch(`http://localhost:3000/posts`, {
        method: "GET",
    });

    let data = await res.json();
    console.log(data)
     
    let count=0;
    container.innerHTML=null;
    await data.forEach(function({id,title,author}){
        count++;
        let div = document.createElement('div');
        let no = document.createElement('p');
        no.innerText = count;
        let showid = document.createElement('p')
        showid.innerText = id;
        let showtitle = document.createElement('p');
        showtitle.innerText = title;
        let showauthor = document.createElement('p');
        showauthor.innerText = author;

        div.append(no,showid,showtitle,showauthor);
        container.append(div);
    })
}

showData()

async function updatePost(){
    let id=document.querySelector('#update_id').value;
    let new_title=document.querySelector("#update_title").value;
    let new_author=document.querySelector("#update_author").value;
    let send_data={
        title:new_title,
        author:new_author
    }
    let res=await fetch(`http://localhost:3000/posts/${id}`,{
    method:'PATCH',
    body: JSON.stringify(send_data),
    headers:{
        'Content-Type':'application/json',
    }
})
let data= await res.json();
console.log("Data:",data)
showData()
}