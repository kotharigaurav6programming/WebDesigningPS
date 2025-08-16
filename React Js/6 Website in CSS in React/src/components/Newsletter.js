import '../assets/css/style.css';
function Newsletter(){
    return ( <div id="newsletter">
            <center>
                <h1>NewsLetter</h1>
                <form action="">
                    <input 
                        type="email" 
                        placeholder="Enter Email" 
                        name="email" 
                        id="email"
                    />
                    <input 
                        type="submit" 
                        value="Subscribe"
                    />
                </form>
            </center>
        </div>);
}
export default Newsletter;