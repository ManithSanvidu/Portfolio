import { motion } from "motion/react";
import {
  Award,
  Calendar,
  CheckCircle,
  ExternalLink,
  Shield,
  Star,
  Trophy,
  Verified,
} from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import googleCloud from '../images/genAI.jpg';
import jsBasic from '../images/js.jpg';
import simplilearn from '../images/simplilearn.jpg';
import pythonMoratuwa from '../images/pythonMoratuwa.jpg';

const certifications = [
  {
    id: 1,
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "March 2026",
    credentialId: "fGSBIXqOJj",
    skills: ["Python","Poject management"],
    icon: Shield,
    color: "from-orange-500 to-red-500",
    status: "Active",
    verifyUrl: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    image:
      pythonMoratuwa,
  },
  {
    id: 2,
    title: "Javascript Basic",
    issuer: "HackerRank",
    date: "March 2026",
    skills: ["Javascript","Problem solving skills"],
    icon: Trophy,
    color: "from-blue-500 to-cyan-500",
    status: "Active",
    image:
      jsBasic,
  },
  {
    id: 3,
    title: "AI Agents for Beginners",
    issuer: "Simplilearn",
    date: "March 2026",
    credentialId: "10002409",
    skills: ["Agentic AI","Machine Learning","CNN","AI automation"],
    icon: Star,
    color: "from-purple-500 to-pink-500",
    status: "Active",
    verifyUrl: "https://simpli-web.app.link/e/VElnIhCQM1b",
    image:
      simplilearn,
  },
  {
    id: 4,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "March 2026",
    skills: ["Generative AI","CNN","Creative thinking"],
    icon: Award,
    color: "from-green-500 to-emerald-500",
    status: "Active",
    verifyUrl: "https://www.skills.google/public_profiles/9e39603a-4de8-491e-9888-5cdf0ae2d394/badges/23165853",
    image:
      googleCloud,
  },
];

const stats = [
  { label: "Total Certifications", value: certifications.length, icon: Award },
  {
    label: "Active Status",
    value: certifications.filter((c) => c.status === "Active").length,
    icon: CheckCircle,
  },
  { label: "Cloud Platforms", value: "3+", icon: Shield },
  { label: "Latest This Year", value: "2", icon: Calendar },
];

export function Certifications() {
  return (
    <div className="min-h-full pt-20 pb-12 md:pt-24 md:pb-16 portfolio-page-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-violet-600 shadow-lg shadow-violet-500/30 mb-6"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Professional <span className="portfolio-gradient-text">Certifications</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Continuously learning and validating expertise through industry-recognized certifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 portfolio-card-dark border-white/[0.08] hover:border-violet-500/20 transition-all text-center rounded-2xl">
                  <Icon className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold portfolio-gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden portfolio-card-dark border-white/[0.08] hover:border-violet-500/25 transition-all hover:shadow-lg hover:shadow-violet-500/10 h-full rounded-2xl">
                  <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="h-full opacity-30 group-hover:opacity-40 transition-opacity"
                      style={{
                        backgroundImage: `url(${cert.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${cert.color}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {cert.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-300 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300 mb-1">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-700">
                      <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                      <code className="text-sm text-blue-400 font-mono">{cert.credentialId}</code>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-2">Skills Validated</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all"
                        asChild
                      >
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <Verified className="w-4 h-4 mr-2" />
                          Verify Credential
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Card className="p-10 sm:p-12 portfolio-card-dark border-violet-500/20 bg-gradient-to-br from-violet-500/8 to-transparent text-center rounded-2xl">
            <Trophy className="w-16 h-16 text-violet-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Committed to Continuous Learning</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              These certifications represent my dedication to staying current with the latest technologies and best
              practices in software development and cloud architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="portfolio-gradient-btn text-white border-0 rounded-xl"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/10 rounded-xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
