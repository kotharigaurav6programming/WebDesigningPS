import headerStyle from './header.module.css';
import logo from '../../assets/images/logo.png';

function Header(){
    return (<div className={headerStyle.header}>
            <img src={logo} className={headerStyle.logo} alt=""/>
            <span>AquaLink Logistics</span>
        </div>);
}

export default Header;