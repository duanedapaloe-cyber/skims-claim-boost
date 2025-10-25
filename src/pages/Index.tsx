import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import Footer from "@/components/Footer";
import VouchNotification from "@/components/VouchNotification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center py-12">
        <HeroSection />
        <StepsSection />
      </main>
      <Footer />
      <VouchNotification />
    </div>
  );
};

export default Index;
