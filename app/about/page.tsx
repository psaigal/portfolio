import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Priyanka",
  description:
    "Learn more about Priyanka, a senior frontend engineer and tech enthusiast.",
};

export default function About() {
  return (
    <main>
      <h1>Hi, I'm Priyanka</h1>
      <p>
        Senior frontend engineer with a passion for building beautiful and
        functional web applications. I have over 8 years of experience in the
        industry.
      </p>
      <p>
        When I am not coding, I enjoy fitness, reading, playing chess, and
        exploring new technologies. I am always looking for new challenges and
        opportunities to grow as a developer.
      </p>
    </main>
  );
}
