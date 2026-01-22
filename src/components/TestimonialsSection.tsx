import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anjali Rao",
      age: 34,
      location: "Secunderabad",
      text: "After my second pregnancy, hair fall became uncontrollable. LIFESCC didn't rush me into treatments. They first fixed my deficiencies and scalp health. Within a few weeks, hair fall reduced and new growth started showing.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Karthik Iyer",
      age: 30,
      location: "Whitefield, Bengaluru",
      text: "I started losing hair near the temples and crown just before my wedding. The doctors clearly explained what could be treated medically and what needed a transplant. The final results look very natural — nobody can tell.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Padma Lakshmi",
      age: 44,
      location: "Mylapore, Chennai",
      text: "I thought thinning hair at my age was permanent. Instead of pushing surgery, LIFESCC worked on scalp correction first. My hair feels thicker, stronger, and healthier now.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Vinod Prakash",
      age: 39,
      location: "Tiruppur",
      text: "Long working hours and stress ruined my hair density. The scalp analysis helped me understand the real issue. With consistent treatment and follow-ups, my hair fall reduced steadily and density improved.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Harshita Reddy",
      age: 28,
      location: "Gachibowli, Hyderabad",
      text: "I had low volume and patchy thinning since college. Non-surgical hair restoration strengthened my roots and improved thickness. I finally feel confident styling my hair again.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
            Success Stories
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Client Results
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Hear from real people who have transformed their lives with our program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card-elevated p-6 ${index === 0 ? 'lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-coral text-coral" />
                ))}
              </div>
              
              <Quote size={24} className="text-primary/30 mb-3" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
