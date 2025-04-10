import { motion } from "framer-motion";
import { Building, Briefcase, Users, Globe, Wrench, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceItems = [
  {
    title: "CONSTRUCTION CONSULTANCY",
    description: "Project planning and management, Architectural design and supervision, Quality assurance and control, Cost estimation and budget management.",
    icon: <Building className="h-8 w-8" />,
  },
  {
    title: "INVESTMENT ADVISORY",
    description: "Investment planning and advisory services, Market analysis and feasibility studies, Guidance on establishing and managing businesses in Uganda.",
    icon: <BarChart className="h-8 w-8" />,
  },
  {
    title: "LABOUR EXPORT",
    description: "Let's ease your entire journey for overseas employment. We find job opening and recruit successful candidates for greener pastures abroad.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "LANGUAGE COURSES",
    description: "Our dedicated tutors have successfully ensure the fluency of all students in the various common global dialects such as Spanish, French, German and English.",
    icon: <Globe className="h-8 w-8" />,
  },
  {
    title: "TECHNICAL WORKS",
    description: "Electrical and mechanical installations, Maintenance and repair services, Innovative technological solutions for various industries and Specialized technical support.",
    icon: <Wrench className="h-8 w-8" />,
  }
];

export function ConsultancyServices() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Professional Consultancy.
            <br />
            <span className="text-white">Excellence in Every Service.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {serviceItems.slice(0, 3).map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.slice(3, 5).map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceItem({ title, description, icon }: ServiceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-primary-800 p-6 rounded-lg border border-blue-400/20"
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-blue-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-blue-100">{description}</p>
      <div className="mt-4">
        <a href="#" className="text-sm text-blue-300 hover:text-white inline-flex items-center">
          Learn more about our {title.toLowerCase()}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}