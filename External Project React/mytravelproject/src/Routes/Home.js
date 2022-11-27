import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

import HomeImg from "../assets/12.jpg"
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

function Home(){
    return(
        <>
        
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey our Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )

}
export default Home;