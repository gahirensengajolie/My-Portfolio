export const projects = [
  {
    title: "IVHUREDU",
    subtitle: "Farmer Support Platform",
    description:
      "Helps farmers submit service requests over USSD, so the platform stays usable without a data connection.",
    technologies: ["Python", "FastAPI", "Flutter", "USSD"],
    note:
      "Team project — I worked across the backend, USSD flow, informational website, dashboard, and mobile app.",
    links: [
      { label: "Backend", url: "https://github.com/akirachix/Nyeredzi_Backend" },
      { label: "Dashboard", url: "https://github.com/akirachix/Nyeredzi_Dashboard" },
      { label: "Website", url: "https://github.com/akirachix/Nyeredzi_Informational_Website" },
      { label: "Mobile App", url: "https://github.com/akirachix/Nyeredzi_Mobile" },
    ],
  },
  {
    title: "Expense Reimbursement System",
    subtitle: "Web Application",
    description:
      "A role-based reimbursement tool for employees, managers, and admins, covering submission, approval, and payout in one flow.",
    technologies: ["React", "Python", "FastAPI", "SQLAlchemy"],
    links: [
      { label: "View on GitHub", url: "https://github.com/gahirensengajolie/Task-Management-API" },
    ],
  },
  {
    title: "Order Tracking App",
    subtitle: "Mobile Application",
    description:
      "Lets customers place orders and follow their status in real time, built around a simple, low-friction interface.",
    technologies: ["Flutter", "Dart", "API"],
    links: [
      { label: "View on GitHub", url: "https://github.com/gahirensengajolie/My-mobile-app" },
    ],
  },
  {
    title: "Personal Portfolio",
    subtitle: "Developer Website",
    description:
      "This site — a record of the projects, tools, and interests that make up my path into software development.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    links: [
      { label: "View on GitHub", url: "https://github.com/gahirensengajolie/My-Portfolio" },
    ],
  },
];

export const skills = [
  {
    category: "Frontend",
    accent: "coral",
    items: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
  },
  {
    category: "Mobile",
    accent: "teal",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Backend",
    accent: "gold",
    items: ["Python", "FastAPI", "SQLAlchemy", "JWT"],
  },
  {
    category: "QA & Automation",
    accent: "ink",
    items: ["Cypress", "Playwright", "Postman", "Test Automation", "E2E Testing"],
  },
];

export const expertise = [
  {
    title: "Web development",
    accent: "coral",
    description:
      "Building responsive, user-focused web applications with modern frontend and backend tools.",
  },
  {
    title: "Mobile development",
    accent: "teal",
    description:
      "Creating cross-platform apps with Flutter, with an eye on usability and performance on real devices.",
  },
  {
    title: "Backend development",
    accent: "gold",
    description:
      "Designing APIs and services with Python and FastAPI, covering databases, auth, and secure workflows.",
  },
  {
    title: "QA & Test Automation",
    accent: "ink",
    description:
      "Writing end-to-end automated tests with Cypress and Playwright, and testing APIs with Postman, to catch issues before they reach users.",
  },
];

// Derives a short category tag and matching accent color from a project's subtitle,
// so the same three-color system used in Skills also organizes the project list.
export function projectMeta(subtitle) {
  if (subtitle.includes("Platform")) return { tag: "Platform", accent: "gold" };
  if (subtitle.includes("Mobile")) return { tag: "Mobile app", accent: "teal" };
  return { tag: "Web app", accent: "coral" };
}
