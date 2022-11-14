import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CrudService from "../Services/CrudService";
//import CrudService from "../services/CrudService";

function CrudAdd(props) {
    const initialState = {
        name: "",
        movieId: "",
        genre: "",
        image_url: "",
        language: "",
        duration: "",
        rating: "",
        actors: [],
        audi_ids: [],
        movieLocation: "",
    };

    const [crud, setCrud] = useState(initialState);
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        async function postCrud(){
            try{
                const response = await CrudService.createCrud(crud).then(res => {
                    console.log("success")
                    navigate(`/movies/${res.data._id}`)
                })

            }catch(error){
                console.log(error);
            }
        }
        postCrud();
    }

    function handleChange(event){
        setCrud({...crud,[event.target.name]:event.target.value})
    }

    function handleCancel(){
        navigate("/admin");
    }



    return (
        <div className="container" style={{ maxWidth: "400px" }}>
            <h1>Create CRUD</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Movie ID</label>
                    <input type="text"
                        name="movieId"
                        className="form-control"
                        value={crud.movieId}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label className="form-label">Movie Name</label>
                    <input type="text"
                        name="name"
                        className="form-control"
                        value={crud.name}
                        onChange={handleChange}
                        required
                    />
                    
                </div>
                <div className="form-group">
                    <label className="form-label">Genre</label>
                    <input type="text"
                        name="genre"
                        className="form-control"
                        value={crud.genre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Image URL</label>
                    <input type="text"
                        name="image_url"
                        className="form-control"
                        value={crud.image_url}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Language</label>
                    <input type="text"
                        name="language"
                        className="form-control"
                        value={crud.language}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Duration</label>
                    <input type="text"
                        name="duration"
                        className="form-control"
                        value={crud.duration}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Rating</label>
                    <input type="text"
                        name="rating"
                        className="form-control"
                        value={crud.rating}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Actors</label>
                    <input type="text"
                        name="actors"
                        className="form-control"
                        value={crud.actors}
                        onChange={handleChange}
                    />
                </div>
               
                <div className="form-group">
                    <label className="form-label">Audi IDs</label>
                    <input type="text"
                        name="audi_ids"
                        className="form-control"
                        value={crud.audi_ids}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Location</label>
                    <input type="text"
                        name="movieLocation"
                        className="form-control"
                        value={crud.movieLocation}
                        onChange={handleChange}
                    />
                </div>
                <div className="btn-group">
                    <input type="submit" value="Submit" className="btn btn-primary"  />
                    <button
                     type="button"
                     onClick={handleCancel}
                     className="btn btn-secondary">
                        Cancel
                    </button>

                </div>

            </form>
        </div>
    )

}
export default CrudAdd;
