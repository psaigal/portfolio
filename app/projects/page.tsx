import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Priyanka",
  description: "A selection of projects built by Priyanka.",
};

export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 hover:shadow-md transition-all"
          >
            <Image
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              width={600}
              height={400}
              className="w-full h-48 object-cover object-top"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
