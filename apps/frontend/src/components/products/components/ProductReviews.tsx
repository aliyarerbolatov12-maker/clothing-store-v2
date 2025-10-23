import Review from "@/components/ui/Review";

type ReviewType = {
  author: string;
  content: string;
  date?: string;
};

type ProductReviewsProps = {
  reviews: ReviewType[];
};

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
      {reviews.map(({ author, content, date }) => (
        <Review key={author} author={author} content={content} date={date} />
      ))}
    </div>
  );
}
