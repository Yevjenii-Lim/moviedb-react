import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

let setMovies = (start, finish = 4, arr) => {
  let newArr = arr.slice(start, finish);

  return newArr;
};

const MoviesNow = ({ movies }) => {
  let [listMovies, setList] = useState([]);
  let [pages, setPage] = useState(0);

  useEffect(() => {
    //   console.log('useefct')
    pages = +pages * 4;
    let finish = +pages + 4;
    let list = setMovies(pages, finish, movies);
    // console.log(list)
    setList(list);
  }, [pages, movies]);
  let onPageChange = (e) => {
    let value = e.target.getAttribute("data-value");

    setPage(value);
    // console.log(e.target.innerText);
  };

  let items = listMovies.map((movie) => {
    return (
      <MovieCard
        img={movie.poster_path}
        title={movie.original_title}
        vote={movie.vote_average}
        adult={movie.adult}
        overview={movie.overview}
        key={movie.id}
        id={movie.id}
        date={movie.release_date}
        genre={movie.genre_ids}
      />
    );
  });
  let pagination = [];
  for (let i = 0; i < movies.length / 4; i++) {
      let active  = null
      if(+pages === i) {
        active = 'p-4'
      }
    pagination.push(
      <span
        onClick={onPageChange}
        key={i}
        data-value={i}
        className={"block mt-10 mx-4 rounded-full bg-yellow-500 p-2 bg-black " + active}
      ></span>
    );
  }
  return (
    <div className="relative">
      <h2 className="text-center my-10 text-xl text-white">Movies in theatres</h2>
      <div className="flex justify-between overflow-hidden ">{items}</div>
      <div>
        {" "}
        <div className="text-right flex items-center justify-end">
          {pagination}
        </div>
      </div>
    </div>
  );
};

export default MoviesNow;
