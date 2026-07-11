import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "form-fit",
    title: "FormFit",
    description:
      "FormFirst teaches total beginners the six foundational movement patterns before picking up a single weight. Built end-to-end with Claude AI as a coding collaborator — handling code generation and debugging while I drove all product decisions, content, and architecture.",
    techStack: ["React.js", "Tailwind CSS", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/psaigal/FormFit",
    liveUrl: "https://formfirst.vercel.app",
    imageUrl: "/projects/formfit.png",
  },
];
