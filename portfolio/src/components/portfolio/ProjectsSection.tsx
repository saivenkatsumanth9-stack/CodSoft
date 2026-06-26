import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sun, Moon, Info, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type Project = {
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  image: string;
  features: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: 'AI Study Buddy – Personalized Learning & Exam Assistant',
    shortDescription: 'Built an AI-powered academic assistant with personalized study scheduling, PDF RAG chat, and quiz generation.',
    description: 'Built an AI-powered academic assistant with personalized study scheduling, PDF-based RAG chat (Retrieval-Augmented Generation), and customized quiz generation to help students optimize exam preparation.',
    tags: ['Python', 'RAG', 'NLP', 'PDF Processing', 'AI APIs'],
    image: '/projects/study-buddy.png',
    features: [
      'Personalized Study Scheduling: Generates optimal study timetables customized around your exam dates and course length.',
      'PDF-based RAG (Retrieval-Augmented Generation) Chat: Upload textbooks, notes, or slides and ask the AI specific academic questions directly.',
      'Customized Quiz Generation: Evaluates your prep level with dynamic, custom quizzes built straight from your PDF files.',
      'NLP and Exam Analytics: Identifies strength/weakness areas and provides insights to improve retention.'
    ],
    githubUrl: 'https://github.com/saivenkatsumanth9-stack',
    liveUrl: '#',
  },
  {
    title: 'HealthMate – AI-Powered Health & Fitness Companion',
    shortDescription: 'Responsive health companion featuring calorie logging, workout builders, progress analytics, and an AI trainer.',
    description: 'Developed a responsive single-page health app featuring onboarding flow, BMI/BMR/TDEE calculations, food nutrition logging, interactive workout plans (gym & home), visual progress analytics, and an AI fitness coach chatbot.',
    tags: ['HTML', 'CSS', 'JavaScript', 'AI Chatbot Integration'],
    image: '/projects/health-mate.jpg',
    features: [
      'Interactive Onboarding & Goal Setting: Calculates physical metrics (BMI/BMR/TDEE) and sets personalized calorie budgets.',
      'Nutrition & Calorie Tracker: Logs daily food intake and provides macro-nutrient breakdowns (proteins, carbs, fats) with progress charts.',
      'Gym & Home Workout Builders: Generates tailored, goal-oriented workout circuits with interactive guides.',
      'AI Fitness Coach Chatbot: A smart, conversational trainer to answer fitness questions, adjust diets, and offer advice.'
    ],
    githubUrl: 'https://github.com/saivenkatsumanth9-stack',
    liveUrl: '#',
  },
  {
    title: 'Last Standing Thief – 2D Endless Runner Game',
    shortDescription: 'Physics-based Unity 2D endless runner featuring dynamic trap generation, combat AI, and progression.',
    description: 'Designed and developed a 2D endless runner game in Unity featuring jump and shoot mechanics, enemy combat AI, dynamic trap generation, collectibles, health tracking, and distance-based difficulty progression.',
    tags: ['Unity', 'C#', 'Game Physics', '2D Animation'],
    image: '/projects/last-thief-standing.jpg',
    features: [
      'Fluid Jump & Shoot Physics: Highly responsive player controls optimized for action-packed platforming.',
      'Dynamic Obstacle & Trap Generation: Spawns hazards and platforms procedurally based on player run distance.',
      'Combat AI and Patrol States: Features active enemy pathing, firing systems, and engagement logic.',
      'Distance & Difficulty Progression: Accelerates run speeds and enemy counts as you survive longer.'
    ],
    githubUrl: 'https://github.com/saivenkatsumanth9-stack',
    liveUrl: '#',
  },
];

const TiltCard = ({
  project,
  index,
  isLightTheme,
  onCardClick,
}: {
  project: Project;
  index: number;
  isLightTheme: boolean;
  onCardClick: (p: Project) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(10px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onCardClick(project)}
      className={`p-6 md:p-8 transition-all duration-300 will-change-transform group flex flex-col md:flex-row gap-6 md:gap-8 items-center rounded-2xl cursor-pointer ${
        isLightTheme
          ? 'bg-white/90 border border-slate-200/80 shadow-md text-slate-800 hover:shadow-xl hover:bg-white'
          : 'glass-card text-foreground'
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className={`h-40 w-full md:w-48 shrink-0 rounded-2xl relative overflow-hidden flex items-center justify-center border transition-colors duration-300 ${
          isLightTheme
            ? 'bg-slate-50 border-slate-200'
            : 'bg-gradient-to-br from-white/5 to-white/10 border-white/10'
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
      </div>
      <div className="flex-1 w-full text-left">
        <h3
          className={`font-display text-xl md:text-2xl font-bold mb-2 transition-all ${
            isLightTheme
              ? 'text-slate-800 group-hover:text-primary'
              : 'group-hover:gradient-text-primary'
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-sm md:text-base leading-relaxed mb-4 transition-colors duration-300 ${
            isLightTheme ? 'text-slate-600' : 'text-muted-foreground'
          }`}
        >
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((t) => (
            <span
              key={t}
              className={`text-xs px-2.5 py-1 rounded-full transition-colors duration-300 ${
                isLightTheme
                  ? 'bg-slate-100 text-slate-700 border border-slate-200'
                  : 'bg-primary/10 text-primary border border-primary/20'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 w-full">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isLightTheme ? 'text-slate-600 hover:text-primary' : 'text-foreground hover:text-primary'
            }`}
          >
            <Github className="w-4 h-4" /> Code
          </a>
          <a
            href={project.liveUrl}
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isLightTheme ? 'text-slate-600 hover:text-accent' : 'text-foreground hover:text-accent'
            }`}
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
          <button
            type="button"
            className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ml-auto hover:underline ${
              isLightTheme ? 'text-primary' : 'text-accent'
            }`}
          >
            Details <Info className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className={`py-24 lg:py-32 relative overflow-hidden transition-colors duration-500 ${
        isLightTheme ? 'bg-slate-50 text-slate-800' : 'bg-transparent'
      }`}
    >
      <div className={`absolute inset-0 grid-pattern opacity-10 ${isLightTheme ? 'invert opacity-[0.04]' : ''}`} />
      {!isLightTheme && (
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      )}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            Portfolio
          </span>
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isLightTheme ? 'text-slate-800' : 'text-foreground'
            }`}
          >
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <p
            className={`text-lg transition-colors duration-300 ${
              isLightTheme ? 'text-slate-600' : 'text-muted-foreground'
            }`}
          >
            A selection of work across AI development, web applications, and game development.
          </p>

          <button
            onClick={() => setIsLightTheme(!isLightTheme)}
            className="absolute right-0 top-0 p-3 rounded-full glass hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider border border-white/10 text-foreground"
            title="Toggle Section Theme"
          >
            {isLightTheme ? (
              <>
                <Moon className="w-4 h-4 text-primary" />
                <span className="hidden sm:inline">Dark Theme</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-accent" />
                <span className="hidden sm:inline">Light Theme</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <TiltCard
              key={p.title}
              project={p}
              index={i}
              isLightTheme={isLightTheme}
              onCardClick={setActiveProject}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!activeProject} onOpenChange={(o) => !o && setActiveProject(null)}>
        <DialogContent className={`max-w-3xl w-[95vw] p-0 overflow-hidden border-primary/20 rounded-2xl flex flex-col ${
          isLightTheme ? 'bg-white text-slate-900' : 'bg-background/95 backdrop-blur-xl text-foreground'
        }`}>
          <AnimatePresence>
            {activeProject && (
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col w-full h-full max-h-[85vh] overflow-y-auto"
              >
                {/* Banner Image */}
                <div className="h-56 sm:h-64 w-full relative overflow-hidden bg-muted flex items-center justify-center shrink-0 border-b border-border/40">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <DialogTitle className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {activeProject.title}
                    </DialogTitle>
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2.5 py-1 rounded-full ${
                          isLightTheme
                            ? 'bg-slate-100 text-slate-700 border border-slate-200'
                            : 'bg-primary/10 text-primary border border-primary/20'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Main Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">Project Overview</h4>
                    <p className={`text-base leading-relaxed ${isLightTheme ? 'text-slate-700' : 'text-foreground/90'}`}>
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Key Features list */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">Key Features & Highlights</h4>
                    <ul className="space-y-2.5">
                      {activeProject.features.map((feat, index) => {
                        const [title, desc] = feat.split(': ');
                        return (
                          <li key={index} className="flex items-start gap-2.5 text-sm md:text-base leading-relaxed">
                            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${
                              isLightTheme ? 'text-primary' : 'text-accent'
                            }`} />
                            <p className={isLightTheme ? 'text-slate-700' : 'text-foreground/80'}>
                              <span className="font-semibold text-foreground dark:text-white">{title}</span>
                              {desc && <span>: {desc}</span>}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                        isLightTheme
                          ? 'bg-slate-900 text-white border-transparent hover:bg-slate-800'
                          : 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30'
                      }`}
                    >
                      <Github className="w-4 h-4" /> GitHub Code
                    </a>
                    <a
                      href={activeProject.liveUrl}
                      className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                        isLightTheme
                          ? 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
                          : 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;