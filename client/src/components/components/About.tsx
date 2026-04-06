import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Progress } from "../ui/progress";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import profilePic from "../images/profilepic.JPG";

const skills = [
  {
    name: "Java",
    level: 95,
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    logo: "https://static.vecteezy.com/system/resources/previews/022/100/214/original/java-logo-transparent-free-png.png",
  },
  {
    name: "React &Next Js.",
    level: 90,
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    logo: "https://images.unsplash.com/photo-1646122580600-4d6cffc926fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGphdmFzY3JpcHQlMjBsb2dvfGVufDF8fHx8MTc3NTM1NjQyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "TypeScript",
    level: 88,
    icon: Code2,
    color: "from-blue-600 to-blue-400",
    logo: "https://images.unsplash.com/photo-1770734360042-676ef707d022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBlc2NyaXB0JTIwcHJvZ3JhbW1pbmclMjBsYW5ndWFnZXxlbnwxfHx8fDE3NzUzNTY0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "UI/UX Design",
    level: 85,
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    logo: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXh0anMlMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzc1MzU2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Node.js & Express",
    level: 80,
    icon: Database,
    color: "from-green-500 to-emerald-500",
    logo: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2RlanMlMjBqYXZhc2NyaXB0JTIwYmFja2VuZHxlbnwxfHx8fDE3NzUzNTY0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "MongoDB & SQL",
    level: 75,
    icon: Database,
    color: "from-yellow-500 to-orange-500",
    logo: "https://images.unsplash.com/photo-1632342664765-b067a9e89a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25nb2RiJTIwZGF0YWJhc2UlMjBpY29ufGVufDF8fHx8MTc3NTM1NjQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Mobile Development",
    level: 60,
    icon: Smartphone,
    color: "from-indigo-500 to-purple-500",
    logo: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzUyNjk2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

const timeline = [
  {
    type: "work",
    title: "Full Stack Developer",
    period: "2023 - Present",
    description: "Leading development of enterprise web applications and mentoring junior developers.",
    icon: Briefcase,
  },
  {
    type: "university",
    title: "BSc (Hons) in IT Specialising in Artificial Intelligence",
    organization: "SLIIT",
    period: "2024 - 2028",
    description: "An undergraduate at Sri Lanka Institute of Information Technology specializing in Artificial Intelligence, with a strong focus on developing intelligent systems and data-driven solutions.",
    icon:GraduationCap,
  },
  {
    type: "education",
    title: "Royal College",
    organization: "School",
    period: "2020-2023",
    description: "Completed my Advanced Level studies at Royal College Colombo in the Mathematics stream, achieving BCC results.",
    icon:Briefcase,
  },
]
export function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 portfolio-page-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            About <span className="text-violet-500">Me</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Get to know more about my journey, skills, and experience
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative group mx-auto md:mx-0 w-full max-w-lg lg:max-w-xl"
          >
            <div className="portfolio-card-dark overflow-hidden rounded-2xl">
              <div className="relative aspect-video w-full">
                <ImageWithFallback
                  src={profilePic}
                  alt="Manith Gamage"
                  width={640}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0e14]/90 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-bold text-white">Hello! I&apos;m Manith Gamage</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
               I’m a passionate full-stack developer with over 3 years of experience building modern web applications, 
               currently pursuing my undergraduate studies at Sri Lanka Institute of Information Technology after 
               completing my Advanced Level education at Royal College Colombo in the Mathematics stream.
              </p>
              <p>
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and backend Java development, with 
                strong experience in TypeScript, Next.js, and cloud technologies, and I am also an AI & ML enthusiast with a 
                keen interest in developing intelligent, data-driven systems.
              </p>
              <p>
                My journey in software development began with curiosity about how websites work, which quickly grew into 
                a passion for solving complex problems through clean, maintainable code and creating user experiences that 
                truly stand out.

                I strongly believe in software engineering best practices such as test-driven development, continuous 
                integration, and agile methodologies, and I enjoy mentoring aspiring developers while contributing to
                meaningful projects.
              </p>
              <p>
                Outside of coding, I spend time exploring new technologies, learning emerging trends in AI and software engineering, and 
                engaging in activities like tech communities, listening to music and outdoor activities like playing badminton and cricket.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="portfolio-card-dark text-center p-4 sm:p-5 transition-all"
              >
                <div className="text-2xl font-bold text-blue-500">3+</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1">Years</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="portfolio-card-dark text-center p-4 sm:p-5 transition-all"
              >
                <div className="text-2xl font-bold text-fuchsia-400">10+</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1">Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="portfolio-card-dark text-center p-4 sm:p-5 transition-all"
              >
                <div className="text-2xl font-bold text-pink-500">15+</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1">Clients</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Technical <span className="portfolio-gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 portfolio-card-dark border-white/[0.08] hover:border-white/15 transition-all group">
                    <div className="flex items-center gap-4 mb-4">

                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0"
                      >
                        <ImageWithFallback
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-30`} />
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-white text-lg">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Experience & <span className="portfolio-gradient-text">Education</span>
          </h2>
          <div className="relative">

            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right md:pr-12" : "md:pl-12"} pl-20 md:pl-0`}>
                      <Card className="p-6 portfolio-card-dark border-white/[0.08] hover:border-white/15 transition-all hover:shadow-lg hover:shadow-violet-500/10">
                        <div className={`flex items-start gap-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${item.type === "work" ? "from-blue-500 to-cyan-500" :
                            item.type === "education" ? "from-purple-500 to-pink-500" :
                              "from-yellow-500 to-orange-500"
                            }`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className={isLeft ? "md:text-right" : ""}>
                            <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                            <p className="text-blue-400 font-medium mb-2">{item.organization}</p>
                            <p className="text-sm text-gray-400 mb-3">{item.period}</p>
                            <p className="text-gray-300 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
