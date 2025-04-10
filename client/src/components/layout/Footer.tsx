import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const services = [
  { label: "Construction Consultancy", href: "#services" },
  { label: "Investment Advisory", href: "#services" },
  { label: "Technical Works", href: "#services" },
  { label: "Labour Export", href: "#services" },
];

const solutions = [
  { label: "Language Courses", href: "#products" },
  { label: "Project Management", href: "#products" },
  { label: "Business Setup", href: "#products" },
  { label: "Advisory Services", href: "#products" },
];

const company = [
  { label: "About", href: "#about" },
  { label: "Careers", href: "#" },
  { label: "Partners", href: "#" },
  { label: "News", href: "#" },
];

const support = [
  { label: "Help Center", href: "#" },
  { label: "Contact Sales", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Status", href: "#" },
];

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
  { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
  { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">SF</span>
              </div>
              <span className="ml-3 text-xl font-bold">Salvificus</span>
            </div>
            <p className="text-gray-300 text-base">
              Transforming businesses with innovative solutions. We help companies of all sizes optimize their operations and drive growth.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {solutions.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-white transition-colors duration-200">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Services</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {services.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-white transition-colors duration-200">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {company.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-white transition-colors duration-200">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {support.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-white transition-colors duration-200">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Salvificus, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
