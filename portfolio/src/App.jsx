import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d11] text-slate-100">
      <main className="relative flex items-start justify-center gap-12 py-16 px-6">
        <div className="relative -translate-x-24 sm:-translate-x-40 flex flex-col items-start gap-1 text-left">
          <h1 className="text-lg font-medium tracking-tight sm:text-xl leading-tight">
            Benjamin Kim
          </h1>
          <p className="text-xs text-inherit sm:text-sm leading-tight">
            Hello! I'm a third year computer science student.
          </p>
          <h2 className="mt-10 text-lg font-semibold tracking-tight sm:text-xl">
            Experiences:
          </h2>
          <div className="mt-4 flex w-full max-w-[1400px] items-center justify-between gap-12">
            <p className="text-xs font-medium sm:text-sm">
              Korea University
            </p>
            <p className="ml-auto pr-16 text-xs font-medium text-slate-500 sm:pr-24 sm:text-sm translate-x-80 sm:translate-x-96">
              May 2025 - Sept 2025
            </p>
          </div>
          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            Machine Learning Researcher Intern
          </p>
          <div className="mt-4 flex w/full max-w-[1400px] items-center justify-between gap-12">
            <p className="text-xs font-medium sm:text-sm">
              Chujin Gongjang Corp.
            </p>
            <p className="ml-auto pr-16 text-xs font-medium text-slate-500 sm:pr-24 sm:text-sm translate-x-80 sm:translate-x-96">
              May 2025 - Aug 2025
            </p>
          </div>
          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            Full-Stack Developer Intern
          </p>
        </div>
      </main>
    </div>
  );
}
