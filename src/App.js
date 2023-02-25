
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Sales from "./components/Sales.js";
import Contact from "./components/Contact.js";



import "./style/App.scss"
import "./style/Header.scss"
import "./style/Home.scss"
import "./style/Footer.scss"
import "./style/About.scss"
import "./style/Projects.scss"
import "./style/Sales.scss"
import "./style/Contact.scss"
import "./style/mediaquery.scss"



function App() {
  return (
    <Router>
        <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/#about" element={<About/>}/>
      <Route path="/#projects" element={<Projects/>}/>

    </Routes>
     {/* <About/> */}
     <Projects/>
     <Sales/>
     <Contact/>
    <Footer/>

    </Router>
  );
}

export default App;
