import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/lib/data";
import { motion } from "framer-motion";

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
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Services</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Comprehensive Business Solutions
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Tailored services designed to meet your specific business needs and drive sustainable growth.
          </p>
        </div>

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
