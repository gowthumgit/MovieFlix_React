import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserDelete(props) {
	const [user, setUser] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function deleteUserById() {
				try {
					const response = await axios.get(`http://localhost:7070/userrc/${_id}`);
					setUser(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteUserById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`http://localhost:7070/userrc/${_id}`);
			navigate("admin/users/table-view");
		} catch (error) {
			console.error(error);
		}
	}

	return (
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
               
                <button onClick={handleDelete} className="btn btn-danger">
                    Delete
                </button>
                <Link to="admin/users/grid-view" className="btn btn-secondary">
                    Close
                </Link>
            </div>
        </div>
	);
}

export default UserDelete;