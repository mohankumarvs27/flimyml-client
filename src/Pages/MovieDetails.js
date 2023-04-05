import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailsCom() {
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
    <div className="grid justify-center items-center p-2">
      <div className="text-white text-center flex flex-col items-center ">
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movieDetails.poster_path}`}
          alt="poster"
          className="rounded w-[50%]"
        />
        <p className="text-3xl py-3 ">{movieDetails.original_title}</p>
        <p className="text-justify ">{movieDetails.overview}</p>
        {/* <p>{movieDetails}</p> */}
        {movieDetails?.genres?.map((each) => (
          <p>{each.name}</p>
        ))}

        {console.log(movieDetails)}
      </div>
    </div>
  );
}

export default MovieDetailsCom;

// Array.map((each)=>{
//     each?.name,

// })
