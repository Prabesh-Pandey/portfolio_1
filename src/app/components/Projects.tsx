import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Probiotic Yogurt Development",
      category: "Product Development",
      description:
        "Developed a novel probiotic yogurt formulation with enhanced gut health benefits. Conducted sensory analysis and shelf-life studies to optimize product stability.",
      tools: ["Fermentation Analysis", "Microbial Testing", "Sensory Evaluation", "pH Control"],
      outcomes: [
        "95% consumer acceptance rate",
        "Extended shelf life by 30%",
        "Optimized probiotic viability",
      ],
      image: "https://images.unsplash.com/photo-1642497393440-4b5cc5f03ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3Njc1MTg5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#6b7b5e",
    },
    {
      title: "Plant-Based Protein Analysis",
      category: "Research & Analysis",
      description:
        "Comprehensive nutritional analysis and protein quality evaluation of various plant-based protein sources for sustainable food applications.",
      tools: ["HPLC", "Kjeldahl Method", "Amino Acid Profiling", "Digestibility Testing"],
      outcomes: [
        "Identified optimal protein blends",
        "Published research findings",
        "Recommended formulation ratios",
      ],
      image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZyZXNofGVufDF8fHx8MTc2NzUxODk2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#8b6f47",
    },
    {
      title: "Food Safety Audit Implementation",
      category: "Quality Assurance",
      description:
        "Led the implementation of HACCP principles and food safety protocols in a production facility, ensuring compliance with international standards.",
      tools: ["HACCP", "GMP Protocols", "Risk Analysis", "Documentation Systems"],
      outcomes: [
        "Zero non-compliance issues",
        "ISO 22000 certification support",
        "Reduced contamination risks by 85%",
      ],
      image: "https://images.unsplash.com/photo-1765144815892-1925a0def4a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcXVhbGl0eSUyMGNvbnRyb2x8ZW58MXx8fHwxNzY3NTE4OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#d4966a",
    },
    {
      title: "Natural Food Preservation Study",
      category: "Research",
      description:
        "Investigated natural antimicrobial agents for food preservation, focusing on essential oils and plant extracts as alternatives to synthetic preservatives.",
      tools: ["Microbial Culture", "Zone of Inhibition Tests", "Spectrophotometry", "Statistical Analysis"],
      outcomes: [
        "Identified effective natural preservatives",
        "Developed preservation protocols",
        "Presented at food science conference",
      ],
      image: "https://images.unsplash.com/photo-1588665306984-d5c6f62224aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcmVzZWFyY2glMjBtaWNyb3Njb3BlfGVufDF8fHx8MTc2NzUxODk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#8a9d7a",
    },
    {
      title: "Nutritional Labeling System",
      category: "Regulatory Compliance",
      description:
        "Developed a comprehensive nutritional labeling and compliance system for a food manufacturing company, ensuring adherence to FDA regulations.",
      tools: ["Nutritional Database", "Regulatory Guidelines", "Label Design", "Compliance Audits"],
      outcomes: [
        "100% label compliance achieved",
        "Streamlined approval process",
        "Reduced labeling errors by 95%",
      ],
      image: "https://images.unsplash.com/photo-1737072260639-892df386a681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY2hlbWlzdHJ5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NzUxODk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#6b7b5e",
    },
    {
      title: "Gluten-Free Bakery Formulation",
      category: "Product Innovation",
      description:
        "Created gluten-free bakery products with improved texture and nutritional profile, addressing celiac disease and gluten sensitivity concerns.",
      tools: ["Texture Analysis", "Baking Technology", "Ingredient Substitution", "Consumer Testing"],
      outcomes: [
        "Successfully replaced gluten functionality",
        "Enhanced nutritional value",
        "Positive consumer feedback",
      ],
      image: "https://images.unsplash.com/photo-1684259498900-afdea87b1a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc2NpZW5jZSUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzY3NTAwMjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#8b6f47",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#6b7b5e]/10 rounded-full">
              <span className="text-[#6b7b5e]" style={{ fontFamily: 'var(--font-sans)' }}>
                Projects & Research
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Featured Work
            </h2>
            <p
              className="text-lg text-[#6b6b6b] max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              A showcase of research projects and practical applications in food science
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#6b7b5e]/10 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs text-white"
                    style={{ backgroundColor: project.color, fontFamily: 'var(--font-sans)' }}
                  >
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl mb-3 text-[#2d2d2d] group-hover:text-[#6b7b5e] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm text-[#6b6b6b] mb-4 leading-relaxed"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4
                      className="text-xs uppercase tracking-wider text-[#6b7b5e] mb-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Tools & Methods
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="text-xs px-2 py-1 bg-[#f5f1e8] text-[#6b6b6b] rounded-md"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4
                      className="text-xs uppercase tracking-wider text-[#6b7b5e] mb-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Key Outcomes
                    </h4>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <li
                          key={outcomeIndex}
                          className="text-xs text-[#6b6b6b] flex items-start"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          <ChevronRight className="w-3 h-3 text-[#6b7b5e] mr-1 flex-shrink-0 mt-0.5" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-[#6b7b5e] hover:bg-[#6b7b5e]/10 justify-between group/btn"
                  >
                    <span style={{ fontFamily: 'var(--font-sans)' }}>View Details</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
