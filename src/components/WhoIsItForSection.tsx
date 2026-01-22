import { CheckCircle2 } from "lucide-react";

const WhoIsItForSection = () => {
  const criteria = [
    "Men and women with advanced hair loss (Grade 3 to Grade 7–8)",
    "Individuals with failed or poor results from previous treatments",
    "Patients seeking natural density and hairline design",
    "Those looking for long-term hair solutions, not temporary fixes",
    "Anyone wanting surgeon-led procedures with medical-grade safety",
  ];

  return (
    <section className="section-padding bg-soft-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Is This For You?
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who Is This Suitable For?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            LHT Hair Transplant is suitable for individuals seeking advanced hair restoration with natural, sustainable results.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 rounded-2xl bg-white/60 backdrop-blur-sm text-left transition-transform hover:-translate-y-1 border border-primary/20"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-white" />
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href="#contact" className="btn-primary">
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
