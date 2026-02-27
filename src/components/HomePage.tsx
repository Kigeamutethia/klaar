import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  SparklesIcon, 
  Sun, 
  Zap, 
  Droplets, 
  Truck,
  Award, 
  Shield, 
  Users, 
  DollarSign, 
  Clock,
  Building2,
  Home,
  Factory,
  Hotel,
  School,
  Briefcase,
  Phone,
  Mail,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/9fc5054a5827c1ebc2ac564c816dfc1ea4b13fcb.png';
import contactImage from 'figma:asset/e13c41a7f0a979c3735cf8f9e2180754c1698887.png';
import ngoCorporateImage from 'figma:asset/1c060ec53f4c9b170277423ee6ca901965dfc8ce.png';
import cleaningImage from 'figma:asset/4b4a646f68ba317311e6bef15c93991e80f623fd.png';
import moversImage from 'figma:asset/917f644d46b95cbfa4a568524b1e5c6b2a29263f.png';

export default function HomePage() {
  // Handle scrolling to hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // ✅ REPLACED: handleSubmit with the more reliable version you provided
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const nameEl = form.querySelector("#name") as HTMLInputElement | null;
    const emailEl = form.querySelector("#email") as HTMLInputElement | null;
    const phoneEl = form.querySelector("#phone") as HTMLInputElement | null;
    const serviceEl = form.querySelector("#service") as HTMLSelectElement | null;
    const messageEl = form.querySelector("#message") as HTMLTextAreaElement | null;

    if (!nameEl || !emailEl || !phoneEl || !serviceEl || !messageEl) {
      alert("Form fields not found. Please refresh and try again.");
      return;
    }

    const name = nameEl.value;
    const email = emailEl.value;
    const phone = phoneEl.value;
    const service = serviceEl.value;
    const message = messageEl.value;

    const to = "info@klaarsolutions.co.ke";
    const subject = encodeURIComponent(`Klaar Solutions Inquiry - ${service}`);
    const body = encodeURIComponent(
`Full Name: ${name}
Email Address: ${email}
Phone Number: ${phone}
Service Required: ${service}

Message:
${message}`
    );

    const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;

    // ✅ Most reliable
    window.location.href = mailtoLink;

    // optional reset (some browsers won't run this after mailto opens)
    // form.reset();
  };

  const services = [
    {
      icon: SparklesIcon,
      title: 'Professional Cleaning Services',
      description: 'Residential, commercial, post-construction, deep cleaning, fumigation, and sanitation services.',
      image: cleaningImage,
      link: '/services/cleaning'
    },
    {
      icon: Sun,
      title: 'Solar Installation & Maintenance',
      description: 'Grid-tied, hybrid, and off-grid solar systems, maintenance, energy audits, and performance optimization.',
      image: 'https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NzA1NjI4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/solar'
    },
    {
      icon: Zap,
      title: 'Electrical Services',
      description: 'Electrical installations, maintenance, fault diagnosis, cabling works, and power systems protection.',
      image: 'https://images.unsplash.com/photo-1744113511604-235e7010981f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MDU2Mjg0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/electrical'
    },
    {
      icon: Droplets,
      title: 'Plumbing Services',
      description: 'Plumbing installations, leak detection, drainage systems, upgrades, and emergency support.',
      image: 'https://images.unsplash.com/photo-1563197906-c1466d8e2edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZml4aW5nJTIwcGlwZXN8ZW58MXx8fHwxNzcwNDc5OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/plumbing'
    },
    {
      icon: Truck,
      title: 'Movers (Moving In & Moving Out)',
      description: 'Professional residential and commercial relocation services delivered in partnership with Taylor Movers.',
      image: moversImage,
      link: '/services/movers'
    }
  ];

  const benefits = [
    { icon: Award, title: 'One-Stop Service Provider', description: 'Comprehensive cleaning and technical services under one roof' },
    { icon: Users, title: 'Skilled Technical Team', description: 'Experienced professionals with proven expertise' },
    { icon: Shield, title: 'Safety & Compliance', description: 'Strong focus on safety standards and regulations' },
    { icon: DollarSign, title: 'Transparent Pricing', description: 'Competitive rates with no hidden costs' },
    { icon: Clock, title: 'Flexible Service Models', description: 'One-off, contract-based, and emergency response options' }
  ];

  const industries = [
    {
      icon: Home,
      title: 'Residential Homes & Apartments',
      image: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDQ4Njg4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Building2,
      title: 'Commercial Offices & Retail',
      image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA0NjUzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Factory,
      title: 'Industrial Facilities',
      image: 'https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzcwNTYyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Hotel,
      title: 'Hospitality & Events',
      image: 'https://images.unsplash.com/photo-1660662735785-6e7c067d6cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGhvc3BpdGFsaXR5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNTYyODUwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: School,
      title: 'Educational Institutions',
      image: 'https://images.unsplash.com/photo-1655800466797-8ab2598b4274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb258ZW58MXx8fHwxNzcwNDY4MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Briefcase,
      title: 'NGOs & Corporates',
      image: ngoCorporateImage
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#1f4165] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Integrated Cleaning, Solar & Technical Solutions You Can Trust
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Klaar Solutions Ltd delivers reliable, cost-effective, and sustainable cleaning, solar, electrical, and plumbing services across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-block bg-white text-[#1f4165] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-center"
                >
                  Request a Free Quote
                </a>
                <a
                  href="tel:+254791515131"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1f4165] transition-all transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Solar panel installation technician"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your cleaning, solar, electrical, and plumbing needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1f4165] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Klaar Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Klaar Solutions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We are committed to delivering exceptional service quality and building long-term relationships with our clients across Kenya.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-[#1f4165]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1673978483693-9e4be55b2a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBoZWxtZXQlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXJ8ZW58MXx8fHwxNzcwNTYyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Safety-compliant professional team"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by diverse clients across multiple sectors in Kenya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f4165]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <industry.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={contactImage}
                  alt="Professional team collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
              <p className="text-lg text-gray-600 mb-8">
                Partner with Klaar Solutions Ltd for reliable, safe, and professional service delivery across Kenya.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4165] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4165] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4165] focus:border-transparent outline-none transition-all"
                    placeholder="+254 712 345 678"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4165] focus:border-transparent outline-none transition-all"
                  >
                    <option>Professional Cleaning</option>
                    <option>Solar Installation</option>
                    <option>Electrical Services</option>
                    <option>Plumbing Services</option>
                    <option>Moving Services</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4165] focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1f4165] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e40af] transition-all transform hover:scale-[1.02]"
                >
                  Send Inquiry
                </button>
              </form>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-[#1f4165]" />
                  <span>+254 791 515 131 / +254 757 598 186</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-[#1f4165]" />
                  <span>info@klaarsolutions.co.ke</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}