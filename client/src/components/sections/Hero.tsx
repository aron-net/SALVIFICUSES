import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Define service details
const serviceDetails = [
  {
    title: "CONSTRUCTION",
    shortDesc: "Project Management",
    longDesc: "Our construction consultancy services include project planning, architectural design oversight, quality assurance, budget management, and full construction supervision to ensure your projects are completed on time and within budget.",
    isHighlighted: false
  },
  {
    title: "INVESTMENT",
    shortDesc: "Advisory Services",
    longDesc: "Get expert investment advisory services including market analysis, feasibility studies, business establishment guidance in Uganda, and strategic investment opportunities designed specifically for Ugandans living abroad.",
    isHighlighted: false
  },
  {
    title: "TECHNICAL",
    shortDesc: "Specialized Works",
    longDesc: "We provide technical consulting for electrical and mechanical installations, maintenance services, innovative technological solutions for various industries, and specialized technical support for complex projects.",
    isHighlighted: false
  },
  {
    title: "LABOUR EXPORT",
    shortDesc: "Overseas Opportunities",
    longDesc: "Our labour export program helps qualified candidates find international job opportunities. We manage the entire process from recruitment and selection to placement, ensuring a smooth transition to working abroad.",
    isHighlighted: true
  },
  {
    title: "LANGUAGE",
    shortDesc: "Expert Courses",
    longDesc: "Learn from our expert language tutors who ensure students gain fluency in various global languages including Spanish, French, German, and English. Our courses are designed for both personal and professional development.",
    isHighlighted: false
  }
];

export function Hero() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    if (activeService === index) {
      setActiveService(null);
    } else {
      setActiveService(index);
    }
  };

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
      
      {/* Interactive Service boxes */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 -mb-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1 bg-white rounded-lg shadow-xl overflow-hidden">
          {serviceDetails.map((service, index) => (
            <div key={index} className="relative">
              <button 
                onClick={() => toggleService(index)}
                className={`w-full ${service.isHighlighted ? 'bg-primary text-white' : 'bg-white'} p-6 hover:${service.isHighlighted ? 'bg-primary/90' : 'bg-gray-50'} transition-colors text-center cursor-pointer`}
              >
                <h3 className={`font-semibold ${service.isHighlighted ? '' : 'text-primary'} uppercase text-sm`}>{service.title}</h3>
                <p className={`${service.isHighlighted ? 'text-white/80' : 'text-gray-600'} text-xs mt-2`}>{service.shortDesc}</p>
                <ChevronDown className={`h-4 w-4 mx-auto mt-2 ${activeService === index ? 'rotate-180' : ''} transition-transform ${service.isHighlighted ? 'text-white/80' : 'text-gray-400'}`} />
              </button>
              
              {activeService === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${service.isHighlighted ? 'bg-primary/95 text-white' : 'bg-white'} border-t border-gray-100 p-4 text-left shadow-lg`}
                >
                  <p className={`${service.isHighlighted ? 'text-white/90' : 'text-gray-700'} text-sm`}>
                    {service.longDesc}
                  </p>
                  <a 
                    href="#services" 
                    className={`mt-3 inline-flex items-center text-xs font-medium ${service.isHighlighted ? 'text-white hover:text-white/80' : 'text-primary hover:text-primary/80'}`}
                  >
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
