import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar sticky-top  nav-dark bg-warning  ">
        <div className="container-fluid position-relative ">
          <Link to="/" className="navbar-brand fw-bold">
            MOVIE APP
          </Link>
          <Link
            className="d-flex  align-items-center text-decoration-none text-dark me-4"
            to={'/watchlist'}
          >
            <FontAwesomeIcon className="me-2" icon={faHeart} size="lg" />
            <div className="fw-bold">WatchList</div>
          </Link>
        </div>
      </nav>
    </>
  );
}
