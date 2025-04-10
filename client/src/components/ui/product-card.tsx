import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  badge: string;
  price: string;
  badgeColor: string;
  categoryColor: string;
}

export function ProductCard({
  title,
  category,
  description,
  imageSrc,
  badge,
  price,
  badgeColor,
  categoryColor
}: ProductCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div 
      className="bg-white overflow-hidden shadow-md rounded-lg border border-gray-100 flex flex-col"
      variants={cardVariants}
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={imageSrc} alt={title} />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium ${categoryColor}`}>
            {category}
          </p>
          <a href="#" className="block mt-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${badgeColor}`}>
              {badge}
            </span>
          </div>
          <div className="ml-3 flex-1 flex justify-end">
            <p className="text-xl font-medium text-gray-900">{price}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
