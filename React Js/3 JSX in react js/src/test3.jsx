function printData(){
    var num = 5;
    var str = [];
    for(var i=1;i<=10;i++){
        str.push(num +" x "+i+" = "+(num*i));
    }
    var array = str.map((line)=>{
        return <div>{line}</div>
    });
    return array;
}

const output = <h1>{printData()}</h1>
export default output;

