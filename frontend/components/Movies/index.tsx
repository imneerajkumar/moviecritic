"use client";
import { useEffect, useState } from "react";
import MovieCard from "../Cards/MovieCard";
import styles from "./movies.module.css";
import axios from "axios";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState([]);
  const url = "http://localhost:5000";

  const filterItems = (value: string) => {
    return movies.filter((item: any) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInput(value);
    setFilteredItems(filterItems(value));
  };

  const getMovies = async () => {
    const res = await axios.get(`${url}/movies/`);
    setMovies(res.data);
    setFilteredItems(res.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.movies}>
      <h2 className="text-4xl my-4">The best movie reviews site!</h2>
      <div className={styles.searchContainer}>
        <img src="./search.png" className="size-6" />
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder={"Search..."}
          />
        </div>
      </div>
      <div className={styles.movieList}>
        {filteredItems.map((item: any) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
