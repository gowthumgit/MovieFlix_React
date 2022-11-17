import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";




function History() {
	const [historys, sethistory] = useState([]);
    const [filteredhistory, setFilteredHistory] = useState([]);
    const [userLocalStorage, userStorage] = useState([]);




    useEffect(()=>{

        UserIntilaizer();
      },[])
    
    async function UserIntilaizer() {

    
            const userLocalStorage1 = JSON.parse(localStorage.getItem('User'))
            userStorage(userLocalStorage1)

            const response = await axios.get("http://localhost:7070/history");
            sethistory(response.data);
            var filterhistory = [];
            var count=0;
            
           // console.log("befor line 16 try brlock")
            //console.log(historys);
            for (let i = 0; i < response.data.length; i++) {
                
                         if (response.data[i].userName == userLocalStorage1.userId) {
                            
    
                            filterhistory[count] = response.data[i];
                    count+=1;
                }
            }
            setFilteredHistory(filterhistory);
    

    }
    


	//console.log("At line 45 history")
      //  console.log(filteredhistory)
        

   


    


    // setFilteredMovies(movies);
   /*  function getFilteredhistory() {
        console.log("At line history")
        console.log(historys)
          
       var filteredhistory = [];
        var count=0;
        for (let i = 0; i < historys.length; i++) {
                     if (historys[i].userName == userLocalStorage.userId) {

                filteredhistory[count] = historys[i];
                count+=1;
            }
        }
        setFilteredHistory(filteredhistory);

    }
    */ 
    function userDetailsPage() {
        navigate('/userdetails');
       // console.log("At line 89 im home page working")
    }


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
            location(JSON.parse(locationLocalStorage))
        }, [])

    }
    LocationIntilaizer();


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
        <div className="container">
			<div style={{ textAlign: "center" }}>
                <h1 >Booking History</h1>
				<div className="d-flex flex-wrap">
					{filteredhistory.map((history) => {
						return (
                            <span>
							<div
								className="card summany-container"
								style={{ width: "500px", margin: 30,boxShadow:"3px 3px 3px gray" }}
								key={history._id}
							>
								<div className="card-header" style={{backgroundColor:"#5D6D7E"}}>
									<h5 className="card-title">
										
											{history.historyId}
								
									</h5>
								</div>
								<div className="card-body">
									<h5 className="d-flex align-items-center">
                                    <i className="bi bi-film"></i>

											{history.movieName}
									
									</h5>
									
                                    <h6 className="d-flex align-items-center">
                                    <i className="bi bi-bag"></i>
                                        {history.theatreName}
                                    </h6>
									<p className="card-text d-flex" >
									<i className="bi bi-currency-rupee"></i>
									
											{history.amountPaid}
										
									</p>
                                    
                                    <h6 className="d-flex align-items-center">
                                    <i className="bi bi-person-badge-fill"></i>
                                    {history.userName}
                                    </h6>
								</div>
								
							</div>
                            </span>
						);
					})}
				</div>
			</div>
		</div>
        </div>
        </>
	
	);
}

export default History;