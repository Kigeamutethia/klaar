import { motion } from 'motion/react';
import { 
  Droplets, 
  Wrench, 
  AlertCircle, 
  Wind, 
  Settings, 
  Gauge,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function PlumbingServicesPage() {
  const services = [
    {
      icon: Droplets,
      title: 'Plumbing Installations',
      description: 'Complete plumbing installation services for new buildings, including water supply, drainage, and sanitary systems.',
      image: 'https://images.unsplash.com/photo-1751486289950-5c4898a4c773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHBpcGVzJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3MDU2Mjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: AlertCircle,
      title: 'Leak Detection & Repair',
      description: 'Professional leak detection using advanced equipment and expert repair services to prevent water damage and waste.',
      image: 'https://images.unsplash.com/photo-1563197906-c1466d8e2edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZml4aW5nJTIwcGlwZXN8ZW58MXx8fHwxNzcwNDc5OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Wind,
      title: 'Drainage Systems',
      description: 'Design, installation, and maintenance of drainage systems including sewer lines, stormwater, and waste management.',
      image: 'https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzcwNTYyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Droplets,
      title: 'Sanitary Fittings Installation',
      description: 'Installation of toilets, sinks, showers, bathtubs, and other sanitary fixtures with quality workmanship.',
      image: 'https://images.unsplash.com/photo-1660662735785-6e7c067d6cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGhvc3BpdGFsaXR5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNTYyODUwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Settings,
      title: 'Preventive Maintenance',
      description: 'Regular plumbing system inspections and maintenance to prevent emergencies and extend system lifespan.',
      image: 'https://images.unsplash.com/photo-1622814859704-c6cd5ae75dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA1NjI4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Wrench,
      title: 'Emergency Plumbing Support',
      description: '24/7 emergency plumbing services for urgent repairs, burst pipes, and critical plumbing failures.',
      image: 'https://images.unsplash.com/photo-1593854519602-687eae339d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBQUEUlMjB3b3JrZXJ8ZW58MXx8fHwxNzcwNTYyODUzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const benefits = [
    'Licensed and experienced plumbers',
    'Quality pipes and fittings',
    'Emergency response available',
    'Water efficiency solutions',
    'Comprehensive warranties',
    'Transparent quotes',
    'Clean and professional service',
    'Follow-up maintenance support'
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-[#1f4165] text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Droplets className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Plumbing Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert plumbing solutions for residential, commercial, and industrial properties
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1563197906-c1466d8e2edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZml4aW5nJTIwcGlwZXN8ZW58MXx8fHwxNzcwNDc5OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional plumber at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Plumbing Solutions</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Klaar Solutions delivers comprehensive plumbing services backed by licensed plumbers with expertise in modern plumbing systems, water management, and sanitary installations.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From routine repairs to complex installations, our team ensures quality workmanship that meets all regulatory standards while providing long-lasting, reliable performance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that plumbing emergencies can happen at any time. Our emergency response team is ready to handle urgent situations promptly and professionally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Plumbing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete plumbing solutions from installation to emergency repairs
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Plumbing Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Trust our licensed plumbers for quality workmanship and reliable plumbing solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#1f4165] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-block bg-[#1f4165] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e40af] transition-all transform hover:scale-105"
                >
                  Request Plumbing Service
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1751486289950-5c4898a4c773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHBpcGVzJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3MDU2Mjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Plumbing installation"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Plumbing Issues */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We Handle All Plumbing Issues</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common problems we solve quickly and professionally
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Leaking Pipes & Faucets',
                description: 'Quick identification and repair of leaks to prevent water damage and reduce waste'
              },
              {
                title: 'Clogged Drains',
                description: 'Professional drain cleaning and blockage removal using advanced equipment'
              },
              {
                title: 'Low Water Pressure',
                description: 'Diagnosis and resolution of water pressure issues throughout your property'
              },
              {
                title: 'Water Heater Issues',
                description: 'Repair and installation of water heating systems for consistent hot water supply'
              },
              {
                title: 'Toilet Repairs',
                description: 'Complete toilet repair and replacement services for all types of fixtures'
              },
              {
                title: 'Sewer Line Problems',
                description: 'Expert sewer line inspection, repair, and replacement using modern techniques'
              }
            ].map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{issue.title}</h3>
                <p className="text-gray-600">{issue.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}