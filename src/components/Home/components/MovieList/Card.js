import React from "react";
import image1 from "./1.png";
import { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { yellow } from "@mui/material/colors";
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="button" component="div" sx={{ fontWeight: 700 }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Card() {
  const [hover, setHover] = useState(false);
  return (
    <div
      
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "10px",
        // "@media screen and (max-width: 1200px)": {
        //   gridTemplateColumns: "repeat(3, 1fr)",
        // }
      }}
    >
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card col-2 mx-1 border-0 mb-5" style={{ width: "14rem" }}>
        <img
          src={image1}
          className="card-img-top rounded position-relative"
          width={"25px"}
          height={"300px"}
          alt="..."
        />
        <div className="text-start mt-2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-text fw-bold "> One Piece</h4>{" "}
            <CircularProgressWithLabel value={50} />
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" text-secondary fw-bold">Sep 25,2017</div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <Favorite sx={{ color: yellow[300] }} />
              ) : (
                <FavoriteBorder />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
