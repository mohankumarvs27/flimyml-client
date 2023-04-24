import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviesDataCom() {
  const IMAGE_PATH = "https://www.themoviedb.org/t/p/w440_and_h660_face";

  const API_ENV = process.env.REACT_APP_TMDB_MOVIE_API_KEY;
  const NO_IMAGE_URL =
    "https://res.cloudinary.com/dqot1ggrh/image/upload/v1680713819/No-Image-Placeholder_dpbwqq.png";
  // const API_URL = "https://api.themoviedb.org/3/movie/";

  //useState
  const [actionMovie, setActionMovie] = React.useState([]);
  const [scifiMovie, setScifiMovie] = React.useState([]);
  const [comedyMovie, setComedyMovie] = React.useState([]);
  const [fantasyMovie, setFantasyMovie] = React.useState([]);

  // const [clicked, setClicked] = React.useState(false);

  // Action Movies
  const getActionMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: API_ENV,
          with_genres: "28",
        },
      }
    );

    console.log(data);
    setActionMovie(data?.results);
  };
  // Sci-Fi Movies
  const getScifiMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: API_ENV,
          with_genres: "878",
        },
      }
    );

    console.log(data);
    setScifiMovie(data?.results);
  };

  // Comedy Movies
  const getComedyMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: API_ENV,
          with_genres: "35",
        },
      }
    );

    console.log(data);
    setComedyMovie(data?.results);
  };
  //Fantasy Movie
  const getFantasyMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: API_ENV,
          with_genres: "16",
          language: "en-US",
        },
      }
    );

    console.log(data);
    setFantasyMovie(data?.results);
  };

  React.useEffect(() => {
    getActionMovie();
    getScifiMovie();
    getComedyMovie();
    getFantasyMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-16 pb-12 text-white">
      <p className="text-2xl">Action Movies</p>
      <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
        {actionMovie.map(
          ({ id, poster_path, original_title, release_date }, key) => (
            <div
              key={key}
              className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
            >
              <Link to={`/dashboard/moviedetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `${IMAGE_PATH}${poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt="hi"
                  className="rounded w-full h-[250px] object-cover"
                />
                <p className="line-clamp-2">{original_title}</p>
                {/* <span>{release_date}</span> */}
              </Link>
            </div>
          )
        )}
      </div>
      <p className="text-2xl">Sci-Fi Movies</p>
      <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
        {scifiMovie.map(
          ({ id, poster_path, original_title, release_date }, key) => (
            <div
              key={key}
              className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
            >
              <Link to={`/dashboard/moviedetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `${IMAGE_PATH}${poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt="hi"
                  className="rounded w-full h-[250px] object-cover"
                />
                <p className="line-clamp-2">{original_title}</p>
                {/* <span>{release_date}</span> */}
              </Link>
            </div>
          )
        )}
      </div>

      <p className="text-2xl">Comedy Movies</p>
      <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
        {comedyMovie.map(
          ({ id, poster_path, original_title, release_date }, key) => (
            <div
              key={key}
              className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
            >
              <Link to={`/dashboard/moviedetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `${IMAGE_PATH}${poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt="hi"
                  className="rounded w-full h-[250px] object-cover"
                />
                <p className="line-clamp-2">{original_title}</p>
                {/* <span>{release_date}</span> */}
              </Link>
            </div>
          )
        )}
      </div>

      <p className="text-2xl">Animation Movies</p>
      <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
        {fantasyMovie.map(
          ({ id, poster_path, original_title, release_date }, key) => (
            <div
              key={key}
              className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
            >
              <Link to={`/dashboard/moviedetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `${IMAGE_PATH}${poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt="hi"
                  className="rounded w-full h-[250px] object-cover"
                />
                <p className="line-clamp-2">{original_title}</p>
                {/* <span>{release_date}</span> */}
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MoviesDataCom;
