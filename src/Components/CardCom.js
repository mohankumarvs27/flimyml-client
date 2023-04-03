import React from "react";

function CardCom() {
  const cardBarData = [
    {
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      movieName: "Thor: Love and Thunder",
      movieYear: "2022 ‧ Action/Sci-fi",
    },
    {
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
      movieName: "Creed III",
      movieYear: "2023 ‧ Drama/Sport",
    },
    {
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      movieName: "Thor: Love and Thunder",
      movieYear: "2022 ‧ Action/Sci-fi",
    },
    {
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
      movieName: "Creed III",
      movieYear: "2023 ‧ Drama/Sport",
    },
    {
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      movieName: "Thor: Love and Thunder",
      movieYear: "2022 ‧ Action/Sci-fi",
    },
    {
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
      movieName: "Creed III",
      movieYear: "2023 ‧ Drama/Sport",
    },
    {
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      movieName: "Thor: Love and Thunder",
      movieYear: "2022 ‧ Action/Sci-fi",
    },
    {
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
      movieName: "Creed III",
      movieYear: "2023 ‧ Drama/Sport",
    },
    {
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      movieName: "Thor: Love and Thunder",
      movieYear: "2022 ‧ Action/Sci-fi",
    },
  ];
  return (
    <div className="m-4">
      <p className="text-2xl text-white">Popular Movies</p>
      <div className="flex overflow-x-scroll overflow-y-hidden  relative p-3">
        {cardBarData.map(({ img, movieName, movieYear }, key) => (
          <div className="w-[206px] h-[369px] text-gray-400 text-center m-2">
            <img
              src={img}
              alt="hi"
              className="object-fit rounded w-[200px] h-[315px]"
            />
            <p>{movieName}</p>
            <span>{movieYear}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardCom;
