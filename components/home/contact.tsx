"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import LogoBig from "../logo-big";
import { toast } from "sonner";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success toast
        toast.success("Message envoyé avec succès!", {
          description: "Nous vous répondrons dans les plus brefs délais.",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        // Show error toast
        toast.error("Erreur lors de l'envoi", {
          description: result.error || "Une erreur est survenue. Veuillez réessayer.",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast.error("Erreur de connexion", {
        description: "Impossible d'envoyer le message. Vérifiez votre connexion internet.",
        duration: 5000,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="w-full lg:max-w-bigScreen min-h-[95dvh] lg:min-h-[100dvh] mt-32 flex flex-col lg:flex-row">
      {/* Left Side - Contact Form */}
      <div className="w-full h-[80dvh] lg:w-1/2 px-4 lg:px-10 flex justify-start items-start flex-col">
        <h2 className="font-switzer text-4xl sm:text-5xl lg:text-6xl font-semibold mb-8">
          Nous contacter
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6  w-full h-full">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="NOM, PRÉNOM"
              className="w-full px-6 py-4 bg-[#EDF4DB] placeholder-[#2f2912]/60 text-[#2f2912] rounded-none border-none outline-none focus:ring-2 focus:ring-[#7D9395] transition-all duration-300"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ADRESSE E-MAIL"
              className="w-full px-6 py-4 bg-[#EDF4DB] placeholder-[#2f2912]/60 text-[#2f2912] rounded-none border-none outline-none focus:ring-2 focus:ring-[#7D9395] transition-all duration-300"
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              rows={15}
              className="w-full px-6 py-4 bg-[#EDF4DB] placeholder-[#2f2912]/60 text-[#2f2912] rounded-none border-none outline-none resize-none focus:ring-2 focus:ring-[#7D9395] transition-all duration-300"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="group flex items-center gap-3 px-8 py-4 bg-mainYellow/80 text-[#2f2912] font-semibold uppercase tracking-wider hover:bg-[#c2caad] hover:text-white transition-all duration-300"
            >
              Envoyer
              {/* <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> */}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Company Info */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-mainYellow h-[80dvh] p-8 sm:p-12 lg:p-16  flex-col justify-between items-center relative">
        {/* Logo/Icon Placeholder */}

        <div className="w-full h-5/12 flex justify-center items-center relative top-32">
          <LogoBig width={300} />
        </div>

        {/* Company Information */}
        <div className="text-left space-y-1 text-lightGray absolute bottom-10 left-10">
          <h3 className="text-3xl font-switzer font-semibold">
            Savoir Faire Swiss SA
          </h3>
          
          <div className="font-semibold">
            <p className="text-lg">Moulin-au-Rey 8</p>
            <p className="text-lg">1470 Lully-Fribourg</p>
            <p className="text-lg">Fribourg</p>
            <p className="text-lg">+41 76 709 60 11</p>

          </div>

          <div className="pt-4 space-y-2 font-semibold">
            <p className="text-lg">info@savoirfaireswiss.com</p>
          </div>
        </div>


      </div>
    </section>
  );
}