type ProductListResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export interface Rating {
	rate: number;
	count: number;
}

export const getProductsList = async () => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products?take=20`);
	const productsResponse = (await response.json()) as ProductListResponse[];

	const products = productsResponse.map((product) => {
		return {
			id: product.id,
			name: product.title,
			category: product.category,
			description: product.description,
			price: product.price,
			coverImage: {
				src: product.image,
				alt: product.title,
			},
		};
	});

	return products;
};

export const getProductById = async (id: string) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await response.json()) as ProductListResponse;

	const product = {
		id: productResponse.id,
		name: productResponse.title,
		category: productResponse.category,
		description: productResponse.description,
		price: productResponse.price,
		coverImage: {
			src: productResponse.image,
			alt: productResponse.title,
		},
	};

	return product;
};

export const getProductsListByPage = async (offset: number) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20&offset=${offset}`,
	);
	const productsResponse = (await response.json()) as ProductListResponse[];

	const products = productsResponse.map((product) => {
		return {
			id: product.id,
			name: product.title,
			category: product.category,
			description: product.description,
			price: product.price,
			coverImage: {
				src: product.image,
				alt: product.title,
			},
		};
	});

	return products;
};
