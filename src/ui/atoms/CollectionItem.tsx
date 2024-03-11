import Link from "next/link";
import NextImage from "next/image";
import { type CollectionFragment } from "@/gql/graphql";

type CollectionItemProps = {
	collectionItem: CollectionFragment;
};

export const CollectionItem = ({ collectionItem }: CollectionItemProps) => {
	return (
		<Link href={`/collections/${collectionItem.slug}`}>
			<div className=" overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
				<NextImage
					src={`/${collectionItem.slug}.jpg`}
					alt=""
					width={300}
					height={200}
					className="h-full w-full object-center p-4 transition-transform hover:scale-105"
				/>
			</div>
			<h2 className="my-2 text-2xl font-semibold">{collectionItem.name}</h2>
		</Link>
	);
};
