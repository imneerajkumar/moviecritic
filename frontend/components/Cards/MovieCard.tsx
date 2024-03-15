import { Movie } from "@/utils/interface";
import styles from "./cards.module.css";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const formatData = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <a className={styles.movieCard} href={`/${movie?.mId}`}>
      <h1 className="text-lg my-3">{movie?.name}</h1>
      <h2 className="text-base my-3">{formatData(movie?.releaseDate)}</h2>
      <p className="font-bold my-3">Rating: {movie?.averageRating} / 10</p>
    </a>
  );
}

export default MovieCard;
