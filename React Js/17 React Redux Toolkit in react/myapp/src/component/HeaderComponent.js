import { useSelector } from 'react-redux';
import '../style.css';
function HeaderComponent(){
    const obj = useSelector(state=> state.storeSlice);
    return(<div id="header">
        <center><h2>Example of Redux Toolkit</h2>
        <h3>{obj.tagLine}</h3>
        <h3>{obj.counterTitle} : {obj.count}</h3>
        </center>
    </div>);
}
export default HeaderComponent;