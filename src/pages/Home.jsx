import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-primary">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary rounded-2xl p-12  border-secondary  balloon-cluster">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
              One Platform. Many Opportunities.
            </h2>
            
            <p className="text-lg text-white max-w-4xl mx-auto mb-8 leading-relaxed text-center font-medium">
              Perfect Solution is built to empower individuals and families by providing trusted services, educational resources, and business opportunities—all in one place. Whether you're looking to improve your financial standing, start a business, or learn step-by-step, we're here to support your journey.
            </p>
            
            <div className="flex justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className=" rounded-2xl p-12  border-secondary balloon-cluster">
            <h2 className="text-4xl font-bold text-center text-secondary mb-12 uppercase">
              Our Core Services
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {
                ["Education Services", "Business & Financial Services", "Kingdom Side Dishes"].map((item, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-2xl p-6 sm:p-8 md:p-10  border-secondary text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 kiosk-card relative overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[300px] md:min-h-[350px]"
                  >
                    {(item === "Education Services" || item === "Business & Financial Services" || item === "Kingdom Side Dishes") && (
                      <img 
                        src={item === "Education Services" ? "/education.jpg" : item === "Business & Financial Services" ? "/financial.jpg" : "/IMG_20251226_181042.jpg"} 
                        alt={item === "Education Services" ? "Education Services" : item === "Business & Financial Services" ? "Business & Financial Services" : "Kingdom Side Dishes"} 
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                      />
                    )}
                    <div className="relative z-10 flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-4 uppercase">{item}</h3>
                      <p className="text-white mb-4 font-medium">Comprehensive solution with education and support.</p>
                    </div>
                    <div className="relative z-10 flex justify-center">
                      <Link to={item === "Kingdom Side Dishes" ? "/shop" : "/services"} className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full font-bold uppercase hover:bg-white hover:text-primary transition">
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl p-12 text-center border-secondary balloon-cluster">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Ready to Transform Your Future?
            </h2>
            
            <p className="text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              Join thousands of satisfied customers who have taken control of their financial journey.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="block bg-secondary text-primary px-10 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 min-w-[200px]">
                Start Now
              </Link>
              
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}