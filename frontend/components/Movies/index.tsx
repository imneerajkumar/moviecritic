"use client";
import { useEffect, useState } from "react";
import MovieCard from "../Cards/MovieCard";
import styles from "./movies.module.css";
import axios from "axios";
import { Movie } from "@/utils/interface";
import Loader from "../Loader";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [input, setInput] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const filterItems = (value: string) => {
    return movies.filter((item: Movie) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInput(value);
    setFilteredItems(filterItems(value));
  };

  const getMovies = async () => {
    try {
      const res = await axios.get(`${url}/movies/`);
      setMovies(res.data);
      setFilteredItems(res.data);
      setLoading(false);
    } catch (error: any) {
      alert(error?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
            {filteredItems.map((item: Movie) => (
              <MovieCard key={item.mId} movie={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MovieList;
