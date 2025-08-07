import Link from "next/link";
import ProductCard from "./components/ProductCard";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

export default async function Home() {

  const data = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await data.json()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold mb-6 text-center">Product Listing</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))
        }
      </div>
    </div>
  );
}


