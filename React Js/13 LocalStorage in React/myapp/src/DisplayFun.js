function DisplayFun(props){
    return (<>
              <div style={{width:"75%",float:"left",backgroundColor:"teal",height:"445px"}}>
        {props.student.length==0 ? (<span><h1>No Record Found</h1></span>) : 
        (<table border={1} cellSpacing={0} cellPadding={8} align="center">
          <caption><h2>Student Details</h2></caption>
          <tr>
            <th>S.No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
          </tr>
          {
            props.student.map((student,index)=>{
              return(<tr>
                <td>{index+1}</td>
                <td>{!student ?? student.username}</td>
                <td>{!student ?? student.email}</td>
                <td>{!student ?? student.password}</td>
                <td>{!student ?? student.address}</td>
              </tr>);
            })
          }
        </table>)}
      </div>

    </>);
}
export default DisplayFun;