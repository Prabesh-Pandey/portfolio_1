import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: "Quality Assurance Intern",
      company: "FreshHarvest Foods Inc.",
      location: "Portland, OR",
      period: "Jan 2024 - May 2024",
      type: "Internship",
      responsibilities: [
        "Conducted daily quality control tests on raw materials and finished products",
        "Assisted in HACCP plan development and implementation",
        "Performed microbiological testing and documented results",
        "Participated in supplier audits and quality assessments",
        "Contributed to process improvement initiatives that reduced waste by 15%",
      ],
      achievements: [
        "Implemented new testing protocol improving efficiency by 20%",
        "Received commendation for attention to detail",
      ],
      color: "#6b7b5e",
    },
    {
      title: "Research Assistant",
      company: "University Food Science Laboratory",
      location: "University Campus",
      period: "Sep 2022 - Dec 2023",
      type: "Research",
      responsibilities: [
        "Assisted in research on plant-based protein alternatives",
        "Conducted chemical and nutritional analysis using advanced equipment",
        "Maintained laboratory equipment and ensured safety compliance",
        "Prepared samples and documented experimental procedures",
        "Collaborated with graduate students on multiple research projects",
      ],
      achievements: [
        "Co-authored paper on sustainable protein sources",
        "Presented findings at regional food science symposium",
      ],
      color: "#8b6f47",
    },
    {
      title: "Product Development Volunteer",
      company: "Community Food Innovation Center",
      location: "Local Community",
      period: "Jun 2023 - Aug 2023",
      type: "Volunteer",
      responsibilities: [
        "Developed nutritious food products for food bank distribution",
        "Formulated recipes using donated and surplus ingredients",
        "Conducted sensory evaluations with community members",
        "Ensured all products met food safety standards",
        "Created educational materials on food preservation",
      ],
      achievements: [
        "Developed 5 new shelf-stable products",
        "Trained 20+ volunteers in food safety practices",
      ],
      color: "#d4966a",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#6b7b5e]/10 rounded-full">
              <span className="text-[#6b7b5e]" style={{ fontFamily: 'var(--font-sans)' }}>
                Professional Experience
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Work & Research Experience
            </h2>
            <p
              className="text-lg text-[#6b6b6b] max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Practical experience applying food science principles in real-world settings
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6b7b5e] via-[#8b6f47] to-[#d4966a] hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 items-start">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-10"
                        style={{ backgroundColor: exp.color }}
                      >
                        <Briefcase className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gradient-to-br from-white to-[#f5f1e8]/30 rounded-2xl p-8 shadow-lg border border-[#6b7b5e]/10 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="text-xs px-3 py-1 rounded-full text-white"
                              style={{ backgroundColor: exp.color, fontFamily: 'var(--font-sans)' }}
                            >
                              {exp.type}
                            </span>
                          </div>
                          <h3
                            className="text-2xl mb-1 text-[#2d2d2d]"
                            style={{ fontFamily: 'var(--font-serif)' }}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className="text-lg mb-2"
                            style={{ color: exp.color, fontFamily: 'var(--font-sans)' }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-[#6b6b6b] mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-[#6b6b6b]" style={{ fontFamily: 'var(--font-sans)' }}>
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4
                          className="text-sm uppercase tracking-wider text-[#6b7b5e] mb-3"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, rIndex) => (
                            <li
                              key={rIndex}
                              className="text-sm text-[#6b6b6b] flex items-start leading-relaxed"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6b7b5e] mr-3 mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4
                          className="text-sm uppercase tracking-wider text-[#6b7b5e] mb-3"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          Notable Achievements
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, aIndex) => (
                            <div
                              key={aIndex}
                              className="text-sm text-[#2d2d2d] flex items-start bg-white/60 p-3 rounded-lg"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              <span className="text-lg mr-2">🏆</span>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
