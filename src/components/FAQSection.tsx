import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Will this work for my type of hair loss?",
      answer: "Yes. Every plan begins with diagnosis to determine whether medical regrowth, advanced therapy, or transplant is required.",
    },
    {
      question: "Are the treatments painful or surgical?",
      answer: "Non-surgical hair solutions are comfortable with no downtime. Hair transplant procedures are minimally invasive and performed under local anaesthesia.",
    },
    {
      question: "How soon will I see results?",
      answer: "Hair fall reduction is often noticed within weeks. Regrowth and density improvement develop gradually over time.",
    },
    {
      question: "Will I need a hair transplant immediately?",
      answer: "Not always. Many clients respond well to non-surgical regrowth programs. Transplant is suggested only when medically required.",
    },
    {
      question: "Will the results look natural?",
      answer: "Yes. Hairlines and density are planned carefully to match natural growth patterns and facial structure.",
    },
    {
      question: "Is this suitable for people above 40?",
      answer: "Absolutely. With correct diagnosis and treatment, clients above 40 experience visible improvement in scalp health and hair density.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
