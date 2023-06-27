import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Works from './components/Works';
import Contacts from './components/Contacts';
import AboutMe from './components/AboutMe';
import './styles.css'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Works />
      <Contacts />
    </>
  );
}

export default App;
