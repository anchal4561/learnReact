import  Link from "next/link"
export default function App
({ Component, pageProps }) {
  return (
  <div>
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/products"}>Products</Link>
    </nav>
  <Component {...pageProps} />
  </div>
  )
}
