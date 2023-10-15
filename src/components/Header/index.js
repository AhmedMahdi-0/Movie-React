import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const favoriteArray = useSelector((state) => state.favoriteArray);
  return (
    <>
      <h6 class="text-light  bg-dark p-2 mb-0">
        Please note that I've changed the images of the movies as some of them
        contained inappropriate content
      </h6>
      <nav className="navbar sticky-top gx-0 nav-dark bg-warning mt-0 ">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand fw-bold">
            MOVIE APP
          </Link>
          <Link
            className="d-flex  align-items-center text-decoration-none text-dark me-2 "
            to={"/watchlist"}
          >
            <FontAwesomeIcon className="me-2" icon={faHeart} size="lg" />
            <div className="fw-bold position-relative p-1">
              {" "}
              WatchList
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                {favoriteArray.length}
              </span>{" "}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
