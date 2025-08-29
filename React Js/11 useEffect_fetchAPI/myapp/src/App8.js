import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);
  const userObj = {
    userId : 'User123',
    id:'123User',
    title:'This is title',
    body:'This is body'
  }
  fetch('http://localhost:3000/profile',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(userObj)
        });

  return (<>
    <h1>User Data</h1>
    <table border={1} cellPadding={10} cellSpacing={0}>
        <tr>
            <th>S.No</th>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
        {
            // data.map((userObj,index)=>{
            //     return (<tr>
            //         <td>{index+1}</td>
            //         <td>{userObj.userId}</td>
            //         <td>{userObj.id}</td>
            //         <td>{userObj.title}</td>
            //         <td>{userObj.body}</td>
            //     </tr>)
            // })
        }
    </table>
  </>);
}

export default App;

