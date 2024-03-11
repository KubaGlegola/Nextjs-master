"use client";

import { type Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const SortSelect = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [selectValue, setSelectValue] = useState("Sort products");

	const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const params = new URLSearchParams(searchParams.toString());
		setSelectValue(event.target.value);
		switch (event.target.value) {
			case "ratingDesc":
				params.set("sort", "rating");
				params.set("sortOrder", "desc");
				break;
			case "ratingAsc":
				params.set("sort", "rating");
				params.set("sortOrder", "asc");
				break;
			case "nameAsc":
				params.set("sort", "name");
				params.set("sortOrder", "asc");
				break;
			case "nameDesc":
				params.set("sort", "name");
				params.set("sortOrder", "desc");
				break;
			case "priceDesc":
				params.set("sort", "price");
				params.set("sortOrder", "desc");
				break;
			case "priceAsc":
				params.set("sort", "price");
				params.set("sortOrder", "asc");
				break;
		}

		const url = `${pathname}?${params.toString()}` as Route;
		router.push(url);
	};

	return (
		<select
			onChange={selectChangeHandler}
			value={selectValue}
			className="border-[1px] border-slate-400 bg-transparent px-4 py-2 shadow-md transition-colors hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
		>
			<option disabled>Sort products</option>
			<option data-testid="sort-by-rating" value="ratingDesc">
				Rating (High to Low)
			</option>
			<option data-testid="sort-by-rating" value="ratingAsc">
				Rating (Low to High)
			</option>
			<option value="nameAsc">Name (A-Z)</option>
			<option value="nameDesc">Name (Z-A)</option>
			<option data-testid="sort-by-price" value="priceDesc">
				Price (High to Low)
			</option>
			<option data-testid="sort-by-price" value="priceAsc">
				Price (Low to High)
			</option>
		</select>
	);
};
