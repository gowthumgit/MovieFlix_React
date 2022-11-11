import React from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, CardGroup, Button, Row } from 'react-bootstrap';

export default function Admin() {




return(

<>
<nav className="navbar navbar-expand-sm navbar-light fixed-top bg-dark">
                <a className="navbar-brand" href="#"><img src="https://www.solu.co/wp-content/uploads/2022/09/Moviesflix-1024x576-1.webp" width="100"  alt="" /></a>
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
                            <a className="nav-link text-light" >Movies <span className="sr-only">(current)</span></a>
                        </li>
                        <Link to = "/crudadd">Add Movie</Link>
                        <Link to = "/crudadd">Edit Movie</Link>
                        <Link to = "/crudadd"> Movie</Link>

                       
                        <a className="nav-link text-light"> <span >Welcome Admin</span></a>

<img src="https://tse2.mm.bing.net/th?id=OIP.odaf7cByFm01EzzkUtL1GQHaHa&pid=Api&P=0" width="50"

className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} mx-3" alt=""></img>

                    </ul>

                </div>

            </nav>





</>
)


}

