import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Cta() {
  return (
    <section className="bg-primary-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your business?</span>
            <span className="block text-indigo-200">Contact us today for a consultation.</span>
          </h2>
        </motion.div>
        <motion.div 
          className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex rounded-md shadow">
            <Button size="lg" variant="default" asChild className="bg-white text-primary-600 hover:bg-gray-50">
              <a href="#contact">
                Get Started
              </a>
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button size="lg" variant="default" asChild className="bg-primary-600 text-white hover:bg-primary-500">
              <a href="#services">
                Learn More
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
