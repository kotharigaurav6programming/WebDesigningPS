function printData(obj){
    return `Hello ${obj.username}, your email and password is ${obj.email} and ${obj.password} and you live in ${obj.address}`;
}
const obj = {
    username : "Andrew Anderson",
    email:"andrew@gmail.com",
    password : "andrew@123",
    address : "Indore"
}

const output = <h1>{printData(obj)}</h1>
export default output;