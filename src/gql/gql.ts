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
    "query CollectionsGetListBySlug($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.CollectionsGetListBySlugDocument,
    "query GetAllCategories {\n  categories {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}": types.GetAllCategoriesDocument,
    "query GetProductById($id: ID!) {\n  product(id: $id) {\n    ...ProductItem\n  }\n}": types.GetProductByIdDocument,
    "query GetProductCount {\n  products {\n    meta {\n      total\n    }\n  }\n}": types.GetProductCountDocument,
    "query GetProductsListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}": types.GetProductsListBySearchDocument,
    "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}": types.ProductItemFragmentDoc,
    "query GetProductsByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.GetProductsByCategorySlugDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment ProductsListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}": types.ProductsListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetListBySlug($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllCategories {\n  categories {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').GetAllCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductById($id: ID!) {\n  product(id: $id) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').GetProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductCount {\n  products {\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').GetProductCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}"): typeof import('./graphql').GetProductsListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductItemFragmentDoc;
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
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
