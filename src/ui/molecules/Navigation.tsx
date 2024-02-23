// import { getAllCategories } from "@/api/categories";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
	// const categories = await getAllCategories();

	return (
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
	);
};
