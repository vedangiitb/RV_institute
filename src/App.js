import './App.css';
import Navbar from './components/NavBar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import StartScreen from './components/HomePageContent/MainScreen';
import Features from './components/HomePageContent/FeaturesSection';
import Contact from './components/HomePageContent/Contact';
import SubjectsSection from './components/HomePageContent/SubjectsSection';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <h1 id="navigate-home" ></h1>
        <StartScreen />

        <h1 id="navigate-features"></h1>
        <Features/> 

        <h1 id="navigate-services"></h1>
        <SubjectsSection />

        <h1 id="navigate-contact"></h1>
        <Contact />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
