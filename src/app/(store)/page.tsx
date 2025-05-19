import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProductView from "@/components/ProductView";
import { getAllcategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllcategories();

  return (
    <div>
      <BlackFridayBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductView products={products} categories={categories} />
      </div>
    </div>
  );
}
