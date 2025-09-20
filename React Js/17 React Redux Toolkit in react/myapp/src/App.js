import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent.js';
import FooterComponent from './component/FooterComponent.js';
import LeftComponent from './component/LeftComponent.js';
import RightComponent from './component/RightComponent.js';

function App() {
  return (<div>
    <HeaderComponent/>
    <div id="box">
      <LeftComponent/>
      <RightComponent/>
    </div>
    <FooterComponent/>
  </div>);
}

export default App;
