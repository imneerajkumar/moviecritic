"use client";
import { useEffect, useState } from "react";
import ReviewCard from "../Cards/ReviewCard";
import { useParams } from "next/navigation";
import styles from "./reviews.module.css";
import axios from "axios";

function ReviewList() {
  const [reviews, setReviews] = useState<any>([]);
  const [movie, setMovie] = useState<any>([]);
  const params = useParams();
  const url = "http://localhost:5000";

  const getMovie = async () => {
    const res = await axios.get(`${url}/movies/${params.id}`);
    setMovie(res.data);
  };

  const getReviews = async () => {
    const res = await axios.get(`${url}/reviews/${params.id}`);
    setReviews(res.data);
    console.log(res);
  };

  useEffect(() => {
    getReviews();
    getMovie();
  }, []);

  return (
    <div className={styles.reviews}>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl my-4">{movie?.name}</h2>
        <h4 className="text-4xl my-4">{movie?.averageRating} / 10</h4>
      </div>
      <div className={styles.reviewList}>
        {reviews?.map((item: any) => (
          <ReviewCard key={item.MovieMId} review={item} />
        ))}
      </div>
    </div>
  );
}

export default ReviewList;
