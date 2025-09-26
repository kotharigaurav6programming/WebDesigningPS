import { useDispatch, useSelector } from 'react-redux';
import '../style.css';
import { reset } from '../store/storeSlice.js';

function LeftComponent(){
   const obj = useSelector(state=> state.storeSlice); 
     const dispatch = useDispatch();
   
   return(<div id="left">
     <h3>{obj.counterTitle} : {obj.count}</h3>
     <button onClick={()=>{dispatch(reset())}}>Click to Reset</button> <br/>
    </div>);
}
export default LeftComponent;