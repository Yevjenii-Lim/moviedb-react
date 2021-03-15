import axios from "axios";
import React, { useEffect, useState } from "react";
import "./../assets/extra.css";



let colors = ["red", "yellow", "green", "blue", "pink"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let useGenres = (genre) => {
  let [genres, setGenres] = useState([]);
  useEffect(() => {
    let getGenres = async (arr) => {
      let result = await arr.map(async (i, index) => {
        let res = await axios.get(
          `https://api.themoviedb.org/3/genre/${i}?api_key=829e420903bf1825081ea088c8314c52&language=en-US%20%22`
        );
        return res.data;
      });
      Promise.all(result).then((i) => {
        setGenres(i);
      });
    };
    getGenres(genre);
  }, []);
  return genres.map((i, index) => {
    return (
      <li
        key={index}
        className={`bg-${colors[getRandomInt(4)]}-400 rounded px-2 m-2 `}
      >
        {i.name}
      </li>
    );
  });
};

const MovieCard = ({ img, title, vote, adult, overview, date, genre, id }) => {
    let [showDetails, setShowDetails] = useState(false)
  let posterUrl = "https://image.tmdb.org/t/p/original/" + img;
  let items = useGenres(genre);

  let moveBg = () => {
    setShowDetails(!showDetails)
  };
let top = showDetails ? "0" : "full"

if(overview.length > 150){
  let string = overview.slice(0, 150)
    string += "..."
    overview = string 
}
let handler = (e) => {
    e.stopPropagation();
}
  return (
    <div
      className="max-w-xs w-1/5  relative overflow-hidden flex-shrink-0"
      onClick={() => moveBg()}
    >
      <div className="max-w-xs">
        <img src={posterUrl} alt="" />
      </div>
      {/* <h3 className="text-xl font-medium">{title}</h3> */}
      <div
        id={id}
        className={"absolute max-w-xs w-full h-full overview  px-2  top-" + top} 
      >
        <ul className="flex flex-wrap">{items}</ul>
        <p className="text-white ">
          {overview}
        </p>
        <button onClick={handler} className="bg-white px-2 rounded mt-2 font-medium outline-none">More</button>
      </div>
    </div>
  );
};

export default MovieCard;
