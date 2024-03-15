import { Review } from "@/utils/interface";
import styles from "./cards.module.css";

interface ReviewCardProps {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className={styles.reviewCard}>
      <div>
        <h2 className="text-2xl my-3">{review?.comments}</h2>
        <h2 className="text-lg my-3 font-normal">By {review?.reviewerName}</h2>
      </div>
      <h4 className="text-2xl my-3 font-normal">{review?.rating} / 10</h4>
    </div>
  );
}

export default ReviewCard;
