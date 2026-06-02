import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Benefits/>
      <Schedule/>
      <Footer/>
    </>
  );
}

export default App;

