import React from "react";
import axios from "axios";
import './Theatre.css';
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";

export default function Theatre() {

    const [theatres, setTheatres] = useState([]);
    useEffect(function () {
        async function getAllTheatres() {
            try {
                const response = await axios.get("http://localhost:7070/theatre")
                setTheatres(response.data);


             //   console.log("In Default home at line 15")

               // console.log(response.data);
            }

            catch (error) {
            }

        }

        getAllTheatres();
    }, []);

    const [movieLocalStorage, movieLocalStorageData] = useState([]);
    function MovieIntilaizer() {

        useEffect(() => {
            //logic for getting a value from local storage stored under the key 'key'
            const movieLocalStorage = localStorage.getItem('movieLocalStorage')
            movieLocalStorageData(JSON.parse(movieLocalStorage))
        }, [])

    }
    MovieIntilaizer();



    const navigate = useNavigate();
    function homepage() {
        navigate('/home');
        // console.log("At line 89 im home page working")
    }
    function seatpage() {
        
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

    function userDetailsPage() {
        navigate('/userdetails');
       // console.log("At line 89 im home page working")
    }
    function theatreLocalStorage(theatreValues,timeVal){
        console.log("At theatre page line 76")
        localStorage.setItem("Theatre", JSON.stringify(theatreValues));
        localStorage.setItem("Time", JSON.stringify(timeVal));
        console.log(theatreValues)
        console.log(timeVal)
        navigate('/seat');
        

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



                        <a className="nav-link text-light"> <span >Welcome</span></a>

<img src="https://tse2.mm.bing.net/th?id=OIP.odaf7cByFm01EzzkUtL1GQHaHa&pid=Api&P=0" width="50"

className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} mx-3" onClick={userDetailsPage} alt=""></img>

                    </ul>

                </div>

            </nav>




            <div className="top_space bg-light">


                <div className="cardtheatre" style={{ textAlign: "center",  }}  >
                    <h1>{movieLocalStorage.name} - {movieLocalStorage.language}</h1>
                    <img className="movieImage" src={movieLocalStorage.image_url} />

                    <h5>{movieLocalStorage.genre}</h5>
                    <br></br>
                </div>

                {

                    theatres.map((theatre) => {
                        return (


                            <div className="cardtheatres w-75 " >


                                <div className="card-body">
                                    <h5 className="card-title">{theatre.theatreName}:{theatre.theatreType}</h5>
                                    <p className="card-text">[M-Ticket] [Food & Beverage]</p>
                                    <p className="card-text"></p>
                                    <div>
                                        {theatre.showTime.map((times) => {
                                            return (
                                                <span ><button type="button " className="timeButton btn-primary leftspace " onClick={()=>theatreLocalStorage(theatre,times)}>{times}</button></span>
                                            )
                                        })}


                                    </div>
                                </div>
                            </div>


                        )
                    })
                }



            </div>




        </>

    )




}

