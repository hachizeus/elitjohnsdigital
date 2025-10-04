import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const PortfolioCard = ({ image, title, category, description }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-hover">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Badge className="bg-primary text-primary-foreground">{category}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
