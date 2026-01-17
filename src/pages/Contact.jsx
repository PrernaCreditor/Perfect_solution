import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ArrowLeft
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    if (!ACCESS_KEY) {
      setSubmitStatus({
        type: "error",
        message: "Configuration Error: Access Key Missing.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `${formData.subject} - New Inquiry`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus({ type: "success", message: "Message sent! We'll be in touch shortly." });
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: result.message || "Submission failed." });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-primary pt-20 pb-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 tracking-tight">
            Get In <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Have a question about our services or need expert guidance? 
            Our team is here to provide the perfect solution.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <h2 className="text-2xl font-black text-primary uppercase mb-8 border-b border-slate-100 pb-4">
                Information
              </h2>
              
              <div className="space-y-8">
                <ContactDetail 
                  icon={<Mail className="text-secondary" />} 
                  title="Email Us" 
                  content="Support (Coming Soon)" 
                />
                <ContactDetail 
                  icon={<Phone className="text-secondary" />} 
                  title="Call Us" 
                  content="Direct Line (Coming Soon)" 
                />
                <ContactDetail 
                  icon={<MapPin className="text-secondary" />} 
                  title="Visit Office" 
                  content={<>600 1st Ave, Ste 102 – 2475 <br/> Seattle, WA 98104</>} 
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-secondary rounded-[2rem] p-8 text-primary shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} />
                <h3 className="font-black uppercase tracking-wider">Business Hours</h3>
              </div>
              <div className="space-y-2 font-bold opacity-90">
                <p className="flex justify-between"><span>Mon - Fri:</span> <span>9AM - 6PM</span></p>
                <p className="flex justify-between"><span>Sat - Sun:</span> <span>Closed</span></p>
              </div>
            </motion.div>
          </div>

          {/* Form Area (8 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-black text-primary uppercase mb-8">Send A Message</h2>
              
              <AnimatePresence mode="wait">
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mb-8 p-4 rounded-2xl flex items-center gap-3 ${
                      submitStatus.type === "success" ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"
                    }`}
                  >
                    {submitStatus.type === "success" ? <CheckCircle2 /> : <AlertCircle />}
                    <p className="font-bold uppercase text-sm tracking-wide">{submitStatus.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="First Name" id="firstName" value={formData.firstName} onChange={handleChange} required />
                <InputGroup label="Last Name" id="lastName" value={formData.lastName} onChange={handleChange} required />
                
                <div className="md:col-span-2">
                  <InputGroup label="Email Address" id="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                
                <div className="md:col-span-2">
                  <InputGroup label="Subject" id="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-primary font-black uppercase text-xs tracking-widest mb-2 ml-1">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary focus:bg-white rounded-2xl outline-none transition-all duration-300 placeholder-slate-400"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-primary text-white hover:bg-secondary hover:text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3 shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white uppercase mb-8">Looking for specific services?</h2>
          <Link to="/services" className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-secondary transition-colors shadow-lg">
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </div>
      </section>
    </div>
  );
}

// Helper Components for Cleanliness
function ContactDetail({ icon, title, content }) {
  return (
    <div className="flex gap-4">
      <div className="p-4 bg-slate-50 rounded-2xl h-fit">{icon}</div>
      <div>
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-primary font-bold leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function InputGroup({ label, id, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-primary font-black uppercase text-xs tracking-widest mb-2 ml-1" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...props}
        className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary focus:bg-white rounded-2xl outline-none transition-all duration-300"
      />
    </div>
  );
}