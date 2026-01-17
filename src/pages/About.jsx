import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, Rocket, ArrowUpRight } from "lucide-react";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Overlapping Layout */}
      <section className="relative py-20 px-6 pt-10 bg-primary overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white pl-3 font-bold tracking-widest uppercase text-sm mb-4 block">
                Since Day One
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
                About <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-50 to-yellow-200">
                  Perfect Solution
                </span>
              </h1>
              <p className="text-white text-lg md:text-xl mb-8 leading-relaxed font-light">
                We are more than a service provider. We are a dedicated partner in your journey toward financial freedom, personal excellence, and professional mastery.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex gap-4 items-start bg-white/20 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                  <div className="p-3 bg-secondary/20 rounded-lg text-white"><Target size={24} /></div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wide">Our Mission</h3>
                    <p className="text-white text-sm">Empowering dreams through actionable intelligence and strategic growth opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white/20 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                  <div className="p-3 bg-secondary/20 rounded-lg text-white"><Eye size={24} /></div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wide">Our Vision</h3>
                    <p className="text-white text-sm">Building a future where every journey starts with a perfect, educated step forward.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-secondary/20">
                <img src="/about.jpg" alt="Team Work" className="w-full h-[500px] object-cover" />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-primary font-black text-4xl">100%</p>
                <p className="text-primary/80 font-bold text-xs uppercase tracking-tighter">Commitment to Growth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Interactive Cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase mb-4">Our Foundations</h2>
            <div className="w-24 h-2 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Empowerment", text: "Building confidence through shared knowledge.", icon: <Rocket />, img: "/education.jpg" },
              { title: "Education", text: "Providing the tools for long-term literacy.", icon: <Award />, img: "/financial.jpg" },
              { title: "Growth", text: "Fostering constant development in all sectors.", icon: <Shield />, img: "/IMG_20251226_181042.jpg" }
            ].map((val, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.2 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg"
              >
                <img src={val.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={val.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-800/70 to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-secondary mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    {val.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase mb-2">{val.title}</h3>
                  <p className="text-white mb-6">{val.text}</p>
                  <Link to="/contact" className="text-red-200 font-bold text-sm uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                    Get Details <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Area - Modern Grid */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-primary uppercase mb-4">Strategic Focus</h2>
              <p className="text-slate-600">We specialize in diverse sectors to provide a holistic ecosystem for our clients, ranging from finance to lifestyle businesses.</p>
            </div>
            <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase hover:bg-secondary hover:text-primary transition-all shadow-lg">
              Explore All Focus Areas
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Education", title: "Global Literacy", img: "/education.jpg" },
              { label: "Services", title: "Business & Finance", img: "/financial.jpg" },
              { label: "Business", title: "Kingdom Side Dishes", img: "/kindom.png" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <div className="h-48 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                </div>
                <div className="p-8 text-center">
                  <span className="text-secondary font-black text-xs uppercase tracking-widest">{item.label}</span>
                  <h3 className="text-xl font-bold text-primary mt-2 uppercase">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist & Bold */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center border-2 border-secondary/30 rounded-[3rem] py-16 px-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-secondary/10 rounded-full -translate-x-12 -translate-y-12" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
            Start Your <span className="text-secondary">Perfect</span> Journey
          </h2>
          <p className="text-white mb-10 text-lg max-w-lg mx-auto font-light">
            Don't wait for the right moment. Create it with our professional guidance and services.
          </p>
          <Link to="/contact" className="inline-block bg-secondary text-primary px-12 py-5 rounded-full font-black text-lg uppercase hover:scale-105 hover:bg-white transition-all shadow-2xl">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}