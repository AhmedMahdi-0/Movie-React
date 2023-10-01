import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Searchcomp() {
  const params = useParams();

  const [query, setQuery] = useState(params.title);
  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/search/${query}`); // Use navigate to redirect
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col col-10">
          <input
            type="text"
            className="form-control shadow p-3 fs-4"
            placeholder="Search and Explore"
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <button
            onClick={handleSearch}
            className="btn btn-warning px-4 py-3 shadow"
          >
            Search
          </button>
        </div>
            
      </div>
    </div>
  );
}
