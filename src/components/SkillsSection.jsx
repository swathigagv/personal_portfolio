import { useState } from "react";
import { technicalSkills, softSkills, categories } from "../data/skill";
import { HexCell } from './HexCell'
import '../style/SkillsSection.css'

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? technicalSkills
      : technicalSkills.filter((s) => s.category === activeFilter);

  return (
    <section className="hex-section">

      <div  className="container" >

        {/* Heading */}
        <div className="skill-heading" >
          <p>
            Here are the technologies and tools I use to build responsive, scalable, and user-friendly web applications.
          </p>
          <h2>Skills</h2>
        </div>

        {/* Filter bar */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Hex Grid */}
        <div className="hex-grid">
          {filtered.map((skill, i) => (
            <HexCell key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="divider" >
          <div className="divider-line" />
          <p>
            Soft Skills
          </p>
          <div className="divider-line" />
        </div>

        {/* Soft Skills */}
        <div className="soft-skills">
          {softSkills.map((skill, i) => (
            <div
              key={skill}
              className="soft-chip-light"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span
                style={{ animationDelay: `${i * 200}ms` }}
              />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}