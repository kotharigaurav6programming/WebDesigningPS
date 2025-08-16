function Navbar(){
    return (<nav className="navbar navbar-default">
    <div className="container-fluid" style={{backgroundColor: "black"}}>
      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#" style={{color:"white"}}>
          <span className="glyphicon glyphicon-education" style={{color:"white"}}></span>
          Tutorial</a>
      </div>

      {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><a href="#" style={{color:"white"}}>
              <span className="glyphicon glyphicon-home" style={{color:"white"}}></span>
              Home <span className="sr-only">(current)</span></a></li>
          <li><a href="profile.html" style={{color:"white"}}>
              <span className="glyphicon glyphicon-user" style={{color:"white"}}></span>
              Profile</a></li>
          <li className="dropdown" style={{color:"white"}}>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" style={{color:"white",backgroundColor: "black"}}>
              <span className="glyphicon glyphicon-globe" style={{color:"white"}}></span>
              Courses <span className="caret"></span></a>
            <ul className="dropdown-menu" style={{backgroundColor: "black"}}>
              <li><a href="#" id="demo">C Language</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" id="demo">C++ Language</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" id="demo">Java Programming Language</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" id="demo">Mern Stack</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" id="demo">Data Analytics</a></li>
            </ul>
          </li>
        </ul>
        <form className="navbar-form navbar-left">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
          <button type="submit" className="btn btn-primary">
            <span className="glyphicon glyphicon-search"></span>
            Submit</button>
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" style={{color:"white"}} data-toggle="modal" data-target="#myModal">
              <span className="glyphicon glyphicon-envelope" style={{color:"white"}}></span>
              FAQ</a>
            {/* <!-- modal content starts -->
            <!-- Button trigger modal -->
            <!-- Modal --> */}
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">FAQ</h4>
                  </div>
                  <div className="modal-body" style={{cursor: "pointer"}}>

                    <p data-toggle="collapse" data-target="#demo1"> <big><b>+ Can I get a certificate after completing a
                          tutorial? </b></big></p>
                    <p id="demo1" className="collapse">
                      Yes, many platforms provide certificates, especially paid ones like Udemy, Coursera, and LinkedIn
                      Learning.
                    </p>

                    <p data-toggle="collapse" data-target="#demo2"> <big><b>+ What types of tutorials are
                          available?</b></big></p>
                    <p id="demo2" className="collapse">
                      a. Text-based (articles, blogs, documentation) <br/>
                      b. Video-based (YouTube, online courses) <br/>
                      c. Interactive (quizzes, hands-on coding) <br/>
                      d. Live sessions (webinars, classNameroom training)
                    </p>

                    <p data-toggle="collapse" data-target="#demo3"> <big><b>+ How long does it take to complete a
                          tutorial?</b></big></p>
                    <p id="demo3" className="collapse">
                      It depends on the topic and complexity. Some tutorials take a few hours, while others require
                      weeks of practice.
                    </p>

                    <p data-toggle="collapse" data-target="#demo4"> <big><b>+ Can I create and sell my own
                          tutorials?</b></big></p>
                    <p id="demo4" className="collapse">
                      a. Create a YouTube channel for free tutorials. <br/>
                      b. Sell courses on Udemy, Teachable, or your website. <br/>
                      c. Offer live training or coaching sessions.
                    </p>

                    <p data-toggle="collapse" data-target="#demo5"> <big><b>+ What if I don’t understand something in
                          the tutorial?</b></big></p>
                    <p id="demo5" className="collapse">
                      a. Re-watch or re-read the content. <br/>
                      b. Ask in the tutorial’s comments or discussion section. <br/>
                      c. Search for additional explanations online.
                    </p>


                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- modal content ends --> */}
          </li>

          <li className="dropdown">
            <a href="#" className="dropdown-toggle" style={{color:"white",backgroundColor: "black"}} data-toggle="dropdown">
              <span className="glyphicon glyphicon-user" style={{color:"white"}}></span>
              Account <span className="caret"></span></a>
            <ul className="dropdown-menu" style={{backgroundColor: "black"}}>
              <li><a href="#" id="demo">
                  <span className="glyphicon glyphicon-log-in"></span>
                  Login</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" id="demo" data-toggle="modal" data-target="#myModal1">
                  <span className="glyphicon glyphicon-registration-mark"></span>
                  Register</a></li>
            </ul>
          </li>
          {/* <!-- modal starts --> */}
{/* <!-- Modal --> */}
<div className="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Enroll For Free Course</h4>
      </div>
      <div className="modal-body">
        
        <form>
          <div className="form-group">
            <label for="exampleInputUsername">Enter Username</label>
            <input type="text" className="form-control" id="exampleInputUsername" placeholder="Enter Username"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
          </div>
          <div className="form-group">
            <label for="exampleInputContact">Enter Contact</label>
            <input type="text" className="form-control" id="exampleInputContact" placeholder="Enter Contact"/>
          </div>
          <div className="form-group">
            <label for="exampleInputAddress">Enter Address</label>
            <textarea className="form-control" id="exampleInputAddress" placeholder="Enter Address"></textarea>
          </div>
          <div className="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile"/>
            <p className="help-block">Example block-level help text here.</p>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox"/> Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
      
    </div>
  </div>
</div>
          {/* <!-- modal ends --> */}
        </ul>
      </div>
      {/* <!-- /.navbar-collapse --> */}
    </div>
    {/* <!-- /.container-fluid --> */}
  </nav>);
}

export default Navbar;