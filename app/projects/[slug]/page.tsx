import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <ul>
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </main>
  );
}
