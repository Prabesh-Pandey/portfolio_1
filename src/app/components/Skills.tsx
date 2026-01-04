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
      title: "Food Chemistry",
      skills: [
        { name: "Chemical Analysis", level: 90 },
        { name: "Ingredient Functionality", level: 85 },
        { name: "Food Additives", level: 80 },
      ],
      color: "#6b7b5e",
    },
    {
      icon: Bug,
      title: "Microbiology",
      skills: [
        { name: "Microbial Testing", level: 88 },
        { name: "Food Preservation", level: 85 },
        { name: "Fermentation", level: 82 },
      ],
      color: "#8b6f47",
    },
    {
      icon: Apple,
      title: "Nutrition",
      skills: [
        { name: "Nutritional Analysis", level: 92 },
        { name: "Diet Planning", level: 87 },
        { name: "Label Compliance", level: 85 },
      ],
      color: "#d4966a",
    },
    {
      icon: Shield,
      title: "Food Safety",
      skills: [
        { name: "HACCP Principles", level: 90 },
        { name: "GMP Compliance", level: 88 },
        { name: "Risk Assessment", level: 85 },
      ],
      color: "#8a9d7a",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Control",
      skills: [
        { name: "QA Procedures", level: 89 },
        { name: "Sensory Evaluation", level: 86 },
        { name: "Statistical Analysis", level: 84 },
      ],
      color: "#6b7b5e",
    },
    {
      icon: Lightbulb,
      title: "Product Development",
      skills: [
        { name: "Formulation", level: 87 },
        { name: "Prototype Testing", level: 85 },
        { name: "Market Research", level: 80 },
      ],
      color: "#8b6f47",
    },
    {
      icon: TestTube,
      title: "Laboratory Techniques",
      skills: [
        { name: "Spectroscopy", level: 88 },
        { name: "Chromatography", level: 85 },
        { name: "Titration Methods", level: 90 },
      ],
      color: "#d4966a",
    },
    {
      icon: BookOpen,
      title: "Research & Documentation",
      skills: [
        { name: "Technical Writing", level: 91 },
        { name: "Data Analysis", level: 87 },
        { name: "Literature Review", level: 89 },
      ],
      color: "#8a9d7a",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-[#f5f1e8]" ref={ref}>
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
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                          animate={isInView ? { width: `${skill.level}%` } : {}}
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