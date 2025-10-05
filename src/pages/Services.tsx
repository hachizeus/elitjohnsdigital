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
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Our Services & Packages
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Professional Digital Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Transparent pricing with everything you need to succeed digitally. Choose from our comprehensive packages designed for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="website" className="w-full">
            {/* Make the tabs horizontally scrollable on small screens, stretch to viewport edges (-mx-4)
                and enable scroll snapping so each tab snaps into view. Reduce min widths on xs.
            */}
            <TabsList className="flex gap-1 sm:gap-3 mb-12 sm:mb-16 bg-white p-3 sm:p-4 rounded-lg shadow-card overflow-x-auto whitespace-nowrap mx-auto justify-center max-w-full snap-x snap-mandatory scrollbar-thin">
                  <TabsTrigger value="website" className="data-[state=active]:bg-primary data-[state=active]:text-white text-[13px] sm:text-sm px-2 sm:px-4 py-2 rounded-md min-w-[44px] sm:min-w-[72px] text-center flex-shrink-0 snap-start">Websites</TabsTrigger>
                  <TabsTrigger value="apps" className="data-[state=active]:bg-primary data-[state=active]:text-white text-[13px] sm:text-sm px-2 sm:px-4 py-2 rounded-md min-w-[44px] sm:min-w-[64px] text-center flex-shrink-0 snap-start">Apps</TabsTrigger>
                  <TabsTrigger value="branding" className="data-[state=active]:bg-primary data-[state=active]:text-white text-[13px] sm:text-sm px-2 sm:px-4 py-2 rounded-md min-w-[44px] sm:min-w-[72px] text-center flex-shrink-0 snap-start">Branding</TabsTrigger>
                  <TabsTrigger value="social" className="data-[state=active]:bg-primary data-[state=active]:text-white text-[13px] sm:text-sm px-2 sm:px-4 py-2 rounded-md min-w-[44px] sm:min-w-[64px] text-center flex-shrink-0 snap-start">Social</TabsTrigger>
                  <TabsTrigger value="seo" className="data-[state=active]:bg-primary data-[state=active]:text-white text-[13px] sm:text-sm px-2 sm:px-4 py-2 rounded-md min-w-[40px] sm:min-w-[56px] text-center flex-shrink-0 snap-start">SEO</TabsTrigger>
                  <TabsTrigger value="additional" className="data-[state=active]:bg-primary data-[state=active]:text-white text-[13px] sm:text-sm px-2 sm:px-4 py-2 rounded-md min-w-[44px] sm:min-w-[64px] text-center flex-shrink-0 snap-start">More</TabsTrigger>
                </TabsList>

            {/* Website Development */}
            <TabsContent value="website" className="space-y-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Website Development
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  Professional, mobile-optimized websites built to convert visitors into customers
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Not Sure Which Package is Right for You?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let's have a conversation about your goals and find the perfect solution for your business needs.
          </p>
          <a
            href="mailto:elitjohnsdigital@gmail.com"
            className="bg-white text-primary hover:bg-gray-100 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-smooth inline-flex items-center text-sm sm:text-base"
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
