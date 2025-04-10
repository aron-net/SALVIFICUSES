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
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-white">EMPOWERING UGANDANS</span>
              <br />
              <span className="text-primary-100">WORLDWIDE</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Your trusted partner in construction, investment, and workforce solutions. Building bridges to global opportunities.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#contact" className="px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-opacity-90 transition-all">
                Get Started
              </a>
              <a href="#services" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all">
                Our Services
              </a>
            </div>
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

      {/* New "Why Choose Us?" section */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-primary/90 mix-blend-multiply" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Why Choose Us?
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              We deliver excellence through experience, innovation, and unwavering commitment to your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">PROVEN EXPERTISE</h3>
                  <p className="text-sm text-gray-300">15+ years of industry excellence</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">INNOVATIVE APPROACH</h3>
                  <p className="text-sm text-gray-300">Cutting-edge solutions</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">CLIENT SUCCESS</h3>
                  <p className="text-sm text-gray-300">500+ satisfied clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4">
                <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-primary to-blue-600"></div>
              </div>
              <img 
                src="/team-meeting.jpg" 
                alt="Team collaboration" 
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}