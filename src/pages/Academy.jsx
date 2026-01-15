

export default function CreditorAcademy() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center kiosk-card balloon-cluster">
          <h1 className="text-4xl font-bold text-secondary mb-6 uppercase">
            Creditor Academy
          </h1>
          
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Creditor Academy is our educational platform designed to help individuals understand credit, financial literacy, and private education—one step at a time.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-secondary mb-6 text-center uppercase">
            We focus on:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary rounded-2xl shadow-lg p-6 border-2 border-secondary text-center font-semibold uppercase kiosk-card">
              Credit education & awareness
            </div>
            <div className="bg-primary rounded-2xl shadow-lg p-6 border-2 border-secondary text-center font-semibold uppercase kiosk-card">
              Financial responsibility
            </div>
            <div className="bg-primary rounded-2xl shadow-lg p-6 border-2 border-secondary text-center font-semibold uppercase kiosk-card">
              Status education
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto border-2 border-secondary kiosk-card balloon-cluster">
          <p className="text-primary text-center font-bold">
            All information provided is for educational purposes only.
          </p>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl shadow-xl p-8 text-center kiosk-card balloon-cluster">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase">
              Start Learning Today
            </h2>
            
            <p className="text-lg text-white mb-6 font-medium">
              Join our educational platform and improve your financial literacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Enroll Now
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