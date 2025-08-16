import mq1 from '../assets/images/mq1.png';
import mq2 from '../assets/images/mq2.png';
import mq3 from '../assets/images/mq3.png';

function Marquee(){
    return (<div>
            <marquee>
                <img src={mq1} id="mqlogo" alt="" />
                <img src={mq2} id="mqlogo" alt="" />
                <img src={mq3} id="mqlogo" alt="" />
                <img src={mq1} id="mqlogo" alt="" />
                <img src={mq2} id="mqlogo" alt="" />
                <img src={mq3} id="mqlogo" alt="" />
                <img src={mq1} id="mqlogo" alt="" />
                <img src={mq2} id="mqlogo" alt="" />
                <img src={mq3} id="mqlogo" alt="" />
            </marquee>
        </div>);
}
export default Marquee;