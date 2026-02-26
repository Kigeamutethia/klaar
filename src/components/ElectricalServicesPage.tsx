import { motion } from 'motion/react';
import { 
  Zap, 
  Wrench, 
  AlertTriangle, 
  Cable, 
  Power, 
  Settings,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ElectricalServicesPage() {
  const services = [
    {
      icon: Zap,
      title: 'Electrical Installations',
      description: 'Complete electrical installation services for new buildings, renovations, and expansions with certified electricians.',
      image: 'https://images.unsplash.com/photo-1744113511604-235e7010981f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MDU2Mjg0OHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Wrench,
      title: 'Preventive Maintenance',
      description: 'Regular electrical system inspections and maintenance to prevent failures and ensure safe, reliable operation.',
      image: 'https://images.unsplash.com/photo-1761251947512-a293e482919f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjB3aXJpbmd8ZW58MXx8fHwxNzcwNTAzMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Cable,
      title: 'AC/DC Cabling Works',
      description: 'Professional installation of electrical cables, conduits, and distribution systems for residential and commercial properties.',
      image: 'https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NzA1NjI4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: AlertTriangle,
      title: 'Fault Diagnosis & Repair',
      description: 'Expert troubleshooting and repair of electrical faults, power failures, and circuit issues for quick resolution.',
      image: 'https://images.unsplash.com/photo-1593854519602-687eae339d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBQUEUlMjB3b3JrZXJ8ZW58MXx8fHwxNzcwNTYyODUzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Power,
      title: 'Switchgear Installation',
      description: 'Installation and commissioning of electrical panels, distribution boards, and switchgear systems.',
      image: 'https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzcwNTYyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Settings,
      title: 'Power Systems Protection',
      description: 'Installation of surge protection, grounding systems, and power quality management solutions.',
      image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NzA1MDI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const benefits = [
    'Licensed and certified electricians',
    'Compliance with electrical codes',
    'Emergency electrical services',
    '24/7 fault response team',
    'Quality materials and components',
    'Safety-first approach',
    'Transparent pricing',
    'Post-service support'
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
                <Zap className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Electrical Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional electrical installations, maintenance, and repair services for all your power needs
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Safe & Reliable Electrical Solutions</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Klaar Solutions provides comprehensive electrical services delivered by certified electricians with extensive experience in residential, commercial, and industrial electrical systems.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From new installations to emergency repairs, our team ensures all work complies with national electrical codes and safety standards, giving you peace of mind and reliable power delivery.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that electrical issues can't wait. That's why we offer emergency response services and preventive maintenance programs to keep your systems running smoothly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744113511604-235e7010981f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MDU2Mjg0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Electrician at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Electrical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete electrical solutions for every application
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
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761251947512-a293e482919f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjB3aXJpbmd8ZW58MXx8fHwxNzcwNTAzMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Electrical panel work"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Electrical Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Trust our certified electricians for safe, reliable, and code-compliant electrical work.
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
                  Request Electrical Service
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}