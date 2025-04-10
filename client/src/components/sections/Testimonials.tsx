import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";

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
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Testimonials</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            What Our Clients Say
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Hear from businesses that have transformed their operations with our solutions.
          </p>
        </div>

        <motion.div 
          className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              avatarSrc={testimonial.avatarSrc}
              rating={testimonial.rating}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
