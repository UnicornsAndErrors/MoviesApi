import React, {useEffect} from 'react'

const Filter = ({genre, setGenre, setFiltered, popular}) => {
  useEffect(() => {
    if(genre ===0){
  setFiltered(popular);
  return;
  }
const filtered = popular.filter((movie) => movie.genre_ids.includes(genre));
setFiltered(filtered);
}, [genre]);
  return (
    <div className="filter-container">
        <button className={genre ===0  ? "active" : ""} onClick={() => setGenre(0)}>Svi</button>
        <button className={genre ===28 ? "active" : ""}   onClick={() => setGenre(28)}>Akcija</button>
        <button className={genre ===35 ? "active" : ""}  onClick={() => setGenre(35)}>Komedija</button>
    </div>
  );
};

export default Filter;