import { type ReviewFragment } from "@/gql/graphql";
import { addNewReview } from "@/utils/actions";
import { type ReviewType } from "@/utils/types";

export const ReviewsForm = ({
	productId,
	addNewOptimisticReview,
}: {
	productId: string;
	addNewOptimisticReview: (newReview: ReviewFragment) => void;
}) => {
	return (
		<article>
			<h2 className="mb-4 text-2xl font-semibold">Add new review</h2>
			<form data-testid="add-review-form" className="mx-auto flex w-full flex-col gap-4 ">
				<input
					type="text"
					name="headline"
					id="headline"
					placeholder="Headline"
					className="block  border-2 border-gray-600 bg-gray-50 p-2 outline-none transition-colors duration-300 hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
				/>
				<textarea
					name="content"
					id="content"
					placeholder="Content"
					rows={6}
					className="block  border-2 border-gray-600 bg-gray-50 p-2 outline-none transition-colors duration-300 hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
				/>
				<select
					name="rating"
					id="rating"
					className="block  border-2 border-gray-600 bg-gray-50 p-2 outline-none transition-colors duration-300 hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
				>
					<option value="" disabled selected>
						Rating
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Name"
					className="block  border-2 border-gray-600 bg-gray-50 p-2 outline-none transition-colors duration-300 hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="E-mail"
					className="block  border-2 border-gray-600 bg-gray-50 p-2 outline-none transition-colors duration-300 hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
				/>
				<button
					type="submit"
					className="rounded-md bg-slate-700 p-2 text-white transition-colors duration-300 hover:bg-slate-900 active:bg-slate-900"
					formAction={async (formData) => {
						const { email, rating, headline, content, name } = Object.fromEntries(
							formData,
						) as ReviewType;

						addNewOptimisticReview({
							id: `tempId${Math.random()}`,
							author: name,
							description: content,
							rating: Number(rating),
							title: headline,
							email: email,
						});
						await addNewReview(productId, formData);
					}}
				>
					Add review
				</button>
			</form>
		</article>
	);
};
