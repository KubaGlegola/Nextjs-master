import { getAllCategories } from "@/api/categories";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = async () => {
	const categoriesResponse = await getAllCategories();

	const categories = categoriesResponse;

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
				{categories.edges.map((category) => {
					return (
						<li key={category.node.slug}>
							<ActiveLink exact={false} href={`/categories/${category.node.slug}`}>
								{category.node.name}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
