import '../assets/css/style.css';
import logo from '../assets/images/logo.png';
function Header(){
    return (<div id="header">
            <img src={logo} id="logo" alt=""/>
            <span>AquaLink Logistics</span>
        </div>);
}

export default Header;