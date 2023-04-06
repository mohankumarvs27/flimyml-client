import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailsCom() {
  const API_URL = "https://api.themoviedb.org/3/movie/";
  const IMAGE_PATH = "https://www.themoviedb.org/t/p/w440_and_h660_face";
  const { id } = useParams();
  const API_ENV = process.env.REACT_APP_TMDB_MOVIE_API_KEY;
  const NO_IMAGE_URL = process.env.REACT_APP_NO_IMAGE_PATH;

  //useState
  const [movieDetails, setMovieDetails] = React.useState([]);
  //apiDataFetching
  const getMovieDetails = async () => {
    try {
      const { data } = await axios.get(API_URL + [id], {
        params: {
          api_key: API_ENV,
          // query: "Enthiran",
        },
      });

      setMovieDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log([movieDetails]);
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="mt-16 grid justify-center items-center p-2">
      <div className="text-white text-center flex flex-col items-center ">
        <img
          src={
            movieDetails.poster_path
              ? `${IMAGE_PATH}${movieDetails.poster_path}`
              : `${NO_IMAGE_URL}`
          }
          alt="poster"
          className="rounded w-[50%]"
        />
        <p className="text-3xl py-3 ">{movieDetails.original_title}</p>
        <p className="text-justify ">{movieDetails.overview}</p>
        {/* <p>{movieDetails}</p> */}
        {movieDetails?.genres?.map((each) => (
          <p key={each.id}>{each.name}</p>
        ))}

        {console.log(movieDetails)}
      </div>
    </div>
  );
}

export default MovieDetailsCom;
