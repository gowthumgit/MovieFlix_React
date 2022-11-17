import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UserGridView() {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	useEffect(function () {
		async function getUsers() {
			try {
				const response = await axios.get("http://localhost:7070/userrc");
				setUsers(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getUsers();
	}, []);
	async function userDelete(id){
        try{
            const response = await axios.delete(`http://localhost:7070/userrc/${id}`);
            setUsers(response.data);
        }catch(error){
            console.log("error",error);
        }
        navigate("/users");
    }

	return (
		<div className="container">
			<h2>
                Users
				
			</h2>
			<hr />
			<div>
				<div className="d-flex flex-wrap">
					{users.map((user) => {
						return (
							<div
								className="card"
								style={{ width: 250, margin: 30 }}
								key={user._id}
							>
								<div className="card-header">
									<h5 className="card-title">
										{user.userId}
									</h5>
								</div>
								<div className="card-body">
									<h5 className="d-flex align-items-center">
										<i className="bi bi-telephone-fill text-success"></i>
										<a className="card-subtitle" href={`tel:+${user.userPhoneNo}`}>
											{user.userPhoneNo}
										</a>
									</h5>
									{/* <h6 className="card-subtitle mb-2 text-muted">
										{crud.phone}
									</h6> */}
                                    <span><i className="bi bi-envelope-fill"></i></span>
									<span><p className="card-text limit-char"><small>{user.userEmail}</small></p></span>
									<p className="card-text d-flex align-items-center">
										
										<small className="text-muted one-liner">
											{user.userBalance }
										</small>
									</p>
								</div>
								<div className="card-footer d-flex align-items-center">
									<button
										
										onClick={() =>userDelete(user._id)}
										className="btn btn-primary"
									>
										Delete
									</button>
									<span>
										<small>
											<Link to={`${user._id}`} className="link-line">
												Read More...
											</Link>
										</small>
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default UserGridView;