import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { tsParticles } from "tsparticles-engine";
// import Particles from 'react-particles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Works from './components/Works';
import Contacts from './components/Contacts';
import AboutMe from './components/AboutMe';
import './styles.css'

function App() {
  return (
    <>
      {/* <Particles 
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            }
          }
        }}
      /> */}
      <Navbar />
      <Header />
      <Works />
      <AboutMe />
      <Contacts />
    </>
  );
}

export default App;
