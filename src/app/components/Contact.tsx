import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "food.prashamsa@gmail.com",
      href: "mailto:food.prashamsa@gmail.com",
      color: "#6b7b5e",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9823510561",
      href: "tel:+9779823510561",
      color: "#8b6f47",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Birendranagar-3, Surkhet, Nepal",
      href: "#",
      color: "#d4966a",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "#0077b5",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "#333",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
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
                Get In Touch
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Let's Connect
            </h2>
            <p
              className="text-lg text-[#6b6b6b] max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Interested in collaborating or learning more about my work? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3
                className="text-2xl mb-6 text-[#2d2d2d]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#f5f1e8] to-white hover:shadow-lg transition-all duration-300 group"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${info.color}15` }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <div>
                      <div
                        className="text-sm text-[#6b6b6b] mb-1"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {info.label}
                      </div>
                      <div
                        className="text-[#2d2d2d] group-hover:text-[#6b7b5e] transition-colors"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mb-8">
                <h4
                  className="text-lg mb-4 text-[#2d2d2d]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Professional Networks
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f5f1e8] to-white flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-[#6b7b5e]/10"
                    >
                      <social.icon className="w-5 h-5 text-[#6b7b5e] group-hover:text-[#4d5a42] transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-6 bg-gradient-to-br from-[#6b7b5e] to-[#8a9d7a] rounded-2xl text-white"
              >
                <h4 className="text-xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  Open to Opportunities
                </h4>
                <p className="text-sm opacity-90" style={{ fontFamily: 'var(--font-sans)' }}>
                  Currently seeking full-time positions in food science, quality assurance, product
                  development, or research roles.
                </p>
                <div className="mt-4">
                  <a href="/Prashamsa_Pandey_CV.pdf" download target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-white text-[#6b7b5e] hover:bg-[#f5f1e8]">Download CV</Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 text-[#2d2d2d]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="bg-[#f5f1e8] border-[#6b7b5e]/20 focus:border-[#6b7b5e] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-[#2d2d2d]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      className="bg-[#f5f1e8] border-[#6b7b5e]/20 focus:border-[#6b7b5e] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm mb-2 text-[#2d2d2d]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Collaboration Opportunity"
                    required
                    className="bg-[#f5f1e8] border-[#6b7b5e]/20 focus:border-[#6b7b5e] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-[#2d2d2d]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    className="bg-[#f5f1e8] border-[#6b7b5e]/20 focus:border-[#6b7b5e] transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#6b7b5e] hover:bg-[#4d5a42] text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
