import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">HOW TO FISH <span>GAME WIKI</span></div>
          <p>A research-first guide site for quests, bosses, islands, weapons, fish, and achievements.</p>
        </div>
        <div className="footer-links">
          <span>Explore</span>
          <Link href="/guides">Guides</Link>
          <Link href="/bosses">Bosses</Link>
          <Link href="/fish">Fish database</Link>
        </div>
        <div className="footer-links">
          <span>Project</span>
          <Link href="/search">Search</Link>
          <Link href="/achievements">Achievements</Link>
          <a href="https://store.steampowered.com/app/4001890/How_to_Fish/" target="_blank" rel="noreferrer">Steam page ↗</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Research draft · verify changing facts before publishing</span>
        <span>© 2026 How to Fish Game Wiki</span>
      </div>
    </footer>
  );
}

