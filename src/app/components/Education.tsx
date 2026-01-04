import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: "Bachelor of Technology, Food Technology",
      institution: "Tribhuwan University — Central Campus of Technology",
      period: "Nov 2018 - Dec 2023",
      description:
        "Undergraduate degree focusing on food processing, safety, quality assurance, and product development.",
      highlights: [
        "Major: Food Technology",
        "Completed coursework in food chemistry, microbiology, processing, and safety",
        "Senior research and practical training",
      ],
    },
    {
      degree: "School Leaving Certificate (Grade 11 & 12)",
      institution: "United Academy Secondary School, Lalitpur",
      period: "Aug 2016 - Aug 2018",
      description: "Higher secondary education covering science subjects",
      highlights: [],
    },
    {
      degree: "School Leaving Certificate (Grade 10)",
      institution: "Deepak English Medium High School, Banke",
      period: "Apr 2005 - Jun 2016",
      description: "Secondary education",
      highlights: [],
    },
  ];

  const certifications = [
    {
      title: "HACCP Principles & Training",
      issuer: "Department / Training Program",
      date: "2023-2024",
      icon: Award,
      color: "#6b7b5e",
    },
    {
      title: "Good Manufacturing Practices (GMP)",
      issuer: "Training Program",
      date: "2023",
      icon: Award,
      color: "#8b6f47",
    },
    {
      title: "ISO 22000:2018 (Familiarity)",
      issuer: "Training Program",
      date: "2023",
      icon: Award,
      color: "#d4966a",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-[#f5f1e8] to-white" ref={ref}>
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
                Education & Certifications
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Academic Foundation
            </h2>
            <p
              className="text-lg text-[#6b6b6b] max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Strong educational background and professional certifications
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Timeline indicator */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6b7b5e] to-[#8a9d7a] flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-1 h-full bg-gradient-to-b from-[#6b7b5e] to-transparent min-h-[100px] mt-4" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-[#6b7b5e]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#6b7b5e]" />
                      <span
                        className="text-sm text-[#6b7b5e]"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl mb-2 text-[#2d2d2d]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-lg text-[#6b7b5e] mb-4"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      className="text-[#6b6b6b] mb-6 leading-relaxed"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {edu.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-center gap-2 text-sm text-[#6b6b6b]"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#6b7b5e]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div>
            <motion.h3
              className="text-3xl mb-6 text-center text-[#2d2d2d]"
              style={{ fontFamily: 'var(--font-serif)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Professional Certifications
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#6b7b5e]/10 group hover:-translate-y-2"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${cert.color}15` }}
                  >
                    <cert.icon className="w-6 h-6" style={{ color: cert.color }} />
                  </div>
                  <h4
                    className="mb-2 text-[#2d2d2d]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {cert.title}
                  </h4>
                  <p
                    className="text-sm text-[#6b6b6b] mb-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-xs" style={{ color: cert.color, fontFamily: 'var(--font-sans)' }}>
                    <Calendar className="w-3 h-3" />
                    {cert.date}
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
