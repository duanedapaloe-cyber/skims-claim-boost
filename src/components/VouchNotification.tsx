import { useEffect, useState } from "react";

const vouches = [
  { name: "Alexia", reward: "Skims $750" },
  { name: "Marcus", reward: "Skims $750" },
  { name: "Sophie", reward: "Skims $750" },
  { name: "Daniel", reward: "Skims $750" },
  { name: "Emma", reward: "Skims $750" },
  { name: "James", reward: "Skims $750" },
  { name: "Olivia", reward: "Skims $750" },
  { name: "Michael", reward: "Skims $750" },
];

const VouchNotification = () => {
  const [currentVouch, setCurrentVouch] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const showDuration = 5000; // Show for 5 seconds
    const hideDuration = 8000; // Hide for 8 seconds
    const totalCycle = showDuration + hideDuration;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentVouch((prev) => (prev + 1) % vouches.length);
        setIsVisible(true);
      }, hideDuration);
    }, totalCycle);

    return () => clearInterval(interval);
  }, []);

  const vouch = vouches[currentVouch];

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-card border border-border rounded-lg shadow-lg px-4 py-3 max-w-xs">
        <p className="text-sm text-foreground">
          <span className="font-semibold">{vouch.name}</span> just claimed{" "}
          <span className="font-semibold text-primary">{vouch.reward}</span>
        </p>
      </div>
    </div>
  );
};

export default VouchNotification;
