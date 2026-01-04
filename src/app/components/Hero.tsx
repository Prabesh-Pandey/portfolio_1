import { motion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdfcf9] via-[#f5f1e8] to-[#e8e0d0]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-[#6b7b5e]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#d4966a]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#6b7b5e]/10 rounded-full border border-[#6b7b5e]/20">
              <span className="text-[#6b7b5e]" style={{ fontFamily: 'var(--font-sans)' }}>
                Food Technology Graduate
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl md:text-6xl lg:text-7xl text-[#2d2d2d]"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Science
            <br />
            <span className="text-[#6b7b5e]">Into Sustainable Food</span>
          </motion.h1>

          <motion.p
            className="mb-10 text-lg md:text-xl text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate about innovative food solutions that combine cutting-edge research,
            nutritional science, and sustainability to create a healthier future for all.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-[#6b7b5e] hover:bg-[#4d5a42] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#6b7b5e] text-[#6b7b5e] hover:bg-[#6b7b5e] hover:text-white px-8 py-6 rounded-full transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                <span className="text-[#6b7b5e]">5+</span>
              </div>
              <div className="text-sm text-[#6b6b6b]" style={{ fontFamily: 'var(--font-sans)' }}>
                Research Projects
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                <span className="text-[#6b7b5e]">3+</span>
              </div>
              <div className="text-sm text-[#6b6b6b]" style={{ fontFamily: 'var(--font-sans)' }}>
                Certifications
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                <span className="text-[#6b7b5e]">2+</span>
              </div>
              <div className="text-sm text-[#6b6b6b]" style={{ fontFamily: 'var(--font-sans)' }}>
                Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 border-2 border-[#6b7b5e] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#6b7b5e] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
