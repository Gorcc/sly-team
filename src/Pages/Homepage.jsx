import "../App.css";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Trailers from "../Components/Trailers";
import TeamRoster from "../Components/TeamRoster";
import Transition from "../transitions/transition";
import Blog from "../Components/Blog";
import SocialLinks from "../Components/SocialLinks";

function Homepage() {
  return (

   
      <>
      <Header></Header>
      <Hero></Hero>
     
      <Trailers></Trailers>
      <Blog></Blog>
      <SocialLinks></SocialLinks>
      <Footer></Footer>
      </>
      
  );
}

export default Homepage;
