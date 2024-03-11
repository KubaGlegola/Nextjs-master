import { type Route } from "next";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	totalPages: number;
	href: Route<string>;
	searchParams?: { [key: string]: string | undefined };
};

export const Pagination = ({ totalPages, href, searchParams }: PaginationProps) => {
	let params = "?";
	for (const key in searchParams) {
		params += `${key}=${searchParams[key]}&`;
	}

	const emptyArray = new Array(totalPages).fill(null);
	return (
		<ul className="mt-4 flex w-full justify-center gap-2">
			{emptyArray.map((_, index) => {
				const pageNumber = index + 1;
				return (
					<li key={pageNumber} aria-label={`pagination/${pageNumber}`}>
						<ActiveLink href={`${href}/${pageNumber}${params.length > 1 ? params : ""}` as Route} exact={false}>
							{pageNumber}
						</ActiveLink>
					</li>
				);
			})}
		</ul>
	);
};
