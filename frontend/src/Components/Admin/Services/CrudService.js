import React, { useState } from "react";
import axios from "axios";

class CrudService{
    createCrud(crud){
        return axios.post("http://localhost:7070/movie/",crud);
    }
}

export default new CrudService();