import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import Header from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import Login from './components/LoginComponent';
import Registration from './components/RegistrationComponent.js';
import ProfileComponent from './components/ProfileComponent.js';
import ViewAllUsersComponent from './components/ViewAllUsersComponent.js';
import UpdateProfileComponent from './components/UpdateProfileComponent.js';

function App() {
  return (<>
    <Header/>
    <Router>
        <Navbar/>
        <Routes>
          <Route  path="/" element={<HomeComponent/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/registration" element={<Registration/>}/>
          <Route  path="/profile" element={<ProfileComponent/>}/>
           <Route  path="/viewAllUsers" element={<ViewAllUsersComponent/>}/>          
           <Route  path="/updateProfile" element={<UpdateProfileComponent/>}/>          
        </Routes>
    </Router>
  </>);
}

export default App;
