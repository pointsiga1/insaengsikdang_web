import ReviewProductItem from "./ReviewProductItem/ReviewProductItem";

export interface ReviewProductProps {
}

export default function ReviewProduct({ }: ReviewProductProps) {
  return (
    <div className="px-5 pt-2 pb-5">
      <ReviewProductItem />
    </div>
  );
}
