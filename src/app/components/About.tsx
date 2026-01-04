import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Microscope, Leaf, Award, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Microscope,
      title: "Lab & Analytical Skills",
      description: "Chemical testing, microbial analysis, proximate analysis, and analytical techniques used in food testing",
    },
    {
      icon: Leaf,
      title: "Dairy & Processing",
      description: "Hands-on experience with pasteurization, homogenization, fermentation, and dairy product manufacturing",
    },
    {
      icon: Award,
      title: "Food Safety & Quality",
      description: "Trained in HACCP principles, GMPs, and ISO 22000:2018; experienced in QC protocols and documentation",
    },
    {
      icon: Target,
      title: "Product Development",
      description: "Recipe formulation, fortification, sensory evaluation, and shelf-life/stability testing",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZyZXNofGVufDF8fHx8MTc2NzUxODk2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fresh organic ingredients"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6b7b5e]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#d4966a] text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                Bachelors in 
              </div>
              <div className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                Food Technology — Tribhuwan Univ. (2023)
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#6b7b5e]/10 rounded-full">
              <span className="text-[#6b7b5e]" style={{ fontFamily: 'var(--font-sans)' }}>
                About Me
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Bridging Science & Nutrition
            </h2>

            <div className="space-y-4 text-[#6b6b6b] mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              <p className="leading-relaxed">
                I am a motivated and detail-oriented professional with a passion for contributing to the manufacture of high-quality food products while ensuring a safe and efficient work environment.
              </p>
              <p className="leading-relaxed">
                My background includes hands-on lab experience (proximate analysis, microbial testing), quality control roles in dairy production, and internships in food technology and QC. I have experience in recipe formulation, product fortification, and sensory evaluation.
              </p>
              <p className="leading-relaxed">
                Trained in HACCP, GMPs, and ISO 22000:2018, I combine technical rigor with teamwork and clear communication to improve quality and production processes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f5f1e8] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#6b7b5e]" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[#2d2d2d]" style={{ fontFamily: 'var(--font-sans)' }}>
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#6b6b6b]" style={{ fontFamily: 'var(--font-sans)' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
