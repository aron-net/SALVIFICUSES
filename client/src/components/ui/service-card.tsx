import { ArrowRight, BarChart, Code, Database, Rocket, Cloud, Headphones } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  linkColor: string;
  href: string;
}

// Function to get the correct icon component based on icon name
const getIconComponent = (iconName: string) => {
  switch(iconName) {
    case 'BarChart': return <BarChart className="h-6 w-6" />;
    case 'Code': return <Code className="h-6 w-6" />;
    case 'Headphones': return <Headphones className="h-6 w-6" />;
    case 'Rocket': return <Rocket className="h-6 w-6" />;
    case 'Database': return <Database className="h-6 w-6" />;
    case 'Cloud': return <Cloud className="h-6 w-6" />;
    default: return <BarChart className="h-6 w-6" />;
  }
}

export function ServiceCard({
  title,
  description,
  icon,
  iconBg,
  iconColor,
  linkColor,
  href
}: ServiceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div className="relative group" variants={cardVariants}>
      <div className="relative bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md p-6">
        <div className={`h-12 w-12 rounded-md flex items-center justify-center ${iconBg} ${iconColor} mb-5`}>
          {getIconComponent(icon)}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <a href={href} className={`inline-flex items-center text-sm font-medium ${linkColor}`}>
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
