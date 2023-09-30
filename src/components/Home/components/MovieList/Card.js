import React, { useEffect } from "react";
import { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { yellow } from "@mui/material/colors";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import favorite, { addRemoveFavorite } from "../../../../store/slices/favorite";
import { useNavigate } from "react-router-dom";
import "./card.css";
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
  const favoriteArray = useSelector((state) => state.favoriteArray);
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
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
  useEffect(() => {}, [favoriteArray]);
  return (
    <div className="row row-col-6 ms-5">
      {movieList.map((movie) => {
        return (
          <div
            className="card h-100 col-2 mx-1   gy-3"
            style={{ width: "14rem", cursor: "pointer" }}
            onClick={() => navigate(`/movie-detail/${movie.id}`)}
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
                <h6 className="card-text fw-bold " title={movie.title}>
                  {" "}
                  {movie.title.length >= 15
                    ? movie.title.slice(0, 15) + ".."
                    : movie.title}
                </h6>{" "}
                <CircularProgressWithLabel value={movie.vote_average * 10} />
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                <div className=" text-secondary fw-bold">
                  {movie.release_date}
                </div>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addRemoveFavorite(movie));
                  }}
                >
                  {favoriteArray.some(
                    (favoriteMovie) => favoriteMovie.id === movie.id
                  ) ? (
                    <Favorite
                      sx={{ color: yellow[300] }}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <FavoriteBorder
                      sx={{ color: yellow[300] }}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
