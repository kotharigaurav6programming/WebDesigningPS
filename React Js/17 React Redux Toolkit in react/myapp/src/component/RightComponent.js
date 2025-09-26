import { useDispatch, useSelector } from 'react-redux';
import '../style.css';
import { decrement, increment, reset, tagLineFun } from '../store/storeSlice.js';
import { useState } from 'react';
function RightComponent(){
     const obj = useSelector(state=> state.storeSlice); 
     const  [tagLine,setTagLine] = useState({});
     const dispatch = useDispatch();
     const getData = (event)=>{
        const {name,value} = event.target;
        setTagLine({
            ...tagLine,
            [name]:value
        });
     }
    return(<div id="right">
     <h3>{obj.counterTitle} : {obj.count}</h3>
     <button onClick={()=>{dispatch(increment())}}>Click to Increment</button>
     <button onClick={()=>{dispatch(decrement())}}>Click to Decrement</button>
     <button onClick={()=>{dispatch(reset())}}>Click to Reset</button> <br/>
    
     <textarea placeholder='Enter TagLine' id="tagline" name="tagline" onChange={getData}></textarea>
     <br/>
     <button onClick={()=>{dispatch(tagLineFun(tagLine))}} >Click to Set New Tagline</button>
       
    </div>);
}
export default RightComponent;