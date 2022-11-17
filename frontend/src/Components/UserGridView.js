import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserGridView() {
	const [users, setUsers] = useState([]);

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
								<div class="card-header">
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
                                    <span><i class="bi bi-envelope-fill"></i></span>
									<span><p className="card-text limit-char"><small>{user.userEmail}</small></p></span>
									<p className="card-text d-flex align-items-center">
										
										<small className="text-muted one-liner">
											{user.userBalance }
										</small>
									</p>
								</div>
								<div class="card-footer d-flex align-items-center">
									<Link
										to={`admin/users/${user._id}/delete`}
										className="btn btn-primary"
									>
										Delete
									</Link>
									<span>
										<small>
											<Link to={`admin/users/${user._id}`} className="link-line">
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