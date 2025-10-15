import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";

interface PortfolioCardProps {
  media: string;
  mediaType: string;
  title: string;
  category: string;
  description: string;
  technologies?: string[];
  link?: string;
}

const PortfolioCard = ({ media, mediaType, title, category, description, technologies }: PortfolioCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    const categorySlug = category.toLowerCase().replace(' ', '-');
    navigate(`/portfolio/${categorySlug}`);
  };

  return (
    <Card 
      className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-hover hover:scale-105" 
      onClick={handleClick}
    >
      <div className="relative overflow-hidden aspect-video">
        {mediaType === 'video' ? (
          <video
            src={media}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <OptimizedImage
            src={media}
            alt={title}
            className="transition-transform duration-500 group-hover:scale-110"
            width={400}
            height={300}
          />
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white">
            <ArrowRight className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-medium">View {category}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-primary/10 text-primary">{category}</Badge>
        </div>
        <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
