import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Cta } from "@/components/sections/Cta";
import { Contact } from "@/components/sections/Contact";
import { ShippingServices } from "@/components/sections/ShippingServices";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ShippingServices />
      <Testimonials />
      <Contact />
    </>
  );
}
