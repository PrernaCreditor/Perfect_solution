

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center kiosk-card balloon-cluster">
          <h1 className="text-4xl font-bold text-secondary mb-6 uppercase">
            Marketplace
          </h1>
          
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Perfect Solution products and services are also available through trusted online marketplaces. Shop with confidence on platforms you already know.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary rounded-2xl shadow-xl p-8 text-center kiosk-card">
            <h2 className="text-2xl font-bold text-white mb-4 uppercase">Amazon Store</h2>
            <p className="text-white mb-6 font-medium">Shop our products on Amazon with trusted reviews and fast shipping.</p>
            <button className="bg-secondary text-primary px-8 py-4 rounded-xl font-bold uppercase hover:bg-white hover:text-primary hover:scale-105 transition w-full">
              Visit Our Amazon Store
            </button>
          </div>
          
          <div className="bg-primary rounded-2xl shadow-xl p-8 text-center kiosk-card">
            <h2 className="text-2xl font-bold text-white mb-4 uppercase">eBay Store</h2>
            <p className="text-white mb-6 font-medium">Find our exclusive deals and products on eBay.</p>
            <button className="bg-secondary text-primary px-8 py-4 rounded-xl font-bold uppercase hover:bg-white hover:text-primary hover:scale-105 transition w-full">
              Visit Our eBay Store
            </button>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl shadow-xl p-8 text-center kiosk-card balloon-cluster">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase">
              Shop With Confidence
            </h2>
            
            <p className="text-lg text-white mb-6 font-medium">
              Find our products on trusted online marketplaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Visit Stores
              </button>
              <button className="bg-white text-primary border-2 border-secondary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-secondary hover:text-white transition-all transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}