"use client";

import { useOptimistic } from "react";
import { ReviewsForm } from "@/ui/atoms/ReviewsForm";
import { type ReviewFragment } from "@/gql/graphql";
import { ReviewsListItem } from "@/ui/atoms/ReviewsListItem";

export const ReviewsList = ({
	productId,
	reviews,
}: {
	productId: string;
	reviews?: ReviewFragment[];
}) => {
	if (!reviews) {
		throw new Error("No reviews found");
	}

	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(state, newReview: ReviewFragment) => [...state, newReview],
	);

	const addNewReviewHandler = (newReview: ReviewFragment) => {
		setOptimisticReviews(newReview);
	};

	return (
		<div className="lg:grid lg:grid-cols-3 lg:gap-4">
			<ReviewsForm productId={productId} addNewOptimisticReview={addNewReviewHandler} />
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
