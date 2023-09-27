import React from "react";
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import "./search.css";
export default function Search() {
  return (
    <div className=" search p-4 text-start my-3 mx-4 rounded shadow">
      <h2 className="text-start d-flex align-items-center">
      <PanToolOutlinedIcon className="me-2"  fontSize="large" color="inherit"/>
        Welcome to our movie app
      </h2>
      <div className="container my-3 mx-4">
        <h6>
          Millions of movies, TV shows and people to discover. Explore now.
        </h6>

        <div className="row align-items-center mt-4">
          <div className="col col-10">
            <input
              type="text"
              className="form-control shadow"
              placeholder="Search and Explore"
            />
          </div>
          <div className="col">
            <button className="btn btn-warning px-4 py-2 shadow">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
