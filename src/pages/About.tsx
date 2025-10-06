import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to solve business challenges.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Quality is never an accident. It's always the result of intelligent effort.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your success is our success. We build lasting partnerships with our clients.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 bg-gradient-to-r from-primary via-green-600 to-emerald-600 mt-8 sm:mt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About Elitjohns Digital
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4 mt-2 sm:mt-4">
            Empowering businesses through innovative digital solutions
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Founder
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">Victor Gathecha</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                With a passion for technology and a vision to democratize digital services, Victor founded Elitjohns Digital Agency to bridge the gap between businesses and the digital world.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Understanding the challenges that businesses face in establishing their online presence, Victor created a comprehensive suite of services that are not only affordable but also deliver exceptional results.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Today, Elitjohns Digital Agency serves clients across Kenya, helping them transform their digital presence and achieve their business goals through strategic digital solutions.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={founderImage}
                alt="Victor Gathecha - Founder"
                className="rounded-lg shadow-hover w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To empower businesses of all sizes with professional, affordable digital solutions that drive growth, enhance visibility, and create lasting impact in the digital landscape.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To become Kenya's most trusted digital agency, known for transforming businesses through innovation, creativity, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-5xl font-heading font-bold mb-2">50+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-heading font-bold mb-2">40+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-heading font-bold mb-2">10+</div>
              <div className="text-white/80">Services Offered</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-heading font-bold mb-2">99%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-secondary mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business thrive in the digital world
          </p>
          <a
            href="mailto:elitjohnsdigital@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-[0_4px_14px_0_hsl(var(--primary)/0.4)]"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
