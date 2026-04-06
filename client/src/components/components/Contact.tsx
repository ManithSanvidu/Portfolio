import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { toast } from "sonner";

type FormData={
  name:string,
  email:string,
  message:string,
}

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/ManithSanvidu", color: "hover:text-gray-400" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/manith-gamage-4649012b8/", color: "hover:text-blue-400" },
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
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
  
    console.log("Form submitted:", data);
    
    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible.",
    });
    
    setIsSubmitted(true);
    reset();
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 portfolio-page-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Get In <span className="portfolio-gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s work together to create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
      
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 portfolio-card-dark border-white/[0.08] rounded-2xl">
              <h2 className="text-xl font-semibold text-slate-200 mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-400">
                    Name *
                  </label>
                  <Input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    className={`rounded-xl bg-[#0d1118] border-white/10 text-white focus-visible:ring-violet-500/30 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-400">
                    Email *
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
                    placeholder="your.email@example.com"
                    className={`rounded-xl bg-[#0d1118] border-white/10 text-white focus-visible:ring-violet-500/30 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-400">
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
                    placeholder="Tell me about your project..."
                    rows={6}
                    className={`rounded-xl bg-[#0d1118] border-white/10 text-white focus-visible:ring-violet-500/30 resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

             
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full portfolio-gradient-btn rounded-xl py-6 text-white font-semibold border-0 hover:opacity-95"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Sent Successfully!
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

          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>

              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "manithsgamage@gmail.com",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+94-760429021",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Maharagama,Colombo,Sri Lanka",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="p-6 portfolio-card-dark border-white/[0.08] hover:border-white/15 transition-all rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="font-semibold text-white">{item.value}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Card className="p-6 portfolio-card-dark border-white/[0.08] rounded-2xl">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">Follow Me</h3>
                <div className="flex gap-4">
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
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Card className="p-6 portfolio-card-dark border-white/[0.08] overflow-hidden rounded-2xl">
                <div className="relative h-64 rounded-xl overflow-hidden bg-[#0d1118]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-sky-400 mx-auto mb-2" />
                      <p className="text-slate-400">Maharagama, Colombo, Sri Lanka</p>
                      <p className="text-sm text-slate-500 mt-1">Map integration available</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14]/90 to-transparent" />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-10 sm:p-12 portfolio-card-dark border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent rounded-2xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start a Project?</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manithsgamage@gmail.com">
            <Button
              size="lg"
              className="portfolio-gradient-btn text-white border-0 rounded-xl"
            >
            <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            </a>
              <a href="/Manith.Gamage.Resume.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="border-white/15 text-white hover:bg-white/10 rounded-xl"
            >
            Download Resume
            </Button>
            </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}