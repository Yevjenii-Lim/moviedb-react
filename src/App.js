
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
let urlReqest = "https://api.themoviedb.org/3/movie/now_playing?api_key=829e420903bf1825081ea088c8314c52&language=en-US&page=1"




function App() {
  let [movies, setMovies] = useState([])
  let [saved, setSaved] = useState([])
  useEffect(() => {
    let request = async () => {
      let res = await axios.get(urlReqest)
      // console.log(res.data.results)
      setMovies(res.data.results)
    }
    request()
  }, [])

  let addSaved = (item) => {
    let index = saved.findIndex(i => i.id === item.id)
  
    if(index === -1) {
      setSaved([...saved, item])
    }
  }

  return (
    <Context.Provider value={{addSaved, saved}}>

    <div  className='container mx-auto'>
      <BrowserRouter>
      <Header></Header>
      <SearchBar></SearchBar>
       <Route path="/" exact>
        <MoviesNow movies={movies}></MoviesNow>
        </Route> 
        <Route path="/saved" exact>
            <Saved saved={saved}></Saved>
        </Route>
  
      </BrowserRouter>
    </div>
    </Context.Provider>
  );
}

export default App;
