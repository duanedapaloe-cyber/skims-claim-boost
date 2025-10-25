const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground leading-relaxed">
          This offer is only available to residents of{" "}
          <span className="font-medium text-foreground">United Kingdom</span>,{" "}
          <span className="font-medium text-foreground">United States</span>,{" "}
          <span className="font-medium text-foreground">Canada</span>, and{" "}
          <span className="font-medium text-foreground">Australia</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
