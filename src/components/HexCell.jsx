import { useState } from "react";
import { categoryStyles, levelLabel } from "../data/SkillsStyle";
import '../style/SkillsSection.css'

export function HexCell({ skill, index }) {
  const [flipped, setFlipped] = useState(false);
  const style = categoryStyles[skill.category];

  return (
    <div className="hex-cell"
      style={{ 
        animation: `hexIn 0.4s ease forwards ${index * 60}ms`,
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="hex-cards"
        style={{ 
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div className="hex-cards-front"
          style={{ 
             border: `1px solid ${style.frontAccent}22`,
            }}
        >
          <span> {skill.name} </span>
          <div className="hex-card-text"
            style={{ 
               background: style.frontAccent,
             }}
          />
        </div>

        {/* Back */}
        <div className="hex-card-back"
          style={{ 
             background: style.backBg,
            }} >
          <span 
            style={{ 
              
               color: style.nameColor,
             }} >
            {skill.name}
          </span>
          <span
            style={{
              fontSize: 9,
              color: style.levelColor,
              fontWeight: 500,
            }}
          >
            {levelLabel(skill.level)}
          </span>
          <div style={{ display: "flex", gap: 3, marginTop: 2 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background:
                    i < skill.level ? style.dotFilled : style.dotEmpty,
                  transition: `background 0.1s ${i * 40}ms`,
                }}
              />
            ))}
          </div>
          <span className="category"
            style={{
              background: style.badgeBg,
              color: style.badgeColor,
            }}
          >
            {skill.category}
          </span>
        </div>
      </div>
    </div>
  );
}