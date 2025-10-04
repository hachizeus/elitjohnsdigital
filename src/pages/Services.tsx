import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { websiteServices, appServices, brandingServices, socialMediaServices, additionalServices } from "@/data/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Our Services & Packages
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transparent pricing with everything you need to succeed digitally
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="website" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="website">Websites</TabsTrigger>
              <TabsTrigger value="apps">Apps</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="seo">SEO & Ads</TabsTrigger>
              <TabsTrigger value="additional">More</TabsTrigger>
            </TabsList>

            {/* Website Development */}
            <TabsContent value="website" className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                  Website Development
                </h2>
                <p className="text-muted-foreground mb-8">
                  Professional, mobile-optimized websites built to convert visitors into customers
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {websiteServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </TabsContent>

            {/* App Development */}
            <TabsContent value="apps" className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                  App Development
                </h2>
                <p className="text-muted-foreground mb-8">
                  Custom mobile applications for Android and iOS
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {appServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </TabsContent>

            {/* Branding */}
            <TabsContent value="branding" className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                  Branding Services
                </h2>
                <p className="text-muted-foreground mb-8">
                  Create a memorable brand identity that stands out
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brandingServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </TabsContent>

            {/* Social Media */}
            <TabsContent value="social" className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                  Social Media Management
                </h2>
                <p className="text-muted-foreground mb-8">
                  Professional social media management to grow your online presence
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {socialMediaServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg mb-4">Add-Ons Available:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ad Management Only: KES 15,000/month or 15% of ad spend</li>
                  <li>• Extra Video: KES 1,500 each</li>
                  <li>• Extra Graphic: KES 1,000 each</li>
                </ul>
              </div>
            </TabsContent>

            {/* SEO & Ads */}
            <TabsContent value="seo" className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                  SEO & Marketing Campaigns
                </h2>
                <p className="text-muted-foreground mb-8">
                  Drive traffic and conversions with expert SEO and ad management
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {additionalServices.slice(0, 2).map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </TabsContent>

            {/* Additional Services */}
            <TabsContent value="additional" className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                  Additional Services
                </h2>
                <p className="text-muted-foreground mb-8">
                  AI solutions, content creation, and more
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalServices.slice(2).map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Not Sure Which Package is Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's have a conversation about your goals and find the perfect solution
          </p>
          <a
            href="mailto:elitjohnsdigital@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
