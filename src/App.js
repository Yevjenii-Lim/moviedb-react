
import axios from 'axios';
import { useEffect, useState } from 'react';
import './assets/main.css';
import Header from './components/Header';
import MoviesNow from './components/MoviesNow';
import SearchBar from './components/SearchBar';

let urlReqest = "https://api.themoviedb.org/3/movie/now_playing?api_key=829e420903bf1825081ea088c8314c52&language=en-US&page=1"

function App() {
  let [movies, setMovies] = useState([])
  useEffect(() => {
    let request = async () => {
      let res = await axios.get(urlReqest)
      // console.log(res.data.results)
      setMovies(res.data.results)
    }
    request()
  }, [])


  return (
    <div  className='container mx-auto'>
      <Header></Header>
      <SearchBar></SearchBar>
      <MoviesNow movies={movies}></MoviesNow>
    </div>
  );
}

export default App;
