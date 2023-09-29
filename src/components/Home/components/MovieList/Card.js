import React, { useEffect } from "react";
import { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { yellow } from "@mui/material/colors";
import axios from "axios";
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
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?", {
        params: {
          api_key: "c3e41ae2e46b713e0683aa652c201c55",
        },
      })
      .then((res) => {
        setMovieList(res.data.results);
      });
  }, []);
  return (
    <div className="row row-col-6 ms-5">
      {movieList.map((movie) => {
        return (
          <div
            className="card col-2 mx-1 border-0 mb-5"
            style={{ width: "14rem" }}
          >
            <img
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="card-img-top rounded position-relative"
              width={"25px"}
              height={"300px"}
              alt="..."
            />
            <div className="text-start mt-2">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-text fw-bold "> {movie.title}</h5>{" "}
                <CircularProgressWithLabel value={movie.vote_average * 10} />
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                <div className=" text-secondary fw-bold">
                  {movie.release_date}
                </div>
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
        );
      })}
    </div>
  );
}
