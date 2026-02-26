import { motion } from 'motion/react';
import { 
  Truck, 
  Home, 
  Building2, 
  Package, 
  Shield,
  Users,
  CheckCircle,
  Globe,
  Warehouse,
  MapPin
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import taylorMoversLogo from 'figma:asset/50b79d4c1635d9699d017f223949035594316f23.png';
import taylorTruckImage from 'figma:asset/775529125f6f3845ae8d92066a42f10c73b75938.png';
import officeRelocationImage from 'figma:asset/917f644d46b95cbfa4a568524b1e5c6b2a29263f.png';
import corporateRelocationImage from 'figma:asset/817b8020dc7f7a90cc88c18b7539d5e4aebb18e0.png';
import internationalMovingImage from 'figma:asset/7d544935ca288cf54c0ed1695cd0707f7effeb64.png';
import storageServiceImage from 'figma:asset/36fa442050ec6aa784935adf684af58914023327.png';
import longDistanceMovingImage from 'figma:asset/3acdff72fe424502b255ec3aa68e48463bde57d0.png';

export default function MoversServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Residential Moving',
      description: 'Complete home relocation services including packing, loading, transportation, and unpacking for houses and apartments.',
      image: taylorTruckImage
    },
    {
      icon: Building2,
      title: 'Office Relocation',
      description: 'Professional office moving services with minimal downtime, including IT equipment handling and workspace setup.',
      image: officeRelocationImage
    },
    {
      icon: Users,
      title: 'Corporate Staff Relocation',
      description: 'Comprehensive employee relocation services for corporate transfers, including coordinated logistics and personalized support.',
      image: corporateRelocationImage
    },
    {
      icon: Globe,
      title: 'International Moving',
      description: 'Seamless international relocation services with customs clearance, shipping coordination, and global logistics management.',
      image: internationalMovingImage
    },
    {
      icon: Warehouse,
      title: 'Storage Service',
      description: 'Secure short-term and long-term storage solutions with climate control and 24/7 surveillance for your belongings.',
      image: storageServiceImage
    },
    {
      icon: MapPin,
      title: 'Long Distance Moving',
      description: 'Reliable long-distance transportation across Kenya and East Africa with GPS tracking and insurance coverage.',
      image: longDistanceMovingImage
    }
  ];

  const benefits = [
    'Experienced moving professionals',
    'Full insurance coverage',
    'GPS-tracked transportation',
    'Quality packing materials',
    'Flexible scheduling options',
    'Competitive transparent pricing',
    'Minimal downtime guarantee',
    'Post-move cleaning available'
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
                <Truck className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Moving Services Made Simple</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Klaar Solutions provides secure and efficient moving services for homes, offices, and commercial properties in partnership with Taylor Movers.
            </p>
            <button className="bg-white text-[#1f4165] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Request a Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* About the Service */}
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
                  src={taylorTruckImage}
                  alt="Taylor Movers truck at residence"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Reliable Moving Services</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We offer reliable moving-in and moving-out services including residential relocation, office moves, packing, furniture handling, and secure transportation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through our partnership with Taylor Movers, we ensure professional logistics coordination and safe delivery of your property. Our experienced team handles every aspect of your move with care and precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1f4165] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Included</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive moving solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
          >
            <p className="text-lg text-gray-700 mb-6">
              In partnership with <a href="https://taylorea.com/" target="_blank" rel="noopener noreferrer" className="text-[#1f4165] font-semibold hover:underline">Taylor Movers</a> to ensure reliable logistics and safe relocation services.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://taylorea.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img src={taylorMoversLogo} alt="Taylor Movers - Experience Delightful Moving" className="h-16 w-auto" />
              </a>
              <a 
                href="https://taylorea.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1f4165] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#153151] transition-all transform hover:scale-105"
              >
                Visit Taylor Movers
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Moving Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Moving Services?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine Klaar Solutions' commitment to excellence with Taylor Movers' logistics expertise to deliver seamless relocation experiences.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#1f4165] flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760611656047-3bb4cb4da3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBtb3ZpbmclMjB3b3JrZXJzJTIwcmVzaWRlbnRpYWx8ZW58MXx8fHwxNzcwOTExODc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional movers at work"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1f4165] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Relocate?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us handle your move with professionalism and care. Get a free quote today.
            </p>
            <a 
              href="https://taylorea.com/Contacts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#1f4165] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-lg"
            >
              Book Your Move Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}