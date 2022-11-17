import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import axios from "axios";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState([])

  
  useEffect(()=>{
    getUsers()
  },[])

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  function loginOrCreateUser(number){
    var flag = false;
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
          const response = axios.post('http://localhost:7070/userrc',user)
          
        }catch(error){
          console.log(error)
        }
      
    }
  }

  async function getUsers(){
    const res = await axios.get('http://localhost:7070/userrc')
    setUser(res.data)
  }

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      loginOrCreateUser(number)
      navigate("/home");
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
                  Phone
                </h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                  <div className="form-input">
                    <div className="input-field" >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <PhoneInput
                          defaultCountry="IN"
                          value={number}
                          onChange={setNumber}
                          placeholder="Enter Phone Number"
                        />
                        <div id="recaptcha-container"></div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="button-right">
                    <Link to="/">
                      <Button variant="secondary">Cancel</Button>
                    </Link>
                    &nbsp;
                    <Button type="submit" variant="primary">
                      Send Otp
                    </Button>
                  </div>
                </Form>
                <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                  <Form.Group className="mb-3" controlId="formBasicOtp">
                    <Form.Control
                      type="otp"
                      placeholder="Enter OTP"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </Form.Group>
                  <div className="button-right">
                    <Link to="/">
                      <Button variant="secondary">Cancel</Button>
                    </Link>
                    &nbsp;
                    <Button type="submit" variant="primary">
                      Verify
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default PhoneSignUp;