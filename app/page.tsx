import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-7xl font-bold">Hi, I'm Priyanka</h1>
      <p className="text-gray-600 text-lg">
        I'm a senior frontend engineer and a tech enthusiast.
      </p>
      <Link
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        href="/projects"
      >
        View my work →
      </Link>
    </main>
  );
}
