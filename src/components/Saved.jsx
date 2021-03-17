import React, { useContext, useEffect, useState } from "react";
import Context from "./Context";

const Saved = ({ saved }) => {
 
  return (
    <div className="text-white mx-auto ">
      {saved.map((i) => {
        return <SavedCard key={i.id} imgUrl={i.img}
            overview={i.overview}
            listGenre={i.items}
            title={i.title}
            date={i.date}
            id={i.id}
        ></SavedCard>;
      })}
    </div>
  );
};

const SavedCard = ({ imgUrl, overview, listGenre, title, date, id }) => {
    let {removeSaved} = useContext(Context)
  return (
    <div className="flex my-2 justify-center ">
      <div className="max-w-xs w-3/6">
        <img src={"https://image.tmdb.org/t/p/original/" + imgUrl} alt="" className="w-full "/>
      </div>
        <div className="w-3/6 ml-10">
            <h2 className="text-xl">{title}</h2>
            <p>{overview}</p>
            <p>Relize date: {date}</p>
            <ul className="flex flex-wrap">
                {listGenre}
            </ul>
            <button onClick={() => removeSaved(id)
            } className="bg-white px-2 rounded mt-2 font-medium outline-none text-black" >remove from saved</button>
        </div>
    </div>
  );
};

export default Saved;
