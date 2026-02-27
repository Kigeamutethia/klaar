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

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Moving Services Made Simple
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Klaar Solutions provides secure and efficient moving services for homes, offices, and commercial properties in partnership with Taylor Movers.
            </p>

            {/* ✅ UPDATED BUTTON */}
            <a
              href="https://taylorea.com/Contacts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#1f4165] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Request a Quote
            </a>

          </motion.div>

        </div>
      </section>

      {/* Rest of your code remains exactly unchanged */}

      {/* About the Service */}
      <section className="py-20 bg-white">
        {/* unchanged */}
      </section>

      {/* Services Included */}
      <section className="py-20 bg-gray-50">
        {/* unchanged */}
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        {/* unchanged */}
      </section>

      {/* Why Choose Our Moving Services */}
      <section className="py-20 bg-gray-50">
        {/* unchanged */}
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1f4165] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Relocate?
            </h2>

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