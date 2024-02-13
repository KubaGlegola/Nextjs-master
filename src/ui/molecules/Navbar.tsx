import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navbar = () => {
	return (
		<nav className="bg-white shadow-lg">
			<ul className="flex justify-center gap-4 py-4">
				<li>
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/products/1" exact={false}>
						All
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
