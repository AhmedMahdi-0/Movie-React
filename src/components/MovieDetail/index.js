import React, { useEffect, useState } from "react";
import DetailCard from "./components/DetailCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Home/components/Card";
export default function MovieDetail() {
  const [movieList, setMovieList] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setMovieList(res.data.results.slice(0, 5));
      });
  }, [params.id]);
  return (
    <div>
      <DetailCard />
      <h1 className=" text-start ms-4">Recommendations</h1>
      <Card movieList={movieList} />
    </div>
  );
}
