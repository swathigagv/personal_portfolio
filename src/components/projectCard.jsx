import { useState } from 'react'

 
export default function ProjectCard({ project }){
  const [hovered, setHovered] = useState(null);

    return(
        <div
          className="project-card-light"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
      >
                      {/* Card header */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span style={{ fontSize: 22, lineHeight: 1, marginTop: 2 }}>{project.emoji}</span>
                        <h3 style={{
                          fontFamily: "'Syne', sans-serif",
                          fontSize: 15,
                          fontWeight: 700,
                          color: "#6565e2",
                          margin: 0,
                          lineHeight: 1.3,
                          letterSpacing: "-0.01em",
                        }}>
                          {project.title}
                        </h3>
                      </div>
                      
        
                      {/* Divider */}
                      <div style={{
                        height: 1,
                        background: hovered === project.id
                          ? "linear-gradient(90deg, #e85d5d44, transparent)"
                          : "#ffffff08",
                        transition: "background 0.4s",
                      }} />
        
                      {/* Description */}
                      <p style={{
                        fontSize: 13,
                        color: "#7c7c9a",
                        lineHeight: 1.65,
                        margin: 0,
                        flexGrow: 1,
                      }}>
                        {project.description}
                      </p>
        
                      {/* Tech stack */}
                      <div>
                        <p style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#4a4a6a",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          margin: "0 0 8px",
                        }}>
                          Tech Stack
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {project.tech.map((t) => (
                            <span key={t} className="tech-tag">{t}</span>
                          ))}
                        </div>
                      </div>
        
                      {/* Buttons */}
                      <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                        <a href={project.live} className="btn-demo" target="_blank" rel="noopener noreferrer">
                          <span>⚡</span> Live Demo
                        </a>
                        <a href={project.github} className="btn-github" target="_blank" rel="noopener noreferrer">
                          <span>⬡</span> GitHub
                        </a>
                      </div>
                    </div>
                  )}
                
