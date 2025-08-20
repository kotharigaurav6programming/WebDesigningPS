import React from 'react';
class Display extends React.Component{
    render(){
        return (<div style={{width:"75%",float:"left",backgroundColor:"teal",height:"445px"}}>
            <table border={1} cellSpacing={0} cellPadding={8} align="center">
            <caption><h2>Student Details</h2></caption>
            <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
            </tr>
            {
                this.props.studentData.map((student,index)=>{
                return(<tr>
                    <td>{index+1}</td>
                    <td>{student.username}</td>
                    <td>{student.email}</td>
                    <td>{student.password}</td>
                    <td>{student.address}</td>
                </tr>);
                })
            }
            </table>
        </div>);
    }    
}
export default Display;