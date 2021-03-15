import React from 'react'

const SearchBar = () => {
    return (
        <div className="w-full box-border flex">
            <select className="w-3/12 text-2xl  bg-gray-700 text-white outline-none">  
                <option>TV show</option>
                <option>Movie</option>
                <option>Actor</option>
                <option>Director</option>
            </select>
            <input type="text" className="w-8/12 text-2xl px-1 bg-gray-700 text-white outline-none"/>
            <button className="bg-red-700 rounded-3xl p-2 px-5 font-bold text-white flex-shrink-0  flex-grow outline-none">Search</button>
        </div>
    )
}

export default SearchBar
