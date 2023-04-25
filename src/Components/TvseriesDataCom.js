import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TvseriesDataCom() {
  const IMAGE_PATH = "https://www.themoviedb.org/t/p/w440_and_h660_face";

  const API_ENV = process.env.REACT_APP_TMDB_MOVIE_API_KEY;
  const NO_IMAGE_URL =
    "https://res.cloudinary.com/dqot1ggrh/image/upload/v1680713819/No-Image-Placeholder_dpbwqq.png";
  //useState
  const [popularNetflix, setPopularNetflix] = React.useState([]);
  const [popularAmazon, setPopularAmazon] = React.useState([]);
  const [popularHotstar, setPopularHotstar] = React.useState([]);

  // Popular Netflix Shows
  const getPopularNetflix = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/tv",
      {
        params: {
          api_key: API_ENV,
          with_watch_providers: "8",
          sort_by: "popularity.desc",
          with_original_language: "en",
          watch_region: "IN",
        },
      }
    );

    console.log(data);
    setPopularNetflix(data?.results);
  };

  // Amazon Popular Shows
  const getPopularAmazon = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/tv",
      {
        params: {
          api_key: API_ENV,
          with_watch_providers: "119",
          sort_by: "popularity.desc",
          with_original_language: "en",
          watch_region: "IN",
        },
      }
    );

    console.log(data);
    setPopularAmazon(data?.results);
  };

  // Hotstar Popular Shows
  const getPopularHotstar = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/tv",
      {
        params: {
          api_key: API_ENV,
          with_watch_providers: "122",
          sort_by: "popularity.desc",
          with_original_language: "en",
          watch_region: "IN",
        },
      }
    );

    console.log(data);
    setPopularHotstar(data?.results);
  };

  // useEffect
  useEffect(() => {
    getPopularNetflix();
    getPopularAmazon();
    getPopularHotstar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-16 text-white pb-12">
      {/* Netflix Shows */}
      <p className="text-2xl">Popular Netfilx Shows</p>
      <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
        {popularNetflix.map(
          ({ id, poster_path, original_name, release_date }, key) => (
            <div
              key={key}
              className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
            >
              <Link to={`/dashboard/seriesdetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `${IMAGE_PATH}${poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt="hi"
                  style={{ height: "250px" }}
                  className="rounded w-full h-[250px] object-cover"
                />
                <p className="line-clamp-2">{original_name}</p>
                {/* <span>{release_date}</span> */}
              </Link>
            </div>
          )
        )}
      </div>

      {/* Amazon Shows */}
      <p className="text-2xl">Popular Amazon Shows</p>
      <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
        {popularAmazon.map(
          ({ id, poster_path, original_name, release_date }, key) => (
            <div
              key={key}
              className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
            >
              <Link to={`/dashboard/seriesdetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `${IMAGE_PATH}${poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt="hi"
                  style={{ height: "250px" }}
                  className="rounded w-full h-[250px] object-cover"
                />
                <p className="line-clamp-2">{original_name}</p>
                {/* <span>{release_date}</span> */}
              </Link>
            </div>
          )
        )}
      </div>

      {/* Hotstar Shows */}
      <p className="text-2xl">Popular Hotstar Shows</p>
      <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
        {popularHotstar.map(
          ({ id, poster_path, original_name, release_date }, key) => (
            <div
              key={key}
              className="min-w-[160px] text-gray-400 text-center m-2 cursor-pointer"
            >
              <Link to={`/dashboard/seriesdetails/` + id}>
                <img
                  src={
                    poster_path
                      ? `${IMAGE_PATH}${poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt="hi"
                  style={{ height: "250px" }}
                  className="rounded w-full h-[250px] object-cover"
                />
                <p className="line-clamp-2">{original_name}</p>
                {/* <span>{release_date}</span> */}
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default TvseriesDataCom;
