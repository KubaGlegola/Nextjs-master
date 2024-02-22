// import { getAllCategories } from "@/api/categories";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navbar = async () => {
	// const categories = await getAllCategories();

	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
			<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
				<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
					<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
						<li>
							<ActiveLink href="/">Home</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products" exact={false}>
								All
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href={"/categories" as Route} exact={false}>
								Categories
							</ActiveLink>
						</li>
						{/* {categories.map((category) => {
							return (
								<li key={category.slug}>
									<ActiveLink exact={false} href={`/categories/${category.slug}`}>
										{category.name}
									</ActiveLink>
								</li>
							);
						})} */}
					</ul>
				</nav>
			</div>
		</div>
	);
};
