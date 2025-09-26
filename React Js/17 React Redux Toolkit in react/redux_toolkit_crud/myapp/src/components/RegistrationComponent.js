import { useState } from 'react';
import '../style.css';
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/userSlice.js';
function Registration(){
    localStorage.setItem("navShow","registration");
    const userStoreObj = useSelector(state=> state.userSlice);
    const [userObj,setUserObj] = useState({});
    const dispatch = useDispatch();
    const navigate =  useNavigate();
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addUser(userObj));
        navigate('/registration');
        event.target.reset();
    }
    return (<>
        <h2>Registration</h2>
        {userStoreObj.message}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                onChange={getData}
                required
            /><br/>
             <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                 onChange={getData}
                required
            /><br/>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                 onChange={getData}
                required
            /><br/>
            <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
                onChange={getData}
                required
            /><br/>
            <input
                type="submit"
                value="Register"
            /><br/>
            <input
                type="reset"
                value="Reset"
            /><br/>            
        </form>
        <Link to='/login'>Already Registered ? Login Here</Link>

    </>);
}
export default Registration;