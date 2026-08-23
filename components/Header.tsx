import Link from "next/link";

const navItems = [
  { href: "/", label: "Wiki" },
  { href: "/guides", label: "Guides" },
  { href: "/quests", label: "Quests" },
  { href: "/bosses", label: "Bosses" },
  { href: "/achievements", label: "Achievements" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="How to Fish Game Wiki home">
          <span className="brand-mark" aria-hidden="true">⌁</span>
          <span>
            <strong>HOW TO FISH</strong>
            <small>GAME WIKI</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/search" className="search-link" aria-label="Search guides">
            <span aria-hidden="true">⌕</span> Search
          </Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">Menu</summary>
            <div className="mobile-menu-panel">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
              <Link href="/search">Search the wiki</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

