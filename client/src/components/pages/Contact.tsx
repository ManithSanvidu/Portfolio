import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import {
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { toast } from "sonner";
import manTypingHandsGif from "../images/man_typing_hands.gif";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "ManithSanvidu",
    url: "https://github.com/ManithSanvidu",
    badge: "Code & Projects",
    color: "group-hover:text-purple-300",
    borderGlow: "group-hover:border-purple-500/40",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Manith Gamage",
    url: "https://www.linkedin.com/in/manith-gamage-4649012b8/",
    badge: "Let's Connect",
    color: "group-hover:text-blue-400",
    borderGlow: "group-hover:border-blue-500/40",
  },
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      // 1. If Web3Forms API key is provided, send email directly in the background
      if (apiKey && apiKey.trim() !== "" && apiKey !== "your_access_key_here") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: apiKey.trim(),
            name: data.name,
            email: data.email,
            message: data.message,
            subject: `Portfolio Message from ${data.name}`,
            from_name: "Portfolio Contact Form",
            replyto: data.email,
          }),
        });

        const result = await response.json();
        if (result.success) {
          toast.success("Message sent successfully!", {
            description: "Your message has been sent directly to manithsgamage@gmail.com.",
          });
          setIsSubmitted(true);
          reset();
          setTimeout(() => setIsSubmitted(false), 4000);
          return;
        } else {
          throw new Error(result.message || "Failed to deliver message");
        }
      }

      // 2. Direct fallback: open pre-filled Gmail compose directly to manithsgamage@gmail.com
      const subject = encodeURIComponent(`Portfolio Message from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=manithsgamage@gmail.com&su=${subject}&body=${body}`,
        "_blank"
      );

      toast.success("Opening Gmail to send message!", {
        description: "Your message has been prepared for manithsgamage@gmail.com.",
      });
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback on API error: open pre-filled Gmail compose
      const subject = encodeURIComponent(`Portfolio Message from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=manithsgamage@gmail.com&su=${subject}&body=${body}`,
        "_blank"
      );
      toast.info("Opened Gmail draft directly to send to manithsgamage@gmail.com.");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-0 portfolio-page-surface overflow-hidden flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* 1. Header / Intro Above the Design Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#b783f5]/20 bg-[#b783f5]/5 text-[#b783f5] text-xs font-semibold tracking-[0.25em] uppercase mb-4 backdrop-blur-sm">
            <Sparkles size={13} className="text-[#b783f5]" />
            Let's Connect
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] mb-4 text-white">
            Let's connect and build{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#b783f5]">
              something useful!
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Have an ambitious project, bold idea, or innovative collaboration in mind?
            Reach out through the direct channels below or drop a message.
          </p>
        </motion.div>

        {/* 2. Uploaded Design Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mb-14 md:mb-16 flex justify-center items-center"
        >
          <img
            src={manTypingHandsGif}
            alt="Man typing hands"
            className="w-full max-h-[500px] object-contain rounded-2xl"
          />
        </motion.div>

        {/* 3. Contact Form Section */}
        <div id="contact-form" className="grid lg:grid-cols-12 gap-8 items-start mb-24 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <Card className="p-8 sm:p-10 portfolio-card-dark border-white/[0.08] rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-2xl font-bold text-white mb-2">Send Me a Message</h2>
              <p className="text-sm text-white/50 mb-8">
                Fill in the details below and I'll get back to your inquiry promptly.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className={`rounded-xl bg-[#1e1e1e]/90 border-white/10 text-white focus-visible:ring-[#b783f5]/40 py-5 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1.5"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="john@example.com"
                    className={`rounded-xl bg-[#1e1e1e]/90 border-white/10 text-white focus-visible:ring-[#b783f5]/40 py-5 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1.5"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    placeholder="Tell me about your project, idea, or timeline..."
                    rows={5}
                    className={`rounded-xl bg-[#1e1e1e]/90 border-white/10 text-white focus-visible:ring-[#b783f5]/40 resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1.5"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full portfolio-gradient-btn rounded-xl py-6 text-white font-semibold border-0 hover:opacity-95 transition-all shadow-lg shadow-purple-500/20"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Sending Message...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2 text-emerald-300" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Side Info / Quick Pitch */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="p-8 portfolio-card-dark border-white/[0.08] rounded-3xl bg-gradient-to-br from-white/[0.05] via-transparent to-purple-500/5">
              <div className="w-12 h-12 rounded-2xl bg-[#b783f5]/10 border border-[#b783f5]/20 flex items-center justify-center mb-5 text-[#b783f5]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Available for New Opportunities
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Specialized in building performant modern web applications, intelligent AI-integrated systems,
                and seamless user interfaces. Let’s collaborate to bring high-impact digital experiences to life.
              </p>
              <div className="space-y-3 border-t border-white/5 pt-5 text-xs text-white/50">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Response time: Usually within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b783f5]" />
                  <span>Timezone: GMT+5:30 (Available for global teams)</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 portfolio-card-dark border-white/[0.08] rounded-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                    Connect Directly
                  </p>
                  <p className="text-base font-semibold text-white">
                    let's work together!
                  </p>
                </div>
                <div className="flex gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 ${social.color} transition-colors`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* 4. Full-Width Footer Section (Covers the whole area, no card structure) */}
      <footer className="w-full border-t border-white/10 bg-[#0f0f11]/95 backdrop-blur-xl relative overflow-hidden mt-16 sm:mt-24">
        {/* Subtle Ambient Glow matching portfolio style */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-purple-600/[0.07] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-amber-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Section: 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
              {/* Left Column: Start a Project */}
              <div className="flex flex-col">
                <p className="text-white/50 text-xs sm:text-sm font-light tracking-wide mb-3 sm:mb-4">
                  Want to work together?
                </p>

                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center justify-between text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight pb-6 sm:pb-8 border-b border-white/15 hover:text-white/80 transition-colors"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-[1.2] text-white group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                </a>

                {/* Sub details below divider */}
                <div className="grid grid-cols-2 gap-6 pt-6 sm:pt-8">
                  <div className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                    <p className="text-white/70">Available for Freelance</p>
                    <p>Portfolio 2026</p>
                  </div>

                  <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm font-light">
                    <a
                      href="#home"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white/60 hover:text-white transition-colors w-fit"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white/60 hover:text-white transition-colors w-fit"
                    >
                      About
                    </a>
                    <a
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white/60 hover:text-white transition-colors w-fit"
                    >
                      Projects
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white/60 hover:text-white transition-colors w-fit"
                    >
                      Contact
                    </a>
                  </nav>
                </div>
              </div>

              {/* Right Column: Email */}
              <div className="flex flex-col">
                {/* Spacer to align baseline with Start a Project */}
                <div className="hidden md:block text-xs sm:text-sm mb-3 sm:mb-4 select-none opacity-0">
                  &nbsp;
                </div>

                <a
                  href="mailto:manithsgamage@gmail.com"
                  className="group inline-flex items-center justify-between text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight pb-6 sm:pb-8 border-b border-white/15 hover:text-white/80 transition-colors"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-[1.2] text-white group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                </a>

                {/* Sub details below divider */}
                <div className="grid grid-cols-2 gap-6 pt-6 sm:pt-8">
                  <div className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                    <p className="text-white/70">Don't Like Forms?</p>
                    <a
                      href="mailto:manithsgamage@gmail.com"
                      className="hover:text-white transition-colors text-white/60 underline underline-offset-4 decoration-white/20 hover:decoration-white"
                    >
                      Send me an Email.
                    </a>
                  </div>

                  <div className="flex flex-col space-y-2.5 text-xs sm:text-sm font-light">
                    <a
                      href="https://github.com/ManithSanvidu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors w-fit"
                    >
                      Github
                    </a>
                    <a
                      href="https://wa.me/94760429021"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors w-fit"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://www.linkedin.com/in/manith-gamage-4649012b8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors w-fit"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row Footer */}
            <div className="mt-16 sm:mt-20 md:mt-24 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/50 font-light">
              <p>© All rights reserved – Manith Gamage</p>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white/50 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 font-light"
              >
                Back to Top
              </button>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
