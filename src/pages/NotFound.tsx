import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-heading font-bold text-primary">404</h1>
        <p className="mb-2 text-3xl font-heading font-semibold text-secondary">Oops! Page not found</p>
        <p className="mb-8 text-lg text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild size="lg">
          <Link to="/">
            <Home size={20} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
