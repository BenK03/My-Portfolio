import React from "react";
import ClickSpark from "./components/ClickSpark";
import shanksGif from "../images/shanks.gif";
import resumePdf from "../resume/Resume.pdf";

export default function App() {
  const [theme, setTheme] = React.useState("dark");
  const skillIcons = [
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
    { name: "CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Pandas", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  ];

  const skillsLoop = [...skillIcons, ...skillIcons];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isDark = theme === "dark";

  React.useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#0b0d11" : "#f8fafc";
    document.body.style.color = isDark ? "#e2e8f0" : "#0f172a";
  }, [isDark]);

  return (
    <div className={`everything relative min-h-screen px-2 ${isDark ? "bg-[#0b0d11] text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      <div className="absolute left-4 top-4 z-50 sm:left-6 sm:top-6">
        <div className="relative">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="group flex flex-col gap-1.5 p-2 focus:outline-none"
          >
            <span className={`block h-0.5 w-6 rounded transition group-hover:scale-x-95 ${isDark ? "bg-slate-100" : "bg-slate-800"}`} />
            <span className={`block h-0.5 w-6 rounded transition group-hover:scale-x-95 ${isDark ? "bg-slate-100" : "bg-slate-800"}`} />
            <span className={`block h-0.5 w-6 rounded transition group-hover:scale-x-95 ${isDark ? "bg-slate-100" : "bg-slate-800"}`} />
          </button>
          {menuOpen && (
            <div className="absolute left-full top-1/2 ml-3 w-40 -translate-y-1/2 transform">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-semibold transition ${isDark ? "text-slate-100 hover:bg-slate-800/60" : "text-slate-900 hover:bg-slate-200/60"}`}
              >
                Resume
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="absolute right-4 top-4 z-50 sm:right-6 sm:top-6">
        <button
          type="button"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setTheme((mode) => (mode === "dark" ? "light" : "dark"))}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition focus:outline-none ${isDark ? "text-slate-100 hover:bg-white/10" : "text-slate-800 hover:bg-slate-200"}`}
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-6 w-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 3v2.2M12 18.8V21M4.6 12H3M21 12h-2.2M17.5 6.5l-1.6 1.2M8.1 16.3 6.5 17.5M6.5 6.5l1.6 1.2M15.9 16.3l1.6 1.2" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-6 w-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.5 13.3A8.3 8.3 0 0 1 11 3.5a7.5 7.5 0 1 0 9.5 9.8Z" />
            </svg>
          )}
        </button>
      </div>
      <ClickSpark sparkColor="#fff" sparkSize={8} sparkRadius={14} sparkCount={10} duration={420}>
        <main className="page-layout relative flex items-start justify-center gap-12 py-28 px-6">
        <div className="content-block relative -translate-x-28 sm:-translate-x-36 flex flex-col items-start gap-1 text-left">
          <h1 className="right text-lg font-medium tracking-tight sm:text-xl leading-tight">
            Benjamin Kim
          </h1>
          <div className="shanks">
            <img src={shanksGif} alt="Madara" />
          </div>
          <p className="right text-xs text-inherit sm:text-sm leading-tight">
            Hello! I'm a Third Year Computer Science Student.
          </p>
          <h2 className="right mt-10 text-lg font-semibold tracking-tight sm:text-xl">
            Experiences:
          </h2>
          <div className="section-row mt-4 flex w-full max-w-[1400px] items-center justify-between gap-12">
            <p className="right text-xs font-medium sm:text-sm">Korea University</p>
            <p className="dates ml-auto text-xs font-medium text-slate-500 sm:text-sm">
              May 2025 - Sept 2025
            </p>
          </div>
          <p className="right text-xs font-medium text-slate-500 sm:text-sm">
            Machine Learning Researcher Intern
          </p>
          <div className="section-row mt-4 flex w-full max-w-[1400px] items-center justify-between gap-12">
            <p className="right text-xs font-medium sm:text-sm">Chujin Gongjang Corp.</p>
            <p className="dates ml-auto text-xs font-medium text-slate-500 sm:text-sm">
              May 2025 - Aug 2025
            </p>
          </div>
          <p className="right text-xs font-medium text-slate-500 sm:text-sm">
            Full-Stack Developer Intern
          </p>
          <h2 className="right mt-10 text-lg font-semibold tracking-tight sm:text-xl">
            Projects:
          </h2>
          <div className="section-row mt-4 flex w-full max-w-[1400px] items-center justify-between gap-12">
            <p className="right text-xs font-medium sm:text-sm">Heart Disease Predictor</p>
            <p className="dates ml-auto text-xs font-medium text-slate-500 sm:text-sm">
              Jan 2024 - Jan 2024
            </p>
          </div>
          <p className="right text-xs font-medium text-slate-500 sm:text-sm">
            AI-Powered Heart Disease Predictor
          </p>
          <div className="section-row mt-4 flex w-full max-w-[1400px] items-center justify-between gap-12">
            <p className="right text-xs font-medium sm:text-sm">GameHub</p>
            <p className="dates ml-auto text-xs font-medium text-slate-500 sm:text-sm">
              Oct 2025 - Nov 2025
            </p>
          </div>
          <p className="right text-xs font-medium text-slate-500 sm:text-sm">
            Multiplayer Gaming Platform
          </p>
          <h2 className="right mt-10 text-lg font-semibold tracking-tight sm:text-xl">
            Skills:
          </h2>
          <div className="skills-wrapper mt-4 ml-48 w-full max-w-[800px] overflow-hidden sm:ml-64">
            <div className="skills-track">
              {skillsLoop.map((skill, idx) => (
                <img
                  key={`${skill.name}-${idx}`}
                  src={skill.url}
                  alt={skill.name}
                  className="h-10 w-10 sm:h-12 sm:w-12"
                />
              ))}
            </div>
          </div>
          <h2 className="right mt-10 text-lg font-semibold tracking-tight sm:text-xl">
            Find Me:
          </h2>
          <div className="find mt-4 flex items-center gap-16 sm:gap-24">
            <a
              href="https://www.linkedin.com/in/benjamin-kim-656307254/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/157006/linkedin.svg"
                alt="LinkedIn"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
            </a>
            <a href="mailto:03benjamin.kim@gmail.com">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                alt="Gmail"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
            </a>
            <a
              href="https://github.com/BenK03"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/475654/github-color.svg"
                alt="GitHub"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
            </a>
          </div>
        </div>
        </main>
      </ClickSpark>
    </div>
  );
}
