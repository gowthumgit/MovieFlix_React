import React from "react";
import axios from "axios";
import "./Admin.css"
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, CardGroup, Button, Row } from 'react-bootstrap';

export default function Admin() {

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

	useEffect(function () {
		async function getMovies() {
			try {
				const response = await axios.get("http://localhost:7070/movie");
				setMovies(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getMovies();
	}, []);

    function movieDetails(id){
        navigate(`/movies/${id}`);
    }
    async function movieDelete(id){
        try{
            const response = await axios.delete(`http://localhost:7070/movie/${id}`);
            setMovies(response.data);
        }catch(error){
            console.log("error",error);
        }
        navigate("/admin");
    }

return(

<>
<nav className="navbar navbar-expand-sm navbar-light fixed-top bg-dark navbar-admin">
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
                        
                        <li>   </li>
                        <li><Link className="link" to = "/movies/add"><a>Add Movie </a></Link></li>
                        <li><Link className="link" to = "/users"> User</Link></li>

                       
                        

<img src="https://tse2.mm.bing.net/th?id=OIP.odaf7cByFm01EzzkUtL1GQHaHa&pid=Api&P=0" width="50"

className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} mx-3" alt=""></img>

                    </ul>

                </div>

            </nav>


            <Container className="container">
            <CardGroup>
                <Row>

                    {
                        movies.slice().reverse().map((movie) => {
                            return (

                                <Card className="col-lg-3" sm={3} style={{ textAlign: "center" }} key={movie._id} >



                                    <div  >
                                        <img className="card-img-top" src={movie.image_url} alt="Card image cap" />
                                        <div className="card-body border-0">
                                            <h5 className="card-title">{movie.name} - {movie.language}</h5>
                                            <p className="card-text">{movie.genre}</p>
                                            <div className="card-footer">
                                                <div className="btn-group">

                                                    <button type="button" className="btn btn-primary" onClick={() =>movieDetails(movie._id)} style={{ height: '40px', width: '280px' }} >View</button>
                                                    {/* <button type="button" className="btn btn-primary" onClick={() =>movieDelete(movie._id)} style={{ height: '40px', width: '280px' }} >Delete</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </Row>
            </CardGroup>
            </Container>




</>
)


}

