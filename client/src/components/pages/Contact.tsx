import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Download,
  Copy,
  Check,
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
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible.",
    });
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    toast.success(`${type} copied to clipboard!`);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 portfolio-page-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

        {/* 3. Below Design Content: Email & Phone + Socials "Let's work together!" */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-[#b783f5] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b783f5] animate-ping" />
              Direct Channels & Networks
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Ways to <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-[#b783f5]">Connect</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Email Card - Premium Glassmorphic Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/30 via-white/10 to-transparent hover:from-purple-500/60 hover:via-purple-500/30 transition-all duration-500 shadow-xl shadow-black/40 hover:shadow-purple-500/10"
            >
              <div className="relative h-full rounded-[23px] bg-[#171717]/95 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                {/* Glow accent in corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3.5 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-[#b783f5] shadow-inner group-hover:scale-110 group-hover:bg-purple-500/25 transition-all duration-300">
                        <Mail className="w-6 h-6 text-[#b783f5]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/80">Primary Contact</span>
                        <h3 className="text-lg font-bold text-white">Email Address</h3>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => copyToClipboard("manithsgamage@gmail.com", "Email")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 hover:border-purple-400/30 transition-all cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedType === "Email" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href="mailto:manithsgamage@gmail.com"
                    className="block text-lg sm:text-xl font-semibold text-white group-hover:text-purple-300 transition-colors break-all mb-2"
                  >
                    manithsgamage@gmail.com
                  </a>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Fast response for collaborations, freelance roles, questions, or opportunities.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-white/40">Direct inbox</span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=manithsgamage@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-xs font-semibold text-purple-200 transition-all group-hover:border-purple-400/50"
                  >
                    <span>Send email via Gmail</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone & WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-emerald-500/30 via-white/10 to-transparent hover:from-emerald-500/60 hover:via-emerald-500/30 transition-all duration-500 shadow-xl shadow-black/40 hover:shadow-emerald-500/10"
            >
              <div className="relative h-full rounded-[23px] bg-[#171717]/95 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-inner group-hover:scale-110 group-hover:bg-emerald-500/25 transition-all duration-300">
                        <Phone className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300/80">Call & Chat</span>
                        <h3 className="text-lg font-bold text-white">Phone & WhatsApp</h3>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => copyToClipboard("+94-760429021", "Phone number")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 hover:border-emerald-400/30 transition-all cursor-pointer"
                      title="Copy phone to clipboard"
                    >
                      {copiedType === "Phone number" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href="tel:+94760429021"
                    className="block text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 tracking-wide"
                  >
                    +94-760429021
                  </a>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Available for phone consultations, quick WhatsApp messages, or instant syncs.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-white/40">WhatsApp instant</span>
                  <a
                    href="https://wa.me/94760429021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-semibold text-emerald-300 transition-all group-hover:border-emerald-400/50"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent hover:from-blue-500/60 hover:via-blue-500/30 transition-all duration-500 shadow-xl shadow-black/40 hover:shadow-blue-500/10"
            >
              <a
                href="https://www.linkedin.com/in/manith-gamage-4649012b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full rounded-[23px] bg-[#171717]/95 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3.5 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 shadow-inner group-hover:scale-110 group-hover:bg-blue-500/25 transition-all duration-300">
                          <Linkedin className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300/80">Professional Network</span>
                          <h3 className="text-lg font-bold text-white">LinkedIn</h3>
                        </div>
                      </div>
                      
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-300">
                        Profile
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                      Manith Gamage
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Connect on LinkedIn for professional updates, endorsements, and project partnerships.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs text-blue-400/80 font-medium">Networking & Roles</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 group-hover:translate-x-1 transition-all">
                      let's work together! <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -6 }}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-purple-400/30 via-white/10 to-transparent hover:from-purple-400/60 hover:via-purple-400/30 transition-all duration-500 shadow-xl shadow-black/40 hover:shadow-purple-500/10"
            >
              <a
                href="https://github.com/ManithSanvidu"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full rounded-[23px] bg-[#171717]/95 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3.5 rounded-2xl bg-white/[0.08] border border-white/15 text-white shadow-inner group-hover:scale-110 group-hover:bg-white/[0.15] transition-all duration-300">
                          <Github className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/80">Source Code & Repos</span>
                          <h3 className="text-lg font-bold text-white">GitHub</h3>
                        </div>
                      </div>
                      
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300">
                        Open Source
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                      ManithSanvidu
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Explore full-stack repositories, open-source work, experiments, and code architecture.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs text-purple-300/80 font-medium">Repositories</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 group-hover:translate-x-1 transition-all">
                      let's work together! <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>

          </div>
        </div>

        {/* 4. Contact Form Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
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

        {/* 5. Animated Bottom CTA: "Ready to Start a Project?" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Animated Glow Halo */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-purple-600/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse pointer-events-none" />

          <Card className="relative p-10 sm:p-14 portfolio-card-dark border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-[#181818]/90 to-black/80 rounded-3xl text-center overflow-hidden backdrop-blur-xl">
            {/* Ambient Background Circles */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b783f5] animate-spin" style={{ animationDuration: "8s" }} />
              Let's Collaborate
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5"
            >
              Ready to Start a Project?
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>

            {/* Action Buttons with Animations */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              {/* Email Me Button */}
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=manithsgamage@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold portfolio-gradient-btn text-white border-0 rounded-2xl group shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Email Me</span>
                  <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/Manith_Gamage_Resume.pdf"
                download="Manith_Gamage_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 text-base font-medium border-white/20 bg-white/[0.04] text-white hover:bg-white/10 hover:border-purple-400/40 rounded-2xl group transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
                >
                  <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 text-[#b783f5]" />
                  <span>Download Resume</span>
                </Button>
              </motion.a>
            </motion.div>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}
