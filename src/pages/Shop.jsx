import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Utensils, Star, ArrowRight, Heart } from "lucide-react";

export default function Shop() {
  const products = [
    { name: "Kingdom Yams", price: "60", description: "Slow-roasted with signature spices and caramel glaze." },
    { name: "Kingdom Potato Salad", price: "60", description: "Creamy, classic recipe with a perfect balance of crunch and zest." },
    { name: "Kingdom Mac & Cheese", price: "55", description: "Five-cheese blend baked to golden, bubbly perfection." },
    { name: "Kingdom Greens & Beans", price: "55", description: "Simmered for hours with smoked seasoning and fresh aromatics." },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Culinary Excellence */}
      <section className="relative pt-16 pb-24 sm:pt-10 sm:pb-24 bg-primary overflow-hidden">
        {/* Abstract Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -skew-x-12 translate-x-20" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white text-secondary px-4 py-1.5 rounded-full mb-6">
                <Utensils size={16} />
                <span className="text-xs font-black uppercase tracking-widest">Premium Catering</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase leading-none">
                Kingdom <br />
                <span className="text-secondary">Side Dishes</span>
              </h1>
              <p className="text-white text-lg sm:text-xl mb-10 leading-relaxed font-light">
                Crafted with care and purpose. We bring the community together
                through quality ingredients and authentic recipes that feel like home.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/contact" className="bg-secondary text-primary px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white transition-all shadow-xl flex items-center gap-2 group">
                  Place Your Order
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] blur-2xl group-hover:bg-secondary/30 transition-all" />
                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-white">
                  <img
                    src="/IMG_20251226_181042.jpg"
                    alt="Kingdom Side Dishes Showcase"
                    className="w-full h-[400px] sm:h-[500px] object-contain bg-black/10 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <div className="flex gap-1 text-secondary mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    {/* <p className="text-white font-bold uppercase tracking-widest">The Perfect Complement</p> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-primary uppercase mb-4 tracking-tighter">Our Signature Menu</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col group relative overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full group-hover:bg-secondary/10 transition-colors" />

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary transition-colors">
                  <ShoppingBag size={24} />
                </div>
                {/* <button className="text-slate-300 hover:text-red-500 transition-colors">
                  <Heart size={20} />
                </button> */}
              </div>

              <h3 className="text-xl font-black text-primary mb-3 uppercase leading-tight">{item.name}</h3>
              <p className="text-balck text-sm mb-6 leading-relaxed flex-grow">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <div>
                  <span className="text-xs font-black text-slate-600 uppercase tracking-widest block">Full Tray</span>
                  <span className="text-3xl font-black text-primary">${item.price}</span>
                </div>
                <button className="bg-secondary p-4 rounded-2xl text-primary shadow-lg shadow-secondary/20 hover:bg-primary hover:text-white transition-all transform hover:rotate-12">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern CTA / Footer Banner */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-24 -translate-x-24" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase">
              Feeding the <span className="text-secondary">Kingdom</span>
            </h2>
            <p className="text-white text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Planning an event or a family gathering? Let us take care of the flavor
              while you focus on the memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-secondary text-primary px-12 py-5 rounded-full font-black text-lg uppercase hover:bg-white hover:scale-105 transition-all shadow-xl">
                Start Order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}