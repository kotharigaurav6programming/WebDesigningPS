function printData(){
    var num = 5;
    var str = '';
    for(var i=1;i<=10;i++){
        str += num +" * "+i+" = "+(num*i)+"\n";
    }
    alert(str);
}

const output = <h1>{printData()}</h1>
export default output;

/*
 What the printData Function Does
javascript
function printData(){
    var num = 5;
    var str = '';
    for(var i=1; i<=10; i++){
        str += num + " * " + i + " = " + (num*i) + "\n";
    }
    alert(str); // This shows the multiplication table in an alert box
}
This function does not return anything, so by default it returns undefined.

It builds a string str containing the multiplication table of 5.

Then it shows that string using alert(str) — this is a side effect, not a return value.

🧠 What Happens in This Line?
jsx
const output = <h1>{printData()}</h1>
printData() is called immediately.

It shows an alert with the table.

It returns undefined, so this becomes:

jsx
const output = <h1>{undefined}</h1>
In JSX, undefined inside {} renders nothing. So the <h1> will be empty.

✅ Why You See the Table
You see the multiplication table only because of the alert(), not because of anything rendered in the JSX. The <h1> tag will be empty in the actual DOM.What the printData Function Does
javascript
function printData(){
    var num = 5;
    var str = '';
    for(var i=1; i<=10; i++){
        str += num + " * " + i + " = " + (num*i) + "\n";
    }
    alert(str); // This shows the multiplication table in an alert box
}
This function does not return anything, so by default it returns undefined.

It builds a string str containing the multiplication table of 5.

Then it shows that string using alert(str) — this is a side effect, not a return value.

🧠 What Happens in This Line?
jsx
const output = <h1>{printData()}</h1>
printData() is called immediately.

It shows an alert with the table.

It returns undefined, so this becomes:

jsx
const output = <h1>{undefined}</h1>
In JSX, undefined inside {} renders nothing. So the <h1> will be empty.

✅ Why You See the Table
You see the multiplication table only because of the alert(), not because of anything rendered in the JSX. The <h1> tag will be empty in the actual DOM.
*/