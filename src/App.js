import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { tsParticles } from "tsparticles-engine";
// import Particles from 'react-particles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Works from './components/works';
import Contacts from './components/Contacts';

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
      <Contacts />
    </>
  );
}

export default App;
