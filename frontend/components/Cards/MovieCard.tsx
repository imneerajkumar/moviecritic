import styles from "./cards.module.css";

function MovieCard(props: any) {
  const formatData = (dateString: any) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <a
      className={styles.movieCard}
      href={`/${props.movie.name.replace(/\s+/g, "-")}`}
    >
      <h1 className="text-lg my-3">{props.movie.name}</h1>
      <h2 className="text-base my-3">{formatData(props.movie.releaseDate)}</h2>
      <p className="font-bold my-3">Rating: {props.movie.averageRating} / 10</p>
    </a>
  );
}

export default MovieCard;
