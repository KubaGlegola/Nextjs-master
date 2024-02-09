import { ProductList } from "@/ui/organism/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Smartphone",
		category: "Electronics",
		price: 899.99,
		coverImage: {
			alt: "Smartphone",
			src: "/smartphone.jpg",
		},
	},
	{
		id: "2",
		name: "Laptop",
		category: "Electronics",
		price: 1499.99,
		coverImage: {
			alt: "Laptop",
			src: "/laptop.jpg",
		},
	},
	{
		id: "3",
		name: "Running Shoes",
		category: "Sportswear",
		price: 129.99,
		coverImage: {
			alt: "Running Shoes",
			src: "/running_shoes.jpg",
		},
	},
	{
		id: "4",
		name: "Headphones",
		category: "Electronics",
		price: 79.99,
		coverImage: {
			alt: "Headphones",
			src: "/headphones.jpg",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
