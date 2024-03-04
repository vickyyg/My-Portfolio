import Navbar from './Components/NavBar/navbar'
import Intro from './Components/Intro/intro'
import Skills from './Components/Skills/skills'
import Works from './Components/Works/works'
import Contact from './Components/Contact/contact'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Contact />
    </div>
  );
}

export default App;
