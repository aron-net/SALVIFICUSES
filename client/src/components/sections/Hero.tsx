import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const serviceDetails = [
  {
    title: "CONSTRUCTION",
    shortDesc: "Project Management",
    longDesc: "Our construction consultancy services include project planning, architectural design oversight, quality assurance, budget management, and full construction supervision to ensure your projects are completed on time and within budget.",
  },
  {
    title: "INVESTMENT",
    shortDesc: "Advisory Services",
    longDesc: "Get expert investment advisory services including market analysis, feasibility studies, business establishment guidance in Uganda, and strategic investment opportunities designed specifically for Ugandans living abroad.",
  },
  {
    title: "TECHNICAL",
    shortDesc: "Specialized Works",
    longDesc: "We provide technical consulting for electrical and mechanical installations, maintenance services, innovative technological solutions for various industries, and specialized technical support for complex projects.",
  },
  {
    title: "LABOUR EXPORT",
    shortDesc: "Overseas Opportunities",
    longDesc: "Our labour export program helps qualified candidates find international job opportunities. We manage the entire process from recruitment and selection to placement, ensuring a smooth transition to working abroad.",
  },
  {
    title: "LANGUAGE",
    shortDesc: "Expert Courses",
    longDesc: "Learn from our expert language tutors who ensure students gain fluency in various global languages including Spanish, French, German, and English. Our courses are designed for both personal and professional development.",
  }
];

export function Hero() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeHighlight, setActiveHighlight] = useState<number>(3); // Default to LABOUR EXPORT (index 3)

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
        <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-1 bg-white rounded-lg shadow-xl overflow-hidden"> {/*Added motion.div here*/}
          {serviceDetails.map((service, index) => (
            <div key={index} className="relative">
              <button 
                onClick={() => {
                  toggleService(index);
                  setActiveHighlight(index);
                }}
                className={`w-full ${activeHighlight === index ? 'bg-primary text-white' : 'bg-white'} p-6 hover:${activeHighlight === index ? 'bg-primary/90' : 'bg-gray-50'} transition-colors text-center cursor-pointer`}
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
        </motion.div> {/*Added motion.div here*/}
      </div>

      {/* Why Choose Us Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-primary py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We deliver excellence through experience, innovation, and unwavering commitment to your success.
            </p>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/*Added motion.div here*/}
            {[
              {
                icon: "👥",
                title: "#4. We're Results-Oriented",
                description: "We focus on delivering measurable outcomes that contribute to our clients' success."
              },
              {
                icon: "🤝",
                title: "#5. Reliable Support",
                description: "Our team is always available to provide guidance and support at every stage of your project."
              }
            ].map((item, index) => (
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div> {/*Added motion.div here*/}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {[
            {
              icon: "👥",
              title: "#4. We're Results-Oriented",
              description: "We focus on delivering measurable outcomes that contribute to our clients' success."
            },
            {
              icon: "🤝",
              title: "#5. Reliable Support",
              description: "Our team is always available to provide guidance and support at every stage of your project."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}