export default function ServiceCard({ title }) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border-2 border-primary text-center font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {title}
    </div>
  );
}
