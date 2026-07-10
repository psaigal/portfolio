import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Priyanka",
  description: "A showcase of Priyanka's frontend projects.",
};

export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
