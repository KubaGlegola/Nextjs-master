import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	totalPages: number;
	href: Route<string>;
};

export const Pagination = ({ totalPages, href }: PaginationProps) => {
	const emptyArray = new Array(totalPages).fill(null);
	return (
		<ul className="mt-4 flex w-full justify-center gap-2">
			{emptyArray.map((_, index) => {
				const pageNumber = index + 1;
				return (
					<li key={pageNumber} aria-label={`pagination/${pageNumber}`}>
						<ActiveLink href={`${href}/${pageNumber}` as Route} exact={true}>
							{pageNumber}
						</ActiveLink>
					</li>
				);
			})}
		</ul>
	);
};
