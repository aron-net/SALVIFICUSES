import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative text-white bg-gradient-to-r from-primary to-primary/80 pt-24 pb-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "soft-light"
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 relative z-10">
        <motion.div 
          className="max-w-3xl text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            CONSULTANCY & SERVICES<br/>
            <span className="mt-2 block">FOR UGANDANS WORLDWIDE</span>
          </h1>
          <div className="mt-10">
            <Button 
              size="lg" 
              asChild
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-full"
            >
              <a href="#contact">QUOTE</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Service boxes like in the reference image */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 -mb-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center">
            <h3 className="font-semibold text-primary uppercase text-sm">CONSTRUCTION</h3>
            <p className="text-gray-600 text-xs mt-2">Project Management</p>
          </div>
          <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center">
            <h3 className="font-semibold text-primary uppercase text-sm">INVESTMENT</h3>
            <p className="text-gray-600 text-xs mt-2">Advisory Services</p>
          </div>
          <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center">
            <h3 className="font-semibold text-primary uppercase text-sm">TECHNICAL</h3>
            <p className="text-gray-600 text-xs mt-2">Specialized Works</p>
          </div>
          <div className="bg-primary text-white p-6 hover:bg-primary/90 transition-colors text-center">
            <h3 className="font-semibold uppercase text-sm">LABOUR EXPORT</h3>
            <p className="text-white/80 text-xs mt-2">Overseas Opportunities</p>
          </div>
          <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center">
            <h3 className="font-semibold text-primary uppercase text-sm">LANGUAGE</h3>
            <p className="text-gray-600 text-xs mt-2">Expert Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
}
