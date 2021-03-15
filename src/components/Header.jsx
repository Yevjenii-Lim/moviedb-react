import React from 'react'
import logo from '.././assets/movie_logo.jpg'

const Header = () => {
    return (
        <header className='container flex mx-auto justify-between items-center '>
            <div className='flex items-center justify-between'>

            <div className="h-20 w-20">
                <img src={logo} alt="logo"/>
            </div>
            <ul className="flex ml-10">
                <li className="mr-5">Home</li>
                <li className="mr-5">Movies</li>
                <li className="mr-5">Celebrety</li>
                <li className="mr-5">News</li>
                <li className="mr-5">Comunuty</li>
            </ul>
            </div>
            <div className="flex items-center">
                <ul className="flex ">
                    <li className='mr-5'>Pages</li>
                    <li className='mr-5'>Pages</li>
                    <li className='mr-5'>Pages</li>
                </ul>
                <button className="bg-red-700 rounded-3xl p-2 px-5 font-bold text-white flex-shrink-0 ">
                    sign Up
                </button>
            </div>
        </header>
    )
}

export default Header
