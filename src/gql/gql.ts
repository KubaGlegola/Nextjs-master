/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($cartId: ID!, $productId: String!, $quantity: Int) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartComplete($cartId: ID!) {\n  cartComplete(cartId: $cartId) {\n    id\n  }\n}": types.CartCompleteDocument,
    "mutation CartCreate {\n  cartFindOrCreate(input: {}) {\n    id\n    items {\n      quantity\n      product {\n        ...CartItem\n      }\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "fragment CartItem on Product {\n  id\n  name\n  images {\n    url\n  }\n  price\n}": types.CartItemFragmentDoc,
    "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartSetItemQuantityDocument,
    "query CategoriesGetAll {\n  categories {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}": types.CategoriesGetAllDocument,
    "fragment CollectionItem on Collection {\n  name\n  description\n  slug\n}": types.CollectionItemFragmentDoc,
    "query CollectionsGetAll {\n  collections {\n    data {\n      ...CollectionItem\n    }\n  }\n}": types.CollectionsGetAllDocument,
    "query CollectionsGetListBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.CollectionsGetListBySlugDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetCount {\n  products {\n    meta {\n      total\n    }\n  }\n}": types.ProductGetCountDocument,
    "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n  rating\n}": types.ProductItemFragmentDoc,
    "query GetProductsByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.GetProductsByCategorySlugDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}": types.ProductsGetListBySearchDocument,
    "fragment ProductsListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}": types.ProductsListItemFragmentDoc,
    "mutation ReviewCreate($productId: ID!, $author: String!, $description: String!, $email: String!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    productId: $productId\n    author: $author\n    description: $description\n    email: $email\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "fragment Review on Review {\n  id\n  author\n  description\n  email\n  rating\n  title\n}": types.ReviewFragmentDoc,
    "query ReviewsGet($id: ID!) {\n  product(id: $id) {\n    reviews {\n      ...Review\n    }\n  }\n}": types.ReviewsGetDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: String!, $quantity: Int) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartComplete($cartId: ID!) {\n  cartComplete(cartId: $cartId) {\n    id\n  }\n}"): typeof import('./graphql').CartCompleteDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  cartFindOrCreate(input: {}) {\n    id\n    items {\n      quantity\n      product {\n        ...CartItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItem on Product {\n  id\n  name\n  images {\n    url\n  }\n  price\n}"): typeof import('./graphql').CartItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartSetItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetAll {\n  categories {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionItem on Collection {\n  name\n  description\n  slug\n}"): typeof import('./graphql').CollectionItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetAll {\n  collections {\n    data {\n      ...CollectionItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetListBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetCount {\n  products {\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductGetCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n  rating\n}"): typeof import('./graphql').ProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').GetProductsByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($productId: ID!, $author: String!, $description: String!, $email: String!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    productId: $productId\n    author: $author\n    description: $description\n    email: $email\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Review on Review {\n  id\n  author\n  description\n  email\n  rating\n  title\n}"): typeof import('./graphql').ReviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGet($id: ID!) {\n  product(id: $id) {\n    reviews {\n      ...Review\n    }\n  }\n}"): typeof import('./graphql').ReviewsGetDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
