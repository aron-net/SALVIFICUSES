import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FaStar } from "react-icons/fa";

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
    <section id="corporate" className="bg-white mt-4">
      <div className="py-12 bg-blue-400 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-gray-500 text-white py-2 px-6 rounded-full uppercase font-semibold hover:bg-blue-700 transition-colors"
                >
                  OUR VISION
                </a>
                <h3 className="text-2xl font-bold text-gray-900 mt-4">
                  To be the premier consultancy firm driving sustainable development and transformative investment
                  solutions for Ugandans globally.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-16 sm:px-6 lg:px-8">
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
                Industry<br />Experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto"></div>
              <p className="mt-2 text-sm font-medium text-blue-500 uppercase">
                Expertise &<br />Reliability
              </p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-gray-200 rounded-full mx-auto"></div>
              <p className="mt-2 text-sm font-medium text-gray-500 uppercase">
                Innovative<br />Solutions
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
            className="mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 bg-white shadow-md rounded-lg">
              <a href="#" className="no-underline">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 hover:text-blue-600">SALVIFICUS ESTABLISHMENTS COMPANY LIMITED</h4>
              </a>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Salvificus Establishments Company Limited is a leading Ugandan-based consultancy company
                specializing in providing high-quality services in construction, investment advisory, and technical
                works. Established with a vision to empower and support Ugandans working and living abroad, we
                deliver customized solutions tailored to meet the unique needs of our clients.
                Our commitment to excellence and customer satisfaction makes us the go-to partner for individuals
                and organizations seeking professional, reliable, and innovative consultancy services.
              </p>
              <ul className="list-none flex flex-wrap gap-4">
                <li className="flex items-center text-gray-700 w-[calc(50%-0.5rem)]">
                  <FaStar className="text-yellow-400 mr-2" /> Construction
                </li>
                <li className="flex items-center text-gray-700 w-[calc(50%-0.5rem)]">
                  <FaStar className="text-yellow-400 mr-2 opacity-50" /> Investment advisory
                </li>
                <li className="flex items-center text-gray-700 w-full md:w-1/2 mx-auto">
                  <FaStar className="text-yellow-400 mr-2" /> Labour export services
                </li>
                <li className="flex items-center text-gray-700 w-[calc(50%-0.5rem)]">
                  <FaStar className="text-yellow-400 mr-2 opacity-50" /> Professional linguistic services
                </li>
                <li className="flex items-center text-gray-700 w-[calc(50%-0.5rem)]">
                  <FaStar className="text-yellow-400 mr-2" /> Technical works
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
