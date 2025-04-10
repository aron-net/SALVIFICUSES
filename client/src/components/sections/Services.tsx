import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { Ship, Truck } from "lucide-react";

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-16 bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Freight Company<br/>
            <span className="text-primary">With a Difference.</span>
          </h2>
          <h3 className="mt-2 text-xl font-semibold text-primary tracking-wide uppercase">
            Innovation.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <div>
            <p className="text-gray-600 mb-4">
              Salvificus Limited is one of the leading groups in the world and handles a full range of multi-modal transport services. We provide innovative solutions, experienced in freight handling and services all around the world.
            </p>
            <p className="font-semibold text-gray-900">
              Always there to provide.
            </p>
          </div>

          <div className="flex gap-8 items-center col-span-2">
            <div className="bg-white p-4 rounded-md shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1577416412292-f1b7a6687768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Shipping containers" 
                className="w-full h-48 object-cover rounded"
              />
              <h4 className="mt-4 font-bold text-gray-900">WHO WE ARE?</h4>
              <p className="text-sm text-gray-600 mt-2">
                Salvificus Limited is one of the world's largest groups in global logistics and transport services, with a presence in over 85 countries.
              </p>
              <a href="#" className="inline-block mt-4 text-white bg-primary py-1 px-4 rounded-full text-center text-xs">
                •
              </a>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Logistics partners" 
                className="w-full h-48 object-cover rounded"
              />
              <h4 className="mt-4 font-bold text-gray-900">LOGISTICS PARTNER</h4>
              <p className="text-sm text-gray-600 mt-2">
                Salvificus Limited is your reliable partner in logistics excellence, providing a full range of premium services for all your shipping needs.
              </p>
              <a href="#" className="inline-block mt-4 text-white bg-primary py-1 px-4 rounded-full text-center text-xs">
                •
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Unmatched Services. Unmatched Excellence.</h2>

        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconBg={service.iconBg}
              iconColor={service.iconColor}
              linkColor={service.linkColor}
              href={service.href}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
