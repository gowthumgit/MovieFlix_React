import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudTable() {
	const [cruds, setCruds] = useState([]);

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("http://localhost:7070/movie");
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);

	return (
		<div className="container">
			<div>
				<h2>
					Movies
				</h2>
				<hr />
			</div>
		
                        <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
						<th>Name</th>
						<th>Language</th>
						<th>Genre</th>
						<th>Actors</th>
						<th>Duration</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{cruds &&
						cruds.map((crud) => {
							return (
								<tr key={crud._id}>
									<td>
										<Link to={`/cruds/${crud._id}`} className="link-line">
											{crud.name}
										</Link>
									</td>
									<td>{crud.language}</td>
									<td>{crud.actors}</td>
									<td>{crud.genre}</td>
									<td>
										<Link to={`admin/cruds/${crud._id}`} className="btn btn-warning">
											View
										</Link>
									</td>
									<td>
										<Link
											to={`admin/cruds/${crud._id}/edit`}
											className="btn btn-success"
										>
											Edit
										</Link>
									</td>
									<td>
										<Link
											to={`admin/cruds/${crud._id}/delete`}
											className="btn btn-danger"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
	);
}

export default CrudTable;