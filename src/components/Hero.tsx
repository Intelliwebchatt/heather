import React from 'react';
import { ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7DCA45]/20 to-black/95" />
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7DCA45] to-[#5ca632] text-transparent bg-clip-text font-display">
            Where We Have Fun Saving You Money
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-8 font-body">
            Revolutionizing payment solutions with personalized service and cutting-edge technology.
          </p>

          <button className="bg-gradient-to-r from-[#7DCA45] to-[#5ca632] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#7DCA45]/25">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            {
              icon: <Shield className="w-8 h-8 text-[#7DCA45]" />,
              title: "Secure Solutions",
              description: "State-of-the-art encryption and security protocols to protect your transactions"
            },
            {
              icon: <Clock className="w-8 h-8 text-[#7DCA45]" />,
              title: "24/7 Support",
              description: "Round-the-clock assistance for all your payment processing needs"
            },
            {
              icon: <DollarSign className="w-8 h-8 text-[#7DCA45]" />,
              title: "Cost Savings",
              description: "Competitive rates and innovative solutions to maximize your profits"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-lg p-6 rounded-2xl border border-[#7DCA45]/20 hover:border-[#7DCA45]/50 transition-colors duration-300">
              <div className="bg-black/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}