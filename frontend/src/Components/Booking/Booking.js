import React, {useEffect, useState, useRef} from "react";
import './Booking.css';
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ReactToPrint from "react-to-print";
import "bootstrap-icons/font/bootstrap-icons.css"
import axios from "axios";


export default function Booking(){
    const ref=useRef();

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

    const [locationLocalStorage, location] = useState([]);
    function LocationIntilaizer() {

        useEffect(() => {
            addHistory();
            //logic for getting a value from local storage stored under the key 'key'
            const locationLocalStorage = localStorage.getItem('location')
            location(JSON.parse(locationLocalStorage))
        }, [])

    }
    LocationIntilaizer();
    const [theatreLocalStorage, theatre] = useState([]);
    function TheatreIntilaizer() {

        useEffect(() => {
            //logic for getting a value from local storage stored under the key 'key'
            const theatreLocalStorage = localStorage.getItem('Theatre')
           theatre(JSON.parse(theatreLocalStorage))
        }, [])

    }
    TheatreIntilaizer();
    const [timeLocalStorage,time] = useState([]);
    function TimeIntilaizer() {

        useEffect(() => {
            //logic for getting a value from local storage stored under the key 'key'
            const timeLocalStorage = localStorage.getItem('Time')
            time(JSON.parse(timeLocalStorage))
        }, [])

    }
    TimeIntilaizer();
    const [userLocalStorage, userStorage] = useState([]);
    function UserIntilaizer() {

        useEffect(() => {
            const userLocalStorage = localStorage.getItem('User')
            userStorage(JSON.parse(userLocalStorage))
        }, [])

    }
    UserIntilaizer();
   

   
    const [seatLocalStorage, seat] = useState([]);
    function SeatIntilaizer() {
        
        useEffect(() => {
            
            
            //logic for getting a value from local storage stored under the key 'key'
            const seatLocalStorage = localStorage.getItem('selectedSeats')
           
            seat(JSON.parse(seatLocalStorage))
        }, [])
    }
    SeatIntilaizer();

    function userDetailsPage() {
        navigate('/userdetails');
       // console.log("At line 89 im home page working")
    }
    
    const hist="Ord"+String(Math.floor(Math.random() * 100))
    console.log(hist)
    function addHistory(){
        
        const FinalState = {
            historyId: hist,
            movieName: movieLocalStorage.name,
            theatreName: theatreLocalStorage.theatreName,
            amountPaid: Number((240)*seatLocalStorage.length),
            userName: userLocalStorage.userId,
            
        };
    
    
        const response = axios.post(`http://localhost:7070/history/`,FinalState);
     
        navigate('/booking');
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

                       

                        <a className="nav-link text-light"> <span >Welcome</span></a>

<img src="https://tse2.mm.bing.net/th?id=OIP.odaf7cByFm01EzzkUtL1GQHaHa&pid=Api&P=0" width="50"

className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} mx-3" onClick={userDetailsPage} alt=""></img>

                    </ul>
                </div>
            </nav>

            <div className="top_space">
                <div className="paymentbody" style={{backgroundColor:"lightgray"}}>
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
                                <div className="d-flex justify-content-between p-price"><span>Movie Name</span><span>{movieLocalStorage.name}</span></div>
                                <div className="d-flex justify-content-between p-price"><span>Theatre Name</span><span>{theatreLocalStorage.theatreName}</span></div>
                                <div className="d-flex justify-content-between p-price"><span>Seats</span><span> {seatLocalStorage.map((seatdataval)=>{
                                    return(
                                         <span>
                                            {seatdataval.row}{seatdataval.col} ,
                                            </span> 
                                    )
                                    
                                })}
 </span></div>
                                <div className="d-flex justify-content-between p-price"><span>Show Time</span><span>{timeLocalStorage}</span></div>
                                <div className="d-flex justify-content-between p-price"><span>Ticket price</span><span>240</span></div>
                                <div className="d-flex justify-content-between p-price"><span>Email</span><span>{userLocalStorage.userId}</span></div>
                            </div>
                            <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total Amount Paid</span><span>Rs{(240)*seatLocalStorage.length}</span></div>
                        </div>
                    </div>
                    
                    <ReactToPrint trigger={()=><button className="download bg-secondary" style={{width:"150px",height:"30px",color:"white", marginLeft:"45%", marginBottom:"30px"}} >
                 Download
                 </button>} content={()=>ref.current} />

                </div>
                
            </div>

            
        </>
    )

}