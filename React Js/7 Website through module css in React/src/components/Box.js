import logo from '../assets/images/logo.png';
import '../assets/css/style.css';
function Box(){
    return (<div id="box">
            <div id="box1">
                <img src={logo} id="boxImg" alt=""/>
                <div id="subbox">
                    <h2>Heading One</h2>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Nisi, adipisci.</p>
                    <button>Services We Offer</button>
                </div>
            </div>
            <div id="box1">
                <img src={logo} id="boxImg" alt=""/>
                <div id="subbox">
                    <h2>Heading Two</h2>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Nisi, adipisci.</p>
                    <button>Best Offers for You</button>
                </div>
            </div>
            <div id="box1">
                <img src={logo} id="boxImg" alt=""/>
                <div id="subbox">
                    <h2>Heading Three</h2>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Nisi, adipisci.</p>
                    <button>Lowest Price Brand</button>
                </div>
            </div>
            <div id="box1">
                <img src={logo} id="boxImg" alt=""/>
                <div id="subbox">
                    <h2>Heading Four</h2>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Nisi, adipisci.</p>
                    <button>Refer and Earn</button>
                </div>
            </div>
        </div>);
}
export default Box;