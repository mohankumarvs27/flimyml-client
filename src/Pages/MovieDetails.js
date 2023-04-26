import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { HiLink } from "react-icons/hi";
import { FaStar, FaShare, FaRegComment, FaRegHeart } from "react-icons/fa";
import ReactPlayer from "react-player";

function MovieDetailsCom() {
  const API_URL = "https://api.themoviedb.org/3/movie/";
  const IMAGE_PATH = "https://www.themoviedb.org/t/p/w440_and_h660_face";
  const CAST_PATH = "https://www.themoviedb.org/t/p/w276_and_h350_face";
  // const POSTER_PATH =
  //   "https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces";
  const { id } = useParams();

  const API_ENV = process.env.REACT_APP_TMDB_MOVIE_API_KEY;
  const NO_IMAGE_URL =
    "https://res.cloudinary.com/dqot1ggrh/image/upload/v1680713819/No-Image-Placeholder_dpbwqq.png";

  //useState
  const [movieDetails, setMovieDetails] = React.useState([]);
  const [castDetails, setCastDetails] = React.useState([]);
  const [similarMovie, setSimilarMovie] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState(null);
  //apiDataFetching
  const getMovieDetails = async () => {
    try {
      const { data } = await axios.get(API_URL + [id], {
        params: {
          api_key: API_ENV,
          append_to_response: "videos",
          // query: "Enthiran",
        },
      });

      const trailer = data.videos.results.find(
        (video) => video.type === "Trailer"
      );
      if (trailer) {
        const videoId = trailer.key;
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        setTrailerUrl(url);
        console.log(url);
      }

      setMovieDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  //getCastDetails
  const getCastDetails = async () => {
    try {
      const { data } = await axios.get(API_URL + [id] + "/credits", {
        params: {
          api_key: API_ENV,
          // query: "Enthiran",
        },
      });

      setCastDetails(data?.cast);
      console.log(data?.cast);
    } catch (error) {
      console.log(error);
    }
  };

  const similarGetMovie = async () => {
    const { data } = await axios.get(
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
    //console.log(data);
    // console.log(status);
  };

  const formatVoteCount = (count) => {
    const formatter = Intl.NumberFormat("en-US", { notation: "compact" });
    return formatter.format(count);
  };
  //console.log([movieDetails]);
  useEffect(() => {
    getMovieDetails();
    getCastDetails();
    similarGetMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="mt-[60px] grid justify-center">
      <div className="p-2 flex items-center justify-center">
        {trailerUrl ? <ReactPlayer url={trailerUrl} controls="true" /> : null}
      </div>
      <div className="w-full h-[calc(100vw * 0.5625)] pl-2">
        {/* <img
          src={`${POSTER_PATH}${movieDetails.backdrop_path}`}
          alt="hi"
          className="h-[250px] w-full object-contain"
        /> */}
        <div className="flex flex-col">
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
            <div className="flex p-1 rounded">
              {movieDetails.vote_average ? (
                <div className="flex items-center space-x-1 hover:bg-gray-800 rounded p-1">
                  <FaStar className="text-yellow-400" />
                  <p className="text-white">
                    <span className="font-bold">
                      {Math.round(movieDetails.vote_average)}
                    </span>
                    /10
                  </p>
                  <span className="before:content-[''] text-gray-500">
                    {formatVoteCount(movieDetails.vote_count)}
                  </span>
                </div>
              ) : null}
              <div className="p-2 ml-2 rounded flex space-x-1 items-center hover:bg-gray-800">
                <FaShare />
                <span>Share</span>
              </div>
              <div className="p-2 ml-2 rounded flex space-x-1 items-center hover:bg-gray-800">
                <FaRegHeart />
                <span>Like</span>
              </div>
              <div className="p-2 ml-2 rounded flex space-x-1 items-center hover:bg-gray-800">
                <FaRegComment />
                <span>Comment</span>
              </div>
            </div>
            <p className="text-2xl">Cast</p>
            <ul className="flex w-[96vw] overflow-x-scroll no-scrollbar pb-6">
              {castDetails.map(({ id, name, character, profile_path }, key) => (
                <li
                  key={key}
                  className="ml-2.5 mr-1 my-2.5 rounded shadow bg-white min-w-[150px] overflow-hidden"
                >
                  {/* <Link to={`/dashboard/moviedetails/` + id}> */}
                  <img
                    src={
                      profile_path
                        ? `${CAST_PATH}${profile_path}`
                        : `${NO_IMAGE_URL}`
                    }
                    alt={id}
                    className="w-full rounded-t"
                  />
                  <p className="text-center text-black font-bold">{name}</p>
                  <p className="text-center text-black">{character}</p>

                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-gray-500">
          <Link to={movieDetails.homepage}>
            <HiLink />
          </Link>
        </div>
        {console.log(movieDetails)}
      </div>
      <p className="text-2xl text-white pl-2">More Movies Like This</p>
      <div className="flex w-[98vw] overflow-x-scroll no-scrollbar pb-12">
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
                  className="rounded w-full h-[250px] object-cover"
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
