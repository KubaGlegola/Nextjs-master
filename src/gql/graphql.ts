/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = Node & {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items: CartItemsConnection;
  updatedAt: Scalars['DateTime']['output'];
};


export type CartItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CartAddItemInput = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type CartAddItemPayload = {
  cart: Cart;
};

export type CartChangeItemQuantityInput = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type CartChangeItemQuantityPayload = {
  cart: Cart;
};

export type CartCompleteInput = {
  id: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};

export type CartCompletePayload = {
  cart: Order;
};

export type CartFindOrCreateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  items?: InputMaybe<Array<CartItemInput>>;
};

export type CartFindOrCreatePayload = {
  cart: Cart;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CartItemsConnection = {
  edges: Array<CartItemsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CartItemsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: CartItem;
};

export type CartRemoveItemInput = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type CartRemoveItemPayload = {
  cart: Cart;
};

export type Category = Node & {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: CategoryProductsConnection;
  slug: Scalars['String']['output'];
};


export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryProductsConnection = {
  edges: Array<CategoryProductsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CategoryProductsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Product;
};

export type Collection = Node & {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: CollectionImagesConnection;
  name: Scalars['String']['output'];
  products: CollectionProductsConnection;
  slug: Scalars['String']['output'];
};


export type CollectionImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionImage = Node & {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type CollectionImagesConnection = {
  edges: Array<CollectionImagesConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionImagesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: CollectionImage;
};

export type CollectionProductsConnection = {
  edges: Array<CollectionProductsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionProductsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Product;
};

export type Mutation = {
  cartAddItem: CartAddItemPayload;
  cartChangeItemQuantity: CartChangeItemQuantityPayload;
  cartComplete: CartCompletePayload;
  cartFindOrCreate: CartFindOrCreatePayload;
  cartRemoveItem: CartRemoveItemPayload;
  reviewCreate: ReviewCreatePayload;
};


export type MutationCartAddItemArgs = {
  input: CartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  input: CartChangeItemQuantityInput;
};


export type MutationCartCompleteArgs = {
  input: CartCompleteInput;
};


export type MutationCartFindOrCreateArgs = {
  input: CartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  input: CartRemoveItemInput;
};


export type MutationReviewCreateArgs = {
  input: ReviewCreateInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Order = Node & {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = Node & {
  categories: ProductCategoriesConnection;
  collections: ProductCollectionsConnection;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: ProductImagesConnection;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: ProductReviewsConnection;
  slug: Scalars['String']['output'];
};


export type ProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCategoriesConnection = {
  edges: Array<ProductCategoriesConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProductCategoriesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Category;
};

export type ProductCollectionsConnection = {
  edges: Array<ProductCollectionsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProductCollectionsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Collection;
};

export type ProductImage = Node & {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductImagesConnection = {
  edges: Array<ProductImagesConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProductImagesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ProductImage;
};

export type ProductReviewsConnection = {
  edges: Array<ProductReviewsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProductReviewsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Review;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: QueryCategoriesConnection;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: QueryCollectionsConnection;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  order?: Maybe<Order>;
  orders: QueryOrdersConnection;
  product?: Maybe<Product>;
  products: QueryProductsConnection;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCategoriesConnection = {
  edges: Array<QueryCategoriesConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QueryCategoriesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Category;
};

export type QueryCollectionsConnection = {
  edges: Array<QueryCollectionsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QueryCollectionsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Collection;
};

export type QueryOrdersConnection = {
  edges: Array<QueryOrdersConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QueryOrdersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Order;
};

export type QueryProductsConnection = {
  edges: Array<QueryProductsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QueryProductsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Product;
};

export type Review = Node & {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product?: Maybe<Node>;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewCreateInput = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type ReviewCreatePayload = {
  review: Review;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CartFragment = { id: string, items: { edges: Array<{ node: { quantity: number, product: { id: string, name: string, price: number, images: { edges: Array<{ node: { url: string, alt: string } }> } } } }> } };

export type CollectionFragment = { id: string, name: string, description: string, slug: string };

export type ProductFragment = { id: string, name: string, price: number, rating?: number | null, description: string, images: { edges: Array<{ node: { url: string } }> }, categories: { edges: Array<{ node: { name: string, slug: string } }> }, reviews: { totalCount: number, edges: Array<{ node: { id: string, author: string, title: string, description: string, rating: number, email: string } }> } };

export type ProductsListItemFragment = { id: string, slug: string, name: string, rating?: number | null, price: number, categories: { edges: Array<{ node: { name: string } }> }, images: { edges: Array<{ node: { url: string } }> } };

export type ReviewFragment = { id: string, author: string, title: string, description: string, rating: number, email: string };

export type CartAddItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartAddItemMutation = { cartAddItem: { cart: { id: string } } };

export type CartChangeItemQuantityMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartChangeItemQuantityMutation = { cartChangeItemQuantity: { cart: { id: string } } };

export type CartCompleteMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
}>;


export type CartCompleteMutation = { cartComplete: { cart: { id: string, status: OrderStatus } } };

export type CartFindOrCreateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CartFindOrCreateMutation = { cartFindOrCreate: { cart: { id: string, items: { edges: Array<{ node: { quantity: number, product: { id: string, name: string, price: number, images: { edges: Array<{ node: { url: string, alt: string } }> } } } }> } } } };

export type CartRemoveItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveItemMutation = { cartRemoveItem: { cart: { id: string } } };

export type ReviewCreateMutationVariables = Exact<{
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type ReviewCreateMutation = { reviewCreate: { review: { id: string } } };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: { edges: Array<{ node: { quantity: number, product: { id: string, name: string, price: number, images: { edges: Array<{ node: { url: string, alt: string } }> } } } }> } } | null };

export type CategoryGetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryGetAllQuery = { categories: { edges: Array<{ node: { id: string, name: string, slug: string } }> } };

export type CollectionsGetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetAllQuery = { collections: { edges: Array<{ node: { id: string, name: string, description: string, slug: string } }> } };

export type ProductGetByIdQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, price: number, rating?: number | null, description: string, images: { edges: Array<{ node: { url: string } }> }, categories: { edges: Array<{ node: { name: string, slug: string } }> }, reviews: { totalCount: number, edges: Array<{ node: { id: string, author: string, title: string, description: string, rating: number, email: string } }> } } | null };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetByCategorySlugQuery = { category?: { name: string, products: { totalCount: number, edges: Array<{ node: { id: string, slug: string, name: string, rating?: number | null, price: number, categories: { edges: Array<{ node: { name: string } }> }, images: { edges: Array<{ node: { url: string } }> } } }> } } | null };

export type ProductsGetByCollectionSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetByCollectionSlugQuery = { collection?: { id: string, name: string, products: { totalCount: number, edges: Array<{ node: { id: string, slug: string, name: string, rating?: number | null, price: number, categories: { edges: Array<{ node: { name: string } }> }, images: { edges: Array<{ node: { url: string } }> } } }> } } | null };

export type ProductsGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SortDirection>;
  orderBy?: InputMaybe<ProductSortBy>;
}>;


export type ProductsGetListQuery = { products: { totalCount: number, edges: Array<{ node: { id: string, slug: string, name: string, rating?: number | null, price: number, categories: { edges: Array<{ node: { name: string } }> }, images: { edges: Array<{ node: { url: string } }> } } }> } };

export type ProductsGetListBySearchQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SortDirection>;
  orderBy?: InputMaybe<ProductSortBy>;
}>;


export type ProductsGetListBySearchQuery = { products: { totalCount: number, edges: Array<{ node: { id: string, slug: string, name: string, rating?: number | null, price: number, categories: { edges: Array<{ node: { name: string } }> }, images: { edges: Array<{ node: { url: string } }> } } }> } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Cart {
  id
  items {
    edges {
      node {
        product {
          id
          name
          price
          images {
            edges {
              node {
                url
                alt
              }
            }
          }
        }
        quantity
      }
    }
  }
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const CollectionFragmentDoc = new TypedDocumentString(`
    fragment Collection on Collection {
  id
  name
  description
  slug
}
    `, {"fragmentName":"Collection"}) as unknown as TypedDocumentString<CollectionFragment, unknown>;
export const ReviewFragmentDoc = new TypedDocumentString(`
    fragment Review on Review {
  id
  author
  title
  description
  rating
  email
}
    `, {"fragmentName":"Review"}) as unknown as TypedDocumentString<ReviewFragment, unknown>;
export const ProductFragmentDoc = new TypedDocumentString(`
    fragment Product on Product {
  id
  name
  price
  rating
  description
  images {
    edges {
      node {
        url
      }
    }
  }
  categories {
    edges {
      node {
        name
        slug
      }
    }
  }
  reviews {
    totalCount
    edges {
      node {
        ...Review
      }
    }
  }
}
    fragment Review on Review {
  id
  author
  title
  description
  rating
  email
}`, {"fragmentName":"Product"}) as unknown as TypedDocumentString<ProductFragment, unknown>;
export const ProductsListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductsListItem on Product {
  id
  slug
  name
  rating
  price
  categories {
    edges {
      node {
        name
      }
    }
  }
  images {
    edges {
      node {
        url
      }
    }
  }
}
    `, {"fragmentName":"ProductsListItem"}) as unknown as TypedDocumentString<ProductsListItemFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation cartAddItem($cartId: ID!, $productId: ID!, $quantity: Int!) {
  cartAddItem(input: {id: $cartId, productId: $productId, quantity: $quantity}) {
    cart {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(
    input: {id: $cartId, productId: $productId, quantity: $quantity}
  ) {
    cart {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CartChangeItemQuantityMutation, CartChangeItemQuantityMutationVariables>;
export const CartCompleteDocument = new TypedDocumentString(`
    mutation CartComplete($cartId: ID!, $userEmail: String!) {
  cartComplete(input: {id: $cartId, userEmail: $userEmail}) {
    cart {
      id
      status
    }
  }
}
    `) as unknown as TypedDocumentString<CartCompleteMutation, CartCompleteMutationVariables>;
export const CartFindOrCreateDocument = new TypedDocumentString(`
    mutation CartFindOrCreate($id: ID) {
  cartFindOrCreate(input: {id: $id}) {
    cart {
      id
      items {
        edges {
          node {
            product {
              id
              name
              price
              images {
                edges {
                  node {
                    url
                    alt
                  }
                }
              }
            }
            quantity
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartFindOrCreateMutation, CartFindOrCreateMutationVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($cartId: ID!, $productId: ID!) {
  cartRemoveItem(input: {id: $cartId, productId: $productId}) {
    cart {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {
  reviewCreate(
    input: {author: $author, description: $description, email: $email, productId: $productId, rating: $rating, title: $title}
  ) {
    review {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    id
    items {
      edges {
        node {
          product {
            id
            name
            price
            images {
              edges {
                node {
                  url
                  alt
                }
              }
            }
          }
          quantity
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CategoryGetAllDocument = new TypedDocumentString(`
    query CategoryGetAll {
  categories {
    edges {
      node {
        id
        name
        slug
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CategoryGetAllQuery, CategoryGetAllQueryVariables>;
export const CollectionsGetAllDocument = new TypedDocumentString(`
    query CollectionsGetAll {
  collections {
    edges {
      node {
        ...Collection
      }
    }
  }
}
    fragment Collection on Collection {
  id
  name
  description
  slug
}`) as unknown as TypedDocumentString<CollectionsGetAllQuery, CollectionsGetAllQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($slug: String!) {
  product(slug: $slug) {
    ...Product
  }
}
    fragment Product on Product {
  id
  name
  price
  rating
  description
  images {
    edges {
      node {
        url
      }
    }
  }
  categories {
    edges {
      node {
        name
        slug
      }
    }
  }
  reviews {
    totalCount
    edges {
      node {
        ...Review
      }
    }
  }
}
fragment Review on Review {
  id
  author
  title
  description
  rating
  email
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetByCategorySlug($first: Int, $skip: Int, $slug: String) {
  category(slug: $slug) {
    name
    products(first: $first, skip: $skip) {
      totalCount
      edges {
        node {
          ...ProductsListItem
        }
      }
    }
  }
}
    fragment ProductsListItem on Product {
  id
  slug
  name
  rating
  price
  categories {
    edges {
      node {
        name
      }
    }
  }
  images {
    edges {
      node {
        url
      }
    }
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetByCollectionSlugDocument = new TypedDocumentString(`
    query ProductsGetByCollectionSlug($slug: String) {
  collection(slug: $slug) {
    id
    name
    products {
      totalCount
      edges {
        node {
          ...ProductsListItem
        }
      }
    }
  }
}
    fragment ProductsListItem on Product {
  id
  slug
  name
  rating
  price
  categories {
    edges {
      node {
        name
      }
    }
  }
  images {
    edges {
      node {
        url
      }
    }
  }
}`) as unknown as TypedDocumentString<ProductsGetByCollectionSlugQuery, ProductsGetByCollectionSlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($first: Int, $skip: Int, $order: SortDirection, $orderBy: ProductSortBy) {
  products(first: $first, skip: $skip, order: $order, orderBy: $orderBy) {
    totalCount
    edges {
      node {
        ...ProductsListItem
      }
    }
  }
}
    fragment ProductsListItem on Product {
  id
  slug
  name
  rating
  price
  categories {
    edges {
      node {
        name
      }
    }
  }
  images {
    edges {
      node {
        url
      }
    }
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListBySearchDocument = new TypedDocumentString(`
    query ProductsGetListBySearch($first: Int, $skip: Int, $search: String, $order: SortDirection, $orderBy: ProductSortBy) {
  products(
    first: $first
    skip: $skip
    search: $search
    order: $order
    orderBy: $orderBy
  ) {
    totalCount
    edges {
      node {
        ...ProductsListItem
      }
    }
  }
}
    fragment ProductsListItem on Product {
  id
  slug
  name
  rating
  price
  categories {
    edges {
      node {
        name
      }
    }
  }
  images {
    edges {
      node {
        url
      }
    }
  }
}`) as unknown as TypedDocumentString<ProductsGetListBySearchQuery, ProductsGetListBySearchQueryVariables>;