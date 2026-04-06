import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Filter, Search, X} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import fitnessImage from '../images/healthfitness.jpg';
import carImage from '../images/Home.jpg'
import AIassistantImage from '../images/AIassistant.jpg';
import MilkQualityImage from '../images/MilkQuality.jpg';

const projectData = [
  {
    id: 1,
    title: "Car Service and Maintenance System",
    description: "A full-featured online car service and maintenance system",
    image:carImage,
    tags: ["Java", "Javascript", "JSP", "HTML&CSS"],
    category: "Web App",
    githubUrl: "https://github.com/ManithSanvidu/Car_Service_Project",
  },
  {
    id: 2,
    title: "Health & Fitness Tracker",
    description: "A full-stack Health & Fitness Tracker designed to help users monitor workouts, track daily health metrics and archieve fitness goals through a simple and interactive interface",
    image:fitnessImage,
    tags: ["React.js", "Java", "MySQL", "Python"],
    category: "Web App",
    demoUrl: "https://health-fitness-tracker-three.vercel.app/",
    githubUrl: "https://github.com/ManithSanvidu/Health_Fitness_Tracker",
  },
  {
    id: 3,
    title: "AI Powered Virtual Assistant",
    description: "Smart AI powered virtual assistant capable understanding user queries and delivering intelligent, context aware responses",
    image: AIassistantImage,
    tags: ["Python","NLP","Tkinter"],
    category: "Dashboard",
    githubUrl: "https://github.com/ManithSanvidu/AI_Virtual_Assistant",
  },
  {
    id: 4,
    title: "Milk Quality Prediction using Machine Learning",
    description: "A machine learning model that classifies milk quality based phyisiochemical and sensory attributes such as pH,temperature,ordor and freshness.",
    image: MilkQualityImage,
    tags: ["Python","Machine Learning"],
    category: "Dashboard",
  },
];

const categories = ["All", "Web App", "Mobile App", "Dashboard"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = projectData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

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
            My <span className="text-violet-500">Projects</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-11 pr-11 rounded-full border border-white/10 bg-[#121826] text-white placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:border-violet-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-slate-500 shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-md px-6 font-bold"
                    : "rounded-xl bg-white text-gray-950 hover:bg-gray-100 border-0 font-bold px-6 shadow-sm"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card className="group relative overflow-hidden portfolio-card-dark border-white/[0.08] hover:border-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 rounded-2xl">
                  <div className="relative h-32 overflow-hidden rounded-t-2xl">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="h-full"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <AnimatePresence>
                      {hoveredId === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent flex items-center justify-center gap-4"
                        >
                          <motion.a
                            href={project.demoUrl}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Button size="sm" className="bg-blue-500 text-white">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-white"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}