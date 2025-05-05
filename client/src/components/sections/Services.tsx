import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { Building, Briefcase, Users, UserCheck, Globe, Target, LifeBuoy } from "lucide-react";

export function Services() {
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
    <section id="services" className="py-16 bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Consultancy Firm<br/>
            <span className="text-blue-600">With a Difference.</span>
          </h2>
          <h3 className="mt-2 text-xl font-semibold text-blue-600 tracking-wide uppercase">
            Excellence.
          </h3>
        </div>

        <div className="flex flex-wrap -mx-4 mb-20">
          <div className="w-full lg:w-1/2 px-4">
            <img 
              src="/2.jpg" 
              alt="International work environment" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 flex items-center">
            <div className="px-5 py-5 lg:py-0">
              <h2 className="text-3xl font-bold text-[#aca8ee] underline">WORK ABROAD</h2>
              <h5 className="text-lg text-gray-600 mt-4">
                We're the experts, ready to connect you to a reputable employer. We're with you throughout your application and travel process and will ensure that 
                all legal requirements are met, especially concerning your security or safety. Consider enrolling in any of our several language courses for a chance
                to become fluent in the languages commonly used for communication overseas.
              </h5>
              <a 
                href="#contact" 
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full uppercase font-semibold hover:bg-blue-700 transition-colors mt-6"
              >
                BOOK YOUR APPOINTMENT
              </a>
            </div>
          </div>
        </div>

        {/* <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">WHY CHOOSE US?</h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full uppercase font-semibold mb-6">VALUE PROPOSITION</span>
                  <div className="flex items-start mb-4">
                    <Users className="w-8 h-8 !text-blue-600 mr-4 mt-1" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      #1. An Expert Team: <br />
                      <span className="text-base text-gray-600">Our consultants and technical experts are highly experienced and trained in their respective fields.</span>
                    </h3>
                  </div>
                  <div className="flex items-start mb-4">
                    <UserCheck className="w-8 h-8 !text-blue-600 mr-4 mt-1" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      #2. Our Personalized Approach: <br />
                      <span className="text-base text-gray-600">We understand the unique challenges faced by our clients and offer tailored solutions to meet their needs.</span>
                    </h3>
                  </div>
                  <div className="flex items-start mb-4">
                    <Globe className="w-8 h-8 !text-blue-600 mr-4 mt-1" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      #3. A Global Perspective: <br />
                      <span className="text-base text-gray-600">As a company catering to Ugandans abroad, we bridge the gap between global best practices and local opportunities.</span>
                    </h3>
                  </div>
                  <div className="flex items-start mb-4">
                    <Target className="w-8 h-8 !text-blue-600 mr-4 mt-1" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      #4. We're Results-Oriented: <br />
                      <span className="text-base text-gray-600">We focus on delivering measurable outcomes that contribute to our clients' success.</span>
                    </h3>
                  </div>
                  <div className="flex items-start mb-4">
                    <LifeBuoy className="w-8 h-8 !text-blue-600 mr-4 mt-1" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      #5. Reliable Support: <br />
                      <span className="text-base text-gray-600">Our team is always available to provide guidance and support at every stage of your project.</span>
                    </h3>
                  </div>
                  <a 
                    href="#contact" 
                    className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full uppercase font-semibold hover:bg-blue-700 transition-colors mt-8"
                  >
                    GET IN TOUCH WITH US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}