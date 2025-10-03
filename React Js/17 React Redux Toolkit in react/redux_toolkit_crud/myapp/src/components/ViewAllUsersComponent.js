import { useSelector } from "react-redux";

function ViewAllUsersComponent(){
    const userStateObj = useSelector(state=> state.userSlice);
    
    return (<>
        <table border={1} cellPadding={8} cellSpacing={0} align="center">
            <caption><h2>User List</h2></caption>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            {
                userStateObj.userArray.map((userObj,index)=>{
                    return(<tr>
                        <td>{index+1}</td>
                        <td>{userObj.username}</td>
                        <td>{userObj.email}</td>
                        <td>{userObj.address}</td>
                    </tr>);
                })
            }
        </table>
    </>);
}

export default ViewAllUsersComponent;