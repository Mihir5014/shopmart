type Props = {
    product: {
        id: number;
        title: string;
        image: string;
        price: number;
    }
};
// product card component 
export default function ProductCard({ product }: Props) {
    return (
        <div
            className="bg-gray-900 rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer">

            <div className="w-full h-60 flex items-center justify-center rounded mb-4">
                <img src={product.image}
                    alt={product.title}
                    className="max-h-full object-contain" />
            </div>

            <h3 className="text-sm font-medium truncate mb-2">{product.title}</h3>

            <p className="text-red-600 font-semibold text-lg">${product.price}</p>
        </div>
    )
}
