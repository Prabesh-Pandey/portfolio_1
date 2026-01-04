import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, UserPlus, Award } from "lucide-react";

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const items = [
    {
      title: "NEFTSA - General Member",
      period: "2019 - 2023",
      description:
        "General member at Nepal Food Technology Students Association supporting student-led initiatives and events.",
      icon: Users,
    },
    {
      title: "CCT Youth Network (Amnesty International) - Volunteer",
      period: "2020 - 2022",
      description:
        "Volunteered with CCT Youth Network supporting human rights and community programs in Dharan.",
      icon: UserPlus,
    },
    {
      title: "LEO Club of Dharan - Volunteer",
      period: "2019 - 2022",
      description:
        "Participated in community service projects focused on improving local living standards.",
      icon: Award,
    },
  ];

  return (
    <section id="achievements" className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#6b7b5e]/10 rounded-full">
              <span className="text-[#6b7b5e]" style={{ fontFamily: 'var(--font-sans)' }}>
                Achievements & Volunteering
              </span>
            </div>
            <h3 className="text-3xl mb-2 text-[#2d2d2d]" style={{ fontFamily: 'var(--font-serif)' }}>
              Community & Leadership
            </h3>
            <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              Volunteer work and community involvement during university years.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#6b7b5e]/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#f5f1e8]">
                    <it.icon className="w-6 h-6 text-[#6b7b5e]" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[#2d2d2d]" style={{ fontFamily: 'var(--font-sans)' }}>{it.title}</h4>
                    <div className="text-sm text-[#6b6b6b] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>{it.period}</div>
                    <p className="text-sm text-[#6b6b6b]" style={{ fontFamily: 'var(--font-sans)' }}>{it.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
