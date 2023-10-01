import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 500;


  useEffect(() => {
    // Fetch movie data when the component mounts
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = () => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key:process.env.REACT_APP_API_KEY ,
          page: currentPage,
        },
      })
      .then((res) => {
        const results = res.data.results; // Destructure the response
        setMovieList(results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className='mt-5 mx-2 '><Card movieList={movieList} currentPage={currentPage} handlePageChange={handlePageChange} /></div>
  )
}
