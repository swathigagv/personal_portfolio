import { projects } from '../data/projectdata'
import ProjectCard from "./projectCard";
import '../style/ProjectStyle.css'

export default function ProjectsSection() {

  return (
    <section className='section' >

      {/* Background glow blobs */}
      <div className='project-screen' />

      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* Heading */}
        <div className='project-heading'>
          <p>
            What I've built
          </p>
          <h2 >
            Projects
          </h2>
        </div>

        {/* Scrolling marquee banner */}
        <div style={{
          overflow: "hidden",
          background: "var(--accent-muted)",
          borderRadius: 8,
          padding: "10px 0",
          marginBottom: 52,
          animation: "fadeUp 0.6s ease 0.15s forwards",
          opacity: 0,
        }}>
          <div className="marquee-track">
            {[...Array(3)].map((_, i) =>
              ["Here are the technologies and tools I use to bulid responsive,scalable and user-friendly web applications",
                ].map((t) => (
                <span key={`${i}-${t}`} style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#030303",
                  padding: "0 28px",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.06em",
                  opacity: 0.9,
                }}>
                  ✦ {t}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Projects grid */}
        <div
          className="grid-3" >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${i * 80}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}