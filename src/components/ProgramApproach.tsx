import { Stethoscope, Utensils, Dumbbell, HeartHandshake, Smartphone } from "lucide-react";

const ProgramApproach = () => {
  const approaches = [
    {
      icon: <Stethoscope size={32} />,
      title: "FUE (Follicular Unit Extraction)",
      items: [
        "Minimally invasive procedure",
        "Individual follicle extraction",
        "Faster recovery & minimal scarring",
        "Natural hairline design",
      ],
    },
    {
      icon: <Utensils size={32} />,
      title: "DHI (Direct Hair Implantation)",
      items: [
        "High-precision implantation",
        "Better control over angle, depth & direction",
        "Improved graft survival",
        "Ideal for dense and natural results",
      ],
    },
    {
      icon: <Dumbbell size={32} />,
      title: "Centralized OT Setup",
      items: [
        "Fully equipped Operation Theatre",
        "International hygiene & sterilization protocols",
        "Advanced instruments and technology",
        "Strict patient safety standards",
      ],
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Expert Medical Team",
      items: [
        "Experienced Hair Transplant Surgeons",
        "Qualified Dermatologists",
        "Trained medical technicians",
        "Dedicated nursing staff",
      ],
    },
    {
      icon: <Smartphone size={32} />,
      title: "Post-Procedure Care",
      items: [
        "Medical scalp therapy",
        "Hair regrowth treatment sessions",
        "Nutrition & lifestyle guidance",
        "Periodic dermatologist reviews",
      ],
    },
  ];

  return (
    <section id="program" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
            Our Approach
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Advanced Techniques We Use
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Combining cutting-edge FUE and DHI methods with medical-grade safety standards and comprehensive post-care support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className={`card-elevated p-8 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-soft-green flex items-center justify-center text-primary mb-6">
                {approach.icon}
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {approach.title}
              </h3>
              
              <ul className="space-y-3">
                {approach.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramApproach;
