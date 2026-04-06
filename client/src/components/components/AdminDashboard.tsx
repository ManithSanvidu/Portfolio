import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  LogOut,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Github,
  BarChart3,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { toast } from "sonner";

const initialProjects=[
  {
    id:1,
    title:"Car Service and Maintenance System",
    description:"A full featured car service and maintenance system",
    category:"Web App",
    tags:["Java","Javascript","JSP"],
    demourl:"#",
    githubUrl:"https://github.com/ManithSanvidu/Car_Service_Project",
    status:"Live"
  },
];
  const initialMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "Hi, I'd like to discuss a project opportunity with you.",
    date: "2026-04-01",
    status: "New",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Your portfolio looks amazing! Are you available for freelance work?",
    date: "2026-04-02",
    status: "New",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    message: "I need help with a React project. Can we schedule a call?",
    date: "2026-04-03",
    status: "Replied",
  },
];

export function AdminDashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(initialProjects);
  const [messages, setMessages] = useState(initialMessages);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const [editingProject, setEditingProject] = useState<any>(null);

  const handleLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => {
      navigate("/admin");
    }, 500);
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
    toast.success("Project deleted successfully");
  };

  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter((m) => m.id !== id));
    toast.success("Message deleted successfully");
  };

  const handleMarkAsReplied = (id: number) => {
    setMessages(
      messages.map((m) => (m.id === id ? { ...m, status: "Replied" } : m))
    );
    toast.success("Message marked as replied");
  };

  const stats = [
    {
      label: "Total Projects",
      value: projects.length,
      icon: FolderKanban,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "New Messages",
      value: messages.filter((m) => m.status === "New").length,
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Live Projects",
      value: projects.filter((p) => p.status === "Live").length,
      icon: ExternalLink,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Total Views",
      value: "12.5K",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-6 h-6 text-blue-500" />
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-gray-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Site
                </Button>
              </a>
              <Button
                onClick={handleLogout}
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="bg-gray-800/50 border border-gray-700 mb-6">
              <TabsTrigger value="projects" className="data-[state=active]:bg-gray-700">
                <FolderKanban className="w-4 h-4 mr-2" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="messages" className="data-[state=active]:bg-gray-700">
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </TabsTrigger>
            </TabsList>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <Card className="bg-gray-800/50 border-gray-700">
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Manage Projects</h2>
                    <Dialog open={isAddProjectOpen} onOpenChange={setIsAddProjectOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Project
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Add New Project</DialogTitle>
                          <DialogDescription className="text-gray-400">
                            Fill in the project details below
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Title</label>
                            <Input
                              placeholder="Project title"
                              className="bg-gray-900/50 border-gray-700"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Description</label>
                            <Textarea
                              placeholder="Project description"
                              rows={3}
                              className="bg-gray-900/50 border-gray-700"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Category</label>
                              <Input
                                placeholder="e.g., Web App"
                                className="bg-gray-900/50 border-gray-700"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Status</label>
                              <Input
                                placeholder="e.g., Live"
                                className="bg-gray-900/50 border-gray-700"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              Tech Stack (comma-separated)
                            </label>
                            <Input
                              placeholder="React, Node.js, MongoDB"
                              className="bg-gray-900/50 border-gray-700"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Demo URL</label>
                              <Input
                                placeholder="https://..."
                                className="bg-gray-900/50 border-gray-700"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">GitHub URL</label>
                              <Input
                                placeholder="https://github.com/..."
                                className="bg-gray-900/50 border-gray-700"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 justify-end pt-4">
                            <Button
                              variant="outline"
                              className="border-gray-700"
                              onClick={() => setIsAddProjectOpen(false)}
                            >
                              Cancel
                            </Button>
                            <Button
                              className="bg-gradient-to-r from-blue-500 to-purple-600"
                              onClick={() => {
                                toast.success("Project added successfully");
                                setIsAddProjectOpen(false);
                              }}
                            >
                              Add Project
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700 hover:bg-gray-800/50">
                        <TableHead className="text-gray-400">Title</TableHead>
                        <TableHead className="text-gray-400">Category</TableHead>
                        <TableHead className="text-gray-400">Status</TableHead>
                        <TableHead className="text-gray-400">Tech Stack</TableHead>
                        <TableHead className="text-gray-400 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {projects.map((project) => (
                        <TableRow
                          key={project.id}
                          className="border-gray-700 hover:bg-gray-800/50"
                        >
                          <TableCell className="font-medium">{project.title}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-gray-700">
                              {project.category}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={
                                project.status === "Live"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              }
                            >
                              {project.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {project.tags.slice(0, 2).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs border-gray-600"
                                >
                                  {tag}
                                </Badge>
                              ))}
                              {project.tags.length > 2 && (
                                <Badge
                                  variant="outline"
                                  className="text-xs border-gray-600"
                                >
                                  +{project.tags.length - 2}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="hover:bg-blue-500/10 hover:text-blue-400"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDeleteProject(project.id)}
                                className="hover:bg-red-500/10 hover:text-red-400"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages">
              <Card className="bg-gray-800/50 border-gray-700">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-xl font-bold">Contact Messages</h2>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700 hover:bg-gray-800/50">
                        <TableHead className="text-gray-400">Name</TableHead>
                        <TableHead className="text-gray-400">Email</TableHead>
                        <TableHead className="text-gray-400">Message</TableHead>
                        <TableHead className="text-gray-400">Date</TableHead>
                        <TableHead className="text-gray-400">Status</TableHead>
                        <TableHead className="text-gray-400 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {messages.map((message) => (
                        <TableRow
                          key={message.id}
                          className="border-gray-700 hover:bg-gray-800/50"
                        >
                          <TableCell className="font-medium">{message.name}</TableCell>
                          <TableCell className="text-gray-400">{message.email}</TableCell>
                          <TableCell className="max-w-xs truncate">
                            {message.message}
                          </TableCell>
                          <TableCell className="text-gray-400">{message.date}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                message.status === "New"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-gray-700 text-gray-300"
                              }
                            >
                              {message.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              {message.status === "New" && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleMarkAsReplied(message.id)}
                                  className="hover:bg-green-500/10 hover:text-green-400"
                                >
                                  Mark as Replied
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDeleteMessage(message.id)}
                                className="hover:bg-red-500/10 hover:text-red-400"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
