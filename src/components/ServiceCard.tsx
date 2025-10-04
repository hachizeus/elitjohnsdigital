import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  maintenance?: string;
  afterCosts?: string;
  featured?: boolean;
}

const ServiceCard = ({
  title,
  price,
  description,
  features,
  maintenance,
  afterCosts,
  featured = false,
}: ServiceCardProps) => {
  return (
    <Card className={`relative transition-all duration-300 hover:shadow-hover ${featured ? 'border-primary border-2' : ''}`}>
      {featured && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
          Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-heading">{title}</CardTitle>
        <CardDescription className="text-3xl font-bold text-primary mt-2">{price}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Includes:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {maintenance && (
          <div className="pt-4 border-t border-border">
            <p className="text-sm">
              <span className="font-semibold">Maintenance:</span> {maintenance}
            </p>
          </div>
        )}

        {afterCosts && (
          <div className="pt-2">
            <p className="text-sm">
              <span className="font-semibold">Additional Costs:</span> {afterCosts}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to="/contact">Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
