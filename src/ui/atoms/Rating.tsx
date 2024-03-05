export const Rating = ({ rating }: { rating: number }) => {
	return (
		<div className="flex items-center gap-1">
			<span className="text-sm">{rating}/5</span>
			<div className="flex">
				{Array.from({ length: 5 }, (_, i) => (
					<svg
						key={i}
						className={`h-4 w-4 fill-current ${i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M12 2l2.5 6.5L22 9l-5 4.5L17 22l-5-3.5L7 22l1-7.5L2 9l7.5-.5L12 2z" />
					</svg>
				))}
			</div>
		</div>
	);
};
