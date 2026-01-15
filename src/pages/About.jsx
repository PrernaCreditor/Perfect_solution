import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-primary">
      {/* About Section */}
      <section className="py-8 px-6 bg-primary">
        <div className="max-w-5xl mx-auto  rounded-2xl p-6 md:p-10 balloon-cluster">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center text-gray-800 p-4 ">
                <img src="/about.jpg" 
                alt="About Perfect Solution"
                className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 uppercase text-center md:text-left">
                About Perfect Solution
              </h1>
              
              <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed font-medium text-center md:text-left">
                We're on a mission to empower everyone to go after their dreams by offering services, sharing information, and creating opportunities for growth.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-2xl text-gray-800 ">
                  <h3 className="text-2xl font-bold text-primary mb-2 uppercase">Our Mission</h3>
                  <p className="text-gray-800">
                    To empower everyone to go after their dreams by offering services, sharing information, and creating opportunities for growth.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl text-gray-800 ">
                  <h3 className="text-2xl font-bold text-primary mb-2 uppercase">Our Vision</h3>
                  <p className="text-gray-800">
                    We believe every journey starts with one perfect thought. Through education, service, and community, we aim to help individuals build a better future—step by step.
                  </p>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <Link to="/contact" className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className=" rounded-2xl p-12  border-secondary balloon-cluster">
            <h2 className="text-4xl font-bold text-center text-secondary mb-12 uppercase">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {
                ["Empowerment", "Education", "Growth"].map((item, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-2xl p-10  border-secondary text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 kiosk-card relative overflow-hidden flex flex-col justify-between min-h-[300px]"
                  >
                    {(item === "Empowerment" || item === "Education" || item === "Growth") && (
                      <img 
                        src={item === "Empowerment" ? "/education.jpg" : item === "Education" ? "/financial.jpg" : "/IMG_20251226_181042.jpg"} 
                        alt={item === "Empowerment" ? "Empowerment" : item === "Education" ? "Education" : "Growth"} 
                        className="absolute inset-0 w-full h-full object-cover opacity-20"
                      />
                    )}
                    <div className="relative z-10 flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-4 uppercase">{item}</h3>
                      <p className="text-white mb-4 font-medium">
                        {item === "Empowerment" && "Building confidence through knowledge and opportunity"}
                        {item === "Education" && "Providing tools for financial literacy and growth"}
                        {item === "Growth" && "Fostering personal and professional development"}
                      </p>
                    </div>
                    <div className="relative z-10 flex justify-center">
                      <Link to="/contact" className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full font-bold uppercase hover:bg-white hover:text-primary transition">
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
      
      {/* Topics Section */}
      <section className="py-16 px-6 bg-white">
        <div className="p-8  kiosk-card balloon-cluster">
            <h2 className="text-4xl font-bold text-center text-black mb-12 uppercase">
              What We Focus On
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="rounded-2xl overflow-hidden mb-6 sm:mb-0">
                <div className="bg-white  w-full h-40 sm:h-48 flex items-center justify-center text-gray-700 relative">
                  <img 
                    src="/education.jpg" 
                    alt="Education Services" 
                    className="absolute inset-0 w-full h-full "
                  />
                  
                </div>
                <div className="p-6 bg-white">
                  <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold mb-3 uppercase">EDUCATION</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 uppercase">Education Services </h3>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden  mb-6 sm:mb-0">
                <div className="bg-white w-full h-40 sm:h-48 flex items-center justify-center text-gray-700 relative">
                  <img 
                    src="/financial.jpg" 
                    alt="Financial Services" 
                    className="absolute inset-0 w-full h-full "
                  />
                   </div>
                <div className="p-6 bg-white">
                  <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold mb-3 uppercase">SERVICES</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 uppercase">Business & Financial</h3>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden  mb-6 sm:mb-0">
                <div className="bg-white w-full h-40 sm:h-48 flex items-center justify-center text-gray-700 relative">
                  <img 
                    src="/kindom.png" 
                    alt="Kingdom Side Dishes" 
                    className="absolute inset-0 w-full h-full "
                  />
                  
                  </div>
                <div className="p-6 bg-white">
                  <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold mb-3 uppercase">BUSINESS</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 uppercase">Kingdom Side Dishes</h3>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                View More
              </Link>
            </div>
          </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary">
        <div className=" rounded-2xl shadow-xl p-8 text-center kiosk-card balloon-cluster">
            <h2 className="text-4xl font-bold text-secondary mb-4 uppercase">
              Ready to Learn More?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Discover how Perfect Solution can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="block bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </Link>
             
            </div>
          </div>
      </section>
      
    </div>
  );
}