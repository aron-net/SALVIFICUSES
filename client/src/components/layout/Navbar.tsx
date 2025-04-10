import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#corporate", label: "ABOUT US" },
  { href: "#services", label: "SERVICES" },
  { href: "#products", label: "SOLUTIONS" },
  { href: "#testimonials", label: "TESTIMONIALS" },
  { href: "#contact", label: "CONTACT US" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary text-white fixed w-full top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary/90 py-2 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>+256 414 000 000</span>
          </div>
          <div>
            <a href="#contact" className="hover:underline">REQUEST A CONSULTATION</a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">SE</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-white">Salvificus Establishments</span>
            </a>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="inline-flex items-center px-1 py-1 text-xs font-medium text-white hover:text-gray-200 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="ml-8 inline-flex items-center px-4 py-2 border border-white text-xs font-medium text-white hover:bg-white hover:text-primary focus:outline-none transition-colors duration-200"
            >
              REQUEST CONSULTATION
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-primary/80 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary/95" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="border-l-4 border-transparent text-white hover:bg-primary/80 hover:border-white block pl-3 pr-4 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-primary-700">
              <a
                href="#contact"
                className="block text-center mx-4 px-4 py-2 border border-white text-sm font-medium text-white hover:bg-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                REQUEST CONSULTATION
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
