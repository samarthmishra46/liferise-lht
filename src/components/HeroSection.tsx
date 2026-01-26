import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const highlights = [
    "FUE & DHI Methods",
    "Natural Results",
    "Grade 7-8 Suitable",
  ];

  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-soft-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cream rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
           

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up stagger-1">
              
              <span className="block text-foreground">Advanced <span className="text-primary">FUE & DHI</span>Methods</span>
            </h1>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-up stagger-2">
              {highlights.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  <CheckCircle2 size={16} className="text-primary" />
                  {item}
                </span>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up stagger-3">
              Advanced hair restoration solution for individuals facing Grade 7–8 baldness. Our approach combines 
              FUE and DHI hair transplant techniques with long-term regrowth programs, delivered under strict medical supervision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-4">
              <a href="#contact" className="btn-primary group">
                Start Your Journey
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border/50 animate-fade-up stagger-5">
              <div className="flex items-center gap-8 justify-center lg:justify-start flex-wrap">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-primary">Expert</p>
                  <p className="text-sm text-muted-foreground">Surgeons</p>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-primary">Grade 7-8</p>
                  <p className="text-sm text-muted-foreground">Baldness Suitable</p>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-primary">OT</p>
                  <p className="text-sm text-muted-foreground">Medical Grade Setup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              
              <video
              src="https://res.cloudinary.com/dvxqb1wge/video/upload/v1769095471/Lifescc_Hair_Solution_S2_1_kucnln.mp4"
              className="w-full h-full object-contain rounded-xl"
              autoPlay
              muted
              loop
              playsInline
            />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-soft-green flex items-center justify-center">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Surgeon Supervised</p>
                    <p className="text-sm text-muted-foreground">Centralized OT Setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
