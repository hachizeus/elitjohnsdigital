import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Palette, TrendingUp, Search, Bot, CheckCircle, Users, Award, Target, Star, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import ChatWidget from "@/components/ChatWidget";
import PricingCalculator from "@/components/PricingCalculator";

import TypewriterEffect from "@/components/TypewriterEffect";
import CounterAnimation from "@/components/CounterAnimation";
import ParallaxSection from "@/components/ParallaxSection";
import ParticleBackground from "@/components/ParticleBackground";
import ProgressBar from "@/components/ProgressBar";
import heroImage from "@/assets/hero-abstract.jpg";
import groupImage from "@/assets/group.jpg";
import handsome1 from "@/assets/handsome-sensitive-man-portrait.jpg";
import woman from "@/assets/medium-shot-african-woman-pointing-forward.jpg";
import handsome2 from "@/assets/portrait-handsome-man-with-sunglasses-yellow-background.jpg";
import { useEffect, useState } from "react";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and e-commerce solutions built for performance and conversions.",
      price: "From KES 18,000"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      price: "From KES 80,000"
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Logo design, brand kits, and complete visual identity packages.",
      price: "From KES 10,000"
    },
    {
      icon: TrendingUp,
      title: "Social Media",
      description: "Full-service social media management and content creation.",
      price: "From KES 20,000/mo"
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search rankings and drive organic traffic.",
      price: "From KES 25,000/mo"
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "AI chatbots, automation, and intelligent business solutions.",
      price: "From KES 25,000"
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "40+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    "Professional Design",
    "Mobile Responsive",
    "SEO Optimized",
    "Fast Loading",
    "Secure & Reliable",
    "24/7 Support"
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <Navigation />

      {/* Hero Section - Premium Layout */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden" style={{
        backgroundImage: `url(${groupImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-left text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-sm font-semibold border border-green-200 animate-bounce-in">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Kenya's #1 Rated Digital Agency
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Transform Your Business
                <span className="block">
                  <TypewriterEffect words={['Digitally', 'Professionally', 'Innovatively', 'Successfully']} />
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light">
                We create <span className="font-semibold text-primary">stunning websites</span>, powerful apps, and winning digital strategies that drive real results for businesses across Kenya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link 
                  to="/contact" 
                  className="btn-primary inline-flex items-center justify-center group text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  Get Started Free <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="btn-outline inline-flex items-center justify-center group text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  <Zap className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> View Services
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-6 pt-6 sm:pt-8">
                {[
                  { icon: Shield, text: "100% Secure" },
                  { icon: Zap, text: "Lightning Fast" },
                  { icon: Award, text: "Award Winning" },
                  { icon: CheckCircle, text: "24/7 Support" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-gray-200 font-medium text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in-right mt-8 lg:mt-0">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Digital transformation"
                  className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white p-3 sm:p-6 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-primary to-green-600 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-3xl font-bold text-gray-900">99%</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-white p-2 sm:p-4 rounded-2xl shadow-2xl animate-bounce-in" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    <img src={handsome1} alt="Client" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                    <img src={woman} alt="Client" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                    <img src={handsome2} alt="Client" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">50+ Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto container-padding relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-green-100 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium About Section */}
      <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-green-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-200/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-green-100 text-primary rounded-full text-sm font-semibold border border-primary/20">
                <Award className="w-4 h-4 mr-2" />
                About Elitjohns Digital
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We are the <span className="text-gradient">magic</span> behind your company's best days.
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Founded by <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">Victor Gathecha</span>, Elitjohns Digital Agency is dedicated to empowering businesses across Kenya with cutting-edge digital solutions that drive real growth.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Target, text: "Over 50+ successful projects delivered with excellence" },
                  { icon: Users, text: "Expert team with 3+ years of proven experience" },
                  { icon: Shield, text: "24/7 premium support and maintenance included" },
                  { icon: Award, text: "Affordable luxury pricing for all business sizes" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg leading-relaxed pt-2">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="btn-primary inline-flex items-center group text-lg px-8 py-4">
                Discover Our Story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              <div className="space-y-6">
                <div className="card-premium p-8 text-center group hover:bg-gradient-to-br hover:from-primary hover:to-green-600 hover:text-white transition-all duration-500">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-white group-hover:scale-110 transition-all" />
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-white">40+</div>
                  <div className="text-gray-600 font-medium group-hover:text-green-100">Happy Clients</div>
                </div>
                
                <div className="card-premium p-8 text-center group hover:bg-gradient-to-br hover:from-emerald-500 hover:to-green-600 hover:text-white transition-all duration-500">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-white group-hover:scale-110 transition-all" />
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-white">50+</div>
                  <div className="text-gray-600 font-medium group-hover:text-green-100">Projects Completed</div>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="card-premium p-8 text-center group hover:bg-gradient-to-br hover:from-yellow-500 hover:to-orange-500 hover:text-white transition-all duration-500">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-white group-hover:scale-110 transition-all" />
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-white">99%</div>
                  <div className="text-gray-600 font-medium group-hover:text-yellow-100">Success Rate</div>
                </div>
                
                <div className="bg-gradient-to-br from-primary to-green-600 p-8 rounded-2xl text-white text-center shadow-2xl hover:scale-110 transition-all duration-500 animate-glow">
                  <CheckCircle className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" />
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-green-100 font-medium">Premium Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Overview */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-green-100 text-primary rounded-full text-sm font-semibold mb-6 animate-bounce-in">
              <Zap className="w-4 h-4 mr-2" />
              Premium Digital Solutions
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Elevate Your <span className="text-gradient">Digital Presence</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Comprehensive digital solutions crafted with precision, delivered with excellence, and priced with transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const isHighlighted = index === 1 || index === 4;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up ${
                    isHighlighted 
                      ? 'bg-gradient-to-br from-primary to-green-600 text-white shadow-2xl hover:shadow-primary/25' 
                      : 'card-premium hover:border-primary/30'
                  }`}
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  {isHighlighted && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                      isHighlighted ? 'bg-white/20 backdrop-blur-sm' : 'bg-gradient-to-br from-primary/10 to-green-100'
                    }`}>
                      <service.icon className={`w-8 h-8 ${isHighlighted ? 'text-white' : 'text-primary'}`} />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`mb-6 leading-relaxed ${isHighlighted ? 'text-green-100' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                    
                    <div className={`text-2xl font-bold mb-6 ${isHighlighted ? 'text-white' : 'text-primary'}`}>
                      {service.price}
                    </div>
                    
                    <Link
                      to="/services"
                      className={`inline-flex items-center font-semibold transition-all group-hover:translate-x-2 ${
                        isHighlighted 
                          ? 'text-white hover:text-green-100' 
                          : 'text-primary hover:text-primary-light'
                      }`}
                    >
                      Explore Service <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '800ms'}}>
            <Link to="/services" className="btn-primary text-lg px-12 py-5">
              Explore All Premium Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We bring your business to new heights.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Project Planning",
                description: "We start by understanding your business goals and requirements to create a detailed project roadmap.",
                image: "/api/placeholder/300/200"
              },
              {
                step: "02",
                title: "Development & Design",
                description: "Our expert team brings your vision to life with modern design and cutting-edge technology.",
                image: "/api/placeholder/300/200"
              },
              {
                step: "03",
                title: "Launch & Support",
                description: "We launch your project and provide ongoing support to ensure continued success and growth.",
                image: "/api/placeholder/300/200"
              }
            ].map((process, index) => (
              <div key={index} className="card-modern p-6 hover:shadow-hover transition-all">
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">{process.step}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{process.description}</p>
                <Link to="/services" className="text-primary font-medium inline-flex items-center hover:text-primary-light transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden" style={{
        backgroundImage: `url(${groupImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="container mx-auto container-padding text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Digital Journey with Elitjohns Today!
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Ready to transform your business digitally? Let's discuss how we can help you achieve your goals with our comprehensive digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-smooth inline-flex items-center justify-center">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-4 rounded-lg transition-smooth inline-flex items-center justify-center">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ParticleBackground />
      <ProgressBar />
    </div>
  );
};

export default Index;
