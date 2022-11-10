import React, {useEffect, useState, useRef} from "react";
import './Booking.css';
import QRCode from "react-qr-code";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

import ReactToPrint from "react-to-print";



import "bootstrap-icons/font/bootstrap-icons.css"


export default function Booking(){
    const ref=useRef();

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


                        <NavLink className="  btn btn-danger mx-5" data-bs-toggle="modal" data-bs-target="#loginModal"
                        >SignIn</NavLink>

                    </ul>
                </div>
            </nav>

            <div className="top_space">
                <div className="body" style={{backgroundColor:"lightgray"}}>
                    <div  ref={ref} className="d-flex justify-content-center container mt-5">
                        <div  className="card p-3 bg-white" style={{width:"444px",marginTop:"2rem",marginBottom:"2rem"}}><i className="fa fa-film" />
                            <div className="about-product text-center mt-2"><img src="https://www.solu.co/wp-content/uploads/2022/09/Moviesflix-1024x576-1.webp" width={300} />
                                <div>
                                    <h4>Booking Information</h4>
                                    <h6 className="mt-0 text-black-50">Movie Tickets-Total Seats</h6>
                                </div>
                            </div>
                            <div className="about-product text-center mt-2">
                                <QRCode size={150} value="" />
                                
                                {/* <QRCode size={150} value={link} onChange={(e)=>
                                {handleChange(e)} } /> */}

                            </div>

                            <div className="">
                                <div className="d-flex justify-content-between p-price"><span>Movie Name</span><span>Name</span></div>
                                <div className="d-flex justify-content-between p-price"><span>Theatre Name</span><span>theatre Name</span></div>
                                <div className="d-flex justify-content-between p-price"><span>Seats</span><span>Seats</span></div>
                                <div className="d-flex justify-content-between p-price"><span>Show Time</span><span>time1</span></div>
                                <div className="d-flex justify-content-between p-price"><span>Ticket price</span><span>240</span></div>
                                <div className="d-flex justify-content-between p-price"><span>Email</span><span>Email</span></div>
                            </div>
                            <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total Amount Paid</span><span>Rs.totalSeats*240</span></div>
                        </div>
                    </div>
                   
                </div>
            </div>

            <ReactToPrint trigger={()=><button class="btn btn-secondary" style={{width:"100px",marginTop:"1rem",float:"right",marginBottom:"1rem"}} >
                 Download
                 </button>} content={()=>ref.current} />

        </>
    )

}