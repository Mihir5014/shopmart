
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
            <div
              key={product.id}
              className="bg-gray-900 rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer">

              <div className="w-full h-60 flex items-center justify-center rounded mb-4">
                <img src={product.image}
                  alt={product.title}
                  className="max-h-full object-contai" />
              </div>

              <h3 className="text-sm font-medium truncate mb-2">{product.title}</h3>

              <p className="text-blue-600 font-semibold text-lg">${product.price}</p>
            </div>

          ))
        }
      </div></div>
  );
}


