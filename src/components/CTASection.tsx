import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-soft-green relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cream rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Take the First Step Toward Hair Restoration
          </h2>
          
          <p className="text-xl text-muted-foreground mb-4">
            Hair loss does not define you.
          </p>
          
          <p className="text-2xl font-semibold text-white mb-10">
            The right treatment can <span className="text-primary">transform confidence</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#"
              className="btn-primary group text-lg px-10 py-5"
            >
              Book a 1:1 Consultation with LHT Today
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Hair transplant results may vary from person to person. 
            No medical procedure can guarantee fixed or exaggerated outcomes. All treatments are performed under qualified medical supervision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
