import React from "react";
import shanksGif from "../images/shanks.gif";

export default function App() {
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

  return (
    <div className="relative min-h-screen bg-[#0b0d11] text-slate-100">
      <main className="relative flex items-start justify-center gap-12 py-16 px-6">
        <div className="relative -translate-x-28 sm:-translate-x-36 flex flex-col items-start gap-1 text-left">
          <h1 className="right text-lg font-medium tracking-tight sm:text-xl leading-tight">
            Benjamin Kim  
          </h1>
          <div className="shanks">
            <img src={shanksGif} alt="Madara"/>
          </div>
          <p className="right text-xs text-inherit sm:text-sm leading-tight">
            Hello! I'm a third year computer science student.
          </p>
          <h2 className="right mt-10 text-lg font-semibold tracking-tight sm:text-xl">
            Experiences:
          </h2>
          <div className="mt-4 flex w-full max-w-[1400px] items-center justify-between gap-12">
            <p className="right text-xs font-medium sm:text-sm">
              Korea University
            </p>
            <p className="dates ml-auto pr-16 text-xs font-medium text-slate-500 sm:pr-24 sm:text-sm translate-x-80 sm:translate-x-96">
              May 2025 - Sept 2025
            </p>
          </div>
          <p className="right text-xs font-medium text-slate-500 sm:text-sm">
            Machine Learning Researcher Intern
          </p>
          <div className="mt-4 flex w-full max-w-[1400px] items-center justify-between gap-12">
            <p className="right text-xs font-medium sm:text-sm">
              Chujin Gongjang Corp.
            </p>
            <p className="dates ml-auto pr-16 text-xs font-medium text-slate-500 sm:pr-24 sm:text-sm translate-x-80 sm:translate-x-96">
              May 2025 - Aug 2025
            </p>
          </div>
          <p className="right text-xs font-medium text-slate-500 sm:text-sm">
            Full-Stack Developer Intern
          </p>
          <h2 className="right mt-10 text-lg font-semibold tracking-tight sm:text-xl">
            Projects:
          </h2>
          <div className="mt-4 flex w-full max-w-[1400px] items-center justify-between gap-12">
            <p className="right text-xs font-medium sm:text-sm">
              Heart Disease Predictor
            </p>
            <p className="dates ml-auto pr-16 text-xs font-medium text-slate-500 sm:pr-24 sm:text-sm translate-x-80 sm:translate-x-96">
              Jan 2024 - Jan 2024
            </p>
          </div>
          <p className="right text-xs font-medium text-slate-500 sm:text-sm">
            AI-Powered Heart Disease Predictor
          </p>
          <div className="mt-4 flex w-full max-w-[1400px] items-center justify-between gap-12">
            <p className="right text-xs font-medium sm:text-sm">
              GameHub
            </p>
            <p className="dates ml-auto pr-16 text-xs font-medium text-slate-500 sm:pr-24 sm:text-sm translate-x-80 sm:translate-x-96">
              Oct 2025 - Nov 2025
            </p>
          </div>
          <p className="right text-xs font-medium text-slate-500 sm:text-sm">
            Multiplayer Gaming Platform
          </p>
          <h2 className="right mt-10 text-lg font-semibold tracking-tight sm:text-xl">
            Skills:
          </h2>
          <div className="mt-4 ml-48 w-full max-w-[800px] overflow-hidden sm:ml-64">
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
          <h2 className="right mt-14 text-lg font-semibold tracking-tight sm:text-xl">
            Connect:
          </h2>
        </div>
      </main>
    </div>
  );
}
