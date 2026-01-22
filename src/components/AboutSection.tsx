import { Sparkles, Users, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Sparkles className="text-primary" size={28} />,
      title: "FUE & DHI Techniques",
      description: "Advanced follicular extraction and direct implantation methods for natural results.",
    },
    {
      icon: <Users className="text-primary" size={28} />,
      title: "Expert Surgeons",
      description: "Experienced hair transplant surgeons and qualified dermatologists.",
    },
    {
      icon: <Heart className="text-primary" size={28} />,
      title: "Centralized OT",
      description: "Medical-grade operation theatre with international hygiene protocols.",
    },
    {
      icon: <Target className="text-primary" size={28} />,
      title: "Natural Density",
      description: "Focus on natural-looking hairline design and sustainable density.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-soft-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
              About Our Program
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What is LHT – Life Hair Transplant?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              <strong className="text-foreground">LHT (Life Hair Transplant)</strong> is a comprehensive hair restoration solution designed for individuals 
              facing advanced hair loss, including <strong className="text-foreground">Grade 7–8 baldness</strong>. Our approach combines advanced 
              FUE and DHI hair transplant techniques with long-term hair regrowth and maintenance programs.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              All procedures are performed under <strong className="text-foreground">strict medical supervision</strong> in our centralized 
              Operation Theatre setup. LHT focuses on natural-looking density, scalp health, and sustainable results—not just transplantation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-soft-green flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
                  alt="Hair transplant consultation"
                  className="w-full rounded-2xl shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1579154341406-6e4e185d7c85?w=400&h=400&fit=crop"
                  alt="Scalp examination"
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
                  alt="Medical equipment"
                  className="w-full rounded-2xl shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400&h=300&fit=crop"
                  alt="Hair restoration results"
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
