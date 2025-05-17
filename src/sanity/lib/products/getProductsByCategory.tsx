import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsByCategory = async (categorySlug: string) => {
  const PRODUCT_BY_CTEGORY_QUERY = defineQuery(`
          *[
              _type == "product"
              && references(*[_type == "category" && slug.current == $categorySlug]._id)
          ] | order(name asc)
      
      `)

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_CTEGORY_QUERY,
      params: { categorySlug },
    });
    return product.data || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
}