import { useSelector } from 'react-redux';
import '../style.css';

function RightComponent(){
     const obj = useSelector(state=> state.storeSlice); 
  
    return(<div id="right">
     <h3>{obj.counterTitle} : {obj.count}</h3>
     <button>Click to Increment</button>
     <button>Click to Decrement</button>
     <button>Click to Reset</button> <br/>
    
     <textarea placeholder='Enter TagLine' id="tagline" name="tagline"></textarea>
     <br/>
     <button>Click to Set New Tagline</button>
       
    </div>);
}
export default RightComponent;