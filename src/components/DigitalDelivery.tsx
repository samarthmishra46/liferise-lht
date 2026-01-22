import { Video, MessageSquare, Dumbbell, Smartphone, CheckCircle2 } from "lucide-react";

const DigitalDelivery = () => {
  const features = [
    { icon: <Video size={24} />, text: "Fully equipped centralized OT" },
    { icon: <MessageSquare size={24} />, text: "International hygiene & sterilization protocols" },
    { icon: <Dumbbell size={24} />, text: "Advanced instruments and technology" },
    { icon: <Smartphone size={24} />, text: "Strict patient safety standards" },
  ];

  return (
    <section className="section-padding bg-soft-green">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Convenience First
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Centralized OT Setup – Medical-Grade Safety
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All procedures are performed in controlled medical environments with the highest safety standards.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background"
                >
                  <div className="w-12 h-12 rounded-xl bg-soft-green flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center justify-center gap-3 text-primary">
                <CheckCircle2 size={24} />
                <span className="text-lg font-semibold">All procedures in medical-grade OT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalDelivery;
