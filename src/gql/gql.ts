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
    "fragment Cart on Cart {\n  id\n  items {\n    edges {\n      node {\n        product {\n          id\n          name\n          price\n          images {\n            edges {\n              node {\n                url\n                alt\n              }\n            }\n          }\n        }\n        quantity\n      }\n    }\n  }\n}": types.CartFragmentDoc,
    "fragment Collection on Collection {\n  id\n  name\n  description\n  slug\n}": types.CollectionFragmentDoc,
    "fragment Product on Product {\n  id\n  name\n  price\n  rating\n  description\n  images {\n    edges {\n      node {\n        url\n      }\n    }\n  }\n  categories {\n    edges {\n      node {\n        name\n        slug\n      }\n    }\n  }\n  reviews {\n    totalCount\n    edges {\n      node {\n        ...Review\n      }\n    }\n  }\n}": types.ProductFragmentDoc,
    "fragment ProductsListItem on Product {\n  id\n  slug\n  name\n  rating\n  price\n  categories {\n    edges {\n      node {\n        name\n      }\n    }\n  }\n  images {\n    edges {\n      node {\n        url\n      }\n    }\n  }\n}": types.ProductsListItemFragmentDoc,
    "fragment Review on Review {\n  id\n  author\n  title\n  description\n  rating\n  email\n}": types.ReviewFragmentDoc,
    "mutation cartAddItem($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartAddItem(input: {id: $cartId, productId: $productId, quantity: $quantity}) {\n    cart {\n      id\n    }\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(\n    input: {id: $cartId, productId: $productId, quantity: $quantity}\n  ) {\n    cart {\n      id\n    }\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartComplete($cartId: ID!, $userEmail: String!) {\n  cartComplete(input: {id: $cartId, userEmail: $userEmail}) {\n    cart {\n      id\n      status\n    }\n  }\n}": types.CartCompleteDocument,
    "mutation CartFindOrCreate($id: ID) {\n  cartFindOrCreate(input: {id: $id}) {\n    cart {\n      id\n      items {\n        edges {\n          node {\n            product {\n              id\n              name\n              price\n              images {\n                edges {\n                  node {\n                    url\n                    alt\n                  }\n                }\n              }\n            }\n            quantity\n          }\n        }\n      }\n    }\n  }\n}": types.CartFindOrCreateDocument,
    "mutation CartRemoveItem($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(input: {id: $cartId, productId: $productId}) {\n    cart {\n      id\n    }\n  }\n}": types.CartRemoveItemDocument,
    "mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    input: {author: $author, description: $description, email: $email, productId: $productId, rating: $rating, title: $title}\n  ) {\n    review {\n      id\n    }\n  }\n}": types.ReviewCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      edges {\n        node {\n          product {\n            id\n            name\n            price\n            images {\n              edges {\n                node {\n                  url\n                  alt\n                }\n              }\n            }\n          }\n          quantity\n        }\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "query CategoryGetAll {\n  categories {\n    edges {\n      node {\n        id\n        name\n        slug\n      }\n    }\n  }\n}": types.CategoryGetAllDocument,
    "query CollectionsGetAll {\n  collections {\n    edges {\n      node {\n        ...Collection\n      }\n    }\n  }\n}": types.CollectionsGetAllDocument,
    "query ProductGetById($slug: String!) {\n  product(slug: $slug) {\n    ...Product\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetByCategorySlug($first: Int, $skip: Int, $slug: String) {\n  category(slug: $slug) {\n    name\n    products(first: $first, skip: $skip) {\n      totalCount\n      edges {\n        node {\n          ...ProductsListItem\n        }\n      }\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String) {\n  collection(slug: $slug) {\n    id\n    name\n    products {\n      totalCount\n      edges {\n        node {\n          ...ProductsListItem\n        }\n      }\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetList($first: Int, $skip: Int, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(first: $first, skip: $skip, order: $order, orderBy: $orderBy) {\n    totalCount\n    edges {\n      node {\n        ...ProductsListItem\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListBySearch($first: Int, $skip: Int, $search: String, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(\n    first: $first\n    skip: $skip\n    search: $search\n    order: $order\n    orderBy: $orderBy\n  ) {\n    totalCount\n    edges {\n      node {\n        ...ProductsListItem\n      }\n    }\n  }\n}": types.ProductsGetListBySearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Cart {\n  id\n  items {\n    edges {\n      node {\n        product {\n          id\n          name\n          price\n          images {\n            edges {\n              node {\n                url\n                alt\n              }\n            }\n          }\n        }\n        quantity\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Collection on Collection {\n  id\n  name\n  description\n  slug\n}"): typeof import('./graphql').CollectionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Product on Product {\n  id\n  name\n  price\n  rating\n  description\n  images {\n    edges {\n      node {\n        url\n      }\n    }\n  }\n  categories {\n    edges {\n      node {\n        name\n        slug\n      }\n    }\n  }\n  reviews {\n    totalCount\n    edges {\n      node {\n        ...Review\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  slug\n  name\n  rating\n  price\n  categories {\n    edges {\n      node {\n        name\n      }\n    }\n  }\n  images {\n    edges {\n      node {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Review on Review {\n  id\n  author\n  title\n  description\n  rating\n  email\n}"): typeof import('./graphql').ReviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation cartAddItem($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartAddItem(input: {id: $cartId, productId: $productId, quantity: $quantity}) {\n    cart {\n      id\n    }\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(\n    input: {id: $cartId, productId: $productId, quantity: $quantity}\n  ) {\n    cart {\n      id\n    }\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartComplete($cartId: ID!, $userEmail: String!) {\n  cartComplete(input: {id: $cartId, userEmail: $userEmail}) {\n    cart {\n      id\n      status\n    }\n  }\n}"): typeof import('./graphql').CartCompleteDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($id: ID) {\n  cartFindOrCreate(input: {id: $id}) {\n    cart {\n      id\n      items {\n        edges {\n          node {\n            product {\n              id\n              name\n              price\n              images {\n                edges {\n                  node {\n                    url\n                    alt\n                  }\n                }\n              }\n            }\n            quantity\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(input: {id: $cartId, productId: $productId}) {\n    cart {\n      id\n    }\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    input: {author: $author, description: $description, email: $email, productId: $productId, rating: $rating, title: $title}\n  ) {\n    review {\n      id\n    }\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      edges {\n        node {\n          product {\n            id\n            name\n            price\n            images {\n              edges {\n                node {\n                  url\n                  alt\n                }\n              }\n            }\n          }\n          quantity\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetAll {\n  categories {\n    edges {\n      node {\n        id\n        name\n        slug\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetAll {\n  collections {\n    edges {\n      node {\n        ...Collection\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($slug: String!) {\n  product(slug: $slug) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($first: Int, $skip: Int, $slug: String) {\n  category(slug: $slug) {\n    name\n    products(first: $first, skip: $skip) {\n      totalCount\n      edges {\n        node {\n          ...ProductsListItem\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String) {\n  collection(slug: $slug) {\n    id\n    name\n    products {\n      totalCount\n      edges {\n        node {\n          ...ProductsListItem\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(first: $first, skip: $skip, order: $order, orderBy: $orderBy) {\n    totalCount\n    edges {\n      node {\n        ...ProductsListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($first: Int, $skip: Int, $search: String, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(\n    first: $first\n    skip: $skip\n    search: $search\n    order: $order\n    orderBy: $orderBy\n  ) {\n    totalCount\n    edges {\n      node {\n        ...ProductsListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
