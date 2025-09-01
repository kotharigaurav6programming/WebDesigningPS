import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import { MemoryRouter as Router,Routes,Route} from 'react-router-dom';
import { HashRouter as Router,Routes,Route} from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent.js';
import NavbarComponent from './components/NavbarComponent.js';
import HomeComponent from './components/HomeComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ContactComponent from './components/ContactComponent.js';
function App() {
  return (
    <Router>
        <HeaderComponent/>
        <NavbarComponent/>
        <Routes>
          <Route path='/' element={<HomeComponent/>}/>
          <Route path='/about' element={<AboutComponent/>}/>
          <Route path='/contact' element={<ContactComponent/>}/>
        </Routes>
    </Router>
  );
}

export default App;
