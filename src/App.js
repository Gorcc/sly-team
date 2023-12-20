import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Trailers from "./Components/Trailers";
import TeamRoster from "./Components/TeamRoster";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <TeamRoster></TeamRoster>
      <Trailers></Trailers>
      <Footer></Footer>
      
    </>
  );
}

export default App;
