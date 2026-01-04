import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function References() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const refs = [
    {
      name: "Prof. Basanta Kumar Rai",
      title: "Ex-Chairman, Department of Food Technology, CCT, Sunsari",
    },
    {
      name: "Huma Bokkhim",
      title: "Senior Food Research Officer, Food Technology Development and Nutrition Division, DFTQC, Kathmandu",
    },
    {
      name: "Chintan Kafle",
      title: "CEO, Himaida Nepal Pvt. Ltd.",
    },
    {
      name: "Vishwa Ram Khadka",
      title: "Director, Shivapuri Fresh Day Dairy P. Ltd.",
    },
  ];

  return (
    <section id="references" className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl mb-2 text-[#2d2d2d]" style={{ fontFamily: 'var(--font-serif)' }}>
            References
          </h3>
          <p className="text-sm text-[#6b6b6b] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {refs.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#6b7b5e]/10 flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <h4 className="text-xl mb-2 text-[#2d2d2d]" style={{ fontFamily: 'var(--font-serif)' }}>
                  {r.name}
                </h4>
                <p className="text-sm text-[#6b6b6b] leading-relaxed mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
                  {r.title}
                </p>
              </div>

              {r.contact && (
                <div className="mt-2">
                  <a
                    href={`tel:${r.contact.replace(/\s+/g, '')}`}
                    className="text-sm text-[#6b6b6b] hover:text-[#6b7b5e] transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {r.contact}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
