import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
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
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white p-3 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 10C6.5 8.89543 7.39543 8 8.5 8H9.5C10.6046 8 11.5 8.89543 11.5 10V11C11.5 12.1046 10.6046 13 9.5 13H8.5V14M15.5 10C15.5 8.89543 16.3954 8 17.5 8H18.5C19.6046 8 20.5 8.89543 20.5 10V11C20.5 12.1046 19.6046 13 18.5 13H17.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <p className="text-gray-600 italic mb-6 pt-5">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatarSrc} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                  <div className="flex mt-1">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <Star key={i} size={16} className="fill-current text-yellow-500" />
                    ))}
                    {testimonial.rating % 1 > 0 && (
                      <Star size={16} className="fill-current text-yellow-500 opacity-50" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200">
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
