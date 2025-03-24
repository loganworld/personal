
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-6 py-20">
          <h1 className="text-8xl font-mono font-medium mb-4 slide-down">404</h1>
          <p className="text-2xl mb-8 slide-down animation-delay-100">Oops! Page not found</p>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto slide-down animation-delay-200">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link to="/" className="slide-down animation-delay-300 inline-block">
            <Button>
              <ArrowLeft size={16} className="mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
