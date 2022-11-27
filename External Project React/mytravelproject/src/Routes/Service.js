import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ServiceImg from "../assets/12.jpg"
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
function Service(){
    return(
        <>
        
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>
    )

}
export default Service;