import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import { useProjects } from "@/hooks/useProjects";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/supabase";
import chatImage from "@/assets/chat.png";
import portfolioWeb2 from "@/assets/portfolio-web2.jpg";
import portfolioApp1 from "@/assets/portfolio-app1.jpg";
import portfolioBranding1 from "@/assets/portfolio-branding1.jpg";
import portfolioSocial1 from "@/assets/portfolio-social1.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { projects, loading } = useProjects();
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});

  const categories = [
    { key: "all", label: "All" },
    { key: "website", label: "Website Development" },
    { key: "app", label: "App Development" },
    { key: "branding", label: "Branding" },
    { key: "social", label: "Social Media" }
  ];

  const categoryImages = {
    "website": portfolioWeb2,
    "app": portfolioApp1,
    "branding": portfolioBranding1,
    "social": portfolioSocial1
  };

  useEffect(() => {
    const counts = projects.reduce((acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    setCategoryCounts(counts);
  }, [projects]);

  // Show category images when "All" is selected, otherwise show uploaded projects
  const getDisplayItems = () => {
    if (activeFilter === "all") {
      // Show service category cards with asset images
      return categories.slice(1).map(category => ({
        id: category.key,
        title: category.label,
        description: `Professional ${category.label.toLowerCase()} services`,
        category: category.key,
        media: categoryImages[category.key],
        mediaType: 'image',
        technologies: [],
        link: `/portfolio/${category.key}`,
        isCategory: true
      }));
    } else {
      // Show actual uploaded projects for the selected category
      return projects
        .filter(project => project.category === activeFilter)
        .map(project => {
          const primaryMedia = project.images?.find(img => img.is_primary)?.image_url || project.images?.[0]?.image_url || categoryImages[project.category];
          const isVideo = primaryMedia?.includes('.mp4') || primaryMedia?.includes('.webm') || primaryMedia?.includes('video');
          
          return {
            id: project.id,
            title: project.title,
            description: project.description || '',
            category: project.category,
            media: primaryMedia,
            mediaType: isVideo ? 'video' : 'image',
            technologies: project.technologies || [],
            link: project.project_url || '#',
            isCategory: false
          };
        });
    }
  };

  const displayItems = getDisplayItems();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 bg-gradient-to-r from-primary via-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>
      </section>

      {/* Filter & Portfolio */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeFilter === category.key ? "default" : "outline"}
                onClick={() => setActiveFilter(category.key)}
                className="transition-all text-xs sm:text-sm px-3 sm:px-4 py-2"
              >
                {category.label}
                {category.key !== 'all' && categoryCounts[category.key] && (
                  <span className="ml-2 text-xs opacity-75">({categoryCounts[category.key]})</span>
                )}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading projects...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {displayItems.map((item) => (
                  <div key={item.id} className="animate-fade-in">
                    <PortfolioCard {...item} />
                  </div>
                ))}
              </div>

              {displayItems.length === 0 && activeFilter !== "all" && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No projects uploaded in this category yet.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Projects will appear here when added through the admin panel.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Service-Specific Portfolios Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Explore by Service
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              View detailed case studies for each service category
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.slice(1).map((category) => {
              const count = categoryCounts[category.key] || 0;
              return (
                <Link
                  key={category.key}
                  to={`/portfolio/${category.key}`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer block border"
                >
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{category.label}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {count} {count === 1 ? "project" : "projects"}
                  </p>
                  <span className="text-primary text-sm font-medium">View Projects →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Want Your Project Featured Here?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let's create something amazing together
          </p>
          <Button asChild className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
            <a href="mailto:elitjohnsdigital@gmail.com">Start Your Project</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
