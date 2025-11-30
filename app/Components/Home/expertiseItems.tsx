import { Monitor, Smartphone, Zap, Building2 } from "lucide-react";

const expertise = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Custom websites, web apps, and dashboards built for performance and scale.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description:
      "iOS, Android, Flutter & cross-platform solutions that users love.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Solutions",
    description:
      "Chatbots, automation & custom LLM integrations that drive results.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Enterprise Software",
    description: "SaaS, ERP & CRM solutions tailored to your business needs.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-science font-bold text-foreground">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card/70 backdrop-blur-sm border border-border/50 
                       rounded-2xl p-8 hover:bg-card hover:border-primary/30 
                       transition-all duration-500 hover:shadow-2xl hover:-translate-y-3
                       hover:scale-[1.02] cursor-default overflow-hidden"
            >
              {/* Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div
                className="relative z-10 mb-6 inline-flex items-center justify-center 
                            w-16 h-16 rounded-xl bg-primary/10 text-primary 
                            group-hover:bg-primary group-hover:text-white 
                            transition-all duration-300"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="relative z-10 text-xl font-science font-bold text-foreground mb-3 
                           group-hover:text-primary transition-colors duration-300"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Subtle Shine Effect on Hover */}
              <div
                className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
