import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FlaskConical, Bug, Apple, Shield, ClipboardCheck, Lightbulb, TestTube, BookOpen } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      icon: FlaskConical,
      title: "Analytical & Lab Skills",
      skills: [
        { name: "Chemical Testing", level: 92 },
        { name: "Microbial Analysis", level: 90 },
        { name: "Proximate Analysis", level: 88 },
        { name: "Adulteration Testing", level: 88 },
      ],
      color: "#6b7b5e",
    },
    {
      icon: TestTube,
      title: "Dairy Processing",
      skills: [
        { name: "Pasteurization", level: 90 },
        { name: "Homogenization", level: 88 },
        { name: "Fermentation", level: 86 },
      ],
      color: "#8b6f47",
    },
    {
      icon: Shield,
      title: "Food Safety & Quality",
      skills: [
        { name: "HACCP Principles", level: 92 },
        { name: "GMP Compliance", level: 90 },
        { name: "ISO 22000:2018", level: 88 },
      ],
      color: "#d4966a",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Control",
      skills: [
        { name: "QA Procedures", level: 90 },
        { name: "Sensory Evaluation", level: 88 },
        { name: "Documentation & Logs", level: 85 },
      ],
      color: "#8a9d7a",
    },
    {
      icon: Lightbulb,
      title: "Product Development",
      skills: [
        { name: "Recipe Formulation", level: 88 },
        { name: "Fortification", level: 86 },
        { name: "Shelf-life Testing", level: 85 },
      ],
      color: "#6b7b5e",
    },
    {
      icon: BookOpen,
      title: "Research & Soft Skills",
      skills: [
        { name: "Technical Writing", level: 90 },
        { name: "Teamwork & Communication", level: 89 },
        { name: "Microsoft Office", level: 85 },
      ],
      color: "#8b6f47",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-[#f5f1e8]" ref={ref}>
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
                Skills & Expertise
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Technical Proficiencies
            </h2>
            <p
              className="text-lg text-[#6b6b6b] max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Comprehensive expertise across all critical areas of food science and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#6b7b5e]/10 group hover:-translate-y-2"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon className="w-7 h-7" style={{ color: category.color }} />
                </div>
                <h3
                  className="text-xl mb-4 text-[#2d2d2d]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span
                          className="text-sm text-[#6b6b6b]"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-sm"
                          style={{ fontFamily: 'var(--font-sans)', color: category.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-[#f5f1e8] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}