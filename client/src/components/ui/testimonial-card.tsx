import { Star, StarHalf } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  avatarSrc: string;
  rating: number;
}

export function TestimonialCard({
  quote,
  author,
  position,
  avatarSrc,
  rating
}: TestimonialCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-amber-400 text-amber-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-amber-400 text-amber-400" />);
    }
    
    return stars;
  };

  return (
    <motion.div 
      className="bg-gray-50 rounded-xl p-8 shadow-sm"
      variants={cardVariants}
    >
      <div className="flex items-center mb-6">
        <div className="text-amber-400 flex">
          {renderStars(rating)}
        </div>
      </div>
      <blockquote className="text-gray-700 mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
          <img 
            src={avatarSrc} 
            alt={author} 
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="ml-3">
          <p className="text-gray-900 font-medium">{author}</p>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
