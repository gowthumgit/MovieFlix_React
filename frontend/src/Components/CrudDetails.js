import axios from "axios";
import React,{ useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDetails(props){
    const [crud,setCrud] = useState({});
    const {_id} = useParams();
    const navigate = useNavigate();

    useEffect(
        function(){
            async function getCrudById(){
                try{
                    const response = await axios.get(`http://localhost:7070/movie/${_id}`);
                    setCrud(response.data);
                }catch(error){
                    console.log("error",error);
                }
            }
            getCrudById();
        },
        [props]
    );

    async function handleDelete(){
        try{
            const response = await axios.delete(`http://localhost:7070/movie/${_id}`);
            setCrud(response.data);
        }catch(error){
            console.log("error",error);
        }
    }

    return(
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
                
                <Link to="admin/cruds/table-view" className="btn btn-secondary">
                    Close
                </Link>
            </div>
        </div>
    )
}

export default CrudDetails;