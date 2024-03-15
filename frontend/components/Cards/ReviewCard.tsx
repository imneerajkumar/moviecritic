import styles from "./cards.module.css";

function ReviewCard(props: any) {
  return (
    <div className={styles.reviewCard}>
      <div>
        <h2 className="text-2xl my-3">{props.review.comments}</h2>
        <h2 className="text-lg my-3 font-normal">
          By {props.review.reviewerName}
        </h2>
      </div>
      <h4 className="text-2xl my-3 font-normal">{props.review.rating} / 10</h4>
    </div>
  );
}

export default ReviewCard;
