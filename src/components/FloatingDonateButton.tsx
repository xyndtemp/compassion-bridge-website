
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingDonateButton = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg shadow-lg"
      >
        DONATE
      </Button>
    </div>
  );
};

export default FloatingDonateButton;
