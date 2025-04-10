import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { motion } from "framer-motion";

export function Products() {
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
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Services</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Our Premium Offerings
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Discover our comprehensive consultancy services designed to help you achieve your goals in Uganda and beyond.
          </p>
        </div>

        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              category={product.category}
              description={product.description}
              imageSrc={product.imageSrc}
              badge={product.badge}
              price={product.price}
              badgeColor={product.badgeColor}
              categoryColor={product.categoryColor}
            />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
