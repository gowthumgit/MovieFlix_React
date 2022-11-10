import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
     <div className="body">
            <div className="container">
                <div className="row px-3">
                    <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                        <div className="img-left d-none d-md-flex"></div>

                        <div className="card-body">
                            <h2 className="title text-center mt-4">
                                SignUp
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
                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="Submit">
                                        Sign up
                                    </Button>
                                </div>
                            </Form>
                            <div className="p-4 box mt-3 text-center">
                                Already have an account? <Link to="/">Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    </>
  );
};

export default Signup;