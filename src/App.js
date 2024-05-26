import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skills/skill";
import Works from "./components/works/works";
import Projects from "./components/Project/project";
import Contact from "./components/contact/contact";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skill/>
     <Works/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
