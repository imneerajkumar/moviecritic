"use client";
import { useState } from "react";
import styles from "./header.module.css";
import { Modal } from "antd";
import axios from "axios";
import { Movie } from "@/utils/interface";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const [movies, setMovies] = useState<Movie[]>([]);
  const [type, setType] = useState<string>("movie");
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleModal = async (name: string) => {
    const res = await axios.get(`${url}/movies/`);
    setMovies(res.data);
    setType(name);
    setIsModalOpen(true);
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/${type}s`, formData);
      console.log(response.data);
      setFormData({});
      setIsModalOpen(false);
    } catch (error: any) {
      alert(error?.message);
    }
  };

  return (
    <div className={styles.header}>
      <a href="/" className={styles.headerLogo}>
        MOVIECRITIC
      </a>
      <div>
        <button
          type="button"
          className={`${styles.btn} ${styles.outline}`}
          onClick={() => handleModal("movie")}
        >
          Add new movies
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => handleModal("review")}
        >
          Add new review
        </button>
      </div>
      <Modal
        title={`Add new ${type}`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={(e) => handleSubmit(e)}
        okText={type === "movie" ? "Create movie" : "Add review"}
      >
        {type === "movie" ? (
          <form>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
              required
            />
            <br />
            <label htmlFor="releaseDate">Release Date:</label>
            <br />
            <input
              className={styles.input}
              type="date"
              id="releaseDate"
              name="releaseDate"
              onChange={handleChange}
              value={formData.releaseDate || ""}
              required
            />
            <br />
          </form>
        ) : (
          <form>
            <div>
              <label htmlFor="movieSelect">Select Movie:</label>
              <br />
              <select
                id="movieSelect"
                name="MovieMId"
                onChange={handleChange}
                required
                className={styles.input}
              >
                {movies?.map((movie: Movie, index: number) => (
                  <option key={movie.mId + index} value={movie.mId}>
                    {movie.name}
                  </option>
                ))}
              </select>
              <br />
            </div>
            <label htmlFor="reviewerName">Reviewer Name:</label>
            <br />
            <input
              className={styles.input}
              type="text"
              id="reviewerName"
              name="reviewerName"
              onChange={handleChange}
              value={formData.reviewerName || ""}
              required
            />
            <br />
            <label htmlFor="comments">Comments:</label>
            <br />
            <textarea
              className={styles.input}
              id="comments"
              name="comments"
              rows={3}
              onChange={handleChange}
              value={formData.comments || ""}
              required
            />
            <br />
            <label htmlFor="rating">Rating:</label>
            <br />
            <input
              className={styles.input}
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="10"
              onChange={handleChange}
              value={formData.rating || ""}
              required
            />
            <br />
          </form>
        )}
      </Modal>
    </div>
  );
}
