"use client";
import { type ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/utils/useDebounce";

export const Search = () => {
	const [inputValue, setInputValue] = useState("");
	const debouncedValue = useDebounce(inputValue, 500);
	const router = useRouter();

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	useEffect(() => {
		if (debouncedValue.trim().length > 1) {
			router.push(`/search?query=${debouncedValue}`);
		}
	}, [debouncedValue, router]);

	return (
		<input
			type="search"
			onChange={inputChangeHandler}
			placeholder="Search"
			className=" block border-2 border-transparent bg-gray-50 p-2 outline-none transition-colors duration-300 hover:border-blue-500 focus:border-blue-500 active:border-blue-500 "
		/>
	);
};
