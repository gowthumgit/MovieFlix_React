import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDelete(props) {
	const [crud, setCrud] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function deleteCrudById() {
				try {
					const response = await axios.get(`http://localhost:7070/movie/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteCrudById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`http://localhost:7070/movie/${_id}`);
			navigate("/cruds/table-view");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
            <h1>{crud.name}</h1>
            <p>
                <b>ID</b> : <a href={`tel:+${crud.movieId}`}>{crud.movieId}</a>
            </p>
            <p>
                <b>Genre</b> :{crud.genre}
            </p>
            <p>
                <b>Image_URL</b> :{crud.image_url}
            </p>
            <p>
                <b>language</b> : 
                    {crud.language}
            </p>
            <p>
                <span><b>duration</b></span> : <span>{crud.duration}</span>
            </p>
            <p>
                <small>
                    <b>rating</b> : {crud.duration}
                </small>
            </p>
            <p><span><b>Actors: </b></span>
            <span>
                {crud.actors}
            </span></p>

            <p><span><b>Audi ID's: </b></span>
            <span>
                {crud.audi_ids}
            </span></p>
            <p> 
                <span><b>Movie Location</b></span> : <span>{crud.movieLocation}</span>
            </p>

            <div className="btn-group">
                <Link to={`/cruds/${crud._id}/edit`} className="btn btn-primary">
                    Edit
                </Link>
                <button onClick={handleDelete} className="btn btn-danger">
                    Delete
                </button>
                <Link to="/cruds" className="btn btn-secondary">
                    Close
                </Link>
            </div>
        </div>
	);
}

export default CrudDelete;
