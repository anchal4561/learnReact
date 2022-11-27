async function getData(url){
    try {
        let res = await fetch(url)
   
        let data = await res.json()
   
        return data
    } catch (error) {
       console.log(error)
    }
      
   }
   
   let append = (data,container )=>{
       container.innerHTML=null;
       data.forEach(({ strMealThumb, strMeal, strArea })=>{
           let div = document.createElement('div');
           let img= document.createElement('img');
           img.src = strMealThumb;
           let dish = document.createElement('h3');
           dish.innerText=strMeal
           let origin = document.createElement('p');
           origin.innerText = strArea
   
          div.append(img,dish,origin);
          container.append(div);
       })
   }
   
   export {getData,append};