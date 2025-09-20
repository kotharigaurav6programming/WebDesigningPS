import { useSelector } from 'react-redux';
import '../style.css';

function LeftComponent(){
   const obj = useSelector(state=> state.storeSlice); 
   return(<div id="left">
     <h3>{obj.counterTitle} : {obj.count}</h3>
     <button>Click to Reset</button>
    </div>);
}
export default LeftComponent;