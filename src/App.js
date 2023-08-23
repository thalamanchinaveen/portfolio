import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./Pages/Navbar/Navbar";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About /> 
        <Skills />
        <Education />
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
