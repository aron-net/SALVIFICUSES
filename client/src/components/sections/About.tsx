import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    title: "Customer-First Approach",
    description: "We prioritize understanding your unique business needs to provide tailored solutions."
  },
  {
    title: "Innovation Leadership",
    description: "We continuously invest in research and development to stay ahead of industry trends."
  },
  {
    title: "Expert Team",
    description: "Our team comprises industry veterans with extensive experience in business technology."
  }
];

export function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Our Mission & Vision
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Founded in 2010, Salvificus has been dedicated to helping businesses of all sizes transform their operations with innovative technology solutions. Our team of experts brings years of industry experience to deliver exceptional results.
            </p>
            
            <div className="mt-6 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <Check className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-5 aspect-h-3 overflow-hidden rounded-lg shadow-lg">
              <img 
                className="object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Team collaboration"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-4xl font-bold text-primary">500+</div>
                <p className="mt-2 text-gray-600">Clients Worldwide</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-4xl font-bold text-green-600">98%</div>
                <p className="mt-2 text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
