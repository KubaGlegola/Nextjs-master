import { Search } from "@/ui/atoms/Search";
import { Navigation } from "@/ui/molecules/Navigation";

export const Navbar = () => {
	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
			<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
				<Navigation />
				<Search />
			</div>
		</div>
	);
};
