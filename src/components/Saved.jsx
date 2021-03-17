import React, { useEffect, useState } from "react";

const Saved = ({ saved }) => {
   
  return (
    <div className="text-white">
      {saved.map((i) => {
        return <SavedCard key={i.id} imgUrl={i.img}
            overview={i.overview}
            listGenre={i.items}
            title={i.title}
            date={i.date}
        ></SavedCard>;
      })}
    </div>
  );
};

const SavedCard = ({ imgUrl, overview, listGenre, title, date }) => {
  return (
    <div className="flex">
      <div className="max-w-xs">
        <img src={"https://image.tmdb.org/t/p/original/" + imgUrl} alt="" className="w-full "/>
      </div>
        <div>
            <h2 className="text-xl">{title}</h2>
            <p>{overview}</p>
            <p>Relize date: {date}</p>
            <ul className="flex">
                {listGenre}
            </ul>
        </div>
    </div>
  );
};

export default Saved;
