type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}
export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  // data fetching of single product
  const {id} = await params;
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!data.ok) throw new Error('Failed to fetch product');

  const productDetail: Product = await data.json();

  return (
    <main className="p-8 max-w-4xl mx-auto flex">

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center m-auto">
        <img src={productDetail.image}
          alt={productDetail.title}
          className="w-full md:w-1/2 h-96 object-contain" />

        <div className="my-auto">
          <h1 className="text-2xl font-bold">{productDetail.title}</h1>
          <p className="text-gray-400 text-sm mt-1">Category: {productDetail.category}</p>
          <p className="text-xl font-semibold mt-4">${productDetail.price}</p>
          <p className="mt-4 text-gray-400">{productDetail.description}</p>
        </div>

      </div>

    </main>
  )
}
