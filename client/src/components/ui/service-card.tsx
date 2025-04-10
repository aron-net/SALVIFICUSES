import { ArrowRight, Ship, Truck, Plane, Workflow, Package, Building } from "lucide-react";
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
    case 'Ship': return <Ship className="h-6 w-6" />;
    case 'Truck': return <Truck className="h-6 w-6" />;
    case 'Plane': return <Plane className="h-6 w-6" />;
    case 'Package': return <Package className="h-6 w-6" />;
    case 'Workflow': return <Workflow className="h-6 w-6" />;
    case 'Building': return <Building className="h-6 w-6" />;
    default: return <Ship className="h-6 w-6" />;
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
