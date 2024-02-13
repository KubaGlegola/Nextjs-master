import Image from "next/image";

type ProductCoverImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	sizes?: string;
};

export const ProductCoverImage = ({
	src,
	alt,
	width = 320,
	height = 320,
	sizes = "",
}: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				sizes={sizes}
				className=" h-full w-full object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
