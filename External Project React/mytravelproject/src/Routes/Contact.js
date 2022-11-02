import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ContactImg from "../assets/2.jpg"
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
function Contact(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )

}
export default Contact;