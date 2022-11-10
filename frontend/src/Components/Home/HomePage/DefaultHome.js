import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, CardGroup, Button, Row } from 'react-bootstrap';
export default function DefaultHome() {


    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    useEffect(function () {
        async function getAllMovies() {
            try {
                const response = await axios.get("http://localhost:7070/movie")
                setMovies(response.data);

                // console.log("In Default home at line 13")

                setFilteredMovies(response.data);
            }

            catch (error) {
            }

        }

        getAllMovies();
    }, []);
    //console.log(movies)



    const [userData, setUser] = useState(() => {
        // console.log("In Default home at line 30")

        const userValues = localStorage.getItem("userData");
        const initialValue = JSON.parse(userValues);
        // console.log(initialValue)
        // console.log(userValues);

        return initialValue || "";

    }
    )

    const [location, locationSet] = useState("Select Location");
    useEffect(() => {
        getFilteredMovies();
        localStorage.setItem("location", JSON.stringify(location));
    }, [location]);

    function locationIntilaizer() {
        const locationStorage = localStorage.getItem('location')
    }

    locationIntilaizer();



    const [filteredmovies, setFilteredMovies] = useState([]);



    // setFilteredMovies(movies);
    function getFilteredMovies() {



        var filtermovies = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].movieLocation == location) {

                filtermovies[i] = movies[i];
            }
        }
        setFilteredMovies(filtermovies);

    }

    function homepage() {
        navigate('/home');
       // console.log("At line 89 im home page working")
    }
  function theatrepage(movieLocStorage) {
        navigate('/theatre');
        localStorage.setItem("movieLocalStorage", JSON.stringify(movieLocStorage));

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
                            {location}
                        </button>


                        <NavLink className="  btn btn-danger mx-5" data-bs-toggle="modal" data-bs-target="#loginModal"
                        >SignIn</NavLink>

                    </ul>

                </div>

            </nav>
            <div className="top_space">

                <div className="modal fade" style={{ textAlign: "center" }} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-lg" role="document" >
                        <div className="modal-content" >
                            <div className="modal-header" >
                                <h5 className="modal-title" style={{ textAlign: "center" }} id="exampleModalLabel">Please Select your location</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <span><img className="locationimg" data-dismiss="modal" onClick={() => locationSet('Bangalore')} src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png"></img></span>
                                <span><img className="locationimg" data-dismiss="modal" onClick={() => locationSet('Chennai')} src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png"></img></span>
                                <span><img className="locationimg" data-dismiss="modal" onClick={() => locationSet('Delhi')} src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png"></img></span>
                                <span><img className="locationimg" data-dismiss="modal" onClick={() => locationSet('Hyderabad')} src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png"></img></span>
                                <span><img className="locationimg" data-dismiss="modal" onClick={() => locationSet('Mumbai')} src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"></img></span>

                                <span className="locationspan">Bangalore</span>
                                <span className="locationspan">Chennai</span>
                                <span className="locationspan">Delhi</span>
                                <span className="locationspan">Hyderabad</span>
                                <span className="locationspan">Mumbai</span>
                            </div>
                           

                        </div>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">


                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>

                    </ol>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img className="d-block w-100"
                                src="https://www.cinepolisindia.com/content/img/slider/20221042938762-prin.png" alt="First slide" />
                        </div>
                        <div className="carousel-item ">
                            <img className="d-block w-100"
                                src="https://www.cinepolisindia.com/content/img/slider/2022104242451-prin.png" alt="Second slide" />
                        </div>
                        <div className="carousel-item ">
                            <img className="d-block w-100"
                                src="https://www.cinepolisindia.com/content/img/slider/20221042105746-prin.png" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                src="https://www.cinepolisindia.com/content/img/slider/20221042846920-prin.png" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                src="https://www.cinepolisindia.com/content/img/slider/20221047956808-prin.jpg" alt="Second slide" />
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="mx-5 mt-4" style={{ textAlign: "center" }}>
                <h2>Recommended Movies</h2>
            </div>
            <Container>
            <CardGroup>
                <Row>

                    {
                        filteredmovies.slice().reverse().map((movie) => {
                            return (

                                <Card className="col-lg-3" sm={3} style={{ textAlign: "center" }} key={movie._id} >



                                    <div  >
                                        <img className="card-img-top" src={movie.image_url} alt="Card image cap" />
                                        <div className="card-body border-0">
                                            <h5 className="card-title">{movie.name} - {movie.language}</h5>
                                            <p className="card-text">{movie.genre}</p>
                                            <div className="card-footer">
                                                <div className="btn-group">

                                                    <button type="button" className="btn btn-primary" onClick={() =>theatrepage(movie)} style={{ height: '40px', width: '280px' }} >Book now</button>
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