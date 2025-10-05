import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MediaModal from '@/components/MediaModal';
import { useProjects } from '@/hooks/useProjects';

const PortfolioCategory = () => {
  const { category } = useParams();
  const { projects, loading } = useProjects(category);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({ media: '', mediaType: '', title: '' });
  
  const categoryNames = {
    'website': 'Website',
    'app': 'Mobile App', 
    'branding': 'Branding',
    'social': 'Social Media'
  };
  
  const categoryName = categoryNames[category as keyof typeof categoryNames] || 'Project';
  
  const openModal = (media: string, mediaType: string, title: string) => {
    setSelectedMedia({ media, mediaType, title });
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setSelectedMedia({ media: '', mediaType: '', title: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto container-padding">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-primary hover:text-primary-light mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {categoryName} Projects
          </h1>
          <p className="text-xl text-gray-600">
            Explore our {projects.length} {categoryName.toLowerCase()} projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">Loading projects...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project, index) => {
                  const primaryImage = project.images?.find(img => img.is_primary)?.image_url || 
                                     project.images?.[0]?.image_url;
                  
                  return (
                    <div 
                      key={project.id} 
                      className="group animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                        {primaryImage && (
                          <div 
                            className="relative overflow-hidden cursor-pointer"
                            onClick={() => {
                              const isVideo = primaryImage.includes('.mp4') || primaryImage.includes('.webm') || primaryImage.includes('video');
                              openModal(primaryImage, isVideo ? 'video' : 'image', project.title);
                            }}
                          >
                            {(() => {
                              const isVideo = primaryImage.includes('.mp4') || primaryImage.includes('.webm') || primaryImage.includes('video');
                              return isVideo ? (
                                <video
                                  src={primaryImage}
                                  className="w-full h-64 object-cover"
                                  controls={false}
                                  muted
                                  loop
                                  autoPlay
                                />
                              ) : (
                                <img
                                  src={primaryImage}
                                  alt={project.title}
                                  className="w-full h-64 object-cover"
                                />
                              );
                            })()}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                              <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        )}
                        
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                          
                          {project.technologies && project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                          
                          {project.project_url && (
                            <a 
                              href={project.project_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                            >
                              View Project <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {projects.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-500 mb-4">No projects found in this category yet.</p>
                  <Link to="/portfolio" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                    View All Projects
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <MediaModal
        isOpen={modalOpen}
        onClose={closeModal}
        media={selectedMedia.media}
        mediaType={selectedMedia.mediaType}
        title={selectedMedia.title}
      />
      
      <Footer />
    </div>
  );
};

export default PortfolioCategory;