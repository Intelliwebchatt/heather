import React from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-black to-[#111] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-black/80 rounded-3xl p-8 md:p-12 border border-[#7DCA45]/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#7DCA45] to-[#5ca632] text-transparent bg-clip-text font-display">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-xl">
              Ready to optimize your payment processing? Get in touch today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-[#7DCA45]/20 rounded-lg px-4 py-3 text-white focus:border-[#7DCA45] focus:ring-1 focus:ring-[#7DCA45] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-[#7DCA45]/20 rounded-lg px-4 py-3 text-white focus:border-[#7DCA45] focus:ring-1 focus:ring-[#7DCA45] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    className="w-full bg-black/50 border border-[#7DCA45]/20 rounded-lg px-4 py-3 text-white focus:border-[#7DCA45] focus:ring-1 focus:ring-[#7DCA45] transition-colors h-32"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-[#7DCA45] to-[#5ca632] text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#7DCA45] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-400">heather.elmore@fmpay.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#7DCA45] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-[#7DCA45] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Schedule a Meeting</h3>
                  <p className="text-gray-400">Book a consultation at your convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}