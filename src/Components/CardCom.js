import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function CardCom() {
  // const navigate = useNavigate();

  const [movie, setMovie] = React.useState([]);
  const [similarMovie, setSimilarMovie] = React.useState([]);
  const [popularMovie, setPopularMovie] = React.useState([]);
  const [upcomingMovie, setupcommingMovie] = React.useState([]);

  // const [clicked, setClicked] = React.useState(false);
  const getPopularMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week",
      {
        params: {
          api_key: "a255883eb9a0a2f7fadb1d891c4668a5",
        },
      }
    );
    console.log(data);
    setPopularMovie(data?.results);
  };

  const getMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/141052/recommendations",
      {
        params: {
          api_key: "a255883eb9a0a2f7fadb1d891c4668a5",
          language: "en-US",
        },
      }
    );
    console.log(data);
    setMovie(data?.results);
  };

  const similarGetMovie = async () => {
    const { data, status } = await axios.get(
      "https://api.themoviedb.org/3/movie/299536/similar",
      {
        params: {
          api_key: "a255883eb9a0a2f7fadb1d891c4668a5",
          language: "en-US",
        },
      }
    );
    setSimilarMovie(data?.results);
    console.log(data);
    console.log(status);
  };

  const getUpcomingMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        params: {
          api_key: "a255883eb9a0a2f7fadb1d891c4668a5",
          language: "en-US",
          page: "1",
          region: "IN",
        },
      }
    );
    setupcommingMovie(data?.results);
  };

  useEffect(() => {
    getMovie();
    similarGetMovie();
    getPopularMovie();
    getUpcomingMovie();
  }, []);
  return (
    <div className="pt-16 pl-2 text-white">
      <p className="text-2xl">Trending Movies</p>
      <div className="flex w-[95vw] overflow-x-scroll no-scrollbar">
        {popularMovie.map(
          ({ id, poster_path, original_title, release_date }, key) => (
            <div
              key={key}
              className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
            >
              <Link to={`/moviedetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
                      : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
                  }
                  alt="hi"
                  className="rounded w-full h-[250px] object-cover"
                />
                <p>{original_title}</p>
                <span>{release_date}</span>
              </Link>
            </div>
          )
        )}
      </div>
      <p className="text-2xl">Popular Movies</p>
      <div className="flex w-[95vw] overflow-x-scroll no-scrollbar">
        {movie.map(({ id, poster_path, original_title, release_date }, key) => (
          <div
            key={key}
            className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
          >
            <Link to={`/moviedetails/` + id}>
              <img
                src={
                  poster_path
                    ? `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
                    : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
                }
                alt="hi"
                className="rounded w-full h-[250px] object-cover"
              />
              <p>{original_title}</p>
              <span>{release_date}</span>
            </Link>
          </div>
        ))}
      </div>

      <p className="text-2xl">Similar Movies</p>
      <div className="flex w-[95vw] overflow-x-scroll no-scrollbar">
        {similarMovie.map(
          ({ id, poster_path, original_title, release_date }, key) => (
            <div
              key={id}
              className="min-w-[160px] text-gray-400 text-center m-2"
            >
              <Link to={`/moviedetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
                      : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
                  }
                  alt={id}
                  className="rounded w-full h-[250px] object-cover "
                />
                <p>{original_title}</p>
                <span>{release_date}</span>
              </Link>
            </div>
          )
        )}
      </div>
      <p className="text-2xl">Upcomming Movies</p>
      <div className="flex w-[95vw] overflow-x-scroll no-scrollbar">
        {upcomingMovie.map(
          ({ id, poster_path, original_title, release_date }, key) => (
            <div
              key={key}
              className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
            >
              <Link to={`/moviedetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
                      : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
                  }
                  alt="hi"
                  className="rounded w-full h-[250px] object-cover"
                />
                <p>{original_title}</p>
                <span>{release_date}</span>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CardCom;
