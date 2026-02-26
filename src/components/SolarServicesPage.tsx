import { motion } from 'motion/react';
import { 
  Sun, 
  Zap, 
  Battery, 
  Settings, 
  Activity, 
  Shield,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import consultingImage from 'figma:asset/e13c41a7f0a979c3735cf8f9e2180754c1698887.png';
import solarInstallationImage from 'figma:asset/e425b2bcc152cc11f373146ab8e52cedabebe03b.png';

export default function SolarServicesPage() {
  const services = [
    {
      icon: Sun,
      title: 'Solar System Design & Installation',
      description: 'Custom solar energy system design and professional installation tailored to your specific energy needs and budget.',
      image: solarInstallationImage
    },
    {
      icon: Zap,
      title: 'Grid-Tied Solar Systems',
      description: 'Connect to the national grid while reducing electricity costs through efficient solar energy generation and net metering.',
      image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NzA1MDI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Battery,
      title: 'Hybrid & Off-Grid Systems',
      description: 'Complete energy independence with hybrid systems featuring battery storage for reliable power day and night.',
      image: 'https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NzA1NjI4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Settings,
      title: 'Preventive Maintenance',
      description: 'Regular system inspections, cleaning, and maintenance to ensure optimal performance and longevity of your solar investment.',
      image: 'https://images.unsplash.com/photo-1744113511604-235e7010981f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MDU2Mjg0OHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Activity,
      title: 'Performance Monitoring & Optimization',
      description: 'Advanced monitoring systems to track energy production and identify optimization opportunities for maximum efficiency.',
      image: 'https://images.unsplash.com/photo-1761251947512-a293e482919f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjB3aXJpbmd8ZW58MXx8fHwxNzcwNTAzMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Shield,
      title: 'Energy Audits & Consulting',
      description: 'Comprehensive energy assessments to determine the best solar solution for your property and usage patterns.',
      image: consultingImage
    }
  ];

  const benefits = [
    'Certified solar installation professionals',
    'High-quality solar panels and components',
    'Comprehensive warranty coverage',
    'Post-installation support and maintenance',
    'Energy production guarantees',
    'Financing options available',
    'Grid connection assistance',
    'ROI analysis and projections'
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
                <Sun className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Solar Installation & Maintenance</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Sustainable solar energy solutions for homes, businesses, and industries across Kenya
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
                <img
                  src={solarInstallationImage}
                  alt="Solar panel installation"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Harness the Power of the Sun</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Klaar Solutions specializes in designing and installing high-efficiency solar energy systems that reduce your electricity costs while contributing to a sustainable future.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our experienced solar technicians provide end-to-end solutions from initial consultation and system design to professional installation and ongoing maintenance support.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're looking for grid-tied systems to reduce utility bills or complete off-grid independence, we have the expertise to deliver reliable, cost-effective solar solutions.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solar Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete solar energy solutions from design to maintenance
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Solar Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Invest in reliable, sustainable energy with Kenya's trusted solar installation experts.
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
                  Get Solar Quote
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
                  src="https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NzA1NjI4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Solar installation technician"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Solar Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why investing in solar energy makes sense for your property
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Reduce Energy Costs',
                description: 'Cut your electricity bills by up to 70% with efficient solar power generation'
              },
              {
                title: 'Environmental Impact',
                description: 'Reduce your carbon footprint and contribute to a cleaner, greener Kenya'
              },
              {
                title: 'Energy Independence',
                description: 'Protect yourself from rising utility costs and power outages'
              },
              {
                title: 'Increase Property Value',
                description: 'Solar installations can significantly increase your property resale value'
              },
              {
                title: 'Low Maintenance',
                description: 'Solar systems require minimal maintenance with long-lasting performance'
              },
              {
                title: 'Government Incentives',
                description: 'Benefit from tax incentives and rebates for renewable energy investments'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}