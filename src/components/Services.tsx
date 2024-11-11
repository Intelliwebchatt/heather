import React from 'react';
import { CreditCard, Store, ShoppingCart, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <CreditCard className="w-12 h-12 text-[#7DCA45]" />,
      title: "Merchant Services",
      description: "Comprehensive payment processing solutions tailored to your business needs"
    },
    {
      icon: <Store className="w-12 h-12 text-[#7DCA45]" />,
      title: "POS Solutions",
      description: "Modern point-of-sale systems that streamline your operations"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-[#7DCA45]" />,
      title: "E-commerce Integration",
      description: "Seamless online payment solutions for your digital storefront"
    },
    {
      icon: <Settings className="w-12 h-12 text-[#7DCA45]" />,
      title: "Custom Solutions",
      description: "Tailored payment processing solutions designed for your unique requirements"
    }
  ];

  return (
    <div className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#7DCA45] to-[#5ca632] text-transparent bg-clip-text font-display">
            Our Services
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Comprehensive payment solutions designed to help your business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-black to-black/80 p-8 rounded-2xl border border-[#7DCA45]/20 hover:border-[#7DCA45]/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="bg-black/50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}