import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '.././assets/movie_logo.jpg'
import Context from './Context'



let LastMovie = (obj) => {
    let [hid, setHidden] = useState('null')
    
    useEffect(()=> {
        const timer = setTimeout(() => {
            setHidden('hidden')
            console.log(hid)
          }, 2000);
          return () => {clearTimeout(timer) 
            setHidden('null')
        };
    }, [obj])

if(obj === undefined) return null
    return <div className={"flex absolute "+ hid}>
        <img src={"https://image.tmdb.org/t/p/original/" + obj.img} alt="" className="w-full"/>
        <span className="bg-white text-black">{obj.title}</span>
    </div>
}


const Header = () => {
    let {saved} = useContext(Context)
    useEffect(() => {

    },[saved])
    return (
        <header className='container flex mx-auto justify-between items-center text-white'>
            <div className='flex items-center justify-between'>

            <div className="h-20 w-20">
                <Link to="/">
                <img src={logo} alt="logo"/>
                </Link>
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
                    <li className='mr-5 relative'><Link to="saved">Saved</Link>
                        <span className="absolute bg-red-500">{saved.length}</span>
    
                            {LastMovie(saved[saved.length - 1])}
             
                    </li>
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
