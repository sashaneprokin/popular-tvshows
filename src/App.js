import "./App.css";
import { useEffect, useState } from "react";
import Show from "./Show";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=25510588092e6a8e7b82445550dc48de&language=en-US&page=1https://api.themoviedb.org/3/tv/popular?api_key=25510588092e6a8e7b82445550dc48de&language=en-US&page=1"
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className='App'>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className='popular-shows'>
        <AnimatePresence>
          {filtered.map((show) => (
            <Show key={show.id} show={show} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
