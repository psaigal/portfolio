import Link from "next/link";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 px-6 text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold animate-fade-in-up pt-12 md:pt-0 ">
        Hi, I'm Priyanka
      </h1>
      <p className="text-gray-600 text-2xl animate-fade-in-up">
        I'm a senior frontend engineer and a tech enthusiast.
      </p>
      <div className="flex gap-4 animate-fade-in-up">
        <a
          href="https://www.linkedin.com/in/saigalpriyanka"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <LinkedinIcon size={30} />
        </a>

        <a
          href="mailto:psaigal48@gmail.com"
          aria-label="Email"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Mail size={30} />
        </a>
      </div>
      <div className="border-t border-gray-200 pt-6 mt-2 max-w-xl">
        <p className="text-gray-600 text-center leading-relaxed animate-fade-in-up">
          I have over 8 years of experience building functional web
          applications. When I'm not coding, I enjoy fitness, reading, playing
          chess, and exploring new technologies.
        </p>
      </div>
      <Link
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors animate-fade-in-up"
        href="/projects"
      >
        View my work →
      </Link>
    </main>
  );
}
