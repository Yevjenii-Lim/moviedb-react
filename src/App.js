
import axios from 'axios';
import { useEffect, useState } from 'react';
import './assets/main.css';
import Header from './components/Header';
import MoviesNow from './components/MoviesNow';
import SearchBar from './components/SearchBar';
import './assets/extra.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Saved from './components/Saved';
import Context from './components/Context';
import SingleMovie from './components/SingleMovie';
let urlReqest = "https://api.themoviedb.org/3/movie/now_playing?api_key=829e420903bf1825081ea088c8314c52&language=en-US&page=1"




function App() {
  let [movies, setMovies] = useState([])
  let [saved, setSaved] = useState([])
  let [showWorning, setShowWorning] = useState("moveup")
  useEffect(() => {
    let request = async () => {
      let res = await axios.get(urlReqest)
      // console.log(res.data.results)
      setMovies(res.data.results)
    }
    request()
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWorning("moveup")
    }, 2000);
    return () => {clearTimeout(timer) 
  };
  }, [showWorning])
  let addSaved = (item) => {
    let index = saved.findIndex(i => i.id === item.id)
    if(index === -1) {
      setSaved([...saved, item])
    }else {
      setShowWorning("movedown")
    }
  }

  let removeSaved = (id) => {
      
      let index = saved.findIndex(i => i.id === id)
      saved.splice(index, 1)
      setSaved([...saved]) 
  }
  return (
    <Context.Provider value={{addSaved, saved, removeSaved}}>

    <div  className='container mx-auto'>
      <div className={"absolute bg-white px-3 py-2 left-1/2 transform -translate-x-2/4 duration-500 rounded " + showWorning}>
        <span>Already saved</span>
      </div>
      <BrowserRouter>
      <Header></Header>
      <SearchBar></SearchBar>
       <Route path="/" exact>
        <MoviesNow movies={movies}></MoviesNow>
        </Route> 
        <Route path="/saved" exact>
            <Saved saved={saved}></Saved>
        </Route>
        <Route path="/movie/:movieId?" exact>
          <SingleMovie></SingleMovie>
        </Route>
      </BrowserRouter>
    </div>
    </Context.Provider>
  );
}

export default App;
