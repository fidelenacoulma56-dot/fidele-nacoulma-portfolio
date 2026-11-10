import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpen,
  Bot,
  BrainCircuit,
  Briefcase,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  Sparkles,
  Star,
  TerminalSquare,
  Wifi,
  Zap,
  Menu,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Email', href: 'mailto:example@email.com', icon: Mail },
  { label: 'WhatsApp', href: '#', icon: MessageCircle },
];

const skillGroups = [
  {
    title: 'Programming',
    items: [
      { name: 'Python', level: 82 },
      { name: 'C++', level: 76 },
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 86 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    title: 'Robotics & Electronics',
    items: [
      { name: 'Arduino', level: 90 },
      { name: 'Embedded Systems', level: 78 },
      { name: 'Electronic Circuits', level: 84 },
      { name: 'Sensors and Actuators', level: 80 },
      { name: 'Robotics Fundamentals', level: 82 },
      { name: 'IoT', level: 75 },
    ],
  },
  {
    title: 'Technology & Innovation',
    items: [
      { name: 'Artificial Intelligence', level: 72 },
      { name: 'Data Science', level: 68 },
      { name: 'Automation', level: 77 },
      { name: 'Web Development', level: 85 },
      { name: 'Problem Solving', level: 90 },
    ],
  },
];

const projects = [
  {
    slug: 'agri-sage',
    title: 'AGRI-SAGE',
    category: 'Agriculture Technology',
    summary: 'AI-assisted agricultural decision support for farmers in Burkina Faso.',
    description: 'A concept-driven agriculture technology initiative focused on climate awareness, soil intelligence, and data-informed farm planning.',
    problem: 'Farmers need accessible, localized, and practical decision support tools to manage weather variability, crop conditions, and irrigation planning.',
    objectives: [
      'Support agricultural decision making with accessible digital tools.',
      'Provide data-informed insights for crop-care planning.',
      'Adapt agricultural innovation to local realities and farmer needs.',
    ],
    components: ['Weather data sources', 'Soil indicators', 'Mobile-friendly dashboard', 'Geolocation layer', 'Decision support models'],
    library: ['Placeholder library list', 'Open-source data processing tools', 'Sensor integration libraries'],
    status: 'Concept / roadmap planned',
    tags: ['AI', 'Agriculture', 'Data Analysis', 'IoT'],
    metrics: ['Smart agriculture', 'Climate awareness', 'Farm management', 'AI-driven insights'],
  },
  {
    slug: 'smart-irrigation-node',
    title: 'Smart Irrigation Node',
    category: 'IoT & Automation',
    summary: 'An automation concept for plant watering based on environmental inputs.',
    description: 'A practical engineering concept combining sensors, irrigation control logic, and automation for efficient water use.',
    problem: 'Irrigation is often inefficient when based on fixed schedules rather than data from the environment.',
    objectives: ['Reduce water waste', 'Automate watering logic', 'Improve plant health and monitoring'],
    components: ['Soil moisture sensor', 'Relay module', 'Water pump', 'Arduino or microcontroller', 'Power regulation'],
    library: ['Arduino core library', 'Sensor-specific libraries', 'Placeholder module docs'],
    status: 'Prototype concept',
    tags: ['Arduino', 'IoT', 'Automation', 'Sensors'],
    metrics: ['Water efficiency', 'Automation', 'Environmental monitoring'],
  },
  {
    slug: 'line-follower-robot',
    title: 'Line Follower Robot',
    category: 'Robotics',
    summary: 'A robotics prototype designed to follow a route using sensors and movement logic.',
    description: 'This project explores robotics fundamentals, sensor integration, and controlled motion using embedded logic.',
    problem: 'Autonomous navigation relies on accurate sensing and responsive control in constrained spaces.',
    objectives: ['Learn autonomous movement logic', 'Experiment with sensor-driven motion', 'Build a demonstrator platform'],
    components: ['Chassis', 'DC motors', 'IR sensors', 'Motor driver', 'Microcontroller'],
    library: ['Motor driver library', 'Sensor calibration scripts', 'Arduino base code'],
    status: 'Learning prototype',
    tags: ['Robotics', 'Sensors', 'Embedded'],
    metrics: ['Motion control', 'Autonomous navigation', 'Debugging'],
  },
  {
    slug: 'arduino-weather-station',
    title: 'Arduino Weather Station',
    category: 'Arduino & Electronics',
    summary: 'A compact environmental monitoring station designed for data collection and experimentation.',
    description: 'An electronics and embedded systems project focused on sensing environmental variables and presenting information clearly.',
    problem: 'Students and hobbyists often need simpler ways to access local environmental data for projects and learning.',
    objectives: ['Collect environmental variables', 'Build a modular sensor board', 'Develop measurement and display logic'],
    components: ['Temperature sensor', 'Humidity sensor', 'Display', 'Arduino board', 'Resistors and wiring'],
    library: ['DHT library', 'Display libraries', 'Calibration scripts'],
    status: 'Experimental project',
    tags: ['Arduino', 'Electronics', 'Sensors'],
    metrics: ['Monitoring', 'Embedded logic', 'Data visualization'],
  },
  {
    slug: 'ai-chatbot-assistant',
    title: 'AI Chatbot Assistant',
    category: 'Artificial Intelligence',
    summary: 'An AI concept project for conversational assistance and smart interaction design.',
    description: 'A concept focused on using AI tools to deliver useful responses, task support, and information flow in a user-friendly way.',
    problem: 'Many systems can benefit from simple and accessible AI interfaces that support learning and task execution.',
    objectives: ['Explore AI workflow design', 'Build an interaction model', 'Improve user value through automation'],
    components: ['Prompt design', 'Model interface', 'Data flow', 'UX structure', 'Feedback mechanism'],
    library: ['Placeholder model library', 'Prompt engineering references', 'API integration references'],
    status: 'Concept and experimentation',
    tags: ['AI', 'Programming', 'Automation'],
    metrics: ['Interaction design', 'Automation flows', 'Machine intelligence'],
  },
];

const experienceTimeline = [
  {
    title: 'Founder and animator of a technology-focused WhatsApp community',
    date: 'Ongoing',
    description: 'Building a digital space for knowledge sharing, collaboration, and technology discussions.',
  },
  {
    title: 'Robotics and electronics projects',
    date: 'Ongoing',
    description: 'Developing practical experiments and prototype concepts around robotics, sensors, and embedded systems.',
  },
  {
    title: 'Participation in scientific and technological activities',
    date: 'Ongoing',
    description: 'Taking part in events, projects, and learning activities that strengthen engineering awareness.',
  },
  {
    title: 'Organization of inter-school scientific initiatives',
    date: 'Ongoing',
    description: 'Creating opportunities for students to explore science, engineering, and technology together.',
  },
  {
    title: 'Technology webinars and knowledge sharing',
    date: 'Ongoing',
    description: 'Sharing ideas and learning experiences related to robotics, electronics, and programming.',
  },
  {
    title: 'Collaborative innovation projects',
    date: 'Ongoing',
    description: 'Working with others on solutions that combine creativity, engineering, and practical problem-solving.',
  },
];

const educationTimeline = [
  {
    title: 'Scientific track — Terminale C',
    date: 'Current',
    description: 'Ongoing academic path with strong focus on mathematics, physics, computer science, and engineering-related learning.',
  },
  {
    title: 'Academic interests',
    date: 'Focus',
    description: 'Mathematics, Physics, Computer Science, and Engineering are central to future technical development.',
  },
  {
    title: 'Future academic ambitions',
    date: 'Planned',
    description: 'Robotics, Mechatronics, Electronics, and Artificial Intelligence remain the key long-term academic goals.',
  },
];

const certificates = [
  { title: 'Training Program Placeholder', date: 'TBD', category: 'Learning' },
  { title: 'Certificate Placeholder', date: 'TBD', category: 'Achievement' },
  { title: 'Technology Competition Placeholder', date: 'TBD', category: 'Competition' },
  { title: 'Robotics Challenge Placeholder', date: 'TBD', category: 'Robotics' },
];

const blogPosts = [
  { title: 'Introduction to Robotics for Beginners', category: 'Robotics', readTime: '5 min read' },
  { title: 'Arduino Essentials: Building Practical Projects', category: 'Arduino', readTime: '6 min read' },
  { title: 'Electronics Fundamentals for Young Engineers', category: 'Electronics', readTime: '4 min read' },
  { title: 'AI in African Innovation', category: 'Artificial Intelligence', readTime: '7 min read' },
];

const galleryItems = [
  { title: 'Arduino Board', type: 'Prototype', aspect: 'tall' },
  { title: 'Robotic Prototype', type: 'Robotics', aspect: 'wide' },
  { title: 'Circuit Lab', type: 'Electronics', aspect: 'normal' },
  { title: 'Programming Setup', type: 'Coding', aspect: 'wide' },
  { title: 'Engineering Experiment', type: 'Research', aspect: 'tall' },
  { title: 'Technology Event', type: 'Community', aspect: 'normal' },
];

const filterOptions = ['All', 'Arduino & Electronics', 'Robotics', 'Artificial Intelligence', 'Web Development', 'Agriculture Technology', 'IoT & Automation'];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div style={{ maxWidth: '700px' }} className="mb-12">
      <span className="section-tag">{eyebrow}</span>
      <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-white">{title}</h2>
      {text ? <p className="mt-4 text-lg text-slate-300">{text}</p> : null}
    </div>
  );
}

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-deep text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 shadow-neon">
              <Cpu size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Fidèle</div>
              <div className="text-xs text-slate-300">Nacoulma</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300" aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>

          <button className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200" aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="tech-grid relative overflow-hidden">
          <div className="orb orb-blue left-[-60px] top-16 h-64 w-64" />
          <div className="orb orb-violet right-10 top-28 h-72 w-72" />
          <div className="orb orb-cyan bottom-10 left-1/3 h-80 w-80" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
            <div>
              <span className="section-tag">Aspiring robotics engineer</span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
                Fidèle <span className="gradient-text">Nacoulma</span>
              </h1>
              <div className="mt-4 overflow-hidden border-y border-slate-700/70 py-3">
                <div className="marquee-track text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/90">
                  <span className="mr-8">Robotics</span>
                  <span className="mr-8">Mechatronics</span>
                  <span className="mr-8">Artificial Intelligence</span>
                  <span className="mr-8">Electronics</span>
                  <span className="mr-8">Programming</span>
                  <span className="mr-8">Robotics</span>
                  <span className="mr-8">Mechatronics</span>
                  <span className="mr-8">Artificial Intelligence</span>
                  <span className="mr-8">Electronics</span>
                  <span className="mr-8">Programming</span>
                </div>
              </div>
              <h2 className="mt-8 text-2xl font-semibold text-slate-200 md:text-3xl">
                Aspiring Robotics & Mechatronics Engineer
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Building intelligent technologies to solve real-world problems.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                I am a young technology enthusiast from Burkina Faso passionate about robotics, programming, electronics, and innovation. I enjoy turning ideas into practical solutions that can support progress, solve real challenges, and contribute to Africa’s future.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-neon transition hover:-translate-y-0.5 hover:bg-cyan-300">
                  Explore My Projects <ArrowRight size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200">
                  Contact Me
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300" aria-label={label}>
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="hero-card relative overflow-hidden rounded-[30px] p-4 shadow-[0_20px_60px_rgba(8,15,32,0.8)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_45%)]" />
                <div className="relative rounded-[24px] border border-slate-700/80 bg-slate-950/80 p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>System</span>
                    <span className="inline-flex items-center gap-2 text-cyan-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Online</span>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-400/30 bg-[radial-gradient(circle,_rgba(110,231,255,.12),_transparent_62%)] shadow-[0_0_50px_rgba(110,231,255,0.15)]">
                      <div className="absolute inset-6 rounded-full border border-dashed border-cyan-500/35" />
                      <div className="absolute inset-10 rounded-full border border-violet-400/30" />
                      <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/25 to-violet-500/20 ring-1 ring-cyan-300/40 animate-float">
                        <Bot className="h-20 w-20 text-cyan-200" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>Innovation focus</span>
                        <Sparkles className="text-cyan-300" size={16} />
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">AI + Robotics</span>
                        <ArrowRight className="text-cyan-300" size={18} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                      <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                        <div className="flex items-center gap-2 text-cyan-300"><Zap size={15} /> Focus</div>
                        <div className="mt-2 font-semibold text-white">Problem solving</div>
                      </div>
                      <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                        <div className="flex items-center gap-2 text-violet-300"><BrainCircuit size={15} /> Vision</div>
                        <div className="mt-2 font-semibold text-white">Sustainable tech</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionHeader
            eyebrow="About me"
            title="Technology is not just a field. It is a way to create impact."
            text="A young engineer in training with a strong passion for innovation, practical problem solving, and building useful technologies that can support communities and industries."
          />

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="glass-panel rounded-[28px] p-5">
              <div className="rounded-[24px] border border-slate-700 bg-slate-900/80 p-6">
                <div className="flex h-72 items-center justify-center rounded-[20px] border border-dashed border-cyan-400/30 bg-gradient-to-br from-slate-900 to-slate-800 text-cyan-200">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10">
                      <Rocket size={26} />
                    </div>
                    <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Portrait</div>
                    <div className="mt-2 text-sm text-slate-300">Placeholder profile image</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-slate-300">
              <p>
                I am a technology enthusiast from Burkina Faso who is passionate about robotics, electronics, computer science, and innovation. My interest in engineering began with a curiosity to understand how systems work and how they can be improved to serve people better.
              </p>
              <p>
                Through self-learning, experimentation, and project work, I have developed a strong fascination for programming, electronic circuits, and Arduino projects. I enjoy building systems that solve real problems and improve everyday life through automation, intelligent control, and useful digital solutions.
              </p>
              <p>
                My dream is to contribute to technological development in Africa by creating useful solutions adapted to local realities. I want to become a robotics and mechatronics engineer and work at the intersection of intelligence, machine design, and practical innovation.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                  <div className="flex items-center gap-2 text-cyan-300"><GraduationCap size={16} /> Education</div>
                  <p className="mt-3 text-sm text-slate-200">Scientific track — Terminale C</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                  <div className="flex items-center gap-2 text-violet-300"><BookOpen size={16} /> Vision</div>
                  <p className="mt-3 text-sm text-slate-200">Technology for Africa’s future</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                  <div className="flex items-center gap-2 text-emerald-300"><Sparkles size={16} /> Focus</div>
                  <p className="mt-3 text-sm text-slate-200">Innovation and practical engineering</p>
                </div>
              </div>

              <div className="pt-2">
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/15">
                  <Download size={15} /> Download CV (placeholder)
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-950/70 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeader eyebrow="Skills" title="Engineering skills built for real-world problem solving." text="A practical mix of technical knowledge in programming, robotics, electronics, and innovation." />

            <div className="grid gap-6 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="cyber-card rounded-[28px] p-6">
                  <h3 className="mb-5 text-xl font-bold text-white">{group.title}</h3>
                  <div className="space-y-5">
                    {group.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
                          <span>{skill.name}</span>
                          <span className="text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="progress-bar">
                          <span style={{ width: `${skill.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionHeader eyebrow="Engineering lab" title="My projects and prototype journey." text="A portfolio of engineering ideas, experiments, and technology concepts designed to solve real problems and inspire innovation." />

          <div className="mb-8 flex flex-wrap gap-3">
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                className={`project-filter-btn rounded-full px-4 py-2 text-sm font-medium ${activeFilter === option ? 'active' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <div key={project.slug} className="project-card cyber-card rounded-[28px] p-4 transition duration-300">
                <div className="rounded-[22px] border border-slate-700 bg-slate-900/80 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400">{project.status}</span>
                  </div>

                  <div className="mb-5 flex h-40 items-center justify-center rounded-2xl border border-dashed border-violet-400/25 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-cyan-200">
                    <div className="text-center">
                      <TerminalSquare className="mx-auto mb-3" size={28} />
                      <div className="text-sm uppercase tracking-[0.18em] text-slate-300">Project Preview</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-slate-300">{tag}</span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                      View Project <ArrowRight size={15} />
                    </Link>
                    <span className="text-sm text-slate-400">Placeholder</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950/80 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="rounded-[30px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <span className="section-tag">Featured initiative</span>
                  <h3 className="mt-5 text-3xl font-black text-white md:text-5xl">AGRI-SAGE</h3>
                  <p className="mt-5 text-lg text-slate-300">
                    A smart agriculture initiative designed to support farmers in Burkina Faso through digital decision support, climate awareness, and practical agronomic insights.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {['Smart agriculture', 'Farm management', 'Weather and climate', 'AI and data analysis', 'IoT sensors', 'Smart irrigation'].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200">
                        <Leaf size={15} className="text-emerald-300" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-700 bg-slate-950/80 p-5">
                  <div className="mb-5 flex h-56 items-center justify-center rounded-[18px] border border-dashed border-cyan-400/30 bg-gradient-to-br from-slate-900 to-slate-800 text-cyan-200">
                    <div className="text-center">
                      <Leaf className="mx-auto mb-3" size={34} />
                      <div className="text-sm uppercase tracking-[0.2em] text-slate-300">Architecture Placeholder</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p><strong className="text-white">Vision:</strong> Build useful agricultural technologies tailored to African realities.</p>
                    <p><strong className="text-white">Focus:</strong> Data, mapping, local climate intelligence, and smart crop support.</p>
                    <p><strong className="text-white">Status:</strong> Concept and roadmap under development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionHeader eyebrow="Nacoulma Tech" title="A personal technology initiative focused on innovation and service." text="A growing innovation platform for programming, robotics, electronics, AI, and technology education." />

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[30px] border border-slate-700 bg-slate-900/80 p-8">
              <div className="flex h-40 items-center justify-center rounded-[22px] border border-dashed border-cyan-400/30 bg-gradient-to-br from-slate-800 to-slate-900 text-cyan-200">
                <div className="text-center">
                  <Code2 className="mx-auto mb-3" size={32} />
                  <div className="text-sm uppercase tracking-[0.2em]">Logo Placeholder</div>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-slate-300">
              <p>
                NACOULMA Tech is a personal technology initiative aimed at exploring innovation, sharing knowledge, and building solutions to technological challenges in Africa. The idea is to combine learning, practice, and creativity to develop impactful digital and engineering projects.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">Mission: Promote learning, innovation, and practical technology.</div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">Activities: Programming, robotics, AI, electronics, and education.</div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">Community: Knowledge-sharing, collaboration, and technological discovery.</div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">Goal: Contribute to sustainable innovation in Africa.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950/80 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeader eyebrow="Experience and leadership" title="Building experiences, learning through action, and growing through community." text="A timeline of hands-on work, learning, collaboration, and initiative in the technology ecosystem." />

            <div className="space-y-6">
              {experienceTimeline.map((item) => (
                <div key={item.title} className="timeline-item relative pl-14">
                  <div className="timeline-dot" />
                  <div className="cyber-card rounded-[24px] p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">{item.date}</span>
                    </div>
                    <p className="mt-3 text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionHeader eyebrow="Education" title="Academic journey and technical ambitions." text="A strong learning path built around science, engineering, and future-focused technology disciplines." />

          <div className="space-y-6">
            {educationTimeline.map((item) => (
              <div key={item.title} className="timeline-item relative pl-14">
                <div className="timeline-dot" />
                <div className="cyber-card rounded-[24px] p-5">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-violet-200">{item.date}</span>
                  </div>
                  <p className="mt-3 text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950/80 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeader eyebrow="Certifications & achievements" title="Learning, recognition, and future milestones." text="A curated space for training, competitions, academic recognitions, and technology-related accomplishments." />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {certificates.map((cert) => (
                <div key={cert.title} className="certificate-card cyber-card rounded-[26px] p-5 transition duration-300">
                  <div className="mb-5 flex h-36 items-center justify-center rounded-[18px] border border-dashed border-slate-700 bg-slate-900/80 text-slate-200">
                    <div className="text-center">
                      <Award className="mx-auto mb-3 text-cyan-300" size={28} />
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300">Preview</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-400">
                    <span>{cert.category}</span>
                    <span>{cert.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">{cert.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionHeader eyebrow="Future vision" title="Engineering the Future, Solving Real Problems." text="Long-term ambition: to become a robotics and mechatronics engineer who builds technologies that respond to real social, industrial, and agricultural challenges." />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] border border-slate-700 bg-slate-900/80 p-8">
              <div className="mb-5 flex h-56 items-center justify-center rounded-[22px] border border-dashed border-violet-400/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-violet-200">
                <div className="text-center">
                  <Bot className="mx-auto mb-3" size={34} />
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-300">Robotics concept</div>
                </div>
              </div>
              <p className="text-slate-300">
                My long-term goal is to build solutions in the fields of agricultural robotics, industrial automation, healthcare robotics, and embedded systems. I want to contribute to innovation that is useful, scalable, and rooted in African realities.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {['Agricultural robotics', 'Industrial automation', 'Automotive technologies', 'Healthcare robotics', 'Artificial Intelligence', 'Embedded systems', 'African innovation', 'Sustainable engineering'].map((item) => (
                <div key={item} className="rounded-[22px] border border-slate-700 bg-slate-900/70 p-5 text-slate-200">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300">
                    <Star size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="bg-slate-950/80 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeader eyebrow="Blog & knowledge sharing" title="Technical articles and engineering insights." text="Articles exploring robotics, electronics, programming, AI, engineering learning, and technology in Africa." />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {blogPosts.map((post) => (
                <article key={post.title} className="blog-card cyber-card rounded-[26px] p-5 transition duration-300">
                  <div className="mb-5 flex h-32 items-center justify-center rounded-[18px] border border-dashed border-slate-700 bg-slate-900/80 text-cyan-200">
                    <BookOpen size={28} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-cyan-200">{post.category}</span>
                  <h3 className="mt-3 text-xl font-bold text-white">{post.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                    <span>{post.readTime}</span>
                    <ArrowRight size={15} className="text-cyan-300" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionHeader eyebrow="Gallery" title="My engineering world in images." text="A portfolio of prototypes, experiments, systems, and the environment where ideas become solutions." />

          <div className="masonry-grid">
            {galleryItems.map((item) => (
              <div key={item.title} className="masonry-item overflow-hidden rounded-[24px] border border-slate-700 bg-slate-900/80">
                <div className="flex h-56 items-center justify-center border-b border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 text-cyan-200">
                  <div className="text-center">
                    <Cpu className="mx-auto mb-3" size={28} />
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300">{item.type}</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-slate-950/80 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeader eyebrow="Contact" title="Have an idea, a project, or an opportunity?" text="Let’s build something meaningful together." />

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-5 text-slate-300">
                <div className="rounded-[24px] border border-slate-700 bg-slate-900/70 p-5">
                  <div className="mb-3 flex items-center gap-3 text-cyan-300"><Mail size={16} /> Email</div>
                  <p>example@email.com</p>
                </div>
                <div className="rounded-[24px] border border-slate-700 bg-slate-900/70 p-5">
                  <div className="mb-3 flex items-center gap-3 text-cyan-300"><MessageCircle size={16} /> WhatsApp</div>
                  <p>Placeholder link</p>
                </div>
                <div className="rounded-[24px] border border-slate-700 bg-slate-900/70 p-5">
                  <div className="mb-3 flex items-center gap-3 text-cyan-300"><Github size={16} /> GitHub</div>
                  <p>Placeholder profile</p>
                </div>
                <div className="rounded-[24px] border border-slate-700 bg-slate-900/70 p-5">
                  <div className="mb-3 flex items-center gap-3 text-cyan-300"><Linkedin size={16} /> LinkedIn</div>
                  <p>Placeholder profile</p>
                </div>
              </div>

              <div className="rounded-[30px] border border-slate-700 bg-slate-900/80 p-6 md:p-8">
                <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="text-sm text-slate-300">
                      <span className="mb-2 block">Name</span>
                      <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400" />
                    </label>
                    <label className="text-sm text-slate-300">
                      <span className="mb-2 block">Email</span>
                      <input type="email" placeholder="Your email" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400" />
                    </label>
                  </div>

                  <label className="block text-sm text-slate-300">
                    <span className="mb-2 block">Subject</span>
                    <input type="text" placeholder="Project collaboration / opportunity / question" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400" />
                  </label>

                  <label className="block text-sm text-slate-300">
                    <span className="mb-2 block">Message</span>
                    <textarea rows="6" placeholder="Tell me about your idea or opportunity..." className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400" />
                  </label>

                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-sm text-amber-200">
                    Form service is not configured yet. Add a backend or email integration to make this form active.
                  </div>

                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300">
                <Cpu size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Fidèle</div>
                <div className="text-xs text-slate-300">Nacoulma</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-slate-400">
              Aspiring Robotics & Mechatronics Engineer.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Quick links</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              {navItems.map((item) => (
                <li key={item.href}><a href={item.href} className="hover:text-cyan-300">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Connect</h3>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-400">© 2026 Fidèle Nacoulma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-deep px-6 py-20 text-center text-slate-100">
        <div className="mx-auto max-w-xl rounded-[28px] border border-slate-700 bg-slate-900/80 p-8">
          <h1 className="text-3xl font-black">Project not found</h1>
          <p className="mt-4 text-slate-300">This project page is still being prepared.</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950">
            Back to home <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link to="/" className="text-cyan-200">← Back to portfolio</Link>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">{project.category}</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-8">
          <span className="section-tag">Project detail</span>
          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">{project.title}</h1>
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[30px] border border-slate-700 bg-slate-900/80 p-6 md:p-8">
            <div className="mb-6 flex h-72 items-center justify-center rounded-[22px] border border-dashed border-cyan-400/30 bg-gradient-to-br from-slate-900 to-slate-800 text-cyan-200">
              <div className="text-center">
                <Cpu className="mx-auto mb-3" size={36} />
                <div className="text-xs uppercase tracking-[0.2em]">Project Visual Placeholder</div>
              </div>
            </div>
            <p className="text-lg leading-8 text-slate-300">{project.description}</p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[26px] border border-slate-700 bg-slate-900/80 p-5">
              <h2 className="text-lg font-bold text-white">Status</h2>
              <p className="mt-2 text-slate-300">{project.status}</p>
            </div>
            <div className="rounded-[26px] border border-slate-700 bg-slate-900/80 p-5">
              <h2 className="text-lg font-bold text-white">Key tags</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-200">{tag}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[26px] border border-slate-700 bg-slate-900/80 p-5">
              <h2 className="text-lg font-bold text-white">Technology focus</h2>
              <ul className="mt-3 space-y-2 text-slate-300">
                {project.metrics.map((item) => (
                  <li key={item} className="flex items-center gap-2"><Zap size={14} className="text-cyan-300" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[30px] border border-slate-700 bg-slate-900/80 p-6">
            <h2 className="text-2xl font-bold text-white">Project overview</h2>
            <p className="mt-4 text-slate-300">{project.description}</p>

            <h3 className="mt-8 text-xl font-bold text-white">Problem being addressed</h3>
            <p className="mt-3 text-slate-300">{project.problem}</p>

            <h3 className="mt-8 text-xl font-bold text-white">Objectives</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {project.objectives.map((objective) => (
                <li key={objective} className="flex gap-3"><ArrowRight className="mt-1 text-cyan-300" size={16} /> <span>{objective}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-slate-700 bg-slate-900/80 p-6">
            <h2 className="text-2xl font-bold text-white">Components and materials</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {project.components.map((item) => (
                <li key={item} className="flex gap-3"><Code2 className="mt-1 text-cyan-300" size={16} /> <span>{item}</span></li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-bold text-white">Arduino libraries</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {project.library.map((item) => (
                <li key={item} className="flex gap-3"><TerminalSquare className="mt-1 text-violet-300" size={16} /> <span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-[30px] border border-slate-700 bg-slate-900/80 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Detailed project fields</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              'Electronic circuit diagram: placeholder diagram',
              'Wiring instructions: placeholder step-by-step guide',
              'Source code: placeholder source file',
              'Project photos: placeholder gallery',
              'Demonstration video: placeholder media link',
              'Testing and results: placeholder test notes',
              'Challenges encountered: placeholder notes',
              'Lessons learned: placeholder reflection',
              'Future improvements: placeholder roadmap',
            ].map((item) => (
              <div key={item} className="rounded-[20px] border border-slate-700 bg-slate-950/70 p-4 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
