import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: "Quality Control Officer",
      company: "Shivapuri Fresh Day Dairy Pvt. Ltd.",
      location: "Bhaktapur, Nepal",
      period: "Aug 2024 - Apr 2025; Jul 17, 2025 - Present",
      type: "Full-time",
      responsibilities: [
        "Supervised quality control protocols for raw milk and milk products",
        "Monitored production and performed quality testing of pasteurized milk",
        "Assisted in production processes for yoghurt, butter, SMP, and paneer",
        "Maintained detailed lab records, raw material inspections, and production quality checks",
      ],
      achievements: [
        "Improved QC documentation and traceability",
        "Maintained consistent product quality during high-volume production",
      ],
      color: "#6b7b5e",
    },
    {
      title: "Quality Control Intern",
      company: "Himaida Nepal Pvt. Ltd.",
      location: "Kathmandu, Nepal",
      period: "Jul 2024 - Aug 2024",
      type: "Internship",
      responsibilities: [
        "Inspected raw honey for sensory and moisture parameters",
        "Checked in-process and packaging quality",
        "Maintained QC logs, test results, and corrective action reports",
      ],
      achievements: [
        "Contributed to improved sampling and inspection protocols",
      ],
      color: "#8b6f47",
    },
    {
      title: "Lab Assistant Intern",
      company: "Department of Food Technology and Quality Control",
      location: "Kathmandu, Nepal",
      period: "May 2022 - Jul 2022",
      type: "Internship",
      responsibilities: [
        "Performed proximate analysis of incoming meat samples",
        "Assisted in recipe formation and fortification of Nepali dish Momo",
      ],
      achievements: [
        "Supported lab workflows and data recording",
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
            animate={{ opacity: 1, y: 0 }}
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
                  animate={{ opacity: 1, x: 0 }}
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
