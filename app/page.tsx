import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hi, I'm Priyanka</h1>
      <p>I'm a senior frontend engineer and a tech enthusiast.</p>
      <Link href="/projects">View my work →</Link>
    </main>
  );
}
