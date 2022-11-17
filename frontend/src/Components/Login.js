import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import axios from "axios";
import "./Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      loginUser(email)
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  function loginOrCreateUser(number){
    var flag = false
    user.forEach(function(item){
      if(item.userId === number){
        localStorage.setItem("User", JSON.stringify(item));
        flag = true
      }
    })
    if(!flag){
        const user = {
          userId : number,
          userEmail: number,
          userBalance: 0
        }
        try{
          const response = axios.post('http://localhost:7070/userrc',user)
          
        }catch(error){
          console.log(error)
        }
      
    }
  }

  function loginUser(email){
    console.log("Im in loginUser function")
    console.log(user)
    user.forEach(function(item){
     //console.log(item.userId === email)
      if(item.userId === email){
       //console.log("Im in if")
        localStorage.setItem("User", JSON.stringify(item));
      }
    })
  }
  
  async function getUsers(){
    const res = await axios.get('http://localhost:7070/userrc')
    setUser(res.data)
  }
   
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await googleSignIn();
      loginOrCreateUser(res.user.email)
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="body">
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="img-left d-none d-md-flex"></div>

            <div className="card-body">
              <h2 className="title text-center mt-4">
                Login
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <div className="form-input">
                  <div className="input-field" >
                    <span><i className="fa fa-user"></i></span>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="form-input">
                  <div className="input-field">
                    <span><i className="fa fa-lock"></i></span>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>



                <div className="d-grid gap-2 ">
                  <Button variant="primary" type="Submit">
                    Log In
                  </Button>
                </div>
              </Form>
              <hr />
              <div className="external">
                <div>
                  <GoogleButton
                    className="g-btn"
                    type="dark"
                    onClick={handleGoogleSignIn}
                  />
                </div>
                <Link to="/phonesignup">
                  <div className="d-grid gap-2 mt-3 button">
                    <Button variant="success" type="Submit">
                      Sign in with Phone
                    </Button>
                  </div>
                </Link>
              </div>
              <div className="p-4 box mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Login;