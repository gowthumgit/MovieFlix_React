import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useAdminAuth } from "./AdminAuthContext.js";
import axios from "axios";
import "./AdminLogin.css";


const AdminLogin = () => {
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  //const { logIn, googleSignIn } = useAdminAuth();
  const navigate = useNavigate();
  const [admin, setAdmin] = useState([])

  useEffect(()=>{
    getAdmin()
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginUser(adminId);
      
      
    } catch (err) {
      setError(err.message);
    }
  };

 

  function loginUser(adminId){
    console.log("Im in loginUser function")
    console.log(admin)
    admin.forEach(function(item){
      console.log(item.adminId === adminId)
      if(item.adminPassword === adminPassword){
        console.log("Im in if");
        navigate("/admin");
        alert("logged in as an admin")
        localStorage.setItem("Admin", JSON.stringify(item));
        
      }
      else{
        navigate("/admin/login");
        alert("rejected")
        
      }
    })
  }
  
  async function getAdmin(){
    const res = await axios.get('http://localhost:7070/admin')
    setAdmin(res.data)
  }
   
  
  return (
    <div className="body">
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="img-left d-none d-md-flex"></div>

            <div className="card-body">
              <h2 className="title text-center mt-4">
                Admin Login
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <div className="form-input">
                  <div className="input-field" >
                    <span><i className="fa fa-user"></i></span>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Admin Id "
                        onChange={(e) => setAdminId(e.target.value)}
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
                        onChange={(e) => setAdminPassword(e.target.value)}
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
                
                
              </div>
              
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default AdminLogin;