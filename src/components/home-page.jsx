import { useState, useEffect } from "react";

import api from "../api/api";

const Home = () => {
  const [filmWorld, setFilmWorld] = useState([]);
  const [cinemaWorld, setCinemaWorld] = useState([]);

  useEffect(() => {
    const theaters = ["cinema", "film"];
    theaters.forEach((theater) => {
      async function fetchCinema() {
        const data = await api.getFilm(theater);
        if (data.Provider === "Film World") {
          console.log("FILM WORLD: ", data.Provider);
          console.log(`Data ${theater}World: `, data);
          setFilmWorld(data);
        } else {
          console.log("CINEMAWORLD: ", data.Provider);
          console.log(`Data ${theater}World: `, data);
          setCinemaWorld(data);
        }
      }
      fetchCinema();
    });
  }, []);

  return (
    <>
      <h1>Home Page - CRA</h1>
      {filmWorld.Provider
        ? console.log("filmWorld is here")
        : console.log("filmWorld is not here")}
      {cinemaWorld.Provider
        ? console.log("cinemaWorld is here")
        : console.log("cinemaWorld is not here")}

      {filmWorld.Provider &&
        filmWorld.Movies.map((movie, index) => {
          return (
            <div className="movies" key={index}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} />
              <h5>{movie.Actors} </h5>
              <h6> Price: ${movie.Price}</h6>
              <hr />
            </div>
          );
        })}
    </>
  );
};

export default Home;
