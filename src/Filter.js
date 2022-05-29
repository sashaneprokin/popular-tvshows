import { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((show) =>
      show.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className='filter-container'>
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 10759 ? "active" : ""}
        onClick={() => setActiveGenre(10759)}
      >
        Action
      </button>
      <button
        className={activeGenre === 18 ? "active" : ""}
        onClick={() => setActiveGenre(18)}
      >
        Drama
      </button>
    </div>
  );
}

export default Filter;
