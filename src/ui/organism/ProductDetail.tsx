import { revalidateTag } from "next/cache";
import { notFound } from "next/navigation";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatMoney } from "@/utils/utils";
import { ProductQuantity } from "@/ui/atoms/ProductQuantity";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { changeCartItemQuantity } from "@/utils/actions";
import { getProductById } from "@/api/products";

export const ProductDetail = async ({ productId }: { productId: string }) => {
	const product = await getProductById(productId);

	if (!product) {
		return notFound();
	}

	async function addProductToCartAction(formData: FormData) {
		"use server";

		if (product) {
			const quantity = formData.get("quantity") || 1;
			const cart = await getOrCreateCart();
			const existingProduct = cart.items.find((item) => item.product.id === product.id);

			if (existingProduct) {
				await changeCartItemQuantity(cart.id, product.id, +quantity + existingProduct.quantity);
			} else {
				await addProductToCart(cart.id, product.id, +quantity);
			}
		}

		revalidateTag("cart");
	}

	return (
		<>
			<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 ">
				{product.images[0] && (
					<ProductCoverImage
						alt={product.name}
						src={product.images[0].url}
						sizes="(min-width: 1024px) 450px, 450px"
					/>
				)}
				<div>
					<h1 className="text-4xl font-bold">{product.name}</h1>
					<h2 className="my-3 text-2xl font-semibold text-gray-700">
						{formatMoney(product.price)}
					</h2>
					<p className="text-lg">{product.description}</p>
					<form action={addProductToCartAction} className="mt-4 flex gap-4">
						<ProductQuantity />
						<AddToCartButton />
					</form>
				</div>
			</div>
		</>
	);
};
