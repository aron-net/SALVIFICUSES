import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Experience & Reliability",
    description: "Years of successful consultancy and professional services across Uganda and East Africa."
  },
  {
    title: "Local Expertise",
    description: "Deep understanding of Ugandan markets, regulations, and business environments for optimal results."
  },
  {
    title: "Comprehensive Services",
    description: "From construction consultancy to investment advisory and labour export services, all under one roof."
  }
];

export function About() {
  return (
    <section id="corporate" className="py-24 bg-white mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
          
          <div className="flex justify-center items-center mt-12 space-x-16">
            <div className="text-center">
              <div className="w-3 h-3 bg-gray-200 rounded-full mx-auto"></div>
              <p className="mt-2 text-sm font-medium text-gray-500 uppercase">
                Industry<br/>Experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-primary rounded-full mx-auto"></div>
              <p className="mt-2 text-sm font-medium text-primary uppercase">
                Expertise &<br/>Reliability
              </p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-gray-200 rounded-full mx-auto"></div>
              <p className="mt-2 text-sm font-medium text-gray-500 uppercase">
                Innovative<br/>Solutions
              </p>
            </div>
          </div>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
              <img 
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Team in office meeting"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-6">
              Salvificus Establishments Company Limited is a leading Ugandan consultancy firm providing comprehensive services across various sectors. With our headquarters in Kampala, we offer expert guidance and solutions tailored to the specific needs of our clients.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of highly skilled professionals brings years of expertise in construction project management, investment advisory, technical works, labour export services, and language courses to deliver exceptional results for businesses and individuals alike.
            </p>
            <p className="text-blue-600 font-medium">
              We are committed to promoting growth and development in Uganda and East Africa through innovative solutions and world-class consultancy services that meet international standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
