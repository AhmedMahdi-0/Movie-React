import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <nav className="navbar sticky-top  nav-dark bg-warning  ">
        <div className="container-fluid position-relative ">
          <a href="/" className="navbar-brand">
            Movie App
          </a>
          <a
            className="d-flex  align-items-center text-decoration-none text-dark me-4"
            href="/"
          >
            <FontAwesomeIcon className="me-2" icon={faHeart} size="lg" />
            <div className="fw-bold">WatchList</div>
          </a>
        </div>
      </nav>
    </>
  );
}
