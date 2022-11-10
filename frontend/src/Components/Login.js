import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState([])

  useEffect(()=>{
    getUsers()
  },[])
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
          userPhoneNo: number,
          userBalance: 0
        }
        try{
          const response = axios.post('http://localhost:7070/user',user)
          console.log(response)
        }catch(error){
          console.log(error)
        }
      
    }
  }

  function loginUser(email){
    console.log("Im in loginUser function")
    console.log(user)
    user.forEach(function(item){
      console.log(item.userId === email)
      if(item.userId === email){
        console.log("Im in if")
        localStorage.setItem("User", JSON.stringify(item));
      }
    })
  }
  
  async function getUsers(){
    const res = await axios.get('http://localhost:7070/user')
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
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit">
              Sign in with Phone
            </Button>
          </div>
        </Link>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};




export default Login;