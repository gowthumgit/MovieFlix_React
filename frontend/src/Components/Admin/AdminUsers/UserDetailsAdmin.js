<<<<<<< HEAD:frontend/src/Components/UserDetails.js
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
                    const response = await axios.get(`http://localhost:7070/userrc/${_id}`);
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
            const response = await axios.delete(`http://localhost:7070/userrc/${_id}`);
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
=======
import axios from "axios";
import React,{ useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserDetailsAdmin(props){
    const [user,setUser] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(
        function(){
            async function getUserById(){
                try{
                    const response = await axios.get(`http://localhost:7070/user/${id}`);
                    setUser(response.data);
                }catch(error){
                    console.log("error",error);
                }
            }
            getUserById();
        },
        [props]
    );

    async function userDelete(){
        try{
            const response = await axios.delete(`http://localhost:7070/user/${id}`);
            setUser(response.data);
        }catch(error){
            console.log("error",error);
        }
        navigate("/users");
    }

    return(
        <div className="container center" style={{alignSelf:"center", paddingLeft:"350px", paddingBottom:"150px", alignItems:"center"}}>
        <div className="center card summary-container">
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
                
                
                <Link to="/users" className="btn btn-secondary">
                    Close
                </Link>
                <button onClick={userDelete} className="btn btn-secondary">
                    Delete
                </button>
            </div>
        </div>
        </div>
    )
}

export default UserDetailsAdmin;
>>>>>>> 14b7a112bb999e428702834a6584f8afa520512e:frontend/src/Components/Admin/AdminUsers/UserDetailsAdmin.js
