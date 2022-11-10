import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Cards from 'react-credit-cards';
import { useEffect, useState } from "react";
import "react-credit-cards/es/styles-compiled.css";

export default function Wallet() {



    const navigate = useNavigate();
    function homepage() {
        navigate('/home');
        // console.log("At line 89 im home page working")
    }
    const [locationLocalStorage, location] = useState([]);
    function LocationIntilaizer() {

        useEffect(() => {
            //logic for getting a value from local storage stored under the key 'key'
            const locationLocalStorage = localStorage.getItem('location')
            console.log("At line 58 im home page working")
            console.log(locationLocalStorage)
            location(JSON.parse(locationLocalStorage))
        }, [])

    }
    LocationIntilaizer();

    const [data, setData] = useState({
        cvv: "",
        expiry: "",
        name: "",
        number: ""
    });
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };



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


                        <NavLink className="  btn btn-danger mx-5" data-bs-toggle="modal" data-bs-target="#loginModal"
                        >SignIn</NavLink>

                    </ul>

                </div>

            </nav>




            <div className="top_space bg-light">

                <div className="container py-5" id="PaymentForm">

                    <div className="row mb-4">

                        <div className="col-lg-8 mx-auto text-center">
                            <h1 className="display-6"> Wallet </h1>
                            <Cards
                                cvv={data.cvv}
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
                                                        <h6>Card number</h6>
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
                                                        <h6>Card Owner</h6>
                                                    </label>

                                                    <input className="form-control "
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your Name"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label><h6>Expiry date</h6></label>

                                                    <input className="form-control "
                                                        type="text"
                                                        name="expiry"
                                                        placeholder="Expire Date"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>


                                                <div className="form-group">
                                                    <label><h6>CVV</h6></label>

                                                    <input className="form-control "
                                                        type="number"
                                                        name="cvv"
                                                        placeholder="CVV"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label><h6>Amount</h6></label>

                                                    <input className="form-control "
                                                        type="number"
                                                        name="amount"
                                                        placeholder="Enter an amount"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="card-footer"> <button type="button" 
                                            className="subscribe btn btn-primary btn-block shadow-sm"> Confirm Payment
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

