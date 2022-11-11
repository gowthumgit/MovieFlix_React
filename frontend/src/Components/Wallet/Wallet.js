import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Cards from 'react-credit-cards';
import { useEffect, useState } from "react";
import "react-credit-cards/es/styles-compiled.css";

export default function Wallet() {
    const initialState = {
        userId: "",
        userEmail: "",
        userPassword: "",
        userPhoneNo: "",
        userBalance: "",
        
    };


    const navigate = useNavigate();
    function homepage() {
        navigate('/home');
        // console.log("At line 89 im home page working")
    }
    const [locationLocalStorage, location] = useState([]);
    function LocationIntilaizer() {

        useEffect(() => {
            const locationLocalStorage = localStorage.getItem('location')
            location(JSON.parse(locationLocalStorage))
        }, [])

    }
    LocationIntilaizer();

    const [userLocalStorage, userStorage] = useState([]);
    function UserIntilaizer() {

        useEffect(() => {
            const userLocalStorage = localStorage.getItem('User')
            userStorage(JSON.parse(userLocalStorage))
        }, [])

    }
    UserIntilaizer();


    const [data, setData] = useState({
        cvc: "",
        expiry: "",
        name: "",
        number: "",
        amount:""
    });
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

function Moneyadd(){
    if (window.confirm('Are you sure to Make Payment')) {
    console.log("At Wallet lin 56")
    console.log(data.amount);
    console.log(userLocalStorage.userBalance); 
    userLocalStorage.userBalance=Number(userLocalStorage.userBalance)+Number(data.amount);
    const FinalState = {
        userId: userLocalStorage.userId,
        userEmail: userLocalStorage.userEmail,
        userPassword: userLocalStorage.userPassword,
        userPhoneNo: userLocalStorage.userPhoneNo,
        userBalance: userLocalStorage.userBalance,
        
    };

    console.log(userLocalStorage.userBalance);
    localStorage.setItem("User", JSON.stringify(userLocalStorage));
    const response = axios.patch(`http://localhost:7070/user/${userLocalStorage._id}`,FinalState);
    window.alert("Payment Successful")
}
else{

}
}
function userDetailsPage() {
    navigate('/userdetails');
   // console.log("At line 89 im home page working")
}
    

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-dark">
                <a className="navbar-brand" href="#"><img src="https://www.solu.co/wp-content/uploads/2022/09/Moviesflix-1024x576-1.webp" width="100" onClick={homepage} alt="" /></a>
                <form className="d-flex me-5">
                    <input className="form-control me -5 mr-sm-2" type="text" name="moviename" placeholder="Search for movies"></input>
                    <button className="xy bg-white me-5 rounded-"><img src="https://www.nicepng.com/png/detail/853-8539483_png-file-search-button-icon-png.png" alt=""
                        width="20"></img>
                    </button>
                </form>

                <NavLink className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </NavLink>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link text-light" onClick={homepage}>Movies <span className="sr-only">(current)</span></a>
                        </li>

                        <button type="button" className="btn " data-toggle="modal" data-target="#exampleModal">
                            {locationLocalStorage}
                        </button>


                        <a className="nav-link text-light"> <span >Welcome</span></a>

                        <img src="https://tse2.mm.bing.net/th?id=OIP.odaf7cByFm01EzzkUtL1GQHaHa&pid=Api&P=0" width="50"
        
        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} mx-3" onClick={userDetailsPage} alt=""></img>

                    </ul>

                </div>

            </nav>

            <div className="top_space bg-light">

                <div className="container py-5" id="PaymentForm">

                    <div className="row mb-4">

                        <div className="col-lg-8 mx-auto text-center">
                            <h1 className="display-6"> Wallet </h1>
                            <Cards
                                cvc={data.cvc}
                                expiry={data.expiry}
                                focus={data.focus}
                                name={data.name}
                                number={data.number}
                            />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card ">
                                <div className="card-header">
                                    <div className="tab-content">
                                        <div id="credit-card" className="tab-pane fade show active pt-3">

                                            <form action="">
                                                <div className="form-group">
                                                    <label for="cardNumber">
                                                        
                                                        <h6><i class="bi bi-credit-card-2-back-fill"></i>Card number</h6>
                                                    </label>

                                                    <input className="form-control "
                                                        type="number"
                                                        name="number"
                                                        placeholder="Card Number"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="username">
                                                        <h6><i class="bi bi-person-check-fill"></i>Card Owner</h6>
                                                    </label>

                                                    <input className="form-control "
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your Name"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label><h6><i class="bi bi-calendar-check-fill"></i>Expiry date</h6></label>

                                                    <input className="form-control "
                                                        type="text"
                                                        name="expiry"
                                                        placeholder="Expire Date"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>


                                                <div className="form-group">
                                                    <label><h6><i class="bi bi-diamond-fill"></i>CVV</h6></label>

                                                    <input className="form-control "
                                                        type="number"
                                                        name="cvc"
                                                        placeholder="CVV"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label><h6><i class="bi bi-currency-rupee"></i>Amount</h6></label>

                                                    <input className="form-control "
                                                        type="number"
                                                        name="amount"
                                                        placeholder="Enter an amount"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="card-footer"> <button type="button" 
                                            className="subscribe btn btn-primary btn-block shadow-sm" onClick={Moneyadd}> Confirm Payment
                                        </button>
                                    </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >


        </>
    )
}

