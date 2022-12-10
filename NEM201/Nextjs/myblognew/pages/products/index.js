import Link from "next/link"
export default function Products(){
    return (
        <div>
            <h1>Products List</h1>
          <ul>
         <li> <Link href="/products/1">Laptop</Link></li>
          <li><Link href="/products/2">Camera</Link></li> 
          <li><Link href="/products/3">Mobile</Link></li>
    
          </ul>
           
        </div>
        
    )
  }