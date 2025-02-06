export default function ProductCard({ title, price }) {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-700">Price: {price}</p>
            <button className="bg-green-500 text-white p-2 mt-2 rounded">Add to Cart</button>
        </div>
    );
}
