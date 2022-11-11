import axios from "axios";
import React,{ useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserDetails(props){
    const [user,setUser] = useState({});
    const {_id} = useParams();
    const navigate = useNavigate();

    useEffect(
        function(){
            async function getUserById(){
                try{
                    const response = await axios.get(`http://localhost:7070/user/${_id}`);
                    setUser(response.data);
                }catch(error){
                    console.log("error",error);
                }
            }
            getUserById();
        },
        [props]
    );

    async function handleDelete(){
        try{
            const response = await axios.delete(`http://localhost:7070/user/${_id}`);
            setUser(response.data);
        }catch(error){
            console.log("error",error);
        }
    }

    return(
        <div className="container">
            <h1>{user.name}</h1>
            <p>
                <b>User ID</b> : <a href={`tel:+${user.userId}`}>{user.userId}</a>
            </p>
            <p>
                <b>Email</b> :{user.userEmail}
            </p>
            <p>
                <b>Phone No.</b> :{user.userPhoneNo}
            </p>
            <p>
                <b>language</b> : 
                    {user.userPhoneNo}
            </p>
            <p>
                <span><b>Balance</b></span> : <span>{user.userBalance }</span>
            </p>

            <div className="btn-group">
                
                
                <Link to="admin/users/table-view" className="btn btn-secondary">
                    Close
                </Link>
            </div>
        </div>
    )
}

export default UserDetails;