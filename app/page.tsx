export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A modern web application built with cutting-edge technology",
      category: "Web Development",
      year: "2024",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Mobile-first design system for enterprise solutions",
      category: "Design System",
      year: "2024",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "AI-powered analytics platform with real-time insights",
      category: "Data Analytics",
      year: "2023",
    },
    {
      id: 4,
      title: "Project Delta",
      description: "E-commerce platform with seamless user experience",
      category: "E-commerce",
      year: "2023",
    },
    {
      id: 5,
      title: "Project Epsilon",
      description: "Collaborative workspace tool for remote teams",
      category: "Productivity",
      year: "2023",
    },
    {
      id: 6,
      title: "Project Zeta",
      description: "Interactive data visualization dashboard",
      category: "Data Visualization",
      year: "2022",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Left Side - Main Content */}
      <div className="flex flex-1 flex-col justify-center px-12 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl font-semibold tracking-tight text-foreground lg:text-6xl">
            Hello, I'm{" "}
            <span className="text-foreground/70">a creative developer</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-foreground/60 lg:text-xl">
            I craft beautiful digital experiences and build products that make a
            difference. Welcome to my portfolio.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-200 ease hover:bg-foreground/90"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 ease hover:bg-foreground/5"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Scrollable Project Showcase */}
      <div className="w-full overflow-y-auto border-l border-foreground/10 bg-background lg:w-1/2">
        <div className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur-sm px-8 py-6">
          <h2 className="text-2xl font-semibold text-foreground">Work</h2>
          <p className="mt-1 text-sm text-foreground/60">
            Selected projects and collaborations
          </p>
        </div>
        <div className="px-8 py-8">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer transition-opacity duration-200 ease-out"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-foreground/40">
                    {project.category}
                  </span>
                  <span className="text-xs text-foreground/40">{project.year}</span>
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-foreground transition-colors duration-200 ease group-hover:text-foreground/70">
                  {project.title}
                </h3>
                <p className="text-foreground/60">{project.description}</p>
                <div className="mt-4 h-px w-0 bg-foreground/20 transition-all duration-300 ease-out group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
