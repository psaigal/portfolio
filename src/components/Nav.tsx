import Link from "next/link";

export default function Nav() {
  const linkStyling = "text-gray-700 hover:text-blue-600 transition-colors";
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
      <div className="flex gap-12">
        <Link className={linkStyling} href="/">
          Home
        </Link>
        <Link className={linkStyling} href="/resume">
          Resume
        </Link>
        <Link className={linkStyling} href="/projects">
          Projects
        </Link>
        <Link className={linkStyling} href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
