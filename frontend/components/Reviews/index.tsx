"use client";
import { useEffect, useState } from "react";
import ReviewCard from "../Cards/ReviewCard";
import { useParams } from "next/navigation";
import styles from "./reviews.module.css";
import { Movie, Review } from "../../utils/interface";
import axios from "axios";
import Loader from "../Loader";

function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>();
  const [movie, setMovie] = useState<Movie>();
  const params = useParams();
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const reviewRes = await axios.get(`${url}/reviews/${params.id}`);
      setReviews(reviewRes.data);

      const movieRes = await axios.get(`${url}/movies/${params.id}`);
      setMovie(movieRes.data);

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      alert(error?.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.reviews}>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl my-4">{movie?.name}</h2>
            <h4 className="text-4xl my-4">{movie?.averageRating} / 10</h4>
          </div>
          <div className={styles.reviewList}>
            {reviews?.map((item: Review) => (
              <ReviewCard key={item.MovieMId} review={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewList;
