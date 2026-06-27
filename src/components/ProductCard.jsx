function ProductCard({ title, price, image }) {
  return (
    <div className="bg-white border shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition group">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="p-5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 mt-1">₹{price}</p>

        <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;