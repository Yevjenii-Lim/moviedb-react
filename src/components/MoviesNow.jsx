import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

let setMovies = (start, finish = 4, arr) => {
    let newArr = arr.slice(start, finish);
    console.log(start, finish)
    console.log(newArr)
  return newArr
};

const MoviesNow = ({ movies }) => {
  let [listMovies, setList] = useState([]);
  let [pages, setPage] = useState(0);

  useEffect(() => {
    //   console.log('useefct')
    pages = +pages * 4
    let finish = +pages + 4
    let list = setMovies(pages, finish, movies);
    // console.log(list)
    setList(list);
  }, [pages, movies]);
  let onPageChange = (e) => {
     setPage(e.target.innerText) 
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
  let pagination = []
  for(let i = 0; i < movies.length / 4; i++) {
    pagination.push(<span onClick={onPageChange} key={i} className="inline-block px-2 mt-10">{i}</span>)
  }
  return (
    <div className="relative">
      <h2 className="text-center mt-10 mb-10">Movies in theatres</h2>
      <div className="flex justify-between overflow-hidden ">{items}</div>
      <div>
        {" "}
        <div className="text-right">
        {pagination}

        </div>
      </div>
    </div>
  );
};

export default MoviesNow;
