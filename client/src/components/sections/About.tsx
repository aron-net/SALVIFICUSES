import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Experience & Reliability",
    description: "Over 15 years of successful shipping and logistics operations worldwide."
  },
  {
    title: "Technology & Innovation",
    description: "Using cutting-edge technology to provide real-time tracking and transparent logistics."
  },
  {
    title: "Global Expertise",
    description: "A network spanning across 85+ countries with local insight and global capabilities."
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
              Salvificus Shipping Services Ltd. is pioneered in Dubai, the fastest hub transit of trade & commercial in the Middle East region. The company has expanded and now has presence in diverse port of global network in terms of trade's movement like the US, Asia, Europe, Africa and other parts of the globe.
            </p>
            <p className="text-gray-700 mb-6">
              We have the advantages of modern logistics to handle multi-modal transport services including air, sea, land, customs clearance, warehousing, and distribution for industry sectors.
            </p>
            <p className="text-blue-600 font-medium">
              Offices in the headquarters: Customs clearing is established in Mumbai & Karachi, Jordan, Turkey, Sri Lanka, Malaysia, Vietnam, Belgium.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
