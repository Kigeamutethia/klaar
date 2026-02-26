import { motion } from 'motion/react';
import { 
  SparklesIcon, 
  Home, 
  Building2, 
  HardHat, 
  Droplets, 
  Wind, 
  Bug, 
  Trees,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import cleaningImage from 'figma:asset/4b4a646f68ba317311e6bef15c93991e80f623fd.png';

export default function CleaningServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services including regular maintenance, deep cleaning, and move-in/move-out cleaning for apartments and houses.',
      image: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDQ4Njg4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional office and retail space cleaning including daily maintenance, window cleaning, and floor care for commercial establishments.',
      image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA0NjUzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: HardHat,
      title: 'Post-Construction Cleaning',
      description: 'Thorough cleanup after construction or renovation projects, removing debris, dust, and preparing spaces for occupancy.',
      image: 'https://images.unsplash.com/photo-1673978483693-9e4be55b2a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBoZWxtZXQlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXJ8ZW58MXx8fHwxNzcwNTYyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Droplets,
      title: 'Deep Cleaning & Sanitation',
      description: 'Intensive cleaning and disinfection services for homes, offices, and facilities requiring specialized sanitation protocols.',
      image: 'https://images.unsplash.com/photo-1765111387588-7583e56bc2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc3MDU2Mjg1MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Wind,
      title: 'Carpet & Window Cleaning',
      description: 'Specialized carpet steam cleaning, upholstery care, and professional window cleaning for residential and commercial properties.',
      image: 'https://images.unsplash.com/photo-1622814859704-c6cd5ae75dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA1NjI4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Bug,
      title: 'Fumigation Services',
      description: 'Professional pest control and fumigation services using safe, approved chemicals to eliminate pests and maintain hygiene.',
      image: 'https://images.unsplash.com/photo-1593854519602-687eae339d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBQUEUlMjB3b3JrZXJ8ZW58MXx8fHwxNzcwNTYyODUzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const benefits = [
    'Trained and vetted cleaning professionals',
    'Eco-friendly cleaning products available',
    'Flexible scheduling and service plans',
    'Quality assurance and inspection',
    'Fully insured cleaning teams',
    'Customized cleaning protocols',
    'Emergency cleaning services',
    'Competitive pricing packages'
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
                <SparklesIcon className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Professional Cleaning Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for residential, commercial, and industrial spaces across Kenya
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cleaning Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Klaar Solutions, we understand that a clean environment is essential for health, productivity, and peace of mind. Our professional cleaning services are designed to meet the highest standards of cleanliness and hygiene.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From routine maintenance to specialized deep cleaning, our experienced teams use industry-leading techniques and eco-friendly products to deliver exceptional results every time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need daily office cleaning, one-time deep cleaning, or post-construction cleanup, we have the expertise and resources to exceed your expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={cleaningImage}
                  alt="Professional cleaning - modern clean kitchen"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cleaning Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored cleaning solutions for every need
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
                  src="https://images.unsplash.com/photo-1660662735785-6e7c067d6cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGhvc3BpdGFsaXR5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNTYyODUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Clean professional environment"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Cleaning Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience professional cleaning services that prioritize your health, safety, and satisfaction.
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
                  Request Cleaning Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}