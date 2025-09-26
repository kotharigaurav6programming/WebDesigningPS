import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function profileComponent(){
    const userStateObj = useSelector(state=>state.userSlice);
    const navigate = useNavigate();
    
    if(userStateObj.status==403 || userStateObj.status==500)
        navigate('/login');

    return(<>
    </>);
}