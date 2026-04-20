export const categoryStyles = {
  Frontend: {
    backBg: "#1a1a2e",
    backBorder: "#4f46e5",
    nameColor: "#c7d2fe",
    levelColor: "#818cf8",
    dotFilled: "#6366f1",
    dotEmpty: "#312e81",
    badgeBg: "#312e81",
    badgeColor: "#818cf8",
    frontAccent: "#4f46e5",
  },
  Backend: {
    backBg: "#0f2a1e",
    backBorder: "#10b981",
    nameColor: "#a7f3d0",
    levelColor: "#6ee7b7",
    dotFilled: "#10b981",
    dotEmpty: "#064e3b",
    badgeBg: "#064e3b",
    badgeColor: "#6ee7b7",
    frontAccent: "#10b981",
  },
  Cloud: {
    backBg: "#1e1a0f",
    backBorder: "#f59e0b",
    nameColor: "#fde68a",
    levelColor: "#fcd34d",
    dotFilled: "#f59e0b",
    dotEmpty: "#451a03",
    badgeBg: "#451a03",
    badgeColor: "#fcd34d",
    frontAccent: "#f59e0b",
  },
  Tools: {
    backBg: "#1e0f1a",
    backBorder: "#ec4899",
    nameColor: "#fbcfe8",
    levelColor: "#f9a8d4",
    dotFilled: "#ec4899",
    dotEmpty: "#500724",
    badgeBg: "#500724",
    badgeColor: "#f9a8d4",
    frontAccent: "#ec4899",
  },
};

export const levelLabel = (lvl) =>
  ["", "Beginner", "Basic", "Proficient", "Advanced", "Expert"][lvl];
