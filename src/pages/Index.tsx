import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Palette, TrendingUp, Search, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-abstract.jpg";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and e-commerce solutions built for performance and conversions.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Logo design, brand kits, and complete visual identity packages.",
    },
    {
      icon: TrendingUp,
      title: "Social Media",
      description: "Full-service social media management and content creation.",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search rankings and drive organic traffic.",
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "AI chatbots, automation, and intelligent business solutions.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "CEO, TechStart Kenya",
      quote: "Elitjohns transformed our online presence. The website they built is stunning and our leads have tripled!",
    },
    {
      name: "David Ochieng",
      role: "Founder, Urban Apparel",
      quote: "Their branding expertise is exceptional. Our new logo and brand identity truly represent who we are.",
    },
    {
      name: "Grace Mutua",
      role: "Marketing Director",
      quote: "The social media management service has been a game-changer. Our engagement rates have never been higher.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <img
          src={heroImage}
          alt="Digital innovation"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-in">
            Transform Your Business
            <br />
            <span className="text-primary">Digitally</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            We create stunning websites, powerful apps, and winning digital strategies that drive real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button asChild size="lg" className="shadow-[0_4px_14px_0_hsl(var(--primary)/0.4)]">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary backdrop-blur-sm">
              <Link to="/services">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              About Elitjohns Digital
            </h2>
            <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed">
              Founded by <span className="font-semibold text-primary">Victor Gathecha</span>, Elitjohns Digital Agency is dedicated to empowering businesses across Kenya with cutting-edge digital solutions. We combine creativity, technical expertise, and strategic thinking to deliver results that matter.
            </p>
            <p className="text-lg text-secondary-foreground/90 leading-relaxed">
              Our mission is to make professional digital services accessible to businesses of all sizes, helping them compete and thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up ${
                  index % 3 === 0 ? 'bg-primary text-primary-foreground' : 
                  index % 3 === 1 ? 'bg-card' : 
                  'bg-secondary text-secondary-foreground'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className={`w-12 h-12 mb-4 ${index % 3 === 0 || index % 3 === 2 ? '' : 'text-primary'}`} />
                <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className={`mb-4 ${index % 3 === 0 ? 'text-primary-foreground/90' : index % 3 === 2 ? 'text-secondary-foreground/90' : 'text-muted-foreground'}`}>
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className={`font-medium inline-flex items-center hover:gap-2 transition-all ${
                    index % 3 === 0 || index % 3 === 2 ? 'text-white' : 'text-primary'
                  }`}
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-secondary-foreground/90">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
