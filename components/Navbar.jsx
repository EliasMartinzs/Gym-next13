import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full p-10 z-50">
      <nav className="flex items-center justify-around text-black text-2xl font-extralight">
        <ul className="flex gap-x-5">
          <li>
            <Link href="/" className="hover:border-b-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:border-b-2">
              Exercises
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
