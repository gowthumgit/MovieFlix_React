import { useEffect, useState } from "react";
import axios from "axios";
import Seat from "./Seat";
import { Link } from "react-router-dom";
import './Seat-css.css'


export default function SeatList(){
    const[seats,setSeats] = useState([])
    var [selectedSeats, setSelectedSeats] = useState([])
    

    useEffect(function(){
        async function getAllSeats(){
            try{
                const response = await axios.get('http://localhost:7070/seat/get-all-seats')
                setSeats(response.data)
            }catch(error){
                console.log(error)
            }
        }
        getAllSeats()
    },[])

    useEffect(function(){
        localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    },[selectedSeats])
    return(
        <main className="seatbody">
            <span>
                {countAndTotal()}
            </span>
            <div class="screen"></div>
            <span >
            {seats.map((seat, index) => (
                <span className="seats" onClick={() =>handleClick(seat)}>
                    {nextLine(index)}
                    <Seat obj={seat} index={index}  ></Seat>
                </span>
                
                
            ))}
            </span>
            <br></br>
            <br></br>
            
            <button className="btn1 btn-secondary"><Link style={{ color:"white"}} to ="/payment">Make Payment</Link></button>
            
        </main>
    )


    function countAndTotal(){
        //console.log("hjgcjh")
        if(selectedSeats.length > 0){
           // console.log("In a")
            return(
                    <h3>Seat Selected : {selectedSeats.map((seat)=>{
                                             return(<span>{seat.row}{seat.col} </span>)
                                        })}
                    </h3>
            )
        }
    }


    function handleClick(seat){
        if(seat.status === "occupied"){
            return
        }
        if(selectedSeats.includes(seat)){
            var temp = [...selectedSeats]
            temp.splice(selectedSeats.indexOf(seat),1)
            setSelectedSeats(temp)
        }else{
            setSelectedSeats([...selectedSeats,seat])
        }
      //  console.log(selectedSeats)
    }

    function nextLine(index){
        if(index%12 === 0){
            return (
                <br/>
            )
        }
    }
}