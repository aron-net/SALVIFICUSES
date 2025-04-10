import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative text-white bg-slate-800 bg-opacity-90 bg-blend-overlay pt-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-6">
            Transforming Business Solutions
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Innovative Solutions for Modern Businesses
          </h1>
          <p className="text-xl text-gray-100 mb-10 max-w-2xl">
            We help businesses transform their operations with cutting-edge technology and strategic insights to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <a href="#contact">Get Started</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="bg-gray-800 bg-opacity-50 text-gray-100 border-gray-600 hover:bg-opacity-70"
            >
              <a href="#services" className="inline-flex items-center">
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="bg-gradient-to-b from-transparent to-gray-50 h-16"></div>
    </section>
  );
}
