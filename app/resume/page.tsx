import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Priyanka",
  description: "View or download Priyanka's resume.",
};

export default function Resume() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold">Resume</h1>
      <p className="text-gray-600 max-w-md">
        View my resume online or download a copy.
      </p>
      <div className="flex gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          View Resume
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Download
        </a>
      </div>
    </main>
  );
}
