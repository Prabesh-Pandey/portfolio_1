import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const articles = [
    {
      title: "The Future of Plant-Based Proteins",
      excerpt:
        "Exploring innovative technologies and sustainable solutions in plant-based protein production for the next generation of food products.",
      date: "December 15, 2024",
      readTime: "5 min read",
      tags: ["Sustainability", "Protein", "Innovation"],
      image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZyZXNofGVufDF8fHx8MTc2NzUxODk2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#6b7b5e",
    },
    {
      title: "Food Safety in the Modern Age",
      excerpt:
        "Understanding critical control points and emerging food safety challenges in contemporary food processing and distribution systems.",
      date: "November 28, 2024",
      readTime: "7 min read",
      tags: ["Food Safety", "HACCP", "Quality"],
      image: "https://images.unsplash.com/photo-1765144815892-1925a0def4a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcXVhbGl0eSUyMGNvbnRyb2x8ZW58MXx8fHwxNzY3NTE4OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#8b6f47",
    },
    {
      title: "Microbiome and Fermented Foods",
      excerpt:
        "The science behind fermentation and how traditional food preservation methods are making a comeback in modern nutrition.",
      date: "November 10, 2024",
      readTime: "6 min read",
      tags: ["Fermentation", "Probiotics", "Nutrition"],
      image: "https://images.unsplash.com/photo-1642497393440-4b5cc5f03ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3Njc1MTg5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#d4966a",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-white to-[#f5f1e8]" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#6b7b5e]/10 rounded-full">
              <span className="text-[#6b7b5e]" style={{ fontFamily: 'var(--font-sans)' }}>
                Articles & Insights
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Food Science Insights
            </h2>
            <p
              className="text-lg text-[#6b6b6b] max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Sharing knowledge and perspectives on food science, nutrition, and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#6b7b5e]/10 group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-md text-white backdrop-blur-sm"
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontFamily: 'var(--font-sans)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#6b6b6b] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-xl mb-3 text-[#2d2d2d] group-hover:text-[#6b7b5e] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {article.title}
                  </h3>

                  <p
                    className="text-sm text-[#6b6b6b] mb-4 leading-relaxed"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {article.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="text-[#6b7b5e] hover:bg-[#6b7b5e]/10 p-0 h-auto group/btn"
                  >
                    <span style={{ fontFamily: 'var(--font-sans)' }}>Read More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#6b7b5e] text-[#6b7b5e] hover:bg-[#6b7b5e] hover:text-white px-8 py-6 rounded-full transition-all duration-300"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}