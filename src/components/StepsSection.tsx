const steps = [
  {
    number: "01",
    title: "Visit the offer page",
    description: "Click the button above to access the exclusive offer page",
  },
  {
    number: "02",
    title: "Complete 3-5 deals listed there",
    description: "Choose and complete the required deals from the available options",
  },
  {
    number: "03",
    title: "Receive your $750 reward",
    description: "Once completed, your reward will be processed and delivered",
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
