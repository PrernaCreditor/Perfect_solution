import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  TrendingUp, 
  BookOpen, 
  Scale, 
  Globe, 
  Car, 
  Trash2, 
  Home, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

// Mapping icons to services for a professional look
const serviceDetails = [
  { name: "Hard Money Lending", icon: <Briefcase className="w-8 h-8" /> },
  { name: "Tradelines", icon: <TrendingUp className="w-8 h-8" /> },
  { name: "Credit Repair Educational Information", icon: <BookOpen className="w-8 h-8" /> },
  { name: "Status Correction & SPC Guidance", icon: <Scale className="w-8 h-8" /> },
  { name: "Passport & Private Status Education", icon: <Globe className="w-8 h-8" /> },
  { name: "Car Wholesaling", icon: <Car className="w-8 h-8" /> },
  { name: "Junk & Bulk Removal", icon: <Trash2 className="w-8 h-8" /> },
  { name: "Buy & Sell Property Services", icon: <Home className="w-8 h-8" />, special: true },
  { name: "Securities Bonding Service", icon: <ShieldCheck className="w-8 h-8" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section: Modern Gradient and Pattern */}
      <section className="relative py-24 px-6 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Our <span className="text-secondary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            We provide a wide range of services designed to help individuals grow financially, personally, and professionally. Each service is delivered with transparency, education, and long-term value in mind.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 -mt-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceDetails.map((service, i) => {
              const linkTo = service.special ? "/buy-sell-property" : "/contact";
              
              return (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-bl-full transition-colors group-hover:bg-red-50" />
                  
                  <div className="text-secondary mb-6 p-3 bg-secondary/10 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Professional assistance combined with expert education to help you navigate {service.name.toLowerCase()} effectively.
                  </p>

                  <div className="mt-auto">
                    <Link 
                      to={linkTo} 
                      className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors"
                    >
                      Learn More 
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20 pt-2 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase relative z-10">
              Ready to elevate your <br/> <span className="text-secondary">financial standing?</span>
            </h2>
            
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Our consultants are ready to build a customized plan tailored to your specific goals.
            </p>
            
            <div className="relative z-10">
              <Link 
                to="/contact" 
                className="inline-block bg-secondary text-primary px-10 py-5 rounded-full font-black text-lg uppercase hover:bg-white transition-all transform hover:scale-105 shadow-xl"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}