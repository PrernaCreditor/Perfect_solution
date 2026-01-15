export default function ProductCard({ name }) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border-2 border-primary text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-bold mb-4">{name}</h3>
      <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:opacity-90 transition">
        Buy Now
      </button>
    </div>
  );
}
