import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import ContactForm from "./components/ContactForm/contactform";
import SocialLinks from "./components/ContactForm/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <ContactForm/>
      <SocialLinks />
    </div>
  );
}

export default App;
