import { motion } from "motion/react";
import { Heart, Linkedin, Github, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = {
    navigation: [
      { label: "About", id: "about" },
      { label: "Skills", id: "skills" },
      { label: "Projects", id: "projects" },
      { label: "Education", id: "education" },
    ],
    resources: [
      { label: "Experience", id: "experience" },
      { label: "Blog", id: "blog" },
      { label: "Contact", id: "contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:foodscience@email.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#2d2d2d] to-[#4d5a42] text-white">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#6b7b5e] hover:bg-[#4d5a42] rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-6 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <span className="text-[#d4966a]">Food</span>Science
            </h3>
            <p
              className="text-sm text-white/80 mb-4 leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Passionate about transforming scientific research into sustainable
              food solutions for a healthier tomorrow.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#6b7b5e] rounded-full flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/80 hover:text-[#d4966a] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/80 hover:text-[#d4966a] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Get In Touch
            </h4>
            <ul
              className="space-y-2 text-sm text-white/80"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <li>
                <a
                  href="mailto:foodscience@email.com"
                  className="hover:text-[#d4966a] transition-colors"
                >
                  food.prashamsa@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-[#d4966a] transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="pt-2">Portland, Oregon, USA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-sm text-white/70 flex items-center gap-1"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              © {new Date().getFullYear()} Prashamsa Pandey Professional
              Portfolio.
              <Heart className="w-4 h-4 text-[#d4966a] fill-current" />
            </p>
            <div
              className="flex gap-6 text-sm text-white/70"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <button className="hover:text-[#d4966a] transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-[#d4966a] transition-colors">
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
