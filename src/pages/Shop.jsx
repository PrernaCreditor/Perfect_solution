import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Shop() {
  const products = ["Kingdom Yams", "Kingdom Potato Salad", "Kingdom Mac & Cheese", "Kingdom Greens & String Beans"];

  return (
    <div className="min-h-screen bg-white">
     
      <section className="py-12 sm:py-16 balloon-cluster bg-primary ">
          <div className="max-w-6xl mx-auto px-6">
          <div className=" rounded-3xl p-6 sm:p-8  transform transition-all duration-500 hover:shadow-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-center uppercase tracking-wide">
            Kingdom Side Dishes
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-100 shadow-lg transform transition-transform duration-500 hover:scale-105">
              <img 
                src="/IMG_20251226_181042.jpg" 
                alt="Kingdom Side Dishes" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-base sm:text-lg text-white mb-4 sm:mb-6 font-medium leading-relaxed">
                Our Kingdom Side Dishes are crafted with care and purpose. We believe food brings people together, and our dishes reflect quality, consistency, and community.
              </p>
              
              <Link to="/contact" className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Order Now
              </Link>
            </div>
          </div>
          </div>
          </div>
        </section>
        
      <section className="py-16 px-6 bg-white rounded-3xl p-6 sm:p-8  border-secondary  shadow-2xl balloon-cluster mt-8 transform transition-all duration-500 hover:shadow-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 sm:mb-8 text-center uppercase tracking-wide">Our Menu</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 sm:p-6  border-secondary shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 kiosk-card flex flex-col min-h-[200px] sm:min-h-[220px] hover:scale-105">
                <h3 className="text-lg sm:text-xl font-bold text-center text-primary mb-2 uppercase">{item}</h3>
                <p className="text-gray-800 text-center text-xs sm:text-sm mb-3 sm:mb-4 flex-grow font-medium">Delicious and made with quality ingredients</p>
                <div className="text-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-secondary">${i === 0 ? '60' : i === 1 ? '60' : i === 2 ? '55' : '55'}</span>
                </div>
                <div className="flex justify-center">
                  <button className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full font-bold uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary">
        <div className=" ">
          <div className="bg-primary p-8 text-center ">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase">
              Order Today
            </h2>
            
            <p className="text-lg text-white mb-6 font-medium">
              Try our delicious Kingdom Side Dishes now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="block bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}