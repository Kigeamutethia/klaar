import { motion } from 'motion/react';
import { 
  Shield, 
  HardHat, 
  CheckCircle, 
  FileCheck, 
  AlertTriangle, 
  Users,
  Leaf,
  Award
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/9fc5054a5827c1ebc2ac564c816dfc1ea4b13fcb.png';
import solarSafetyImage from 'figma:asset/e425b2bcc152cc11f373146ab8e52cedabebe03b.png';

export default function HealthSafetyPage() {
  const safetyCommitments = [
    {
      icon: HardHat,
      title: 'Personal Protective Equipment (PPE)',
      description: 'All team members are provided with and required to use appropriate PPE including helmets, safety boots, gloves, goggles, and high-visibility clothing.',
      image: 'https://images.unsplash.com/photo-1673978483693-9e4be55b2a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBoZWxtZXQlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXJ8ZW58MXx8fHwxNzcwNTYyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: FileCheck,
      title: 'Approved Safety Procedures',
      description: 'We adhere to established safety procedures, risk assessments, and method statements for all projects and service delivery.',
      image: heroImage
    },
    {
      icon: Leaf,
      title: 'Environmental Compliance',
      description: 'Strict adherence to environmental guidelines, proper waste disposal, and eco-friendly practices in all operations.',
      image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NzA1MDI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: AlertTriangle,
      title: 'Electrical & Solar Standards',
      description: 'Full compliance with national electrical codes, solar installation standards, and technical safety regulations.',
      image: 'https://images.unsplash.com/photo-1744113511604-235e7010981f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MDU2Mjg0OHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const practices = [
    'Pre-project safety briefings',
    'Regular safety training and certification',
    'Incident reporting and investigation',
    'Safety audits and inspections',
    'Emergency response procedures',
    'Client-specific safety requirement compliance',
    'Tool and equipment safety checks',
    'Site safety signage and barriers',
    'First aid trained personnel on-site',
    'Continuous safety improvement programs'
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
                <Shield className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Health, Safety & Compliance</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Safety first in everything we do - protecting our team, clients, and the environment
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Safety Commitment</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Klaar Solutions Ltd, health and safety is not just a requirement—it's a core value that guides everything we do. We are committed to providing a safe working environment for our employees while ensuring the safety and wellbeing of our clients and the general public.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our comprehensive health and safety management system ensures compliance with national regulations, industry standards, and client-specific requirements across all our service lines.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We continuously invest in safety training, equipment, and processes to maintain the highest standards of workplace safety and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
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

      {/* Safety Commitments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Safety Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety measures across all operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyCommitments.map((commitment, index) => (
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
                    src={commitment.image}
                    alt={commitment.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <commitment.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{commitment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Practices */}
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
                  src="https://images.unsplash.com/photo-1673978483693-9e4be55b2a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBoZWxtZXQlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXJ8ZW58MXx8fHwxNzcwNTYyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Safety-compliant worksite"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Safety Practices & Procedures</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive safety management includes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {practices.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#1f4165] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{practice}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meeting and exceeding industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Industry Certifications',
                description: 'Our technicians hold relevant certifications for electrical, solar, plumbing, and cleaning services'
              },
              {
                icon: FileCheck,
                title: 'Regulatory Compliance',
                description: 'Full compliance with Kenyan safety regulations, building codes, and environmental standards'
              },
              {
                icon: Shield,
                title: 'Insurance Coverage',
                description: 'Comprehensive liability and workers compensation insurance for all projects and personnel'
              },
              {
                icon: Users,
                title: 'Trained Personnel',
                description: 'Ongoing safety training programs ensuring all team members maintain up-to-date safety knowledge'
              },
              {
                icon: AlertTriangle,
                title: 'Risk Management',
                description: 'Proactive hazard identification and risk mitigation strategies for every project'
              },
              {
                icon: Leaf,
                title: 'Environmental Stewardship',
                description: 'Committed to sustainable practices and minimizing environmental impact in all operations'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-[#1f4165]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Safety Partnership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership in Safety</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We view safety as a collaborative effort between Klaar Solutions and our clients. We work closely with clients to understand and comply with site-specific safety requirements, ensuring seamless integration with your existing safety protocols.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team participates in client safety inductions, adheres to visitor management systems, and maintains open communication channels for safety matters throughout project execution.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Together, we create safer workplaces and deliver projects with zero harm to people, property, and the environment.
              </p>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-block bg-[#1f4165] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e40af] transition-all transform hover:scale-105"
                >
                  Discuss Safety Requirements
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={solarSafetyImage}
                  alt="Solar panel installation workers with safety equipment"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
