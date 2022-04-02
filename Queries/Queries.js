import { gql } from "@apollo/client";

const QUERY = gql`
{
  categories {
    categoryId
    name
    products {
      productId
      name
      price
      discount
      unitsSold
    }
    subCategories{
      name
      subCategoryId
      categoryId
    }
  }
}
`;


export { QUERY };
