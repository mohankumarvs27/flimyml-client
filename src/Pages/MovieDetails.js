import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { HiLink } from "react-icons/hi";

function MovieDetailsCom() {
  const API_URL = "https://api.themoviedb.org/3/movie/";
  const IMAGE_PATH = "https://www.themoviedb.org/t/p/w440_and_h660_face";
  const POSTER_PATH =
    "https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces";
  const { id } = useParams();
  const API_ENV = process.env.REACT_APP_TMDB_MOVIE_API_KEY;
  const NO_IMAGE_URL =
    "https://res.cloudinary.com/dqot1ggrh/image/upload/v1680713819/No-Image-Placeholder_dpbwqq.png";

  //useState
  const [movieDetails, setMovieDetails] = React.useState([]);
  const [similarMovie, setSimilarMovie] = React.useState([]);
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
  const similarGetMovie = async () => {
    const { data, status } = await axios.get(
      "https://api.themoviedb.org/3/movie/" + [id] + "/recommendations",
      {
        params: {
          api_key: API_ENV,
          adult: "false",
          region: "IN",
        },
      }
    );
    setSimilarMovie(data?.results);
    console.log(data);
    console.log(status);
  };
  //console.log([movieDetails]);
  useEffect(() => {
    getMovieDetails();
    similarGetMovie();
  }, [id]);

  return (
    <div className="mt-[60px] grid justify-center items-center pl-4">
      <div className="max-w-[768px] w-full h-[calc(100vw * 0.5625)]">
        {/* <img
          src={`${POSTER_PATH}${movieDetails.backdrop_path}`}
          alt="hi"
          className="h-[250px] w-full object-contain"
        /> */}
        <div className="flex items-center flex-col">
          <img
            src={
              movieDetails.poster_path
                ? `${IMAGE_PATH}${movieDetails.poster_path}`
                : `${NO_IMAGE_URL}`
            }
            alt="poster"
            className="rounded w-36"
          />

          <div className="text-white  flex flex-col">
            <p className="text-3xl py-3 text-left">
              {movieDetails.original_title}
            </p>

            <div className="flex space-x-2 text-xs text-blue-500 pb-2">
              {/* <p>{movieDetails}</p> */}
              {movieDetails?.genres?.map((each) => (
                <React.Fragment key={each.id}>
                  <p>{each.name}</p>
                </React.Fragment>
              ))}
            </div>
            <p className="text-xs">{movieDetails.release_date}</p>
            <p className="text-justify">{movieDetails.overview}</p>
          </div>
        </div>
        <div className="text-gray-500">
          <Link to={movieDetails.homepage}>
            <HiLink />
          </Link>
        </div>
        {console.log(movieDetails)}
      </div>
      <p className="text-2xl text-white">More Movies Like This</p>
      <div className="flex w-[98vw] overflow-x-scroll no-scrollbar">
        {similarMovie.map(
          ({ id, poster_path, original_title, release_date }, key) => (
            <div
              key={id}
              className="min-w-[160px] text-gray-400 text-center m-2"
            >
              <Link to={`/dashboard/moviedetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `${IMAGE_PATH}${poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt={id}
                  className="rounded w-full h-[250px] object-cover "
                />
                <p>{original_title}</p>
                {/* <span>{release_date}</span> */}
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MovieDetailsCom;
