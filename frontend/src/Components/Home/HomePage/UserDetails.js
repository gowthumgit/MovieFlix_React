import React from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, CardGroup, Button, Row } from 'react-bootstrap';

export default function UserDetails() {
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
    function userDetailsPage() {
        navigate('/userdetails');
       // console.log("At line 89 im home page working")
    }


    const FinalState = {
        userId: userLocalStorage.userId,
        userEmail: userLocalStorage.userEmail,
        userPassword: userLocalStorage.userPassword,
        userPhoneNo: userLocalStorage.userPhoneNo,
        userBalance: userLocalStorage.userBalance,
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
                <h1 style={{textAlign:"center"}}> User Details</h1>
                <br></br>
                <br></br>


                <table className="table table-bordered" style={{textAlign:"center"}}>
                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">User Email</th>
                            <th scope="col">User Phone</th>
                            <th scope="col">User balance</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">{FinalState.userId}</td>
                            <td>{FinalState.userEmail}</td>
                            <td>{FinalState.userPhoneNo}</td>
                            <td>{FinalState.userBalance}</td>

                            <td className="text-center edit-block">
                                <span className="edit" >
                                    <button type="button" className="btn btn-success btn-sm mr-2"
                                    style={{width:"100px"}}><Link style={{ color:"white"}} to ="/wallet">Add Money</Link></button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>


<br></br>
            </div >
            <br></br>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>




        </>
    )
}

