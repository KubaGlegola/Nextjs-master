export type ProductItemType = {
	product: {
		id: string;
		category: string;
		name: string;
		price: number;
		coverImage: {
			src: string;
			alt: string;
		};
	};
};
