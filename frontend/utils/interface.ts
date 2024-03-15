export interface Movie {
  mId: number;
  name: string;
  releaseDate: string;
  averageRating?: number | null;
}

export interface Review {
  id: number;
  MovieMId: number;
  reviewerName: string;
  rating: number;
  comments: string;
}
