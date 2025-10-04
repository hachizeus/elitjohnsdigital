import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Website Development", "App Development", "Branding", "Social Media"];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>
      </section>

      {/* Filter & Portfolio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="animate-fade-in">
                <PortfolioCard {...item} />
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Service-Specific Portfolios Section */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">
              Explore by Service
            </h2>
            <p className="text-lg text-muted-foreground">
              View detailed case studies for each service category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Website Development", "App Development", "Branding", "Social Media"].map((service) => {
              const count = portfolioItems.filter((item) => item.category === service).length;
              return (
                <div
                  key={service}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-all cursor-pointer"
                  onClick={() => setActiveFilter(service)}
                >
                  <h3 className="font-heading font-semibold text-xl mb-2">{service}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {count} {count === 1 ? "project" : "projects"}
                  </p>
                  <span className="text-primary text-sm font-medium">View Projects →</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-secondary mb-6">
            Want Your Project Featured Here?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
          <Button asChild size="lg">
            <a href="mailto:elitjohnsdigital@gmail.com">Start Your Project</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
