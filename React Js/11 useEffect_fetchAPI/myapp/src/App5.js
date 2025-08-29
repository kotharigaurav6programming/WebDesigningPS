import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);
 
  const getData = ()=>{
       fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
            .then(arr => {setData(arr)})
                .catch((error)=>{
                    console.log("Error : "+error);
                });
  }
  useEffect(()=>{
    getData();
  },[]);

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
            data.map((userObj,index)=>{
                return (<tr>
                    <td>{index+1}</td>
                    <td>{userObj.userId}</td>
                    <td>{userObj.id}</td>
                    <td>{userObj.title}</td>
                    <td>{userObj.body}</td>
                </tr>)
            })
        }
    </table>
  </>);
}

export default App;

