import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { HiLink } from "react-icons/hi";
import { FaStar, FaShare, FaRegComment, FaRegHeart } from "react-icons/fa";
import { RWebShare } from "react-web-share";
// import ReactPlayer from "react-player";

function MovieDetailsCom() {
  const API_URL = "https://api.themoviedb.org/3/movie/";
  const IMAGE_PATH = "https://www.themoviedb.org/t/p/w440_and_h660_face";
  const CAST_PATH = "https://www.themoviedb.org/t/p/w276_and_h350_face";
  // const POSTER_PATH =
  //   "https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces";
  const currentPath = window.location.href;
  console.log(currentPath);
  const { id } = useParams();

  const API_ENV = process.env.REACT_APP_TMDB_MOVIE_API_KEY;
  const NO_IMAGE_URL = "/assets/No-Image-Placeholder.png";

  //useState
  const [movieDetails, setMovieDetails] = React.useState([]);
  const [castDetails, setCastDetails] = React.useState([]);
  const [similarMovie, setSimilarMovie] = React.useState([]);
  // const [trailerUrl, setTrailerUrl] = React.useState(null);
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

      // const trailer = data.videos.results.find(
      //   (video) => video.type === "Trailer"
      // );
      // if (trailer) {
      //   const videoId = trailer.key;
      //   const url = `https://www.youtube.com/watch?v=${videoId}`;
      //   setTrailerUrl(url);
      //   console.log(trailerUrl);
      // }

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

      setCastDetails(data?.cast.slice(0, 9));
      // console.log(data?.cast);
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
    // console.log(data);
    // console.log(status);
  };

  useEffect(() => {
    getMovieDetails();
    getCastDetails();
    similarGetMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="mt-[68px] grid justify-center">
      {/* <div className="p-2 flex items-center justify-center">
        {trailerUrl ? <ReactPlayer url={trailerUrl} controls="true" /> : null}
      </div> */}
      <div className="w-full h-[calc(100vw * 0.5625)] pl-2 pt-2">
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
            <div className="mt-2 flex justify-center rounded">
              {movieDetails.vote_average ? (
                <div className="flex flex-col items-center space-x-1 hover:bg-gray-800 rounded p-1">
                  <FaStar className="text-yellow-400" />
                  <p className="text-white">
                    <span className="font-bold">
                      {Math.round(movieDetails.vote_average)}
                    </span>
                    /10
                  </p>
                  {/* <span className="before:content-[''] text-gray-500">
                    {formatVoteCount(movieDetails.vote_count)}
                  </span> */}
                </div>
              ) : null}
              <div className="p-2 ml-2 rounded flex flex-col space-x-1 items-center hover:bg-gray-800">
                <FaRegHeart />
                <span>Like</span>
              </div>
              <div className="p-2 ml-2 rounded flex flex-col space-x-1 items-center hover:bg-gray-800">
                <RWebShare>
                  <FaShare />
                  data=
                  {{
                    text: movieDetails.original_title,
                    url: currentPath,
                    title: "Filmyml",
                  }}
                  onClick={() => console.log("shared successfully!")}>
                  <button>Share</button>
                </RWebShare>
              </div>
              <div className="p-2 ml-2 rounded flex flex-col space-x-1 items-center hover:bg-gray-800">
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
        {/* {console.log(similarMovie)} */}
      </div>
      <p className="text-2xl text-white pl-2">More Movies Like This</p>
      <div className="flex w-[98vw] overflow-x-scroll no-scrollbar pb-12">
        {similarMovie.map(({ poster_path, title, id }) => (
          <React.Fragment key={id}>
            <div className="min-w-[160px] text-gray-400 text-center m-2">
              <Link to={`/home/moviedetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `${IMAGE_PATH}${poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt={id}
                  className="rounded w-full h-[250px] object-cover"
                />
                {/* <p>{id}</p> */}
                <p>{title}</p>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default MovieDetailsCom;
