import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Contact Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Get In Touch
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Have questions or ready to get started? Contact our team to learn how we can help your business grow.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Full name</Label>
                <div className="mt-1">
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    className="py-3"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="mt-1">
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <div className="mt-1">
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="+1 (555) 987-6543" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="py-3"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <div className="mt-1">
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Tell us about your project..." 
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3"
                  />
                </div>
              </div>
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 py-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>
          <motion.div 
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <dl className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <dt className="text-sm font-medium text-gray-500">Address</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        123 Business Avenue<br />
                        New York, NY 10001
                      </dd>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <dt className="text-sm font-medium text-gray-500">Phone</dt>
                      <dd className="mt-1 text-sm text-gray-900">+1 (555) 123-4567</dd>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900">info@salvificus.com</dd>
                    </div>
                  </div>
                </dl>
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-500 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.href} 
                        className="text-gray-400 hover:text-primary transition-colors duration-200"
                      >
                        <span className="sr-only">{social.label}</span>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-64 w-full">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
