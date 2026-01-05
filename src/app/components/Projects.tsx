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
      title:
        "Effect of drying temperature on bioactive components of moringa leaves and storage stability of dried moringa leaf powder.",
      category: "Thesis (B.Tech)",
      description:
        "B.Tech thesis investigating how different drying temperatures affect the retention of bioactive compounds in Moringa leaves, and the storage stability of the resulting dried moringa leaf powder. Included drying trials, compound quantification and storage studies.",
      tools: [
        "Drying Trials",
        "Spectrophotometry / HPLC",
        "Moisture Analysis",
        "Storage Stability Testing",
        "Statistical Analysis",
      ],
      outcomes: [
        "Characterized effect of drying temperature on bioactive retention",
        "Recommended optimal drying parameters for maximum retention",
        "Evaluated storage stability of dried moringa leaf powder",
      ],
      image:
        "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "#4b7a63",
      link: "https://example.com/thesis",
    }
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

                  <a href={project.link ?? '#'} target="_blank" rel="noreferrer" className="block">
                    <Button
                      variant="ghost"
                      className="w-full text-[#6b7b5e] hover:bg-[#6b7b5e]/10 justify-between group/btn"
                    >
                      <span style={{ fontFamily: 'var(--font-sans)' }}>View Details</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
