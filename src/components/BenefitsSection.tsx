import { TrendingDown, Flame, Apple, Zap, Cookie, Leaf } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingDown size={32} />,
      title: "Maximum Coverage",
      description: "Achieve maximum possible coverage and density for your baldness grade.",
    },
    {
      icon: <Flame size={32} />,
      title: "Natural Hairline Design",
      description: "Hairlines planned to match natural growth patterns and facial structure.",
    },
    {
      icon: <Apple size={32} />,
      title: "Improved Graft Survival",
      description: "DHI technique ensures better control and graft survival rates.",
    },
    {
      icon: <Zap size={32} />,
      title: "Faster Recovery",
      description: "Minimally invasive FUE method ensures faster healing and minimal scarring.",
    },
    {
      icon: <Cookie size={32} />,
      title: "Sustainable Results",
      description: "Long-term hair regrowth support and maintenance programs included.",
    },
    {
      icon: <Leaf size={32} />,
      title: "Builds Confidence",
      description: "Natural-looking results that restore your appearance and self-esteem.",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
            Benefits
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Results That Build Confidence
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our goal is to achieve maximum possible coverage supported by ongoing care for the best achievable outcome.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-soft-green group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6">
                {benefit.icon}
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
