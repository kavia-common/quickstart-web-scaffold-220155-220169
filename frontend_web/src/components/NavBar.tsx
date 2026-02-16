import Link from "next/link";

// PUBLIC_INTERFACE
export default function NavBar() {
  /** Top navigation bar with links to core pages (Home/About). */
  return (
    <header className="navShell">
      <div className="navInner">
        <Link className="brand" href="/">
          Quickstart//Retro
        </Link>

        <nav aria-label="Primary" className="navLinks">
          <Link className="navLink" href="/">
            Home
          </Link>
          <Link className="navLink" href="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
