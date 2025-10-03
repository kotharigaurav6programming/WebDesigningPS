import { useEffect, useState } from 'react';
import '../style.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetMessage } from '../store/userSlice.js';
function Login(){
    localStorage.setItem("navShow","login");
    const userStateObj = useSelector(state=>state.userSlice);
    const navigate = useNavigate();
   
    const dispatch = useDispatch();
    const [userObj,setUserObj] = useState({});
    useEffect(()=>{
        dispatch(resetMessage());
    });
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(loginUser(userObj));
        navigate('/profile');
        event.target.reset();
    }
    return (<>
        <h2>Login</h2>
        {userStateObj.message}
        <form onSubmit={handleSubmit}>
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
                type="submit"
                value="Login"
            /><br/>
            <input
                type="reset"
                value="Reset"
            /><br/>            
        </form>
        <Link to='/registration'>Yet Not Registered ? Register Here</Link>
    </>);
}
export default Login;