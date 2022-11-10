import React from "react";
import axios from "axios";
import './Payment.css';
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { useEffect,useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"


export default function Payment(){
    

    const [movieLocalStorage, movieLocalStorageData] = useState([]);
    function TheatreIntilaizer() {

        useEffect(() => {
            //logic for getting a value from local storage stored under the key 'key'
            const movieLocalStorage = localStorage.getItem('movieLocalStorage')
            movieLocalStorageData(JSON.parse(movieLocalStorage))
        }, [])

    }
    TheatreIntilaizer();

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

    const navigateBook = () =>{
        navigate('/booking');
       };
       function userDetailsPage() {
        navigate('/userdetails');
       // console.log("At line 89 im home page working")
    }

    return(
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


                <div className="cardtheatre bg-secondary" style={{ textAlign: "center" }}  >
                    <h1>{movieLocalStorage.name} - {movieLocalStorage.language}</h1>
                    <img className="movieImage" src={movieLocalStorage.image_url} />

                    <h5>{movieLocalStorage.genre}</h5>
                    <br></br>
                </div>
                <div className="main-container ">

                    <div className="card summary-container" >
                        <h1 className="center">Payment Summary</h1>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item"><span>Total Tickets   <i class="bi bi-ticket-perforated-fill"></i></span> <span>2</span></li>

                                <li className="list-group-item"><span>Seat Numbers   <i class="bi bi-archive-fill"></i> </span> <span>S1,S2</span> </li>
                                
                                <li className="list-group-item"><span>Tickets Each Price   <i class="bi bi-cash"></i> </span> <span>Rs.240</span> </li>

                                <li className="list-group-item"><span>Tickets Subtotal   <i class="bi bi-bag-check-fill"></i></span> <span>Rs.480</span></li>

                                <li className="list-group-item"><span>Name   <i class="bi bi-person-circle"></i> </span> <span>Rama</span></li>

                                <li className="list-group-item"><span>Email   <i class="bi bi-envelope-fill"></i></span> <span>Rama@gmail.com</span></li> 

                            </ul>
                            <p className="d-flex1"><span>Payment Amount <i class="bi bi-wallet"></i></span> <span>Rs.480</span></p>
                            <div className="new">
                                <button className="btn btn-primary" onClick={navigateBook} data-toggle="modal"><i class="bi bi-lock"></i> Make Payment </button>
                                
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </>
    )

}
