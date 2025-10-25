import { Button } from "@/components/ui/button";
import skimsLogo from "@/assets/skims-logo.png";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://uplevelrewarded.com/aff_c?offer_id=113&aff_id=115643", "_blank");
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-20 text-center">
      <img 
        src={skimsLogo} 
        alt="Skims Logo" 
        className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-12 object-contain"
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
        Get a $750 Reward for Completing a Few Quick Deals
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
        Simple Steps, Exclusive Opportunity
      </p>
      <Button
        size="lg"
        onClick={handleCTAClick}
        className="text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
      >
        Claim Your Reward
      </Button>
    </section>
  );
};

export default HeroSection;
