import {
  Ship,
  Truck,
  Plane,
  Workflow,
  Package,
  Building
} from "lucide-react";

export const services = [
  {
    title: "Sea Freight",
    description: "Complete ocean shipping solutions with efficient containerized and bulk cargo transport worldwide.",
    icon: "Ship",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    linkColor: "text-primary-600 hover:text-primary-700",
    href: "#"
  },
  {
    title: "Land Freight",
    description: "Reliable ground transportation services using a network of premium carriers to ensure timely delivery.",
    icon: "Truck",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    linkColor: "text-green-600 hover:text-green-700",
    href: "#"
  },
  {
    title: "Air Freight",
    description: "Fast and efficient air cargo services that prioritize speed without compromising on security or reliability.",
    icon: "Plane",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    linkColor: "text-purple-600 hover:text-purple-700",
    href: "#"
  },
  {
    title: "Project Cargo",
    description: "Specialized handling of oversized, heavy, high-value or critical project cargo with meticulous planning.",
    icon: "Package",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    linkColor: "text-red-600 hover:text-red-700",
    href: "#"
  },
  {
    title: "Logistics Management",
    description: "End-to-end logistics solutions including warehousing, distribution, inventory management and supply chain optimization.",
    icon: "Workflow",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    linkColor: "text-amber-600 hover:text-amber-700",
    href: "#"
  },
  {
    title: "Shipping Agency",
    description: "Full shipping agency services including port operations, vessel handling, documentation and customs clearance.",
    icon: "Building",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    linkColor: "text-emerald-600 hover:text-emerald-700",
    href: "#"
  }
];

export const products = [
  {
    title: "Enterprise Management Suite",
    category: "Business Software",
    description: "Comprehensive solution for managing all aspects of your enterprise, from operations to customer relations.",
    imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    badge: "Top Rated",
    price: "$899",
    badgeColor: "bg-green-100 text-green-800",
    categoryColor: "text-primary-600"
  },
  {
    title: "Business Intelligence Dashboard",
    category: "Analytics",
    description: "Real-time data visualization and analytics to track KPIs and make data-driven decisions.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    badge: "New",
    price: "$599",
    badgeColor: "bg-blue-100 text-blue-800",
    categoryColor: "text-green-600"
  },
  {
    title: "Advanced CRM Platform",
    category: "Customer Relations",
    description: "Streamline customer relationship management with our intuitive and powerful CRM solution.",
    imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    price: "$499",
    badgeColor: "bg-amber-100 text-amber-800",
    categoryColor: "text-purple-600"
  }
];

export const testimonials = [
  {
    quote: "The enterprise management suite has completely transformed how we operate our business. The customization options and intuitive interface have made adoption across our team seamless.",
    author: "Sarah Johnson",
    position: "CEO, TechInnovate",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    quote: "The customer support team has been exceptional. They've guided us through implementation and provided ongoing support that exceeds expectations. Highly recommended!",
    author: "Michael Chen",
    position: "Operations Director, GrowthCo",
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    quote: "The analytics dashboard has given us insights we never had before. We've been able to identify trends and opportunities that have directly contributed to our 30% revenue growth.",
    author: "Emily Rodriguez",
    position: "Marketing Manager, FutureRetail",
    avatarSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 4.5
  }
];
