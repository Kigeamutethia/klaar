import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Shield, Heart, Leaf, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import teamImage from 'figma:asset/e13c41a7f0a979c3735cf8f9e2180754c1698887.png';
import aboutTeamImage from 'figma:asset/539ddd0c559bed33f8d3c9770d9dbab2666617bb.png';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality & Reliability',
      description: 'Delivering exceptional workmanship and dependable service every time'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Prioritizing health and safety in all our operations and projects'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical business practices'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Committed to understanding and exceeding client expectations'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Promoting eco-friendly solutions and responsible resource management'
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#1f4165] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">About Klaar Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building trust through excellence in multidisciplinary service delivery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Klaar Solutions Ltd is a multidisciplinary service company offering professional cleaning, solar energy solutions, technical maintenance, electrical, and plumbing services across Kenya.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded on the principles of quality, reliability, and customer satisfaction, we have grown to become a trusted partner for residential, commercial, industrial, and institutional clients throughout the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our integrated approach allows us to provide comprehensive solutions under one roof, ensuring consistency, efficiency, and exceptional service delivery across all touchpoints.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={aboutTeamImage}
                  alt="Klaar Solutions team members"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Eye className="w-8 h-8 text-[#1f4165]" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be a leading integrated service provider in Kenya, recognized for quality workmanship, innovation, and dependable service delivery that transforms communities and businesses.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-[#1f4165]" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To deliver exceptional cleaning, solar, electrical, and plumbing services that exceed client expectations through skilled professionals, innovative solutions, and unwavering commitment to safety and sustainability.
                  </p>
                </div>
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
                  src="https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NzA1MDI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Solar energy and sustainability"
                  className="w-full h-full object-cover lg:h-[600px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
                  src={teamImage}
                  alt="Professional team collaboration"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our values guide every decision we make and every service we deliver.
              </p>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1f4165] rounded-lg flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the Klaar difference through our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Multidisciplinary expertise under one roof',
              'Certified and experienced professionals',
              'Comprehensive safety compliance',
              'Flexible service delivery models',
              'Competitive and transparent pricing',
              'Emergency response capabilities',
              '24/7 customer support',
              'Quality assurance guarantee',
              'Eco-friendly and sustainable practices'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-[#1f4165] flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}