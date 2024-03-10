"use client";

import { useOptimistic } from "react";
import { ReviewsForm } from "@/ui/atoms/ReviewsForm";
import { type ReviewFragment } from "@/gql/graphql";
import { ReviewsListItem } from "@/ui/atoms/ReviewsListItem";
import { Rating } from "@/ui/atoms/Rating";

export const ReviewsList = ({
	productId,
	reviews,
	totalReviewsCount,
	productRating,
}: {
	productId: string;
	reviews?: ReviewFragment[];
	totalReviewsCount: number;
	productRating: number;
}) => {
	if (!reviews) {
		throw new Error("No reviews found");
	}

	const [optimisticReviews, setOptimisticReviews] = useOptimistic(reviews, (state, newReview: ReviewFragment) => [
		...state,
		newReview,
	]);

	const addNewReviewHandler = (newReview: ReviewFragment) => {
		setOptimisticReviews(newReview);
	};

	return (
		<div className="lg:grid lg:grid-cols-3 lg:gap-4">
			<article>
				<h2 className="mb-4 text-2xl font-semibold">Add new review</h2>
				<div className="mb-4 flex gap-2 font-semibold text-gray-600">
					<Rating rating={productRating} /> Based on {totalReviewsCount} reviews
				</div>
				<ReviewsForm productId={productId} addNewOptimisticReview={addNewReviewHandler} />
			</article>
			<div className="col-span-2 mt-12 lg:mt-0">
				{optimisticReviews.length > 0 ? (
					optimisticReviews.map((review) => <ReviewsListItem key={review.id} review={review} />)
				) : (
					<p>No reviews yet</p>
				)}
			</div>
		</div>
	);
};
