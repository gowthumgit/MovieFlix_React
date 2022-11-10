import { useEffect, useState } from "react";
import axios from "axios";
import Seat from "./Seat";
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
        <main>
            <div class="screen"></div>
            <span >
            {seats.map((seat, index) => (
                <span onClick={() =>handleClick(seat)}>
                    {nextLine(index)}
                    <Seat obj={seat} index={index}  ></Seat>
                </span>
                
                
            ))}
            </span>
            <span>
                {countAndTotal()}
            </span>
        </main>
    )


    function countAndTotal(){
        console.log("hjgcjh")
        if(selectedSeats.length > 0){
            console.log("In a")
            return(
                    <h3>Seat Selected : {selectedSeats.map((seat)=>{
                                             return(<h5>{seat.row}{seat.col}</h5>)
                                        })}
                    </h3>
            )
        }
    }


    function handleClick(seat){
        if(selectedSeats.includes(seat)){
            var temp = [...selectedSeats]
            temp.splice(selectedSeats.indexOf(seat),1)
            setSelectedSeats(temp)
        }else{
            setSelectedSeats([...selectedSeats,seat])
        }
        console.log(selectedSeats)
    }

    function nextLine(index){
        if(index%12 === 0){
            return (
                <br/>
            )
        }
    }
}