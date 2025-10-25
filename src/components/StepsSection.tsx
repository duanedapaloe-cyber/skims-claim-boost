const steps = [
  {
    number: "01",
    title: "Visit the Offer Page",
    description: "Click the Button Above to Access the Exclusive Offer Page",
  },
  {
    number: "02",
    title: "Complete 3-5 Deals Listed There",
    description: "Choose and Complete the Required Deals from the Available Options",
  },
  {
    number: "03",
    title: "Receive Your $750 Reward",
    description: "Once Completed, Your Reward Will Be Processed and Delivered",
  },
];

const StepsSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-12">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors duration-200"
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
