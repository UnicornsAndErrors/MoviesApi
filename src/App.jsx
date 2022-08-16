import React, {useEffect,useState} from 'react'
import Movie from './components/Movie';
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion"
import "./App.css"

const App = () => {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const[genre, setGenre] = useState(0);

  useEffect(() => {fetchPopular()}, []);

  
  const fetchPopular = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c964f974402c5770e08f6512f87d3c92&language=en-US&page=1");
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div  className='App'>
      <Filter popular={popular} setFiltered={setFiltered} genre={genre} setGenre={setGenre} />
      <motion.div animate={{y: 100 }} layout className="popular-movies">
        <AnimatePresence>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie}/>;
        })};
        </AnimatePresence>
    
    </motion.div>
    </div>
  );
};

export default App;