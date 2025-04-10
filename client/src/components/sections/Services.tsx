import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { Building, Briefcase } from "lucide-react";

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
            Consultancy Firm<br/>
            <span className="text-primary">With a Difference.</span>
          </h2>
          <h3 className="mt-2 text-xl font-semibold text-primary tracking-wide uppercase">
            Excellence.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <div>
            <p className="text-gray-600 mb-4">
              Salvificus Establishments Company Limited is a leading Ugandan consultancy firm providing comprehensive professional services. We offer innovative solutions and expert guidance for various sectors including construction, investment, and technical works.
            </p>
            <p className="font-semibold text-gray-900">
              Always there to advise and support.
            </p>
          </div>

          <div className="flex gap-8 items-center col-span-2">
            <div className="bg-white p-4 rounded-md shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Business consultants in meeting" 
                className="w-full h-48 object-cover rounded"
              />
              <h4 className="mt-4 font-bold text-gray-900">WHO WE ARE?</h4>
              <p className="text-sm text-gray-600 mt-2">
                Salvificus Establishments Company Limited is a premier Ugandan consultancy firm with a focus on construction, investment, technical services, and labour export.
              </p>
              <a href="#" className="inline-block mt-4 text-white bg-primary py-1 px-4 rounded-full text-center text-xs">
                •
              </a>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Consultancy partners" 
                className="w-full h-48 object-cover rounded"
              />
              <h4 className="mt-4 font-bold text-gray-900">CONSULTANCY PARTNER</h4>
              <p className="text-sm text-gray-600 mt-2">
                Salvificus is your reliable partner in consultancy excellence, providing a full range of premium services tailored to your specific needs and goals.
              </p>
              <a href="#" className="inline-block mt-4 text-white bg-primary py-1 px-4 rounded-full text-center text-xs">
                •
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Services. Exceptional Results.</h2>

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
