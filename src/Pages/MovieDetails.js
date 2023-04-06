import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailsCom() {
  const IMAGE_PATH = "https://www.themoviedb.org/t/p/w440_and_h660_face";
  const NO_IMAGE =
    "https://res.cloudinary.com/dqot1ggrh/image/upload/v1680713819/No-Image-Placeholder_dpbwqq.png";
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = React.useState([]);
  const getMovieDetails = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/" + [id],
        {
          params: {
            api_key: "a255883eb9a0a2f7fadb1d891c4668a5",
            // query: "Enthiran",
          },
        }
      );

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
              : `${NO_IMAGE}`
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
